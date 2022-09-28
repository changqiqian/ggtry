import { Enum } from "cc";
import { Singleton } from "../base/Singleton";
import { UIMgr } from "../base/UIMgr";
import { LoginData } from "../ui/login/LoginData";
import { Network } from "./Network";

export class NetworkReceive extends Singleton<NetworkReceive>()
{

    public RegisterMsg()
    {
        Network.Instance.AddMsgListenner(MessageId.S2C_Login,(_data)=>
        {
            let msg = S2CLogin.decode(_data);
            console.log("收到的内容 登录===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
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