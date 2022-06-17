System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, assetManager, ResMgr, _crd;

  _export("ResMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fdc43owwnFLUpSvMom8VBQf", "ResMgr", undefined);

      _export("ResMgr", ResMgr = class ResMgr {
        static PreloadBundle(_bundleName, _loadFinish) {
          assetManager.loadBundle(_bundleName, (_error, _bundle) => {
            if (_error != null) {
              console.log("PreloadBundle error   name===:" + _bundleName);
            } else {
              if (_loadFinish) {
                _loadFinish(_bundle);
              }
            }
          });
        }

        static PreloadAssetsInBundle(_bundleName, _folders, _loadFinish) {
          var bundle = this.GetBundle(_bundleName);

          for (var i = 0; i < _folders.length; i++) {
            bundle.loadDir(_folders[i], () => {
              if (_loadFinish) {
                _loadFinish();
              }
            });
          }
        }

        static GetAssetInBundle(_bundleName, _assetPath, _assetType, _loadFinish) {
          var bundle = this.GetBundle(_bundleName);

          if (bundle == null) {
            console.log("GetAssetInBundle  失败  name===:" + _bundleName);
            return null;
          }

          bundle.load(_assetPath, _assetType, (_error, _asset) => {
            if (_error != null) {
              console.log("GetAssetInBundle error   _bundleName:_assetName===" + _bundleName + ":" + _assetPath);
            } else {
              if (_loadFinish) {
                _loadFinish(_asset);
              }
            }
          });
        }

        static ReleaseBundle(_bundleName) {
          var bundle = this.GetBundle(_bundleName);

          if (bundle == null) {
            console.log("ReleaseBundle  失败  name===:" + _bundleName);
            return null;
          }

          bundle.releaseAll();
          assetManager.removeBundle(bundle);
        }

        static GetBundle(_bundleName) {
          var bundle = assetManager.getBundle(_bundleName);

          if (bundle == null) {
            console.log("GetBundle  当前bundle还没有加载  name===:" + _bundleName);
            return null;
          }

          return bundle;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d6302aad7f02c9482091a54bfa17df132cba566.js.map