System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BaseUI, Calculator, CardStruct, CardType, _dec, _class, _crd, ccclass, property, HallUI;

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "../../base/BaseUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCalculator(extras) {
    _reporterNs.report("Calculator", "../../base/Calculator", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BaseUI = _unresolved_2.BaseUI;
    }, function (_unresolved_3) {
      Calculator = _unresolved_3.Calculator;
      CardStruct = _unresolved_3.CardStruct;
      CardType = _unresolved_3.CardType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98659dUvoRAF4EkD58kk2rv", "HallUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HallUI", HallUI = (_dec = ccclass('HallUI'), _dec(_class = class HallUI extends (_crd && BaseUI === void 0 ? (_reportPossibleCrUseOfBaseUI({
        error: Error()
      }), BaseUI) : BaseUI) {
        InitParam() {}

        BindUI() {}

        RegDataNotify() {}

        LateInit() {
          let publicCards = new Array();
          publicCards.push(new (_crd && CardStruct === void 0 ? (_reportPossibleCrUseOfCardStruct({
            error: Error()
          }), CardStruct) : CardStruct)(10, (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).Diamond));
          publicCards.push(new (_crd && CardStruct === void 0 ? (_reportPossibleCrUseOfCardStruct({
            error: Error()
          }), CardStruct) : CardStruct)(10, (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).Heart));
          publicCards.push(new (_crd && CardStruct === void 0 ? (_reportPossibleCrUseOfCardStruct({
            error: Error()
          }), CardStruct) : CardStruct)(3, (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).Diamond));
          let playerCards = new Array();
          playerCards.push(new (_crd && CardStruct === void 0 ? (_reportPossibleCrUseOfCardStruct({
            error: Error()
          }), CardStruct) : CardStruct)(5, (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).Diamond));
          playerCards.push(new (_crd && CardStruct === void 0 ? (_reportPossibleCrUseOfCardStruct({
            error: Error()
          }), CardStruct) : CardStruct)(5, (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
            error: Error()
          }), CardType) : CardType).Speades));
          (_crd && Calculator === void 0 ? (_reportPossibleCrUseOfCalculator({
            error: Error()
          }), Calculator) : Calculator).GetInstance().TryToCalculate(publicCards, playerCards);
        }

        UnregDataNotify() {}

        CustmoerDestory() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a204372e9193ab8007cc312675629639d73ab3c8.js.map