System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SceneType, UIMgr, _dec, _class, _crd, ccclass, property, Start;

  function _reportPossibleCrUseOfSceneType(extras) {
    _reporterNs.report("SceneType", "./base/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "./base/UIMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      SceneType = _unresolved_2.SceneType;
      UIMgr = _unresolved_2.UIMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dddd42YZT9N8ItX01ZCopex", "Start", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Start", Start = (_dec = ccclass('start'), _dec(_class = class Start extends Component {
        start() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).GetInstance().Init();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).GetInstance().ChangeScene((_crd && SceneType === void 0 ? (_reportPossibleCrUseOfSceneType({
            error: Error()
          }), SceneType) : SceneType).Hall);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=52404fd185489a69dd007e18c7b353deb13af649.js.map