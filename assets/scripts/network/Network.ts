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

    public ClearWS(_forceClose: boolean = true) {
        this.mForceClose = _forceClose;
        clearTimeout(this.mConnectTimer);
        this.StopPing();
        console.log("ClearWS _forceClose== " + _forceClose );
        if (this.mWebSocket != null && this.mWebSocket.readyState === WebSocket.OPEN) {
            console.log("ClearWS this.mWebSocket.close();" );
            this.mWebSocket.close();
        }
    }

    public SendMsg(_msgID: number, _msg) {
        // if (this.mWebSocket != null && this.mWebSocket.readyState === WebSocket.OPEN) {
        //     var body = JSON.stringify(_msg);

        //     var final = JSON.stringify({ msgId: _msgID, msgBody: body });
        //     if (_msgID != MsgID.Ping) {
        //         console.log('发送消息：' + final);
        //     }
        //     this.mWebSocket.send(final);
        // } else {
        //     console.log('给服务器发送消息失败：' + _msgID);
        // }
    }

    private OnOpen(event) {
        UIMgr.GetInstance().ShowLoading(false);
        console.log('Socket OnOpen = ' + event);
        clearTimeout(this.mConnectTimer);
        CommonNotify.GetInstance().Data_SocketClose = false;
        CommonNotify.GetInstance().Data_SocketOpen = true;
        CommonNotify.GetInstance().ClearData();

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
            console.log(" OnClose setTimeout(this.CreateWS.bind(this), 1000);" );
            setTimeout(this.CreateWS.bind(this), 1000);
        }
    }

    private OnMessage(event) {
        // var data = JSON.parse(event.data);
        // if (data.msgId == MsgID.Ping) {
        //     this.RecvPing();
        //     return;
        // }
        // var msg = JSON.parse(data.msgBody);
        // if (data.languageKey) {
        //     msg.languageKey = data.languageKey;
        //     //console.log("收到服务msg：" + msg);
        // }
        // console.log('收到服务器消息：' + event.data);
        // for (let i = 0; i < this.mMsgListenner.length; i++) {
        //     this.mMsgListenner[i].TryToTriggerMsg(data.msgId, msg);
        // }
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
            this.ClearWS(false);
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    /////                               心跳
    ////////////////////////////////////////////////////////////////////////////////////
    public SendPing() {
        // this.StopPing();
        // clearTimeout(this.mPingSendTimer);
        // this.mPingRevTimer = setTimeout(this.OnPingTimeOut.bind(this), this.mPingSpace);
        // this.SendMsg(MsgID.Ping, {});
        // //console.log('发送 心跳');
    }

    private RecvPing() {
        //console.log('收到 心跳');
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
        this.ClearWS(false);
    }

    ////////////////////////////////////////////////////////////////////////////////////
    /////                           HTTP
    ////////////////////////////////////////////////////////////////////////////////////

}


