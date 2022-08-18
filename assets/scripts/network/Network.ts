import { _decorator, Component, Node } from 'cc';
import { Localization } from '../base/Localization';
import { Gender } from '../base/LocalPlayerData';
import { UIMgr } from '../base/UIMgr';
import { CommonNotify } from '../CommonNotify';
import { GameConfig } from '../GameConfig';
const { ccclass, property } = _decorator;

class MsgKeyPair
{
    constructor(_msgID :number ,  _callback : Function ) 
    {
        this.msgID = _msgID;
        this.callback = _callback;
    }
    msgID : number ;
    callback:Function;

}

class MsgEvent
{
    constructor(_target : any ) 
    {
        this.target = _target;
        this.callbackList = new  Array<MsgKeyPair>();
    }
    target : any;
    callbackList: Array<MsgKeyPair>;

    public Add(_msgID:number , _callback : Function)
    {
        let keyPairIndex = this.callbackList.findIndex((_item) => _item.msgID === _msgID);
        if(keyPairIndex >=0)
        {
            console.log("当前target已经注册过该网络消息了   _msgID===" + _msgID + "。不能重复注册");
            return;
        }
        let keyPair = new MsgKeyPair(_msgID , _callback);
        this.callbackList.push(keyPair);
    }

    public Remove(_msgID:number)
    {
        let keyPairIndex = this.callbackList.findIndex((_item) => _item.msgID === _msgID);
        if(keyPairIndex < 0)
        {
            console.log("当前target还没有注册过   _msgID===" + _msgID + "。不能移除");
            return;
        }

        this.callbackList.splice(keyPairIndex , 1);
    }

    public TryToTriggerMsg(_msgID:number , _msg)
    {
        for(let i = 0 ; i < this.callbackList.length ;i++)
        {
            if(this.callbackList[i].msgID == _msgID)
            {
                this.callbackList[i].callback(_msg);
            }
        }
    }
}



export class Network 
{
    private static instance : Network = null;
    public static GetInstance() :Network
    {
        if(Network.instance == null)
        {
            Network.instance = new Network();
        }
        return Network.instance;
    }

    private mWebSocket : WebSocket = null;
    private mConnectTimer : number ;
    private mPingRevTimer : number ;
    private mPingSendTimer : number;
    private mPingSpace : number = 5000;
    private mMsgListenner : Array<MsgEvent>;
    private mForceClose : boolean = false;
    constructor() 
    {
        this.mMsgListenner = new Array<MsgEvent>();
    }


    public CreateWS()
    {
        if(this.mWebSocket != null)
        {
            console.log("上一根ws还没有清理，不能重新连接");
            return;
        }
        this.mForceClose = false;
        UIMgr.GetInstance().ShowLoading(true,"连接服务器中...");
        this.mWebSocket = new WebSocket(GameConfig.SeverUrl);
        this.mWebSocket.onopen = this.OnOpen.bind(this);
        this.mWebSocket.onmessage = this.OnMessage.bind(this);
        this.mWebSocket.onerror = this.OnError.bind(this);
        this.mWebSocket.onclose = this.OnClose.bind(this);
        this.mConnectTimer = setTimeout( this.OnConnectTimeOut.bind(this), 3000);
    }

    public ClearWS(_forceClose : boolean = false)
    {
        this.mForceClose  = _forceClose;
        clearTimeout(this.mConnectTimer);
        this.StopPing();
        if (this.mWebSocket!=null && this.mWebSocket.readyState === WebSocket.OPEN) 
        {
            this.mWebSocket.close();
        }
    }

    public SendMsg(_msgID: number , _msg)
    {
        if (this.mWebSocket!=null && this.mWebSocket.readyState === WebSocket.OPEN) 
        {
            var body = JSON.stringify(_msg);
            var final = JSON.stringify({ "msgId": _msgID, "msgBody": body });
            if(_msgID != MsgID.Ping)
            {
                console.log("发送消息：" + final);
            }
            this.mWebSocket.send(final);
        }
        else
        {
            console.log("给服务器发送消息失败：" + _msgID);
        }
    }

    private OnOpen(event)
    {
        UIMgr.GetInstance().ShowLoading(false);
        console.log("Socket OnOpen = " + event);
        clearTimeout(this.mConnectTimer);
        CommonNotify.GetInstance().Data_SocketClose = false;
        CommonNotify.GetInstance().Data_SocketOpen = true;
    }

    private OnError(event)
    {
        console.log("Socket OnError = " + event);
        clearTimeout(this.mConnectTimer);
        CommonNotify.GetInstance().Data_SocketError = true;
    }

    private OnClose(event)
    {
        console.log("Socket OnClose  =  " + event );
        this.StopPing();
        clearTimeout(this.mConnectTimer);
        if(this.mWebSocket != null)
        {
            this.mWebSocket.onopen = null;
            this.mWebSocket.onmessage = null;
            this.mWebSocket.onerror = null;
            this.mWebSocket.onclose = null;
            this.mWebSocket = null;
        }

        if(this.mForceClose == false)
        {
            CommonNotify.GetInstance().Data_SocketClose = true;
            CommonNotify.GetInstance().Data_SocketOpen = false;
    
            setTimeout(this.CreateWS.bind(this), 1000);
        }
    }

    private OnMessage(event)
    {
        var data = JSON.parse(event.data);
        if(data.msgId == MsgID.Ping)
        {
            this.RecvPing();
            return;
        }

        var msg = JSON.parse(data.msgBody);
        if(data.languageKey) 
        {
            msg.languageKey = data.languageKey
            //console.log("收到服务msg：" + msg);
        }
        console.log("收到服务器消息：" + event.data);
        for(let i = 0 ; i < this.mMsgListenner.length ; i++)
        {
            this.mMsgListenner[i].TryToTriggerMsg(data.msgId , msg);
        }
    }

    public AddMsgListenner(_msgID : number , _callback : Function , _target : any)
    {
        let index = this.mMsgListenner.findIndex((_item) => _item.target === _target);
        let currentMsgEvent : MsgEvent;
        if(index >= 0)
        {
            currentMsgEvent = this.mMsgListenner[index];
        }
        else
        {
            currentMsgEvent = new MsgEvent(_target);
            this.mMsgListenner.push(currentMsgEvent);
        }

        currentMsgEvent.Add(_msgID , _callback);
        
    }

    public RemoveListenner(_target : any)
    {
        let index = this.mMsgListenner.findIndex((_item) => _item.target === _target);
        if(index < 0)
        {
            console.log("当前_target还没有添加过网络监听，无法移除");
            return;
        }

        this.mMsgListenner.splice(index , 1);
    }

    private OnConnectTimeOut()
    {
        if (this.mWebSocket.readyState === WebSocket.OPEN) 
        {
            
        }
        else 
        {
            this.ClearWS();
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    /////                               心跳
    ////////////////////////////////////////////////////////////////////////////////////
    public SendPing()
    {
        this.StopPing();
        clearTimeout(this.mPingSendTimer);
        this.mPingRevTimer = setTimeout(this.OnPingTimeOut.bind(this), this.mPingSpace);
        this.SendMsg(MsgID.Ping , {});
        console.log("发送 心跳");
    }
    
    private RecvPing()
    {
        console.log("收到 心跳");
        clearTimeout(this.mPingRevTimer);
        this.mPingSendTimer = setTimeout(this.SendPing.bind(this), this.mPingSpace);
    }

    private StopPing()
    {
        clearTimeout(this.mPingRevTimer);
        clearTimeout(this.mPingSendTimer);
    }

    private OnPingTimeOut()
    {
        //to do  心跳超时
        console.log("心跳超时");
        this.ClearWS();
    }


    ////////////////////////////////////////////////////////////////////////////////////
    /////                           HTTP
    ////////////////////////////////////////////////////////////////////////////////////
    public HttpGet(_url : string , _success : Function , _error : Function)
    {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", _url);
        xhr.onreadystatechange = function () 
        {
            if (xhr.readyState == 4) 
            {
                let resp = null;
                try 
                {
                    if (xhr.responseText != "") 
                    {
                        resp = JSON.parse(xhr.responseText);
                    }
                }
                catch (e) 
                {

                }
                _success && _success(xhr.status, resp, xhr.responseText);
            }
        };

        xhr.onerror = function (err) 
        {
            console.log("HttpGet err ====" + err)
            console.log("HttpGet url ====" + _url)
            _error && _error();
        };
        xhr.send(); 
    }


    ////////////////////////////////////////////////////////////////////////////////////
    /////                           发送消息
    ////////////////////////////////////////////////////////////////////////////////////


    SendVisitorLogin()
    {
        var body = 
        { 
            "userName": GameConfig.Imei, 
            "password": GameConfig.Imei, 
            "imei": GameConfig.Imei, 
            "model": GameConfig.Model, 
            "channelInt": GameConfig.ChannelInt, 
            "channel": GameConfig.Channel, 
            "version": GameConfig.Version, 
            "jingDu": GameConfig.JingDu, 
            "weiDu": GameConfig.WeiDu, 
            "language": Localization.CurrentLanguageType,
        }
        console.log("游客登录");
        this.SendMsg(MsgID.VisitorLogin,body);
    }

    SendLogin(_userName, _pwd , _verifyCode : LoginType) 
    {
        var body = 
        { 
            "userName": _userName, 
            "password": _pwd, 
            "imei": GameConfig.Imei, 
            "model": GameConfig.Model, 
            "channel": GameConfig.Channel, 
            "channelInt": GameConfig.ChannelInt, 
            "version": GameConfig.Version, 
            "jingDu": GameConfig.JingDu, 
            "weiDu": GameConfig.WeiDu, 
            "language": Localization.CurrentLanguageType,
            "verify": _verifyCode,  
            "clientInfo": GameConfig.ClientInfo 
        }
        console.log("账号密码登录 or Token登录");
        this.SendMsg(MsgID.Login , body);
    }

    SendGetUserInfo() 
    {
        var body = {};
        console.log("获取用户信息");
        this.SendMsg(MsgID.GetUserInfo , body);
    }

    SendGetAssets = function () {
        var body = {};
        console.log("获取用户资产");
        this.SendMsg(MsgID.GetAssets , body);
    };


    SendGetSMSCode(_phoneNumber, _codeType : SmsCodeType) 
    {
        var body = 
        { 
            "phoneNumber": _phoneNumber, 
            "codeType": _codeType 
        }
        console.log("获取验证码 _codeType ==" + _codeType);
        this.SendMsg(MsgID.GetSMSCode , body);
    }

    SendVerifyCode(mobile, code) 
    {
        var body = 
        { 
            "mobile": mobile, 
            "code": code 
        }
        console.log("验证 验证码码是否正确");
        this.SendMsg(MsgID.VeryifySmsCode , body);
    }

    SendResetPwd(phoneNumber, password) 
    {
        var body = 
        { 
            "password": password, 
            "verifyCode": "", 
            "phoneNumber": phoneNumber 
        };
        console.log("重置密码");
        this.SendMsg(MsgID.ResetPwd , body);
    };

    SendRegister(phoneNumber, password, nickname, photoUrl) 
    {
        let tphotoUrl = photoUrl + ''
        var body = 
        { 
            "phoneNumber": phoneNumber, 
            "verifyCode": "", 
            "password": password, 
            "channel": "德州", 
            'nickname': nickname, 
            'photoUrl': tphotoUrl, 
            "clientInfo": GameConfig.ClientInfo 
        }
        console.log("请求注册");
        this.SendMsg(MsgID.Register , body);
    };

    SendSetUserInfo(vnickname : string, vgender:Gender, vsigniture, vphotoUrl) 
    {
        var body = 
        { 
            "nickname": vnickname, 
            "gender": vgender, 
            "signiture": vsigniture, 
            "photoUrl": vphotoUrl 
        }
        console.log("完善个人资料");
        this.SendMsg(MsgID.SetUserInfo , body);
    };

    SendGetLunBoTu() 
    {
        var body = 
        { 

        }
        console.log("获取轮播图");
        this.SendMsg(MsgID.GetLunBoTu , body);
    };

    SendGetMttList() 
    {
        var body = 
        { 

        }
        console.log("获取mtt比赛列表");
        this.SendMsg(MsgID.GetMttList , body);
    };

    SendGetMttMatchDetails(_gameType : number , _matchId : number) 
    {
        var body = 
        { 
            "gameType" : _gameType,
            "matchId" : _matchId
        }
        console.log("获取mtt详细信息");
        this.SendMsg(MsgID.GetMttMatchDetails , body);
    };

    
    SendSetMttMacthKeepTop(_matchId : number  , _isTop : boolean) 
    {
        var body = 
        { 
            matchId : _matchId,
            isTop : _isTop
        }
        console.log("设置mtt比赛为置顶比赛");
        this.SendMsg(MsgID.SetMttMacthKeepTop , body);
    };

    SendGetMttPlayerList(gameType:number, matchID:number, page:number, pageCount:number) 
    {
        var body = 
        { 
            "gameType" : gameType, //搞不懂
            "matchID" : matchID,
            "index" : page, //申请第几页
            "count" : pageCount, //每一页多少个数据
        }
        console.log("获取mtt当前玩家列表");
        this.SendMsg(MsgID.GetMttPlayerList , body);
    };
    SendGetMttTableInfo(gameType:number, matchID:number, page:number, pageCount:number) 
    {
        var body = 
        { 
            "gameType" : gameType, //搞不懂
            "matchID" : matchID,
            "index" : page, //申请第几页
            "count" : pageCount, //每一页多少个数据
        }
        console.log("获取mtt当前玩家列表");
        this.SendMsg(MsgID.GetMttTableInfo , body);
    };
}

export enum MsgStatus
{
    SUCCESS = 1,
    FAILED = 2,
}

export enum SmsCodeType
{
    USER_REGISTER = 1,	//注册用户
    USER_Login = 2,	//完善用户信息 /登录
    USER_RESET_PWD = 3,	//用户找回密码
}

export enum LoginType
{
    Password = 1,	
    SmsCode = 2,
    Token = 3,	
}

export enum MsgID
{
    VisitorLogin = 1,
    Login = 201,
    Ping = 202,
    GetUserInfo = 204,
    GetSMSCode = 233,
    Register = 234,
    ResetPwd = 235,
    SetUserInfo = 236,
    GetAssets = 246,
    GetLunBoTu = 296, 
    GetMttMatchDetails = 340,
    MttStatusChange = 353, //比赛状态通知
    VeryifySmsCode = 387,
    GetMttTableInfo = 556,
    GetMttPlayerList = 557,
    GetMttList = 702,
    SetMttMacthKeepTop = 927,
}

