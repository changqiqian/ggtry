import { Localization } from "../base/Localization";
import { LocalPlayerData } from "../base/LocalPlayerData";
import { Singleton } from "../base/Singleton";
import { UIMgr } from "../base/UIMgr";
import { GameConfig } from "../GameConfig";
import { Tool } from "../Tool";
import { MultipleTableCtr } from "../ui/common/MultipleTableCtr";
import { HallData } from "../ui/hall/HallData";
import { Network } from "./Network";

export class NetworkSend extends Singleton<NetworkSend>()
{
    public RefreshHallMoney()
    {
        let msg = new C2SRefreshUserInfo();
        Network.Instance.SendMsg(MessageId.C2S_RefreshUserInfo , C2SRefreshUserInfo.encode(msg).finish());
        console.log("刷新大厅资产 C2S_RefreshUserInfo == " + JSON.stringify(msg))
    }
    
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
        msg.token = GameConfig.LOGIN_TOKEN;
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

    public ModifyClubInfo(_clubId : string , _newName:string , _newBrief : string,
        _newLogo : number , _newStamp : number)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SModifyClubInfo();
        msg.clubId = _clubId;
        if(_newName != null)
        {
            msg.newName = _newName;
        }
        if(_newBrief != null)
        {
            msg.newBrief = _newBrief;
        }
        if(_newLogo != null)
        {
            msg.newLogo = _newLogo;
        }
        if(_newStamp != null)
        {
            msg.newStamp = _newStamp;
        }

        Network.Instance.SendMsg(MessageId.C2S_ModifyClubInfo , C2SModifyClubInfo.encode(msg).finish());
        console.log("修改俱乐部信息 C2S_ModifyClubInfo== " + JSON.stringify(msg))
    }


    public ShareClubScore(_clubId : string , _uid : string , _amount : number )
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SShareClubScore();
        msg.clubId = _clubId;
        msg.uid = _uid;
        msg.amount = Tool.ConvertMoney_C2S(_amount);
        Network.Instance.SendMsg(MessageId.C2S_ShareClubScore , C2SShareClubScore.encode(msg).finish());
        console.log("修改俱乐部成员积分 C2S_ShareClubScore== " + JSON.stringify(msg))
    }
    
    public ModifyMemberRole(_clubId : string , _uid : string , _memberType : ClubMemberType )
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SModifyMemberRole();
        msg.clubId = _clubId;
        msg.uid = _uid;
        msg.memberType = _memberType;
        Network.Instance.SendMsg(MessageId.C2S_ModifyMemberRole , C2SModifyMemberRole.encode(msg).finish());
        console.log("修改俱乐部成员权限 C2S_ModifyMemberRole== " + JSON.stringify(msg))
    }

    public ChangeUserInfo(_nickName : string , _head : string )
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SChangeUserInfo();
        if(_nickName != null)
        {
            msg.nickName = _nickName;
        }
        if(_head != null)
        {
            msg.head = _head;
        }

        Network.Instance.SendMsg(MessageId.C2S_ChangeUserInfo , C2SChangeUserInfo.encode(msg).finish());
        console.log("修改头像或昵称 C2S_ChangeUserInfo== " + JSON.stringify(msg))
    }
    public CreateClubTexas(_clubId : string , _protoData : ClubTexasGameInfo)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SCreateClubGame();
        msg.clubId = _clubId;
        msg.texasConfig = _protoData.basicTexasConfig;
        Network.Instance.SendMsg(MessageId.C2S_CreateClubGame , C2SCreateClubGame.encode(msg).finish());
        console.log("俱乐部创建游戏 C2S_CreateClubGame== " + JSON.stringify(msg))
    }

    public GetClubGameList(_clubId : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGetClubTexasGameInfo();
        msg.clubId = _clubId;
        Network.Instance.SendMsg(MessageId.C2S_GetClubTexasGameInfo , C2SGetClubTexasGameInfo.encode(msg).finish());
        console.log("获取俱乐部游戏列表 C2S_GetClubTexasGameInfo== " + JSON.stringify(msg))
    }

    public DismissClubGame(_gameId : string , _clubId : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SDismissClubGame();
        msg.gameId = _gameId;
        msg.clubId = _clubId;
        Network.Instance.SendMsg(MessageId.C2S_DismissClubGame , C2SDismissClubGame.encode(msg).finish());
        console.log("解散俱乐部游戏 C2S_DismissClubGame== " + JSON.stringify(msg))
    }

    public EnterGame(_gameId : string , _gameType : GameType , _clubId : string = "")
    {
        UIMgr.Instance.ShowLoading(true);
        switch(_gameType)
        {
            case GameType.GameType_TexasCash:
            {
                let msg = new C2SEnterGame();
                msg.gameId = _gameId;
                Network.Instance.SendMsg(MessageId.C2S_TexasCashEnterGame , C2SEnterGame.encode(msg).finish());
                console.log("进入游戏 德州现金桌 C2S_TexasCashEnterGame== " + JSON.stringify(msg))
            }
            break;
            case GameType.GameType_ShortCash:
            {
                
            }
            break;
            case GameType.GameType_OmhCash:
            {
                
            }
            break;
            case GameType.GameType_TexasMtt:
            {
                
            }
            break;
            case GameType.GameType_ShortMtt:
            {
                
            }
            break;
            case GameType.GameType_OmhMtt:
            {
                
            }
            break;
        }
    }
    
    public ExitGame( _gameId : string, _gameType : GameType)
    {
        UIMgr.Instance.ShowLoading(true);
        switch(_gameType)
        {
            case GameType.GameType_TexasCash:
            {
                let msg = new C2SExitGame();
                msg.gameId = _gameId;
                Network.Instance.SendMsg(MessageId.C2S_TexasCashExitGame , C2SExitGame.encode(msg).finish());
                console.log("退出德州现金桌 C2S_TexasCashExitGame== " + JSON.stringify(msg))
            }
            break;
            case GameType.GameType_ShortCash:
            {
                
            }
            break;
            case GameType.GameType_OmhCash:
            {
                
            }
            break;
            case GameType.GameType_TexasMtt:
            {
                
            }
            break;
            case GameType.GameType_ShortMtt:
            {
                
            }
            break;
            case GameType.GameType_OmhMtt:
            {
                
            }
            break;
        }
    }

    public SitDown(_msgId : number ,_gameId : string , _seat : number )
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGameSitDown();
        msg.gameId = _gameId;
        msg.seat = _seat;
        Network.Instance.SendMsg(_msgId , C2SGameSitDown.encode(msg).finish());
        console.log("坐下  === " + JSON.stringify(msg))
    }

    public StandUp(_msgId : number ,_gameId : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGameStandUp();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(_msgId , C2SGameStandUp.encode(msg).finish());
        console.log("站起  === " + JSON.stringify(msg))
    }

    public BringIn(_msgId : number ,_gameId : string , _amount : number)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGameBringIn();
        msg.gameId = _gameId;
        msg.amount = _amount;
        Network.Instance.SendMsg(_msgId , C2SGameBringIn.encode(msg).finish());
        console.log("带入  === " + JSON.stringify(msg))
    }

    public StartGame(_msgId : number ,_gameId : string )
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGameOpen();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(_msgId , C2SGameOpen.encode(msg).finish());
        console.log("申请开始游戏  === " + JSON.stringify(msg))
    }
    
    public SendGameAction(_msgId : number ,_gameId : string , _actionInfo : ActionInfo)
    {
        let msg = new C2SGameAction();
        msg.gameId = _gameId;
        msg.actionInfo = _actionInfo;
        Network.Instance.SendMsg(_msgId , C2SGameAction.encode(msg).finish());
        console.log("玩家动作  === " + JSON.stringify(msg))
    }

    public SendChat(_msgId : number,_gameId : string , _content : string)
    {
        let msg = new C2SGameChat();
        msg.gameId = _gameId;
        msg.content = _content;
        Network.Instance.SendMsg(_msgId , C2SGameChat.encode(msg).finish());
        console.log("玩家聊天  === " + JSON.stringify(msg))
    }

    public GetObList(_msgId : number ,_gameId : string , _page : number , _pageSize : number)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGetObList();
        msg.gameId = _gameId;
        msg.page = _page;
        msg.pageSize = _pageSize;
        Network.Instance.SendMsg(_msgId , C2SGetObList.encode(msg).finish());
        console.log("获取观看者列表  === " + JSON.stringify(msg))
    }

    public BuyInsurance(_msgId : number ,_gameId : string , _amount : number)
    {
        let msg = new C2SGameBuyInsurance();
        msg.gameId = _gameId;
        msg.amount = _amount;
        Network.Instance.SendMsg(_msgId , C2SGameBuyInsurance.encode(msg).finish());
        console.log("购买保险  === " + JSON.stringify(msg))
    }

    public GetBringInList(_msgId : number ,_gameId : string , _page : number , _pageSize : number)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new CS2GetBringInList();
        msg.gameId = _gameId;
        msg.page = _page;
        msg.pageSize = _pageSize;
        Network.Instance.SendMsg(_msgId , CS2GetBringInList.encode(msg).finish());
        console.log("获取买入列表  === " + JSON.stringify(msg))
    }

    public GiveHallScore(_uid : string , _currencyType : GameCurrencyType , _amount : number)
    {
        //UIMgr.Instance.ShowLoading(true);
        let msg = new C2SAddCurrency();
        msg.uid = _uid;
        msg.currencyNum = Tool.ConvertMoney_C2S(_amount);
        msg.currencyType = GameCurrencyType.GameCurrencyType_Coin;
        Network.Instance.SendMsg(MessageId.C2S_AddCurrency , C2SAddCurrency.encode(msg).finish());
        console.log("给玩家上分  === " + JSON.stringify(msg))
    }
    
    public RefreshGame(_msgId : number ,_gameId : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SRefresh();
        msg.gameId = _gameId;

        Network.Instance.SendMsg(_msgId , C2SRefresh.encode(msg).finish());
        console.log("刷新德州游戏最新信息  === " + JSON.stringify(msg))
    }

    public EnterCowboy(_gameId : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2STexasCowboyEnterGame();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(MessageId.C2S_TexasCowboyEnterGame , C2STexasCowboyEnterGame.encode(msg).finish());
        console.log("进入 德州牛仔  === " + JSON.stringify(msg))
    }

    public ExitCowboy(_gameId : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2STexasCowboyExitGame();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(MessageId.C2S_TexasCowboyExitGame , C2STexasCowboyExitGame.encode(msg).finish());
        console.log("退出 德州牛仔  === " + JSON.stringify(msg))
    }
    
    public BetCowboy(_gameId : string , _betArea : CowboyAreaType , _amount : number)
    {
        let msg = new C2STexasCowboyBet();
        msg.gameId = _gameId;
        msg.betInfo = new CowboySingleBet();
        msg.betInfo.actionId = LocalPlayerData.Instance.Data_Uid.mData;
        msg.betInfo.betArea = _betArea;
        msg.betInfo.amount = _amount;
        Network.Instance.SendMsg(MessageId.C2S_TexasCowboyBet , C2STexasCowboyBet.encode(msg).finish());
        console.log("下注 德州牛仔  === " + JSON.stringify(msg))
    }

    public GetRecordCowboy(_gameId : string , _whichGame : number = 0)//0代表获取最新的一条数据
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2STexasCowboyRecord();
        msg.gameId = _gameId;
        msg.whichGame = _whichGame;
        Network.Instance.SendMsg(MessageId.C2S_TexasCowboyRecord , C2STexasCowboyRecord.encode(msg).finish());
        console.log("获取记录我的记录 德州牛仔  === " + JSON.stringify(msg))
    }

    public BringInCowboy(_gameId : string , _amount : number)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2STexasCowboyBringIn();
        msg.gameId = _gameId;
        msg.amount = _amount;
        Network.Instance.SendMsg(MessageId.C2S_TexasCowboyBringIn , C2STexasCowboyBringIn.encode(msg).finish());
        console.log("买入 德州牛仔  === " + JSON.stringify(msg))
    }

    public BringOutCowboy(_gameId : string , _amount : number)
    {
        let msg = new C2STexasCowboyBringOut();
        msg.gameId = _gameId;
        msg.amount = _amount;
        Network.Instance.SendMsg(MessageId.C2S_TexasCowboyBringOut , C2STexasCowboyBringOut.encode(msg).finish());
        console.log("带出 德州牛仔  === " + JSON.stringify(msg))
    }

    public TotalHistoryCowboy(_gameId : string )
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2STexasCowboyTotalHistory();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(MessageId.C2S_TexasCowboyTotalHistory , C2STexasCowboyTotalHistory.encode(msg).finish());
        console.log("游戏总记录 德州牛仔  === " + JSON.stringify(msg))
    }

    public GetMiniGameListInHall()
    {
        let msg = new C2SGetHallSubGameInfo();
        Network.Instance.SendMsg(MessageId.C2S_GetHallSubGameInfo , C2SGetHallSubGameInfo.encode(msg).finish());
        console.log("获取大厅 小游戏列表  === " + JSON.stringify(msg))
    }

    public GetTexasGameListInHall()
    {
        let msg = new C2SGetHallTexasGameInfo();
        Network.Instance.SendMsg(MessageId.C2S_GetHallTexasGameInfo , C2SGetHallTexasGameInfo.encode(msg).finish());
        console.log("获取大厅 德州列表  === " + JSON.stringify(msg))
    }
}




