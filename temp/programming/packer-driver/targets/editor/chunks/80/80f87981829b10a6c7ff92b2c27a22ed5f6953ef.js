System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BaseUI, StartData, _dec, _class, _crd, ccclass, property, StartUI;

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

      _cclegacy._RF.push({}, "dddd42YZT9N8ItX01ZCopex", "StartUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StartUI", StartUI = (_dec = ccclass('StartUI'), _dec(_class = class StartUI extends (_crd && BaseUI === void 0 ? (_reportPossibleCrUseOfBaseUI({
        error: Error()
      }), BaseUI) : BaseUI) {
        InitParam() {
          (_crd && StartData === void 0 ? (_reportPossibleCrUseOfStartData({
            error: Error()
          }), StartData) : StartData).GetInstance().AddListener("Data_HotUpdateEnd", (_current, _before) => {
            console.log("Data_HotUpdateEnd _current== " + _current);
            console.log("Data_HotUpdateEnd _before== " + _before);
          }, this);
        }

        BindUI() {}

        RegDataNotify() {}

        LateInit() {
          console.log("LateInit");
          (_crd && StartData === void 0 ? (_reportPossibleCrUseOfStartData({
            error: Error()
          }), StartData) : StartData).GetInstance().Data_HotUpdateEnd = false;
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
//# sourceMappingURL=80f87981829b10a6c7ff92b2c27a22ed5f6953ef.js.map