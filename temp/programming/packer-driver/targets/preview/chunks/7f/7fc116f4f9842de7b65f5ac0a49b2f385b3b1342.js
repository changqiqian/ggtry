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

        static GetInstance() {
          if (StartData.__ins == null) {
            StartData.__ins = new StartData();

            StartData.__ins.CreateNotify();
          }

          return StartData.__ins;
        }

        Test() {}

      });

      StartData.__ins = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7fc116f4f9842de7b65f5ac0a49b2f385b3b1342.js.map