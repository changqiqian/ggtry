import { LocalPlayerData } from "../base/LocalPlayerData";
import { Singleton } from "../base/Singleton";
import { UIMgr } from "../base/UIMgr";
import { Network } from "./Network";

export class NetworkSend extends Singleton<NetworkSend>()
{
    
    public VerifyPhoneNumber(_phone : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SVerifyPhoneNumber();
        msg.phoneNumber = _phone;
        Network.Instance.SendMsg(MessageId.C2S_VerifyPhoneNumber , C2SVerifyPhoneNumber.encode(msg).finish());
        console.log("验证手机号是否已经注册 C2S_VerifyPhoneNumber == " + JSON.stringify(msg))
    }

    public LoginWithPwd(_phone : string, _psw : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SLogin();
        msg.loginType = LoginType.LoginType_PhonePsw;
        msg.phoneNumber = _phone;
        msg.psw = _psw;
        Network.Instance.SendMsg(MessageId.C2S_Login , C2SLogin.encode(msg).finish());
        console.log("密码登录 C2S_Login == " + JSON.stringify(msg))
    }

    public LoginWithSmsCode(_phone : string, _smsCode : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SLogin();
        msg.loginType = LoginType.LoginType_PhoneCode;
        msg.phoneNumber = _phone;
        msg.code = _smsCode;
        Network.Instance.SendMsg(MessageId.C2S_Login , C2SLogin.encode(msg).finish());
        console.log("验证码登录 C2S_Login== " + JSON.stringify(msg))
    }
    public LoginWithToken(_phone : string, _token : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SLogin();
        msg.loginType = LoginType.LoginType_Token;
        msg.phoneNumber = _phone;
        msg.token = _token;
        Network.Instance.SendMsg(MessageId.C2S_Login , C2SLogin.encode(msg).finish());
        console.log("Token登录 C2S_Login== " + JSON.stringify(msg))
    }
    public GetSmsCode(_phone : string , _codeType : SmsCodeType)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGetSmsCode();
        msg.phoneNumber = _phone;
        msg.type = _codeType;
        Network.Instance.SendMsg(MessageId.C2S_GetSmsCode , C2SGetSmsCode.encode(msg).finish());
        console.log("获取验证码 C2S_GetSmsCode== " + JSON.stringify(msg))
    }
    public Register(_phone : string , _smsCode : string , _nickName : string , _psw : string , _head : string,
        _inviteCode : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SRegister();
        msg.phoneNumber = _phone;
        msg.code = _smsCode;
        msg.nickName = _nickName;
        msg.psw = _psw;
        msg.head = _head;
        msg.inviteCode = _inviteCode;
        Network.Instance.SendMsg(MessageId.C2S_Register , C2SRegister.encode(msg).finish());
        console.log("注册 C2S_Register== " + JSON.stringify(msg))
    }
    public GetUserInfo()
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGetUserInfo();
        msg.token = LocalPlayerData.Instance.Data_Token.mData;
        Network.Instance.SendMsg(MessageId.C2S_GetUserInfo , C2SGetUserInfo.encode(msg).finish());
        console.log("获取用户数据 C2S_GetUserInfo== " + JSON.stringify(msg))
    }
    public CreateClub(_logo : number , _stamp : number , _name : string , _brief : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SCreateClub();
        msg.logo = _logo;
        msg.stamp = _stamp;
        msg.name = _name;
        msg.brief = _brief;
        Network.Instance.SendMsg(MessageId.C2S_CreateClub , C2SCreateClub.encode(msg).finish());
        console.log("创建俱乐部 C2S_CreateClub== " + JSON.stringify(msg))
    }

    public GetAllClubs()
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGetClubInfos();
        Network.Instance.SendMsg(MessageId.C2S_GetClubInfos , C2SGetClubInfos.encode(msg).finish());
        console.log("获取我的俱乐部列表 C2S_GetClubInfos== " + JSON.stringify(msg))
    }

    public EnterClub(_clubId : string )
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SEnterClub();
        msg.clubId = _clubId;
        Network.Instance.SendMsg(MessageId.C2S_EnterClub , C2SEnterClub.encode(msg).finish());
        console.log("进入俱乐部 C2S_EnterClub== " + JSON.stringify(msg))
    }

    public DismissClub(_clubId : string )
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SDismissClub();
        msg.clubId = _clubId;
        Network.Instance.SendMsg(MessageId.C2S_DismissClub , C2SDismissClub.encode(msg).finish());
        console.log("解散俱乐部 C2S_DismissClub== " + JSON.stringify(msg))
    }

    public QuitClub(_clubId : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SQuitClub();
        msg.clubId = _clubId;
        Network.Instance.SendMsg(MessageId.C2S_QuitClub , C2SQuitClub.encode(msg).finish());
        console.log("退出俱乐部 C2S_QuitClub== " + JSON.stringify(msg))
    }
 
    public SearchClub(_clubId : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SSearchClub();
        msg.clubId = _clubId;
        Network.Instance.SendMsg(MessageId.C2S_SearchClub , C2SSearchClub.encode(msg).finish());
        console.log("搜索俱乐部 C2S_SearchClub== " + JSON.stringify(msg))
    }

    public JoinClub(_clubId : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SJoinClub();
        msg.clubId = _clubId;
        Network.Instance.SendMsg(MessageId.C2S_JoinClub , C2SJoinClub.encode(msg).finish());
        console.log("申请加入俱乐部 C2S_JoinClub== " + JSON.stringify(msg))
    }

    public AddClubMember(_clubId : string , _agree : boolean , _uids : Array<string>)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SAddClubMember();
        msg.clubId = _clubId;
        msg.agree = _agree;
        msg.uids = _uids;
        Network.Instance.SendMsg(MessageId.C2S_AddClubMember , C2SAddClubMember.encode(msg).finish());
        console.log("通过玩家的俱乐部加入申请 C2S_AddClubMember== " + JSON.stringify(msg))
    }

    public GetClubMember(_clubId : string , _page : number , _pageSize :number)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGetClubMember();
        msg.clubId = _clubId;
        msg.page = _page;
        msg.pageSize = _pageSize;
        Network.Instance.SendMsg(MessageId.C2S_GetClubMember , C2SGetClubMember.encode(msg).finish());
        console.log("获取俱乐部成员 C2S_GetClubMember== " + JSON.stringify(msg))
    }

    public RemoveClubMember(_clubId : string , _uids : Array<string>)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SRemoveMember();
        msg.clubId = _clubId;
        msg.uids = _uids;
        Network.Instance.SendMsg(MessageId.C2S_RemoveMember , C2SRemoveMember.encode(msg).finish());
        console.log("移除俱乐部成员 C2S_RemoveMember== " + JSON.stringify(msg))
    }
}



