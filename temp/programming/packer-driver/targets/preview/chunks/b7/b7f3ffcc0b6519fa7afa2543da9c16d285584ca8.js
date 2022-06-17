System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, UIMgr, _crd;

  _export("UIMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d942pJ+w5MPof/yocmPJnI", "UIMgr", undefined);

      _export("UIMgr", UIMgr = class UIMgr {
        static GetInstance() {
          if (UIMgr.instance == null) {
            UIMgr.instance = new UIMgr();
          }

          return UIMgr.instance;
        }

        ShowLayer(_bundleName, _prefabName) {}

      });

      UIMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7f3ffcc0b6519fa7afa2543da9c16d285584ca8.js.map