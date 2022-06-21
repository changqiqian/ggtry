System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Network, _crd, ccclass, property;

  _export("Network", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5dc746GUP9M8qHDU+k5rwVH", "Network", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Network", Network = class Network {
        static GetInstance() {
          if (Network.instance == null) {
            Network.instance = new Network();
          }

          return Network.instance;
        }

      });

      Network.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f621ff650bde7b3240348ede3da45fe71234e91c.js.map