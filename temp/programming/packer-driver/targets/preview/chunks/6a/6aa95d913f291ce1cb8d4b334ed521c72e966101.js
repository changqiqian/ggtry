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
          console.log("base onLoad");
          this.InitParam();
          this.BindUI();
          this.RegDataNotify();
        }

        start() {
          console.log("base start");
          this.LateInit();
        }

        onDestroy() {
          this.UnregDataNotify();
          this.CustmoerDestory();
        } //“把UI节点与代码变量”绑定起来


        //自定义析构
        CustmoerDestory() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6aa95d913f291ce1cb8d4b334ed521c72e966101.js.map