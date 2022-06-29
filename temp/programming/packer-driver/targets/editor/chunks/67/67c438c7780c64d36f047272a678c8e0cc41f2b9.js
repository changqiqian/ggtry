System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Sprite, Label, BaseUI, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CircleTimer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "../../base/BaseUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      BaseUI = _unresolved_2.BaseUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06b96BLlJJN45UNDMNFuB53", "CircleTimer", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CircleTimer", CircleTimer = (_dec = ccclass('CircleTimer'), _dec2 = property(Sprite), _dec3 = property(Label), _dec(_class = (_class2 = class CircleTimer extends (_crd && BaseUI === void 0 ? (_reportPossibleCrUseOfBaseUI({
        error: Error()
      }), BaseUI) : BaseUI) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Progress", _descriptor, this);

          _initializerDefineProperty(this, "Count", _descriptor2, this);

          this.mTotalTime = 0;
          this.mRestTime = 0;
          this.mEndCallback = null;
          this.mStartTimer = false;
        }

        InitParam() {}

        BindUI() {}

        RegDataNotify() {}

        LateInit() {}

        UnregDataNotify() {}

        CustmoerDestory() {}

        StartTime(_totalTime, _endCallback) {
          this.mTotalTime = _totalTime;
          this.mRestTime = _totalTime;
          this.mEndCallback = _endCallback;
          this.mStartTimer = true;
        }

        update(deltaTime) {
          console.log("deltaTime==" + deltaTime);

          if (this.mStartTimer == false) {
            return;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Progress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Count", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=67c438c7780c64d36f047272a678c8e0cc41f2b9.js.map