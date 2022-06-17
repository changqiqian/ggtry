System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, ResMgr, UIMgr, _crd;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./ResMgr", _context.meta, extras);
  }

  _export("UIMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d942pJ+w5MPof/yocmPJnI", "UIMgr", undefined);

      _export("UIMgr", UIMgr = class UIMgr {
        // private static instance : UIMgr = null;
        // public static GetInstance() :UIMgr
        // {
        //     if(UIMgr.instance == null)
        //     {
        //         UIMgr.instance = new UIMgr();
        //     }
        //     return UIMgr.instance;
        // }
        static ShowLayer(_bundleName, _prefabName) {}

        static CreatePrefab(_bundleName, _prefabPath, _class, _loadFinish) {
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).GetAssetInBundle(_bundleName, _prefabPath, cc.Prefab, _prefab => {
            if (_loadFinish) {
              var tempPrefab = instantiate(_prefab);
              tempPrefab.addComponent(_class);

              _loadFinish(tempPrefab);
            }
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86f83a047ccd9ecdee3b69d4ab84aa4324370a86.js.map