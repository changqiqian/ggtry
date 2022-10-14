import { Enum, js } from "cc";
import { LocalPlayerData } from "../base/LocalPlayerData";
import { Singleton } from "../base/Singleton";
import { UIMgr } from "../base/UIMgr";
import { LoginData } from "../ui/login/LoginData";
import { Network } from "./Network";

export class NetworkReceive extends Singleton<NetworkReceive>()
{
    private static GetClassName(_msgId : number) : string
    {
        for(let i = 0 ; i < Object.keys(MessageId).length  ; i++)
        {
            let currentKey = Object.keys(MessageId)[i];
            if(MessageId[currentKey] == 1003)
            {
                let className = currentKey.replace("_" , "");
                console.log("className==" + className);
                return className;
            }
        }

        //js.setClassName("S2CLogin",S2CLogin);
        //js.getClassByName(NetworkReceive.GetClassName(MessageId.S2C_Login))["decode"](_data);
        return "";
    }

    public RegisterMsg()
    {
        
        Network.Instance.AddMsgListenner(MessageId.S2C_VerifyPhoneNumber,(_data)=>
        {
            let msg = S2CVerifyPhoneNumber.decode(_data);
            console.log("收到的内容 验证手机号是否注册===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LoginData.Instance.Data_VerifyPhoneNumber.mData = true;
            }
            else
            {
                LoginData.Instance.Data_VerifyPhoneNumber.mData = false;
                //UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_Login,(_data)=>
        {
            let msg = S2CLogin.decode(_data);
            console.log("收到的内容 登录===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LocalPlayerData.Instance.Data_Token.mData = msg.token;
                LoginData.Instance.Data_LoginSuccessData.mData = true;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_GetSmsCode,(_data)=>
        {
            let msg = S2CGetSmsCode.decode(_data);
            console.log("收到的内容 获取验证码===" + JSON.stringify(msg));
            UIMgr.Instance.ShowToast("验证码===" + msg.code , 5);
            LoginData.Instance.Data_SmsCodeType.mData = msg.type;
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_Register,(_data)=>
        {
            let msg = S2CRegister.decode(_data);
            console.log("收到的内容 注册===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LoginData.Instance.Data_RegisterSuccessData.mData = true;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_GetUserInfo,(_data)=>
        {
            let msg = S2CGetUserInfo.decode(_data);
            console.log("收到的内容 获取用户信息===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LocalPlayerData.Instance.Data_Uid.mData = msg.userInfo.uid;
                LocalPlayerData.Instance.Data_NickName.mData = msg.userInfo.nickName;
                LocalPlayerData.Instance.Data_Head.mData = msg.userInfo.head;
                LocalPlayerData.Instance.Data_Coin.mData = msg.userInfo.coin;
                LocalPlayerData.Instance.Data_Diamond.mData = msg.userInfo.diamond;
                LocalPlayerData.Instance.Data_AccountLevel.mData = msg.userInfo.accountLevel;
                LocalPlayerData.Instance.Data_AccountStatus.mData = msg.userInfo.accountStatus;

            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);
        
    }

    public UnregisterMsg()
    {
        Network.Instance.RemoveListenner(this);
    }
}


enum MsgResult { 
    Failed = 0,
    Success = 1,
}