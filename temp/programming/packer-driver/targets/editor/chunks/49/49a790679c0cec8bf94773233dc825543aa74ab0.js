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
        constructor(_key, _value, _belong) {
          this.key = void 0;
          this.value = void 0;
          this.belong = void 0;
          this.key = _key;
          this.value = _value;
        }

      };
      SceneConfig = class SceneConfig {
        constructor(_type, _prefabPath, _bundles, _folders) {
          this.type = void 0;
          this.bundleNames = void 0;
          this.resFolders = void 0;
          this.prefabPath = void 0;
          this.type = _type;
          this.bundleNames = _bundles;
          this.resFolders = _folders;
          this.prefabPath = _prefabPath;
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
          this.mSceneConfig = new Array(); //场景配置

          let resFolder = ["anm", "font", "music", "prefab", "texture"];
          let loadingConfig = new SceneConfig(SceneType.Loading, "prefab/LoadingUI", ["loading"], resFolder);
          let loginConfig = new SceneConfig(SceneType.Login, "prefab/LoginUI", ["login"], resFolder);
          let hallConfig = new SceneConfig(SceneType.Hall, "prefab/HallUI", ["hall", "cowboy"], resFolder);
          this.mSceneConfig.push(loadingConfig);
          this.mSceneConfig.push(loginConfig);
          this.mSceneConfig.push(hallConfig); //公用资源加载
        }

        ShowLayer(_bundleName, _prefabPath, _type) {
          let key = _bundleName + "/" + _prefabPath;
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

        ChangeScene(_sceneType) {
          if (_sceneType == SceneType.None) {
            console.log("不能跳转目标场景====SceneType.None");
            return;
          }

          if (this.mCurrentScene != SceneType.None) {
            console.log("DeleteScene=== " + this.mCurrentScene);
            let configDeleteScene = this.GetSceneConfig(_sceneType);
            this.DeleteScene(this.mCurrentScene);

            for (let i = 0; i < configDeleteScene.bundleNames.length; i++) {
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).ReleaseBundle(configDeleteScene.bundleNames[i]);
            }
          }

          this.mCurrentScene = _sceneType;
          let configNewScene = this.GetSceneConfig(_sceneType);
          this.PreloadSceneRes(configNewScene, () => {
            console.log("PreloadSceneRes loadFinish this.mCurrentScene=== " + this.mCurrentScene);
            this.ShowLayer(configNewScene.bundleNames[0], configNewScene.prefabPath, LayerType.Layer);
          });
        }

        PreloadSceneRes(_config, _loadFinish) {
          let loadCount = _config.bundleNames.length * _config.resFolders.length;
          console.log("total loadCount === " + loadCount);

          for (let i = 0; i < _config.bundleNames.length; i++) {
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).PreloadBundle(_config.bundleNames[i], _bundle => {
              (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).PreloadAssetsInBundle(_bundle, _config.resFolders, () => {
                loadCount--;
                console.log("rest loadCount === " + loadCount);

                if (loadCount == 0) {
                  if (_loadFinish) {
                    _loadFinish();
                  }
                }
              });
            });
          }
        }

        GetSceneConfig(_sceneType) {
          let index = this.mSceneConfig.findIndex(_item => _item.type === _sceneType);

          if (index < 0) {
            console.log("GetSceneConfig 没有找到该场景 _sceneType ===" + _sceneType);
            return null;
          }

          return this.mSceneConfig[index];
        }

        DeleteScene(_SceneType) {
          this.DeleteLayer(LayerType.Layer, _SceneType);
          this.DeleteLayer(LayerType.Window, _SceneType);
        }

        DeleteLayer(_type, _belong) {
          let targetList = this.GetList(_type);
          let step = 0;

          while (step < targetList.length) {
            if (targetList[step].belong == _belong) {
              console.log("删除targetList[step]===" + targetList[step].key);
              targetList[step].value.destroy();
              targetList.splice(step, 1);
            } else {
              step++;
            }
          }
        }

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
          let index = targetList.findIndex(_item => _item.key === _key);

          if (index >= 0) {
            return targetList[index].value;
          }

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
          let keyPair = new LayerKeyPair(_key, _node, this.mCurrentScene);
          this.GetList(_type).push(keyPair);
        }

      });

      UIMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49a790679c0cec8bf94773233dc825543aa74ab0.js.map