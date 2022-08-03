import { DataNotify } from "./base/DataNotify";
import { Localization } from "./base/Localization";
import { LocalPlayerData } from "./base/LocalPlayerData";
import { UIMgr } from "./base/UIMgr";
import { GameConfig } from "./GameConfig";
import { MsgID, MsgStatus, Network } from "./network/Network";

export class CommonNotify extends DataNotify 
{
    public static Instance:CommonNotify = null;

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
                Network.GetInstance().SendTokenLogin(GameConfig.LOGIN_USER, GameConfig.LOGIN_TOKEN, 3);//我也不晓得3是啥意思
            }

        },this);

        Network.GetInstance().AddMsgListenner(MsgID.TokenLogin ,(_msgBody)=>
        {
            if (_msgBody.code === MsgStatus.FAILED) 
            {
                console.log("Token 登录失败");
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
                this.Data_LoginType = MsgID.TokenLogin;
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
            LocalPlayerData.GetInstance().Data_Diamond = _msgBody.score;
            LocalPlayerData.GetInstance().Data_Money = _msgBody.coins;
            LocalPlayerData.GetInstance().Data_SafeToken = _msgBody.safeToken;
            LocalPlayerData.GetInstance().Data_InviteUserId = _msgBody.inviteUserId;
            LocalPlayerData.GetInstance().Data_UserName = _msgBody.userName;
            LocalPlayerData.GetInstance().Data_GiftScore = _msgBody.giftScore;
            LocalPlayerData.GetInstance().Data_AdminRole = _msgBody.adminRole;
            LocalPlayerData.GetInstance().Data_Clubs = _msgBody.clubs;
            
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.GetAssets ,(_msgBody)=>
        {
            LocalPlayerData.GetInstance().Data_Diamond = _msgBody.score;
            LocalPlayerData.GetInstance().Data_Money = _msgBody.coins;
            LocalPlayerData.GetInstance().Data_FrozenMoney = _msgBody.frozen;
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.GetSMSCode ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS) 
            {
                
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
    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }

}

