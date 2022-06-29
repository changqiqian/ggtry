System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Button, Label, BaseUI, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ToggleBtn;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "../../base/BaseUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataNotify(extras) {
    _reporterNs.report("DataNotify", "../../base/DataNotify", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      BaseUI = _unresolved_2.BaseUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac00afx1L5Fxqncsr56kMXd", "ToggleBtn", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ToggleBtn", ToggleBtn = (_dec = ccclass('ToggleBtn'), _dec2 = property(Button), _dec3 = property(Label), _dec4 = property(Button), _dec5 = property(Label), _dec(_class = (_class2 = class ToggleBtn extends (_crd && BaseUI === void 0 ? (_reportPossibleCrUseOfBaseUI({
        error: Error()
      }), BaseUI) : BaseUI) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mSelected", _descriptor, this);

          _initializerDefineProperty(this, "mSelectedLabel", _descriptor2, this);

          _initializerDefineProperty(this, "mDisabled", _descriptor3, this);

          _initializerDefineProperty(this, "mDisableLabel", _descriptor4, this);

          this.mTargetParam = void 0;
          this.mCustmoerData = 0;
          this.mDataNotify = null;
        }

        InitParam() {}

        BindUI() {
          this.mSelected.node.on("touched", this.OnSelected.bind(this), this);
          this.mDisabled.node.on("touched", this.OnDisabled.bind(this), this);
        }

        RegDataNotify() {}

        LateInit() {}

        UnregDataNotify() {}

        CustmoerDestory() {
          if (this.mDataNotify != null) {
            this.mDataNotify.RemoveListenerByTarget(this);
          }
        }

        SetDataNotify(_dataNotify, _targetParam, _custmoerData) {
          this.mDataNotify = _dataNotify;
          this.mCustmoerData = _custmoerData;
          this.mTargetParam = _targetParam;
          this.mDataNotify.AddListener(this.mTargetParam, this.NotifyCallback.bind(this), this);
        }

        OnSelected() {
          var currentData = this.mDataNotify.GetValueByParamName(this.mTargetParam);

          if (currentData == this.mCustmoerData) {
            return;
          }

          this.mDataNotify.SetValueByParamName(this.mTargetParam, this.mDataNotify);
        }

        OnDisabled() {}

        NotifyCallback(_val, _bef) {
          if (_val == this.mCustmoerData) {
            this.mSelected.node.active = true;
            this.mDisabled.node.active = false;
          } else {
            this.mSelected.node.active = false;
            this.mDisabled.node.active = true;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mSelected", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mSelectedLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mDisabled", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mDisableLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6ddf718d5ed6e16ea2b19f1ffbecad87eddbedc.js.map