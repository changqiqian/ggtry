import { Network } from "./Network";

export class NetworkSend 
{


    public static SendLogin()
    {
        let msg = new C2SLogin();
        msg.code = "1";
        msg.loginType = LoginType.LoginType_PhonePsw;
        msg.phoneNumber = 1;
        msg.psw = "1";
        msg.token = "1";
        Network.GetInstance().SendMsg(MessageId.C2S_Login , C2SLogin.encode(msg).finish());
    }
}

