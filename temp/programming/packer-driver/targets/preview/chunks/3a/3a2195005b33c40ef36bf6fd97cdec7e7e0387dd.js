System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, BaseUI;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d67f3W+FjJDnLNbq3YCz4G9", "BaseUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BaseUI", BaseUI = (_dec = ccclass('BaseUI'), _dec(_class = class BaseUI extends Component {
        static Create() {
          var bundleName = "";
          var prefabName = "";
        }

        onLoad() {
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a2195005b33c40ef36bf6fd97cdec7e7e0387dd.js.map