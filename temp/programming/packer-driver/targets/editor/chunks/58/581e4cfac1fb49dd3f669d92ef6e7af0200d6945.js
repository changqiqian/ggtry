System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, instantiate, BaseUI, _dec, _class, _crd, ccclass, property, CowboyUI;

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "../../base/BaseUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      BaseUI = _unresolved_2.BaseUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48b53h4N5pIhKW0/QWFtw0q", "CowboyUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CowboyUI", CowboyUI = (_dec = ccclass('CowboyUI'), _dec(_class = class CowboyUI extends (_crd && BaseUI === void 0 ? (_reportPossibleCrUseOfBaseUI({
        error: Error()
      }), BaseUI) : BaseUI) {
        InitParam() {}

        BindUI() {
          this.LoadPrefab("cowboy", "prefab/TopMenu", _prefab => {
            let tempNode = instantiate(_prefab);
            this.node.addChild(tempNode);
          });
        }

        RegDataNotify() {}

        LateInit() {}

        UnregDataNotify() {}

        CustmoerDestory() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=581e4cfac1fb49dd3f669d92ef6e7af0200d6945.js.map