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
          if (HallData.__ins == null) {
            HallData.__ins = new HallData();

            HallData.__ins.CreateNotify();
          }

          return HallData.__ins;
        }

      });

      HallData.__ins = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09634320376073f607d8b1b5f28c7ac32ee42551.js.map