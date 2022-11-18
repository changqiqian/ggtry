import { _decorator, Component, Node } from 'cc';
import { Writer } from '../../plugin/protobuf';
import { Localization } from '../base/Localization';
import { Gender } from '../base/LocalPlayerData';
import { Singleton } from '../base/Singleton';
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

export class Network  extends Singleton<Network>()
{
    private mWebSocket: WebSocket = null;
    private mConnectTimer: number;
    private mPingRevTimer: number;
    private mPingSendTimer: number;
    private mPingSpace: number = 5000;
    private mMsgListenner: Array<MsgEvent>;
    private mForceClose: boolean = false;
    constructor() 
    {
        super();
        this.mMsgListenner = new Array<MsgEvent>();
    }

    public CreateWS() {
        if (this.mWebSocket != null) {
            console.log('上一根ws还没有清理，不能重新连接');
            return;
        }
        this.mForceClose = false;
        UIMgr.Instance.ShowLoading(true, '连接服务器中...');
        this.mWebSocket = new WebSocket(GameConfig.SeverUrl);
        this.mWebSocket.onopen = this.OnOpen.bind(this);
        this.mWebSocket.onmessage = this.OnMessage.bind(this);
        this.mWebSocket.onerror = this.OnError.bind(this);
        this.mWebSocket.onclose = this.OnClose.bind(this);
        this.mWebSocket.binaryType = "arraybuffer";
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

    private OnOpen(event) {
        UIMgr.Instance.ShowLoading(false);
        console.log('Socket OnOpen = ');
        UIMgr.Instance.ShowToast(Localization.GetString("00236"));
        clearTimeout(this.mConnectTimer);
        CommonNotify.Instance.Data_SocketOpen.mData = true;
        this.SendPing();
    }

    private OnError(event) {
        console.log('Socket OnError = ');
        clearTimeout(this.mConnectTimer);
        CommonNotify.Instance.Data_SocketError.mData = true;
    }

    private OnClose(event) {
        console.log('Socket OnClose  =  ');
        this.StopPing();
        clearTimeout(this.mConnectTimer);
        if (this.mWebSocket != null) {
            this.mWebSocket.onopen = null;
            this.mWebSocket.onmessage = null;
            this.mWebSocket.onerror = null;
            this.mWebSocket.onclose = null;
            this.mWebSocket = null;
        }

        if (this.mForceClose == false) 
        {
            UIMgr.Instance.ShowLoading(true, '已断线...');
            CommonNotify.Instance.Data_SocketClose.mData = true;
            UIMgr.Instance.ShowToast(Localization.GetString("00113"));
            setTimeout(this.CreateWS.bind(this), 1000);
        }
    }

    static HeaderLength = 12;
    public SendMsg(_msgID: number, _protoBytes : Uint8Array) 
    {
        let totalLength = Network.HeaderLength +  _protoBytes.length;
        let currentOffset = 0;

        let totalBuffer = new ArrayBuffer(totalLength);
        let flagDataView = new DataView(totalBuffer,currentOffset,2);
        flagDataView.setUint16(0,99);
        currentOffset += 2;

        let lengthDataView = new DataView(totalBuffer , currentOffset , 4);
        lengthDataView.setUint32(0, totalLength);
        currentOffset += 4;

        let extensionDataView = new DataView(totalBuffer,currentOffset,2);
        extensionDataView.setUint16(0,0);
        currentOffset += 2;

        let msgIdDataView = new DataView(totalBuffer,currentOffset,4);
        msgIdDataView.setUint32(0,_msgID);
        currentOffset += 4;

        for(let i = 0 ; i < _protoBytes.length ; i++)
        {
            let msgDataView = new DataView(totalBuffer , currentOffset , 1);
            msgDataView.setUint8(0,_protoBytes[i]);
            currentOffset++;
        }
        if (this.mWebSocket != null && this.mWebSocket.readyState === WebSocket.OPEN) 
        {
            this.mWebSocket.send(totalBuffer);
            if(_msgID == MessageId.C2S_HeartbeatPing)
            {
                return;
            }
            console.log('给服务器发送消息：' + _msgID);
        } 
        else 
        {
            console.log('给服务器发送消息失败：' + _msgID);
        }
    }
    
    private OnMessage(event) 
    {
        let currentOffset = 0;
        var dataView = new DataView(event.data);
        let flag = dataView.getUint16(currentOffset);
        currentOffset += 2;
        let Totallength = dataView.getUint32(currentOffset);
        currentOffset += 4;
        let extension = dataView.getUint16(currentOffset);
        currentOffset += 2;
        let msgId = dataView.getUint32(currentOffset);
        currentOffset += 4;

        let msgLength = Totallength - Network.HeaderLength;
        let msgDataArray = new Uint8Array(msgLength);
        for(let i = 0 ; i < msgLength ; i++)
        {
            msgDataArray[i] = dataView.getUint8(i + currentOffset);
        }
        if(msgId == MessageId.S2C_HeartbeatPong)
        {
            this.RecvPing();
            return;
        }


        console.log('收到 消息  msgId====' + msgId);
        for (let i = 0; i < this.mMsgListenner.length; i++) 
        {
            this.mMsgListenner[i].TryToTriggerMsg(msgId, msgDataArray);
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
        console.log("OnConnectTimeOut");
        if (this.mWebSocket.readyState === WebSocket.OPEN) {
        } else {
            this.ClearWS(false);
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    /////                               心跳
    ////////////////////////////////////////////////////////////////////////////////////
    public SendPing() {
        this.StopPing();
        clearTimeout(this.mPingSendTimer);
        this.mPingRevTimer = setTimeout(this.OnPingTimeOut.bind(this), this.mPingSpace);
        let msg = new C2SHeartbeatPing();
        this.SendMsg(MessageId.C2S_HeartbeatPing , C2SHeartbeatPing.encode(msg).finish());
        //console.log('发送 心跳');
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


