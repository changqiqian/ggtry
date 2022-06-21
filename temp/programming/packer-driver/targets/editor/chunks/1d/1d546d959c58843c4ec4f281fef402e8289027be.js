System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, MsgKeyPair, MsgEvent, Network, _crd, ccclass, property;

  _export("Network", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5dc746GUP9M8qHDU+k5rwVH", "Network", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      MsgKeyPair = class MsgKeyPair {
        constructor(_msgID, _callback) {
          this.msgID = void 0;
          this.callback = void 0;
          this.msgID = _msgID;
          this.callback = _callback;
        }

      };
      MsgEvent = class MsgEvent {
        constructor(_target) {
          this.target = void 0;
          this.callbackList = void 0;
          this.target = _target;
          this.callbackList = new Array();
        }

        Add(_msgID, _callback) {
          let keyPairIndex = this.callbackList.findIndex(_item => _item.msgID === _msgID);

          if (keyPairIndex >= 0) {
            console.log("当前target已经注册过该网络消息了   _msgID===" + _msgID + "。不能重复注册");
            return;
          }

          let keyPair = new MsgKeyPair(_msgID, _callback);
          this.callbackList.push(keyPair);
        }

        Remove(_msgID) {
          let keyPairIndex = this.callbackList.findIndex(_item => _item.msgID === _msgID);

          if (keyPairIndex < 0) {
            console.log("当前target还没有注册过   _msgID===" + _msgID + "。不能移除");
            return;
          }

          this.callbackList.splice(keyPairIndex, 1);
        }

      };

      _export("Network", Network = class Network {
        static GetInstance() {
          if (Network.instance == null) {
            Network.instance = new Network();
          }

          return Network.instance;
        }

        constructor() {
          this.mWebSocket = null;
          this.mConnectTimer = void 0;
          this.mPingRevTimer = void 0;
          this.mPingSendTimer = void 0;
          this.mPingSpace = 5000;
          this.mMsgListenner = void 0;
          this.mMsgListenner = new Array();
        }

        CreateWS() {
          if (this.mWebSocket != null) {
            console.log("上一根ws还没有清理，不能重新连接");
            return;
          }

          this.mWebSocket = new WebSocket(Network.WS_Addr);
          this.mWebSocket.onopen = this.OnOpen.bind(this);
          this.mWebSocket.onmessage = this.OnMessage.bind(this);
          this.mWebSocket.onerror = this.OnError.bind(this);
          this.mWebSocket.onclose = this.OnClose.bind(this);
          this.mConnectTimer = setTimeout(this.OnConnectTimeOut.bind(this), 3000);
        }

        ClearWS() {
          clearTimeout(this.mConnectTimer);
          this.StopPing();

          if (this.mWebSocket != null) {
            this.mWebSocket.close();
            this.mWebSocket.onopen = null;
            this.mWebSocket.onmessage = null;
            this.mWebSocket.onerror = null;
            this.mWebSocket.onclose = null;
          }

          this.mWebSocket = null;
        }

        OnOpen(event) {
          clearTimeout(this.mConnectTimer);
          ;
        }

        OnMessage(event) {}

        OnError(event) {}

        OnClose(event) {}

        AddMsgListenner(_msgID, _callback, _target) {
          let index = this.mMsgListenner.findIndex(_item => _item.target === _target);
          let currentMsgEvent;

          if (index >= 0) {
            currentMsgEvent = this.mMsgListenner[index];
          } else {
            currentMsgEvent = new MsgEvent(_target);
            this.mMsgListenner.push(currentMsgEvent);
          }

          currentMsgEvent.Add(_msgID, _callback);
        }

        RemoveListenner(_target) {
          let index = this.mMsgListenner.findIndex(_item => _item.target === _target);

          if (index < 0) {
            console.log("当前_target还没有添加过网络监听，无法移除");
            return;
          }

          this.mMsgListenner.splice(index, 1);
        }

        OnConnectTimeOut() {
          if (this.mWebSocket.readyState === WebSocket.OPEN) {} else {
            this.ClearWS();
          }
        } ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////心跳
        ////////////////////////////////////////////////////////////////////////////////////


        SendPing() {
          //todo 发出心跳包
          clearTimeout(this.mPingSendTimer);
          this.mPingRevTimer = setTimeout(this.OnPingTimeOut.bind(this), this.mPingSpace);
        }

        RecvPing() {
          clearTimeout(this.mPingRevTimer);
          this.mPingSendTimer = setTimeout(this.SendPing.bind(this), this.mPingSpace);
        }

        StopPing() {
          clearTimeout(this.mPingRevTimer);
          clearTimeout(this.mPingSendTimer);
        }

        OnPingTimeOut() {
          //to do  心跳超时
          this.ClearWS();
        }

      });

      Network.instance = null;
      Network.WS_Addr = "";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d546d959c58843c4ec4f281fef402e8289027be.js.map