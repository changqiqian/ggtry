System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, BaseUI, PlayerInfo, CowboyData, cb_ChipCtr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, cb_BottomArea;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "../../../base/BaseUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "../../common/PlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCowboyData(extras) {
    _reporterNs.report("CowboyData", "../CowboyData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcb_ChipCtr(extras) {
    _reporterNs.report("cb_ChipCtr", "./cb_ChipCtr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      BaseUI = _unresolved_2.BaseUI;
    }, function (_unresolved_3) {
      PlayerInfo = _unresolved_3.PlayerInfo;
    }, function (_unresolved_4) {
      CowboyData = _unresolved_4.CowboyData;
    }, function (_unresolved_5) {
      cb_ChipCtr = _unresolved_5.cb_ChipCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62d2bKpBiRG0Z3v1ou2ND9Q", "cb_BottomArea", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("cb_BottomArea", cb_BottomArea = (_dec = ccclass('cb_BottomArea'), _dec2 = property(_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
        error: Error()
      }), PlayerInfo) : PlayerInfo), _dec3 = property(Label), _dec4 = property(_crd && cb_ChipCtr === void 0 ? (_reportPossibleCrUseOfcb_ChipCtr({
        error: Error()
      }), cb_ChipCtr) : cb_ChipCtr), _dec(_class = (_class2 = class cb_BottomArea extends (_crd && BaseUI === void 0 ? (_reportPossibleCrUseOfBaseUI({
        error: Error()
      }), BaseUI) : BaseUI) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mPlayerInfo", _descriptor, this);

          _initializerDefineProperty(this, "mMoney", _descriptor2, this);

          _initializerDefineProperty(this, "mChipCtr", _descriptor3, this);
        }

        InitParam() {}

        BindUI() {
          (_crd && CowboyData === void 0 ? (_reportPossibleCrUseOfCowboyData({
            error: Error()
          }), CowboyData) : CowboyData).GetInstance().Data_SelectedChip = 1500;
          this.mChipCtr.InitWithData();
        }

        RegDataNotify() {
          (_crd && CowboyData === void 0 ? (_reportPossibleCrUseOfCowboyData({
            error: Error()
          }), CowboyData) : CowboyData).GetInstance().AddListener("Data_SelectedChip", (_current, _before) => {
            console.log("Current Chip = " + _current);
          }, this);
        }

        LateInit() {}

        UnregDataNotify() {}

        CustmoerDestory() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mPlayerInfo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mMoney", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mChipCtr", [_dec4], {
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
//# sourceMappingURL=a03d000fa797695c72c7a9d2152c0718d7cabc3f.js.map