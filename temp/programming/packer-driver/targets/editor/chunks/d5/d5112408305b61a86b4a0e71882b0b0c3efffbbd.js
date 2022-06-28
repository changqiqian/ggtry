System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BaseUI, StartData, _dec, _class, _crd, ccclass, property, Start;

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "./base/BaseUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStartData(extras) {
    _reporterNs.report("StartData", "./StartData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseUI = _unresolved_2.BaseUI;
    }, function (_unresolved_3) {
      StartData = _unresolved_3.StartData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dddd42YZT9N8ItX01ZCopex", "Start", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Start", Start = (_dec = ccclass('start'), _dec(_class = class Start extends (_crd && BaseUI === void 0 ? (_reportPossibleCrUseOfBaseUI({
        error: Error()
      }), BaseUI) : BaseUI) {
        InitParam() {
          (_crd && StartData === void 0 ? (_reportPossibleCrUseOfStartData({
            error: Error()
          }), StartData) : StartData).GetInstance().AddListener("Data_HotUpdateEnd", (_current, _before) => {
            console.log("Data_HotUpdateEnd");
          }, this);
        }

        BindUI() {}

        RegDataNotify() {}

        LateInit() {
          (_crd && StartData === void 0 ? (_reportPossibleCrUseOfStartData({
            error: Error()
          }), StartData) : StartData).GetInstance().Data_HotUpdateEnd = true;
        }

        UnregDataNotify() {
          (_crd && StartData === void 0 ? (_reportPossibleCrUseOfStartData({
            error: Error()
          }), StartData) : StartData).GetInstance().RemoveListenerByTarget(this);
        }

        start() {//UIMgr.GetInstance().Init();
          //UIMgr.GetInstance().ChangeScene(SceneType.Hall);    
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d5112408305b61a86b4a0e71882b0b0c3efffbbd.js.map