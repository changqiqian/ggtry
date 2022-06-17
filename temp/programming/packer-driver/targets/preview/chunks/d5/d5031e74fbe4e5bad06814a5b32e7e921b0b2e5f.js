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
            var temp = new UIMgr();
            UIMgr.instance = temp;
          }

          return UIMgr.instance;
        }

        static ShowLayer(_bundleName, _prefabName) {}

      });

      UIMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d5031e74fbe4e5bad06814a5b32e7e921b0b2e5f.js.map