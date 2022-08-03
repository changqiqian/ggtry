import { _decorator, Component, Node } from 'cc';
import { Localization } from '../base/Localization';
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

        this.mWebSocket = new WebSocket(GameConfig.SeverUrl);
        this.mWebSocket.onopen = this.OnOpen.bind(this);
        this.mWebSocket.onmessage = this.OnMessage.bind(this);
        this.mWebSocket.onerror = this.OnError.bind(this);
        this.mWebSocket.onclose = this.OnClose.bind(this);
        this.mConnectTimer = setTimeout( this.OnConnectTimeOut.bind(this), 3000);
    }

    public ClearWS()
    {
        clearTimeout(this.mConnectTimer);
        this.StopPing();
        this.mWebSocket.close();

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
        console.log("Socket OnOpen = " + event);
        clearTimeout(this.mConnectTimer);
        CommonNotify.GetInstance().Data_SocketClose = false;
        CommonNotify.GetInstance().Data_SocketOpen = true;
    }

    private OnError(event)
    {
        console.log("Socket OnError = " + event);
        CommonNotify.GetInstance().Data_SocketError = true;
    }

    private OnClose(event)
    {
        console.log("Socket OnClose  =  " + event );
        this.StopPing();

        if(this.mWebSocket != null)
        {
            this.mWebSocket.onopen = null;
            this.mWebSocket.onmessage = null;
            this.mWebSocket.onerror = null;
            this.mWebSocket.onclose = null;
            this.mWebSocket = null;
        }

        CommonNotify.GetInstance().Data_SocketClose = true;
        CommonNotify.GetInstance().Data_SocketOpen = false;
    }

    private OnMessage(event)
    {
        var data = JSON.parse(event.data);
        if(data.msgId == MsgID.Ping)
        {
            console.log("收到了心跳");
            this.RecvPing();
            return;
        }

        var msg = JSON.parse(data.msgBody);
        if(data.languageKey) 
        {
            msg.languageKey = data.languageKey
            console.log("收到服务msg：" + msg);
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

    SendTokenLogin(_userName, _pwd , _verifyCode) 
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
        console.log("Token登录");
        this.SendMsg(MsgID.TokenLogin , body);
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
}

export enum MsgStatus
{
    SUCCESS = 1,
    FAILED = 2,
}

export enum SmsCodeType
{
    USER_REGISTER = 1,	//注册用户
    USER_SET_PWD = 2,	//完善用户信息 /登录
    USER_RESET_PWD = 3,	//用户找回密码
}



export enum MsgID
{
    VisitorLogin = 1,
    TokenLogin = 201,
    Ping = 202,
    GetUserInfo = 204,
    GetSMSCode = 233,
    GetAssets = 246,
}

