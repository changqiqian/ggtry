System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Sprite, BaseUI, CardType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Poker;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "../../base/BaseUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardStruct(extras) {
    _reporterNs.report("CardStruct", "../../base/Calculator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardType(extras) {
    _reporterNs.report("CardType", "../../base/Calculator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BaseUI = _unresolved_2.BaseUI;
    }, function (_unresolved_3) {
      CardType = _unresolved_3.CardType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5786al+HXRETppS5EHyUgn2", "Poker", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Poker", Poker = (_dec = ccclass('Poker'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class Poker extends (_crd && BaseUI === void 0 ? (_reportPossibleCrUseOfBaseUI({
        error: Error()
      }), BaseUI) : BaseUI) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Front", _descriptor, this);

          _initializerDefineProperty(this, "Back", _descriptor2, this);
        }

        InitParam() {}

        BindUI() {}

        RegDataNotify() {}

        LateInit() {}

        UnregDataNotify() {}

        CustmoerDestory() {}

        static GetPokerTexturePath(_card) {
          let path = "texture/poker/";

          let num = _card.mNum.toString();

          let type = "";

          switch (_card.mType) {
            case (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
              error: Error()
            }), CardType) : CardType).Speades:
              type = "s";
              break;

            case (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
              error: Error()
            }), CardType) : CardType).Club:
              type = "c";
              break;

            case (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
              error: Error()
            }), CardType) : CardType).Heart:
              type = "h";
              break;

            case (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
              error: Error()
            }), CardType) : CardType).Diamond:
              type = "d";
              break;
          }

          let finalPath = path + num + type;
          return finalPath;
        }

        static GetPokerTexutureBundleName() {
          return "common";
        }

        SetFront(_card) {
          let bundleName = Poker.GetPokerTexutureBundleName();
          let path = Poker.GetPokerTexturePath(_card);
          this.LoadSprite(bundleName, path, _spirteFrame => {
            this.Front.getComponent(Sprite).spriteFrame = _spirteFrame;
          });
        }

        ShowFront() {
          this.Back.active = false;
          this.Front.active = true;
        }

        ShowBack() {
          this.Back.active = true;
          this.Front.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Front", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Back", [_dec3], {
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
//# sourceMappingURL=3997d1968dc16ce0fd30b5cda1ab97a406c28f75.js.map