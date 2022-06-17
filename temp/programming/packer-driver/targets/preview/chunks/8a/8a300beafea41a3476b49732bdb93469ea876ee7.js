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
          this.mLayerRoot = cc.find("Canvas/LayerRoot");
          this.mWindowRoot = cc.find("Canvas/WindowRoot");
        }

        ShowLayer(_node) {
          this.mLayerRoot.addChild(_node);
          var nodeCount = this.mLayerRoot.childrenCount;

          _node.setSiblingIndex(nodeCount);
        }

      });

      UIMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a300beafea41a3476b49732bdb93469ea876ee7.js.map