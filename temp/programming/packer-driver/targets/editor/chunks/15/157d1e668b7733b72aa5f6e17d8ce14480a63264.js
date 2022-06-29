System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, DataNotify, _dec, _class, _class2, _crd, ccclass, property, CowboyData;

  function _reportPossibleCrUseOfDataNotify(extras) {
    _reporterNs.report("DataNotify", "../../base/DataNotify", _context.meta, extras);
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

      _cclegacy._RF.push({}, "4e42fOvqWhI4JJbb4sIyiRU", "CowboyData", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CowboyData", CowboyData = (_dec = ccclass('CowboyData'), _dec(_class = (_class2 = class CowboyData extends (_crd && DataNotify === void 0 ? (_reportPossibleCrUseOfDataNotify({
        error: Error()
      }), DataNotify) : DataNotify) {
        constructor(...args) {
          super(...args);
          this.Data_SelectedChip = null;
        }

        static GetInstance() {
          if (CowboyData.Instance == null) {
            CowboyData.Instance = new CowboyData();
            CowboyData.Instance.CreateNotify();
          }

          return CowboyData.Instance;
        } //本地玩家选中的下注筹码


      }, _class2.Instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=157d1e668b7733b72aa5f6e17d8ce14480a63264.js.map