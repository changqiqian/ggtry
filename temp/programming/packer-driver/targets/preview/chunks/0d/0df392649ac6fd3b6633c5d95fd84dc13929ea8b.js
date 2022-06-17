System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Component, BaseUI, _crd;

  _export("BaseUI", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d67f3W+FjJDnLNbq3YCz4G9", "BaseUI", undefined);

      _export("BaseUI", BaseUI = class BaseUI extends Component {
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
//# sourceMappingURL=0df392649ac6fd3b6633c5d95fd84dc13929ea8b.js.map