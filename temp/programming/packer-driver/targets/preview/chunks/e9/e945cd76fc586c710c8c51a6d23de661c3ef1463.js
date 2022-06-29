System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DataNotify, LoadingData, _crd;

  function _reportPossibleCrUseOfDataNotify(extras) {
    _reporterNs.report("DataNotify", "../../base/DataNotify", _context.meta, extras);
  }

  _export("LoadingData", void 0);

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

      _cclegacy._RF.push({}, "8fed4UqDcxEip31KVAOqgA5", "LoadingData", undefined);

      _export("LoadingData", LoadingData = class LoadingData extends (_crd && DataNotify === void 0 ? (_reportPossibleCrUseOfDataNotify({
        error: Error()
      }), DataNotify) : DataNotify) {
        constructor() {
          super(...arguments);
          this.Data_HotUpdateEnd = null;
        }

        static GetInstance() {
          if (LoadingData.Instance == null) {
            LoadingData.Instance = new LoadingData();
            LoadingData.Instance.CreateNotify();
          }

          return LoadingData.Instance;
        }

      });

      LoadingData.Instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e945cd76fc586c710c8c51a6d23de661c3ef1463.js.map