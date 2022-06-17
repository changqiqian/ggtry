System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, ResMgr, LayerKeyPair, SceneConfig, UIMgr, _crd, LayerType, SceneType;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./ResMgr", _context.meta, extras);
  }

  _export({
    UIMgr: void 0,
    LayerType: void 0,
    SceneType: void 0
  });

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

      LayerKeyPair = class LayerKeyPair {
        constructor(_key, _value) {
          this.key = void 0;
          this.value = void 0;
          this.key = _key;
          this.value = _value;
        }

      };
      SceneConfig = class SceneConfig {
        constructor(_type, _bundleName, _folder) {
          this.type = void 0;
          this.bundleName = void 0;
          this.resFolder = void 0;
          this.type = _type;
          this.bundleName = _bundleName;
          this.resFolder = _folder;
        }

      };

      (function (LayerType) {
        LayerType[LayerType["Layer"] = 0] = "Layer";
        LayerType[LayerType["Window"] = 1] = "Window";
      })(LayerType || _export("LayerType", LayerType = {}));

      (function (SceneType) {
        SceneType[SceneType["None"] = 0] = "None";
        SceneType[SceneType["Loading"] = 1] = "Loading";
        SceneType[SceneType["Login"] = 2] = "Login";
        SceneType[SceneType["Hall"] = 3] = "Hall";
      })(SceneType || _export("SceneType", SceneType = {}));

      _export("UIMgr", UIMgr = class UIMgr {
        constructor() {
          this.mLayerRoot = null;
          this.mWindowRoot = null;
          this.mLayerList = void 0;
          this.mWindowList = void 0;
          this.mCurrentScene = void 0;
          this.mSceneConfig = void 0;
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
          this.mLayerList = new Array();
          this.mWindowList = new Array();
          this.mCurrentScene = SceneType.None;
          let resFolder = ["1", "2"];
          let loadingConfig = new SceneConfig(SceneType.Loading, "loading", resFolder);
        }

        ShowLayer(_bundleName, _prefabPath, _type) {
          let key = _bundleName + _prefabPath;
          let targetNode = this.FindLayer(key, _type);

          if (targetNode != null) {
            let nodeCount = this.GetRootNode(_type).childrenCount;
            targetNode.setSiblingIndex(nodeCount);
            targetNode.active = true;
            return targetNode;
          }

          this.CreatePrefab(_bundleName, _prefabPath, _tempNode => {
            this.GetRootNode(_type).addChild(_tempNode);
            this.RecordLayer(key, _tempNode, _type);
            return _tempNode;
          });
        }

        CreatePrefab(_bundleName, _prefabPath, _loadFinish) {
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).GetAssetInBundle(_bundleName, _prefabPath, cc.Prefab, _prefab => {
            if (_loadFinish) {
              let tempNode = instantiate(_prefab);

              _loadFinish(tempNode);
            }
          });
        }

        ChangeScene(_sceneType) {}

        DeleteAllLayer(_type) {
          let targetList = this.GetList(_type);

          for (let i = 0; i < targetList.length; i++) {
            targetList[i].value.destroy();
          }

          targetList.splice(0, targetList.length - 1);
        }

        GetList(_type) {
          let targetList;

          switch (_type) {
            case LayerType.Layer:
              targetList = this.mLayerList;
              break;

            case LayerType.Window:
              targetList = this.mWindowList;
              break;
          }

          return targetList;
        }

        FindLayer(_key, _type) {
          let targetList = this.GetList(_type);
          let index = targetList.findIndex(target => target.key === _key);

          if (index >= 0) {
            return targetList[index].value;
          }

          console.log("FindNode  没有找到该layer   key ===" + _key);
          return null;
        }

        GetRootNode(_type) {
          let target;

          switch (_type) {
            case LayerType.Layer:
              target = this.mLayerRoot;
              break;

            case LayerType.Window:
              target = this.mWindowRoot;
              break;
          }

          return target;
        }

        RecordLayer(_key, _node, _type) {
          let keyPair = new LayerKeyPair(_key, _node);
          this.GetList(_type).push(keyPair);
        }

      });

      UIMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7651a6ac5be60223f4299c9fe256dd3be74fabed.js.map