System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, instantiate, ResMgr, BaseUI, _crd;

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./ResMgr", _context.meta, extras);
  }

  _export("BaseUI", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d67f3W+FjJDnLNbq3YCz4G9", "BaseUI", undefined);

      _export("BaseUI", BaseUI = class BaseUI extends Component {
        static CreatePrefab(_loadFinish) {
          var bundleName = "common";
          var prefabPath = "prefab/test";
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).GetAssetInBundle(bundleName, prefabPath, cc.Prefab, _prefab => {
            if (_loadFinish) {
              var obj = instantiate(_prefab);
              obj.addComponent(BaseUI);

              _loadFinish(obj);
            }
          });
        }

        onLoad() {
          console.log("1111");
          this.InitParam();
          this.BindUI();
          this.RegDataNotify();
        }

        start() {
          this.LateInit();
        }

        onDestroy() {
          this.UnregDataNotify();
          this.CustmoerDestory();
        } //“把UI节点与代码变量”绑定起来


        InitParam() {} //绑定ui事件


        BindUI() {} //数据驱动注册


        RegDataNotify() {} //延迟一贞初始化的内容


        LateInit() {} //数据驱动注销


        UnregDataNotify() {} //自定义析构


        CustmoerDestory() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f90a923e807d723d1337075ac9553464ddb4008.js.map