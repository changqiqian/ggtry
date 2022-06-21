import { _decorator, Component, Node } from 'cc';
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

    public static WS_Addr = "";
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

        this.mWebSocket = new WebSocket(Network.WS_Addr);
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
        if(this.mWebSocket != null)
        {
            this.mWebSocket.close();
            this.mWebSocket.onopen = null;
            this.mWebSocket.onmessage = null;
            this.mWebSocket.onerror = null;
            this.mWebSocket.onclose = null;
        }
        this.mWebSocket = null;
        
    }

    private OnOpen(event)
    {
        clearTimeout(this.mConnectTimer);;
    }

    private OnMessage(event)
    {

    }

    private OnError(event)
    {

    }

    private OnClose(event)
    {

    }

    private AddMsgListenner(_msgID : number , _callback : Function , _target : any)
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

    private RemoveListenner(_target : any)
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
    ////////////////////////////////////心跳
    ////////////////////////////////////////////////////////////////////////////////////
    private SendPing()
    {
        //todo 发出心跳包
        clearTimeout(this.mPingSendTimer);
        this.mPingRevTimer = setTimeout(this.OnPingTimeOut.bind(this), this.mPingSpace);
    }
    
    private RecvPing()
    {
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
        this.ClearWS();
    }

}

