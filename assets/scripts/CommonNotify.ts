import { DataNotify } from "./base/DataNotify";
import { Localization } from "./base/Localization";
import { LocalPlayerData } from "./base/LocalPlayerData";
import { UIMgr } from "./base/UIMgr";
import { GameConfig } from "./GameConfig";
import { LoginType, MsgID, MsgStatus, Network, SmsCodeType } from "./network/Network";

export class CommonNotify extends DataNotify 
{
    private static Instance:CommonNotify = null;

    public static GetInstance() : CommonNotify
    {
        if(CommonNotify.Instance == null)
        {
            CommonNotify.Instance = new CommonNotify();
            CommonNotify.Instance.CreateNotify();
            CommonNotify.Instance.RegisteMsg();
        }

        return CommonNotify.Instance;
    }
    
    
    Data_SocketOpen : boolean = null;
    Data_SocketClose : boolean = null;
    Data_SocketError: boolean = null;
    Data_LoginType : number = null;
    Data_LoginSuccessData : any = null;
    Data_SmsCodeSuccess : boolean = null;   //服务器已经对你的手机发送了验证码
    Data_SmsCodeVerifySuccess :  boolean = null; //验证码验证成功
    Data_SmsCodeType : SmsCodeType = null; //短信验证用途
    Data_LastInputPhoneNum : string = null; //最后一次输入的手机号
    Data_LastInputPwd : string = null;//最后一次输入的密码
    Data_SetUserInfoSuccess : boolean = null; //设置玩家信息成功

    ClearData()
    {
        this.Data_SmsCodeSuccess = false;
        this.Data_SmsCodeVerifySuccess = false;
        this.Data_SetUserInfoSuccess = false;
    }

    RegisteMsg()
    {
        Network.GetInstance().AddMsgListenner(MsgID.VisitorLogin ,(_msgBody)=>
        {
            if (_msgBody.code == MsgStatus.FAILED) 
            {
                console.log("游客登录失败");
            } 
            else if (_msgBody.code == MsgStatus.SUCCESS) 
            {
                LocalPlayerData.GetInstance().Data_Uid = _msgBody.userId;
                this.Data_LoginType = MsgID.VisitorLogin;
            }
    
            //短线重连逻辑
            //如果存在token直接token登录
            if(GameConfig.LOGIN_TOKEN != null)
            {
                Network.GetInstance().SendLogin(GameConfig.LOGIN_USER, GameConfig.LOGIN_TOKEN, LoginType.Token);
            }

        },this);

        Network.GetInstance().AddMsgListenner(MsgID.Login ,(_msgBody)=>
        {
            if (_msgBody.code === MsgStatus.FAILED) 
            {
                console.log("登录失败");
                UIMgr.GetInstance().ShowToast(_msgBody.reason);
                GameConfig.ClearToken();
            }
            else if (_msgBody.code === 10)  //ip限制
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00001"));
                GameConfig.ClearToken();
            } 
            else if (_msgBody.code === MsgStatus.SUCCESS)  
            {
                GameConfig.SaveToken(_msgBody.token , _msgBody.userName);
                LocalPlayerData.GetInstance().Data_Uid = _msgBody.userId;
                LocalPlayerData.GetInstance().Data_AdminRole = _msgBody.adminRole;
                this.Data_LoginType = MsgID.Login;
                Network.GetInstance().SendGetUserInfo();
                Network.GetInstance().SendGetAssets();
                Network.GetInstance().SendPing();
                this.Data_LoginSuccessData = _msgBody;
            }
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.GetUserInfo ,(_msgBody)=>
        {
            LocalPlayerData.GetInstance().Data_Email = _msgBody.email;
            LocalPlayerData.GetInstance().Data_Decorations = _msgBody.decorations;
            LocalPlayerData.GetInstance().Data_Uid = _msgBody.userId;
            LocalPlayerData.GetInstance().Data_NickName = _msgBody.nickname;
            LocalPlayerData.GetInstance().Data_Gender = _msgBody.gender;
            LocalPlayerData.GetInstance().Data_Signiture = _msgBody.signiture;
            LocalPlayerData.GetInstance().Data_IsBind = _msgBody.isBind;
            LocalPlayerData.GetInstance().Data_PhotoUrl = _msgBody.photoUrl;
            LocalPlayerData.GetInstance().Data_Diamond = _msgBody.balance;
            LocalPlayerData.GetInstance().Data_Coin = _msgBody.coins;
            LocalPlayerData.GetInstance().Data_SafeToken = _msgBody.safeToken;
            LocalPlayerData.GetInstance().Data_InviteUserId = _msgBody.inviteUserId;
            LocalPlayerData.GetInstance().Data_UserName = _msgBody.userName;
            LocalPlayerData.GetInstance().Data_GiftScore = _msgBody.giftScore;
            LocalPlayerData.GetInstance().Data_AdminRole = _msgBody.adminRole;
            LocalPlayerData.GetInstance().Data_Clubs = _msgBody.clubs;
            
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.GetAssets ,(_msgBody)=>
        {
            LocalPlayerData.GetInstance().Data_Diamond = _msgBody.balance;
            LocalPlayerData.GetInstance().Data_Coin = _msgBody.coins;
            LocalPlayerData.GetInstance().Data_FrozenMoney = _msgBody.frozen;
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.UpdateAssets ,(_msgBody)=>
        {
            LocalPlayerData.GetInstance().Data_Diamond = _msgBody.balance;
            LocalPlayerData.GetInstance().Data_Coin = _msgBody.coins;
            LocalPlayerData.GetInstance().Data_FrozenMoney = _msgBody.frozen;
            LocalPlayerData.GetInstance().Data_GiftScore = _msgBody.giftScore;
        },this);
        

        Network.GetInstance().AddMsgListenner(MsgID.GetSMSCode ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS) 
            {
                this.Data_SmsCodeSuccess = true;
            } 
            else 
            {   
                if(_msgBody.reason)
                {
                    UIMgr.GetInstance().ShowToast(_msgBody.reason);
                }
                else
                {
                    UIMgr.GetInstance().ShowToast(Localization.GetString("00003") + _msgBody.code + ")");
                }
            }
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.VeryifySmsCode ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS) 
            {
                this.Data_SmsCodeVerifySuccess = true;
            } 
            else 
            {   
                UIMgr.GetInstance().ShowToast(Localization.GetString("00006"));
            }
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.ResetPwd ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS) 
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00009"));
                let currentAreaCodeIndex = LocalPlayerData.GetInstance().Data_AreaCode;
                let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
                let fullPhoneNumber = currentAreaCode + ' ' + CommonNotify.GetInstance().Data_LastInputPhoneNum;
                Network.GetInstance().SendLogin(fullPhoneNumber , this.Data_LastInputPwd , LoginType.Password);
            } 
            else 
            {   
                UIMgr.GetInstance().ShowToast(Localization.GetString("00008"));
            }
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.Register ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS) 
            {
                let currentAreaCodeIndex = LocalPlayerData.GetInstance().Data_AreaCode;
                let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
                let fullPhoneNumber = currentAreaCode + ' ' + CommonNotify.GetInstance().Data_LastInputPhoneNum;
                Network.GetInstance().SendLogin(fullPhoneNumber , this.Data_LastInputPwd , LoginType.Password);
            } 
            else 
            {   
                UIMgr.GetInstance().ShowToast(Localization.GetString("00010"));
            }
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.SetUserInfo ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS) 
            {
                this.Data_SetUserInfoSuccess = true;
                UIMgr.GetInstance().ShowToast(Localization.GetString("00013"));
            } 
            else 
            {   
                UIMgr.GetInstance().ShowToast(Localization.GetString("00014")  + _msgBody.code + ")!" );
            }
        },this);
    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }

}

