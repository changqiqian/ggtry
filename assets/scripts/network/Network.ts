import { _decorator, Component, Node } from 'cc';
import { Localization } from '../base/Localization';
import { Gender } from '../base/LocalPlayerData';
import { UIMgr } from '../base/UIMgr';
import { CommonNotify } from '../CommonNotify';
import { GameConfig } from '../GameConfig';
const { ccclass, property } = _decorator;

class MsgKeyPair {
    constructor(_msgID: number, _callback: Function) {
        this.msgID = _msgID;
        this.callback = _callback;
    }
    msgID: number;
    callback: Function;
}

class MsgEvent {
    constructor(_target: any) {
        this.target = _target;
        this.callbackList = new Array<MsgKeyPair>();
    }
    target: any;
    callbackList: Array<MsgKeyPair>;

    public Add(_msgID: number, _callback: Function) {
        let keyPairIndex = this.callbackList.findIndex((_item) => _item.msgID === _msgID);
        if (keyPairIndex >= 0) {
            console.log('当前target已经注册过该网络消息了   _msgID===' + _msgID + '。不能重复注册');
            return;
        }
        let keyPair = new MsgKeyPair(_msgID, _callback);
        this.callbackList.push(keyPair);
    }

    public Remove(_msgID: number) {
        let keyPairIndex = this.callbackList.findIndex((_item) => _item.msgID === _msgID);
        if (keyPairIndex < 0) {
            console.log('当前target还没有注册过   _msgID===' + _msgID + '。不能移除');
            return;
        }

        this.callbackList.splice(keyPairIndex, 1);
    }

    public TryToTriggerMsg(_msgID: number, _msg) {
        for (let i = 0; i < this.callbackList.length; i++) {
            if (this.callbackList[i].msgID == _msgID) {
                this.callbackList[i].callback(_msg);
            }
        }
    }
}

export class Network {
    private static instance: Network = null;
    public static GetInstance(): Network {
        if (Network.instance == null) {
            Network.instance = new Network();
        }
        return Network.instance;
    }

    private mWebSocket: WebSocket = null;
    private mConnectTimer: number;
    private mPingRevTimer: number;
    private mPingSendTimer: number;
    private mPingSpace: number = 5000;
    private mMsgListenner: Array<MsgEvent>;
    private mForceClose: boolean = false;
    constructor() {
        this.mMsgListenner = new Array<MsgEvent>();
    }

    public CreateWS() {
        if (this.mWebSocket != null) {
            console.log('上一根ws还没有清理，不能重新连接');
            return;
        }
        this.mForceClose = false;
        UIMgr.GetInstance().ShowLoading(true, '连接服务器中...');
        this.mWebSocket = new WebSocket(GameConfig.SeverUrl);
        this.mWebSocket.onopen = this.OnOpen.bind(this);
        this.mWebSocket.onmessage = this.OnMessage.bind(this);
        this.mWebSocket.onerror = this.OnError.bind(this);
        this.mWebSocket.onclose = this.OnClose.bind(this);
        this.mConnectTimer = setTimeout(this.OnConnectTimeOut.bind(this), 3000);
    }

    public ClearWS(_forceClose: boolean = false) {
        this.mForceClose = _forceClose;
        clearTimeout(this.mConnectTimer);
        this.StopPing();
        if (this.mWebSocket != null && this.mWebSocket.readyState === WebSocket.OPEN) {
            this.mWebSocket.close();
        }
    }

    public SendMsg(_msgID: number, _msg) {
        if (this.mWebSocket != null && this.mWebSocket.readyState === WebSocket.OPEN) {
            var body = JSON.stringify(_msg);

            var final = JSON.stringify({ msgId: _msgID, msgBody: body });
            if (_msgID != MsgID.Ping) {
                console.log('发送消息：' + final);
            }
            this.mWebSocket.send(final);
        } else {
            console.log('给服务器发送消息失败：' + _msgID);
        }
    }

    private OnOpen(event) {
        UIMgr.GetInstance().ShowLoading(false);
        console.log('Socket OnOpen = ' + event);
        clearTimeout(this.mConnectTimer);
        CommonNotify.GetInstance().Data_SocketClose = false;
        CommonNotify.GetInstance().Data_SocketOpen = true;
    }

    private OnError(event) {
        console.log('Socket OnError = ' + event);
        clearTimeout(this.mConnectTimer);
        CommonNotify.GetInstance().Data_SocketError = true;
    }

    private OnClose(event) {
        console.log('Socket OnClose  =  ' + event);
        this.StopPing();
        clearTimeout(this.mConnectTimer);
        if (this.mWebSocket != null) {
            this.mWebSocket.onopen = null;
            this.mWebSocket.onmessage = null;
            this.mWebSocket.onerror = null;
            this.mWebSocket.onclose = null;
            this.mWebSocket = null;
        }

        if (this.mForceClose == false) {
            CommonNotify.GetInstance().Data_SocketClose = true;
            CommonNotify.GetInstance().Data_SocketOpen = false;

            setTimeout(this.CreateWS.bind(this), 1000);
        }
    }

    private OnMessage(event) {
        var data = JSON.parse(event.data);
        if (data.msgId == MsgID.Ping) {
            this.RecvPing();
            return;
        }
        var msg = JSON.parse(data.msgBody);
        if (data.languageKey) {
            msg.languageKey = data.languageKey;
            //console.log("收到服务msg：" + msg);
        }
        console.log('收到服务器消息：' + event.data);
        for (let i = 0; i < this.mMsgListenner.length; i++) {
            this.mMsgListenner[i].TryToTriggerMsg(data.msgId, msg);
        }
    }

    public AddMsgListenner(_msgID: number, _callback: Function, _target: any) {
        let index = this.mMsgListenner.findIndex((_item) => _item.target === _target);
        let currentMsgEvent: MsgEvent;
        if (index >= 0) {
            currentMsgEvent = this.mMsgListenner[index];
        } else {
            currentMsgEvent = new MsgEvent(_target);
            this.mMsgListenner.push(currentMsgEvent);
        }

        currentMsgEvent.Add(_msgID, _callback);
    }

    public RemoveListenner(_target: any) {
        let index = this.mMsgListenner.findIndex((_item) => _item.target === _target);
        if (index < 0) {
            console.log('当前_target还没有添加过网络监听，无法移除');
            return;
        }

        this.mMsgListenner.splice(index, 1);
    }

    private OnConnectTimeOut() {
        if (this.mWebSocket.readyState === WebSocket.OPEN) {
        } else {
            this.ClearWS();
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    /////                               心跳
    ////////////////////////////////////////////////////////////////////////////////////
    public SendPing() {
        this.StopPing();
        clearTimeout(this.mPingSendTimer);
        this.mPingRevTimer = setTimeout(this.OnPingTimeOut.bind(this), this.mPingSpace);
        this.SendMsg(MsgID.Ping, {});
        console.log('发送 心跳');
    }

    private RecvPing() {
        console.log('收到 心跳');
        clearTimeout(this.mPingRevTimer);
        this.mPingSendTimer = setTimeout(this.SendPing.bind(this), this.mPingSpace);
    }

    private StopPing() {
        clearTimeout(this.mPingRevTimer);
        clearTimeout(this.mPingSendTimer);
    }

    private OnPingTimeOut() {
        //to do  心跳超时
        console.log('心跳超时');
        this.ClearWS();
    }

    ////////////////////////////////////////////////////////////////////////////////////
    /////                           HTTP
    ////////////////////////////////////////////////////////////////////////////////////
    public HttpGet(_url: string, _success: Function, _error: Function) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', _url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                let resp = null;
                try {
                    if (xhr.responseText != '') {
                        resp = JSON.parse(xhr.responseText);
                    }
                } catch (e) {}
                _success && _success(xhr.status, resp, xhr.responseText);
            }
        };

        xhr.onerror = function (err) {
            console.log('HttpGet err ====' + err);
            console.log('HttpGet url ====' + _url);
            _error && _error();
        };
        xhr.send();
    }

    ////////////////////////////////////////////////////////////////////////////////////
    /////                           发送消息
    ////////////////////////////////////////////////////////////////////////////////////

    SendVisitorLogin() {
        var body = {
            userName: GameConfig.Imei,
            password: GameConfig.Imei,
            imei: GameConfig.Imei,
            model: GameConfig.Model,
            channelInt: GameConfig.ChannelInt,
            channel: GameConfig.Channel,
            version: GameConfig.Version,
            jingDu: GameConfig.JingDu,
            weiDu: GameConfig.WeiDu,
            language: Localization.CurrentLanguageType,
        };
        console.log('游客登录');
        this.SendMsg(MsgID.VisitorLogin, body);
    }

    SendLogin(_userName, _pwd, _verifyCode: LoginType) {
        var body = {
            userName: _userName,
            password: _pwd,
            imei: GameConfig.Imei,
            model: GameConfig.Model,
            channel: GameConfig.Channel,
            channelInt: GameConfig.ChannelInt,
            version: GameConfig.Version,
            jingDu: GameConfig.JingDu,
            weiDu: GameConfig.WeiDu,
            language: Localization.CurrentLanguageType,
            verify: _verifyCode,
            clientInfo: GameConfig.ClientInfo,
        };
        console.log('账号密码登录 or Token登录');
        this.SendMsg(MsgID.Login, body);
    }

    SendGetUserInfo() {
        var body = {};
        console.log('获取用户信息');
        this.SendMsg(MsgID.GetUserInfo, body);
    }

    SendGetAssets = function () {
        var body = {};
        console.log('获取用户资产');
        this.SendMsg(MsgID.GetAssets, body);
    };

    SendGetSMSCode(_phoneNumber, _codeType: SmsCodeType) {
        var body = {
            phoneNumber: _phoneNumber,
            codeType: _codeType,
        };
        console.log('获取验证码 _codeType ==' + _codeType);
        this.SendMsg(MsgID.GetSMSCode, body);
    }

    SendVerifyCode(mobile, code) {
        var body = {
            mobile: mobile,
            code: code,
        };
        console.log('验证 验证码码是否正确');
        this.SendMsg(MsgID.VeryifySmsCode, body);
    }

    SendResetPwd(phoneNumber, password) {
        var body = {
            password: password,
            verifyCode: '',
            phoneNumber: phoneNumber,
        };
        console.log('重置密码');
        this.SendMsg(MsgID.ResetPwd, body);
    }

    SendRegister(phoneNumber, password, nickname, photoUrl) {
        let tphotoUrl = photoUrl + '';
        var body = {
            phoneNumber: phoneNumber,
            verifyCode: '',
            password: password,
            channel: '德州',
            nickname: nickname,
            photoUrl: tphotoUrl,
            clientInfo: GameConfig.ClientInfo,
        };
        console.log('请求注册');
        this.SendMsg(MsgID.Register, body);
    }

    SendSetUserInfo(vnickname: string, vgender: Gender, vsigniture, vphotoUrl) {
        var body = {
            nickname: vnickname,
            gender: vgender,
            signiture: vsigniture,
            photoUrl: vphotoUrl,
        };
        console.log('完善个人资料');
        this.SendMsg(MsgID.SetUserInfo, body);
    }

    SendGetLunBoTu() {
        var body = {};
        console.log('获取轮播图');
        this.SendMsg(MsgID.GetLunBoTu, body);
    }

    SendGetMttList() {
        var body = {};
        console.log('获取mtt比赛列表');
        this.SendMsg(MsgID.GetMttList, body);
    }

    SendGetMttMatchDetails(_gameType: number, _matchId: number) {
        var body = {
            gameType: _gameType,
            matchId: _matchId,
        };
        console.log('获取mtt详细信息');
        this.SendMsg(MsgID.GetMttMatchDetails, body);
    }

    SendActionData(_visitGroup: string, _visitAction: string, _data: any) {
        var body = {
            visitGroup: _visitGroup,
            visitAction: _visitAction,
            data: _data,
        };
        console.log('send action data:' + body);
        this.SendMsg(MsgID.Logout, body);
    }
    //查询注销条件
    SendCheckIsCanDeleteAccount() {
        var body = {};
        console.log('查询是否可删除帐号');
        this.SendMsg(MsgID.detectCanDeleteAccount, body);
    }
    //获取注销验证码
    SendGetLogOffCode() {
        var body = {};
        console.log('获取注销验证码');
        this.SendMsg(MsgID.GetLogOffCode, body);
    }
    //删除帐号
    SendLogOff(_code: string) {
        var body = {
            code: _code + '',
        };
        console.log('删除帐号' + body);
        this.SendMsg(MsgID.deleteAccount, body);
    }

    SendSetMttMacthKeepTop(_matchId: number, _isTop: boolean) {
        var body = {
            matchId: _matchId,
            isTop: _isTop,
        };
        console.log('设置mtt比赛为置顶比赛');
        this.SendMsg(MsgID.SetMttMacthKeepTop, body);
    }

    SendGetMttPlayerList(_gameType: number, _matchID: number, _page: number, _pageCount: number) {
        var body = {
            gameType: _gameType, //搞不懂
            matchID: _matchID,
            index: _page, //申请第几页
            count: _pageCount, //每一页多少个数据
        };
        console.log('获取mtt当前玩家列表');
        this.SendMsg(MsgID.GetMttPlayerList, body);
    }
    SendGetMttTableInfo(_gameType: number, _matchID: number, _page: number, _pageCount: number) {
        var body = {
            gameType: _gameType, //搞不懂
            matchID: _matchID,
            index: _page, //申请第几页
            count: _pageCount, //每一页多少个数据
        };
        console.log('获取mtt当前分桌信息');
        this.SendMsg(MsgID.GetMttTableInfo, body);
    }

    SendMttGetRebuyInfo(_matchID: number) {
        var body = {
            matchId: _matchID,
        };
        console.log('获取mtt 买入类型信息');
        this.SendMsg(MsgID.MttGetRebuyInfo, body);
    }

    SendMttCancelReg(_gameType: number, _matchID: number) {
        var body = {
            matchId: _matchID,
            gameType: _gameType,
        };
        console.log('获取mtt 取消报名');
        this.SendMsg(MsgID.MttCancelReg, body);
    }
    SendAttendMtt(_gameType: number, _matchId: number, _tid: number = 0, _clubId: number = 0) {
        let tmp;
        if (_tid == 0) {
            tmp = '';
        } else {
            tmp = _tid;
        }

        var body = {
            gameType: _gameType,
            matchId: _matchId,
            ticketId: tmp,
            clubId: _clubId,
        };
        console.log('mtt 报名');
        this.SendMsg(MsgID.AttendMtt, body);
    }
    SendGetUnionAssets(_clubId: number) {
        var body = {
            id: _clubId,
        };
        console.log('获取联盟资产');
        this.SendMsg(MsgID.GetUnionAssets, body);
    }
    SendGetSelfTicket(_ticketId: number) {
        var body = {
            tpId: _ticketId,
        };
        console.log('获取自己的门票');
        this.SendMsg(MsgID.GetSelfTicket, body);
    }
    SendMttDismiss(_gameType: number, _matchId: number) {
        var body = {
            gameType: _gameType,
            matchId: _matchId,
        };
        console.log('Mtt 解散比赛');
        this.SendMsg(MsgID.MttDismiss, body);
    }
    SendMttManualStart(_matchId: number) {
        var body = {
            matchId: _matchId,
        };
        console.log('Mtt 手动开始比赛');
        this.SendMsg(MsgID.MttManualStart, body);
    }
    SendGetMttRank(_mode: number, _page: number, _pageSize: number) {
        var body = {
            mode: _mode,
            page: _page,
            pageSize: _pageSize,
        };
        console.log('Mtt 获取排行榜');
        this.SendMsg(MsgID.GetMttRank, body);
    }

    SendMttGetRoomInfo( _gameType : number, _matchId : number, _isBack : boolean) 
    {
        var body = 
        { 
            "gameType" : _gameType,
            "matchId" : _matchId, 
            "isBack" : _isBack,
        }
        console.log("进入mtt比赛房间后，获取房间消息");
        this.SendMsg(MsgID.MttGetRoomInfo , body);
    };

    SendCheckPublicCards() 
    {
        var body = 
        { 

        }
        console.log("发发看");
        this.SendMsg(MsgID.CheckPublicCards , body);
    };

    SendEnterGame(_gameType : number, _matchId : number, _changeDesk : boolean , _is213Broadable : boolean) 
    {
        var body = 
        { 
            "gameType" :_gameType,
            "gameId" : _matchId,
            "ChangeDesk" : _changeDesk,
            "is213Broadable" : _is213Broadable,
        }
        console.log("进入房间消息");
        this.SendMsg(MsgID.EnterGame , body);
    };
    
    SendRecordDuringMatch(_matchId : number) 
    {
        var body = 
        { 
            "gameId" : _matchId,
        }
        console.log("获取打牌实时战绩");
        this.SendMsg(MsgID.RecordDuringMatch , body);
    };
    SendPlayerAction(_actionType : number , _score : number , _commandId : number) 
    {
        var body = 
        { 
            "gameOpType" : _actionType,
            "score" : _score,
            "commandId" : _commandId
        }
        console.log("牌局中 玩家执行行动");
        this.SendMsg(MsgID.PlayerAction , body);
    };

    SendGetSelfMttStatus(_gameType : number , _matchID : number ) 
    {
        var body = 
        { 
            "gameType" : _gameType,
            "matchID" : _matchID,

        }
        console.log("牌局中 获取mtt自己的牌桌状态");
        this.SendMsg(MsgID.GetSelfMttStatus , body);
    };

    SendRefreshMttInfo(_matchId: number) {
        var body = {
            matchId: _matchId,
        };
        console.log('刷新mtt最新状态数据');
        this.SendMsg(MsgID.RefreshMttInfo, body);
    }
    SendGetMessageAllRead() {
        var body = {};
        console.log('查看公告红点');
        this.SendMsg(MsgID.GetMessageAllRead, body);
    }
    SendMessageInfo(_mode: number, _page: number, _pageSize: number) {
        var body = {
            mode: _mode,
            page: _page,
            pageSize: _pageSize,
        };
        console.log('取得公告消息:' + body);
        this.SendMsg(MsgID.GetMessageInfo, body);
    }
    SendMessageIsRead(_mode: number, _messageId) {
        var body = {
            mode: _mode,
            messageid: _messageId,
        };
        console.log('发送已读消息:' + body);
        this.SendMsg(MsgID.MessageIsRead, body);
    }
    SendBackAndKeepPlaying() {
        var body = {

        };
        console.log('取消离开状态:' + body);
        this.SendMsg(MsgID.BackAndKeepPlaying, body);
    }

    
}


export enum GameType
{
    Cash = 1,
    Mtt = 900,
}

export enum MsgStatus
{
    SUCCESS = 1,
    FAILED = 2,
}

export enum SmsCodeType {
    USER_REGISTER = 1, //注册用户
    USER_Login = 2, //完善用户信息 /登录
    USER_RESET_PWD = 3, //用户找回密码
}

export enum LoginType {
    Password = 1,
    SmsCode = 2,
    Token = 3,
}

export enum MsgID {
    VisitorLogin = 1,
    Logout = 191,
    Login = 201,
    Ping = 202,
    GetUserInfo = 204,
    EnterGame = 207,
    GamePlayerStatusChange = 213,
    GameStart = 216,
    WhosTurn = 217,
    PlayerAction = 218,
    SendPublicCards = 219,
    GameResult = 221,
    UpdatePlayerScore = 222,
    RecordDuringMatch = 223,
    GetSMSCode = 233,
    Register = 234,
    ResetPwd = 235,
    SetUserInfo = 236,
    DecideConbination = 237,
    PotChange = 238,
    GetAssets = 246,
    CheckPublicCards = 288,
    GetLunBoTu = 296,
    GetMttMatchDetails = 340,
    AttendMtt = 341,
    MttCancelReg = 342,
    MttDismiss = 343,
    MttGetRoomInfo = 344,
    MttJoinNotify = 345, //推送有人报名
    MttReadyNotify = 346, //Mtt比赛准备开始了
    MttStatusChange = 353, //比赛状态通知
    MttManualStart =  354,
    MttGameResult = 355,
    MttSelfStatus = 356,
    BackAndKeepPlaying = 357,
    VeryifySmsCode = 387,
    GetSelfMttStatus =  555,//获取mtt 我在桌子内的状态，观看，主播，在玩
    GetMttTableInfo = 556,
    GetMttPlayerList = 557,
    RefreshMttInfo = 558,
    GetMttRank = 681,
    MttGetRebuyInfo = 685,
    GetSelfTicket = 693,
    GetMttList = 702,
    MatchAnouncement = 910, //比赛通知信息
    SetMttMacthKeepTop = 927,
    detectCanDeleteAccount = 988,
    GetLogOffCode = 989,
    deleteAccount = 990,
    GetUnionAssets = 994,
    GetMessageAllRead = 684,
    GetMessageInfo = 682,
    MessageIsRead = 683,
}
