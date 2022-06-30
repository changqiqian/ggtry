System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, instantiate, BaseUI, LocalPlayerData, _dec, _class, _crd, ccclass, property, HallUI;

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "../../base/BaseUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalPlayerData(extras) {
    _reporterNs.report("LocalPlayerData", "../../base/LocalPlayerData", _context.meta, extras);
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
    }, function (_unresolved_3) {
      LocalPlayerData = _unresolved_3.LocalPlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98659dUvoRAF4EkD58kk2rv", "HallUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HallUI", HallUI = (_dec = ccclass('HallUI'), _dec(_class = class HallUI extends (_crd && BaseUI === void 0 ? (_reportPossibleCrUseOfBaseUI({
        error: Error()
      }), BaseUI) : BaseUI) {
        InitParam() {}

        BindUI() {
          (_crd && LocalPlayerData === void 0 ? (_reportPossibleCrUseOfLocalPlayerData({
            error: Error()
          }), LocalPlayerData) : LocalPlayerData).GetInstance().TestData();
          this.LoadPrefab("cowboy", "prefab/CowboyUI", _prefab => {
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
//# sourceMappingURL=99a3438f1ed7edc3493cb1f4bcbd916be4f61707.js.map