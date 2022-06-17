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
        constructor() {
          this.mLayerRoot = null;
          this.mWindowRoot = null;
        }

        static GetInstance() {
          if (UIMgr.instance == null) {
            UIMgr.instance = new UIMgr();
          }

          return UIMgr.instance;
        }

        Init() {
          this.mLayerRoot = cc.find("LayerRoot");
          this.mWindowRoot = cc.find("WindowRoot");
        }

        ShowLayer(_bundleName, _prefabName) {}

      });

      UIMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e4e3908c6a6436e480d1947a930914e9b8cee07.js.map