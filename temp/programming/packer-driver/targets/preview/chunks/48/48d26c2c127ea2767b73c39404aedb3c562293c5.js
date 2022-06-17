System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ResMgr, UIMgr, _dec, _class, _crd, ccclass, property, Start;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./base/ResMgr", _context.meta, extras);
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
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
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
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).PreloadBundle("common", () => {});
        }

        update(deltaTime) {
          this.node.active;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=48d26c2c127ea2767b73c39404aedb3c562293c5.js.map