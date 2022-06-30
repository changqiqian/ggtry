System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, DataNotify, _dec, _class, _class2, _crd, ccclass, property, LocalPlayerData;

  function _reportPossibleCrUseOfDataNotify(extras) {
    _reporterNs.report("DataNotify", "./DataNotify", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      DataNotify = _unresolved_2.DataNotify;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "59e77ThxKhDbJXtfEb1M3d7", "LocalPlayerData", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LocalPlayerData", LocalPlayerData = (_dec = ccclass('LocalPlayerData'), _dec(_class = (_class2 = class LocalPlayerData extends (_crd && DataNotify === void 0 ? (_reportPossibleCrUseOfDataNotify({
        error: Error()
      }), DataNotify) : DataNotify) {
        constructor(...args) {
          super(...args);
          this.Data_Money = null;
        }

        static GetInstance() {
          if (LocalPlayerData.Instance == null) {
            LocalPlayerData.Instance = new LocalPlayerData();
            LocalPlayerData.Instance.CreateNotify();
          }

          return LocalPlayerData.Instance;
        }

        //玩家金币
        TestData() {
          this.Data_Money = 300;
        }

      }, _class2.Instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b745215bd82fc49edad4e500b18ecb467be7d1ba.js.map