System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, assetManager, BundlePair, ResMgr, _crd;

  _export("ResMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fdc43owwnFLUpSvMom8VBQf", "ResMgr", undefined);

      BundlePair = class BundlePair {
        constructor(_bundleName, bundle) {
          this.key = void 0;
          this.value = void 0;
        }

      };

      _export("ResMgr", ResMgr = class ResMgr {
        constructor() {
          this.bundleCache = void 0;
        }

        static GetInstance() {
          if (ResMgr.instance == null) {
            var temp = new ResMgr();
            temp.Init();
            ResMgr.instance = temp;
          }

          return ResMgr.instance;
        }

        PreloadBundle(_bundleName, _loadFinish) {
          var bundleInCache = this.FindBundleInCache(_bundleName);

          if (bundleInCache != null) {
            console.log("PreloadBundle  当前bundle已经预加载过了   name===:" + _bundleName);

            if (_loadFinish) {
              _loadFinish();
            }

            return;
          }

          assetManager.loadBundle(_bundleName, (_error, _bundle) => {
            if (_error != null) {
              console.log("PreloadBundle error   name===:" + _bundleName);
            } else {
              this.AddBundleToCahce(_bundleName, _bundle);

              if (_loadFinish) {
                _loadFinish();
              }
            }
          });
        }

        GetAssetInBundle(_bundleName, _assetName, _loadFinish) {
          var bundleInCache = this.FindBundleInCache(_bundleName);

          if (bundleInCache == null) {
            console.log("GetAssetInBundle 当前bundle还未加载    name===:" + _bundleName);
            return null;
          }

          bundleInCache.value.load(_assetName, (_error, _asset) => {
            if (_error != null) {
              console.log("GetAssetInBundle error   _bundleName:_assetName===" + _bundleName + ":" + _assetName);
            } else {
              if (_loadFinish) {
                _loadFinish(_asset);
              }
            }
          });
        }

        RemoveBundleFromCache(_bundleName) {
          var bundleInCache = this.FindBundleInCache(_bundleName);

          if (bundleInCache == null) {
            console.log("RemoveBundleFromCache bundle缓存中没有这个bundle   name ===:" + _bundleName);
            return;
          }

          bundleInCache.value.releaseAll();
          assetManager.removeBundle(bundleInCache.value);
          this.bundleCache = this.bundleCache.filter(target => target.key !== _bundleName);
        }

        Init() {
          this.bundleCache = new Array();
        }

        FindBundleInCache(_bundleName) {
          var result = this.bundleCache.find(target => target.key == _bundleName);
          return result;
        }

        AddBundleToCahce(_bundleName, _bundle) {
          var bundleInCache = this.FindBundleInCache(_bundleName);

          if (bundleInCache != null) {
            console.log("AddBundleToCahce bundle缓存中已存在这个bundle了    name ===:" + _bundleName);
            return;
          }

          var keypair = new BundlePair(_bundleName, _bundle);
          this.bundleCache.push(keypair);
        }

      });

      ResMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a3852a755aa3f7a55b21b25f8a8eb9497bfee1e.js.map