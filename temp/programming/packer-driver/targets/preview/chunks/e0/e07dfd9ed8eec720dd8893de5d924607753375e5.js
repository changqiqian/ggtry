System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, BaseUI, ResMgr, _dec, _class, _crd, ccclass, property, start;

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "./base/BaseUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./base/ResMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      BaseUI = _unresolved_2.BaseUI;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dddd42YZT9N8ItX01ZCopex", "Start", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("start", start = (_dec = ccclass('start'), _dec(_class = class start extends Component {
        start() {
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).PreloadBundle("common", () => {
            (_crd && BaseUI === void 0 ? (_reportPossibleCrUseOfBaseUI({
              error: Error()
            }), BaseUI) : BaseUI).CreatePrefab(_obj => {
              this.node.addChild(_obj);
            });
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e07dfd9ed8eec720dd8893de5d924607753375e5.js.map