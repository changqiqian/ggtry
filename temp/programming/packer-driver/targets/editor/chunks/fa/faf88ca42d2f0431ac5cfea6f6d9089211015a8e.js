System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UIMgr, _crd;

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "./BaseUI", _context.meta, extras);
  }

  _export("UIMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
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

        static CreatePrefab(Script, _loadFinish) {// Script bundleName = "";
          // var prefabPath = "";
          // ResMgr.GetInstance().GetAssetInBundle(bundleName , prefabPath , cc.Prefab , (_prefab)=>
          // {
          //     if(_loadFinish)
          //     {
          //         var tempPrefab =  instantiate(_prefab);
          //         tempPrefab.addComponent(Script);
          //         _loadFinish(tempPrefab);
          //     }
          // });
        }

      });

      UIMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=faf88ca42d2f0431ac5cfea6f6d9089211015a8e.js.map