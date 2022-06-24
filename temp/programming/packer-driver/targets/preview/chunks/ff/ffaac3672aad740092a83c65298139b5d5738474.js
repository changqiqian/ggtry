System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DataNotify, StartData, _crd;

  function _reportPossibleCrUseOfDataNotify(extras) {
    _reporterNs.report("DataNotify", "./base/DataNotify", _context.meta, extras);
  }

  _export("StartData", void 0);

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

      _cclegacy._RF.push({}, "8fed4UqDcxEip31KVAOqgA5", "StartData", undefined);

      _export("StartData", StartData = class StartData extends (_crd && DataNotify === void 0 ? (_reportPossibleCrUseOfDataNotify({
        error: Error()
      }), DataNotify) : DataNotify) {
        constructor() {
          super(...arguments);
          this.Data_Test = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ffaac3672aad740092a83c65298139b5d5738474.js.map