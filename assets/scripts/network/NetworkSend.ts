import { LocalPlayerData } from "../base/LocalPlayerData";
import { Singleton } from "../base/Singleton";
import { Network } from "./Network";

export class NetworkSend extends Singleton<NetworkSend>()
{
    
    public VerifyPhoneNumber(_phone : string)
    {
        let msg = new C2SVerifyPhoneNumber();
        msg.phoneNumber = _phone;
        Network.Instance.SendMsg(MessageId.C2S_VerifyPhoneNumber , C2SVerifyPhoneNumber.encode(msg).finish());
        console.log("验证手机号是否已经注册 == " + JSON.stringify(msg))
    }

    public LoginWithPwd(_phone : string, _psw : string)
    {
        let msg = new C2SLogin();
        msg.loginType = LoginType.LoginType_PhonePsw;
        msg.phoneNumber = _phone;
        msg.psw = _psw;
        Network.Instance.SendMsg(MessageId.C2S_Login , C2SLogin.encode(msg).finish());
        console.log("密码登录 == " + JSON.stringify(msg))
    }

    public LoginWithSmsCode(_phone : string, _smsCode : string)
    {
        let msg = new C2SLogin();
        msg.loginType = LoginType.LoginType_PhoneCode;
        msg.phoneNumber = _phone;
        msg.code = _smsCode;
        Network.Instance.SendMsg(MessageId.C2S_Login , C2SLogin.encode(msg).finish());
        console.log("验证码登录== " + JSON.stringify(msg))
    }
    public LoginWithToken(_phone : string, _token : string)
    {
        let msg = new C2SLogin();
        msg.loginType = LoginType.LoginType_Token;
        msg.phoneNumber = _phone;
        msg.token = _token;
        Network.Instance.SendMsg(MessageId.C2S_Login , C2SLogin.encode(msg).finish());
        console.log("Token登录== " + JSON.stringify(msg))
    }
    public GetSmsCode(_phone : string , _codeType : SmsCodeType)
    {
        let msg = new C2SGetSmsCode();
        msg.phoneNumber = _phone;
        msg.type = _codeType;
        Network.Instance.SendMsg(MessageId.C2S_GetSmsCode , C2SGetSmsCode.encode(msg).finish());
        console.log("获取验证码== " + JSON.stringify(msg))
    }
    public Register(_phone : string , _smsCode : string , _nickName : string , _psw : string , _head : string,
        _inviteCode : string)
    {
        let msg = new C2SRegister();
        msg.phoneNumber = _phone;
        msg.code = _smsCode;
        msg.nickName = _nickName;
        msg.psw = _psw;
        msg.head = _head;
        msg.inviteCode = _inviteCode;
        Network.Instance.SendMsg(MessageId.C2S_Register , C2SRegister.encode(msg).finish());
        console.log("注册== " + JSON.stringify(msg))
    }
    public GetUserInfo()
    {
        let msg = new C2SGetUserInfo();
        msg.token = LocalPlayerData.Instance.Data_Token.mData;
        Network.Instance.SendMsg(MessageId.C2S_GetUserInfo , C2SGetUserInfo.encode(msg).finish());
        console.log("获取用户数据== " + JSON.stringify(msg))
    }
}

