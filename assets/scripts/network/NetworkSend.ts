import { Singleton } from "../base/Singleton";
import { Network } from "./Network";

export class NetworkSend extends Singleton<NetworkSend>()
{
    public SendLogin(_loginType : LoginType = LoginType.LoginType_PhonePsw , _phone : string = "" ,
        _psw : string = "",_smsCode : string = "")
    {
        let msg = new C2SLogin();
        msg.code = "1";
        msg.loginType = LoginType.LoginType_PhonePsw;
        msg.phoneNumber = "1";
        msg.psw = "1";
        msg.token = "1";
        Network.Instance.SendMsg(MessageId.C2S_Login , C2SLogin.encode(msg).finish());
    }

    //密码登录
    public SendLoginWithPwd(_phone : string, _psw : string)
    {
        let msg = new C2SLogin();
        msg.loginType = LoginType.LoginType_PhonePsw;
        msg.phoneNumber = _phone;
        msg.psw = _psw;
        Network.Instance.SendMsg(MessageId.C2S_Login , C2SLogin.encode(msg).finish());
    }

    //验证码登录
    public SendLoginWithSmsCode(_phone : string, _smsCode : string)
    {
        let msg = new C2SLogin();
        msg.loginType = LoginType.LoginType_PhoneCode;
        msg.phoneNumber = _phone;
        msg.code = _smsCode;
        Network.Instance.SendMsg(MessageId.C2S_Login , C2SLogin.encode(msg).finish());
    }
    //Token登录
    public SendLoginWithToken(_phone : string, _token : string)
    {
        let msg = new C2SLogin();
        msg.loginType = LoginType.LoginType_Token;
        msg.phoneNumber = _phone;
        msg.token = _token;
        Network.Instance.SendMsg(MessageId.C2S_Login , C2SLogin.encode(msg).finish());
    }
}

