System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BaseUI, LoadingData, _dec, _class, _crd, ccclass, property, StartUI;

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "../../base/BaseUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingData(extras) {
    _reporterNs.report("LoadingData", "./LoadingData", _context.meta, extras);
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
      LoadingData = _unresolved_3.LoadingData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dddd42YZT9N8ItX01ZCopex", "LoadingUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StartUI", StartUI = (_dec = ccclass('StartUI'), _dec(_class = class StartUI extends (_crd && BaseUI === void 0 ? (_reportPossibleCrUseOfBaseUI({
        error: Error()
      }), BaseUI) : BaseUI) {
        InitParam() {
          (_crd && LoadingData === void 0 ? (_reportPossibleCrUseOfLoadingData({
            error: Error()
          }), LoadingData) : LoadingData).GetInstance().AddListener("Data_HotUpdateEnd", (_current, _before) => {}, this);
        }

        BindUI() {}

        RegDataNotify() {}

        LateInit() {}

        UnregDataNotify() {
          (_crd && LoadingData === void 0 ? (_reportPossibleCrUseOfLoadingData({
            error: Error()
          }), LoadingData) : LoadingData).GetInstance().RemoveListenerByTarget(this);
        }

        CustmoerDestory() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db9350e6035e24fe8059d782444ca0c7b0372763.js.map