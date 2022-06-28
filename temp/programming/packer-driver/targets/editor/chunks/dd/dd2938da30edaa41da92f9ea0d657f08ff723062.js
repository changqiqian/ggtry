System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BaseUI, SceneType, UIMgr, StartData, _dec, _class, _crd, ccclass, property, StartUI;

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "./base/BaseUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneType(extras) {
    _reporterNs.report("SceneType", "./base/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "./base/UIMgr", _context.meta, extras);
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
      SceneType = _unresolved_3.SceneType;
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      StartData = _unresolved_4.StartData;
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
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).GetInstance().Init();
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).GetInstance().ChangeScene((_crd && SceneType === void 0 ? (_reportPossibleCrUseOfSceneType({
              error: Error()
            }), SceneType) : SceneType).Hall);
          }, this);
        }

        BindUI() {}

        RegDataNotify() {}

        LateInit() {}

        UnregDataNotify() {
          (_crd && StartData === void 0 ? (_reportPossibleCrUseOfStartData({
            error: Error()
          }), StartData) : StartData).GetInstance().RemoveListenerByTarget(this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dd2938da30edaa41da92f9ea0d657f08ff723062.js.map