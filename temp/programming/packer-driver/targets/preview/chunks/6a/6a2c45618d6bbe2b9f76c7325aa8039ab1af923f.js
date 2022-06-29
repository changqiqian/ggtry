System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DataNotify, HallData, _crd;

  function _reportPossibleCrUseOfDataNotify(extras) {
    _reporterNs.report("DataNotify", "../../base/DataNotify", _context.meta, extras);
  }

  _export("HallData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DataNotify = _unresolved_2.DataNotify;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ae24Gx2VdHSrOztahvlmee", "HallData", undefined);

      _export("HallData", HallData = class HallData extends (_crd && DataNotify === void 0 ? (_reportPossibleCrUseOfDataNotify({
        error: Error()
      }), DataNotify) : DataNotify) {
        static GetInstance() {
          if (HallData.Instance == null) {
            HallData.Instance = new HallData();
            HallData.Instance.CreateNotify();
          }

          return HallData.Instance;
        }

      });

      HallData.Instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a2c45618d6bbe2b9f76c7325aa8039ab1af923f.js.map