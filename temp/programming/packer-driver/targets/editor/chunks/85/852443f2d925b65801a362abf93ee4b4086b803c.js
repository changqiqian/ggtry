System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BaseUI, ToggleBtn, CowboyData, _dec, _class, _crd, ccclass, property, cb_ChipCtr;

  function _reportPossibleCrUseOfBaseUI(extras) {
    _reporterNs.report("BaseUI", "../../../base/BaseUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataNotify(extras) {
    _reporterNs.report("DataNotify", "../../../base/DataNotify", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToggleBtn(extras) {
    _reporterNs.report("ToggleBtn", "../../common/ToggleBtn", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCowboyData(extras) {
    _reporterNs.report("CowboyData", "../CowboyData", _context.meta, extras);
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
      ToggleBtn = _unresolved_3.ToggleBtn;
    }, function (_unresolved_4) {
      CowboyData = _unresolved_4.CowboyData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c4897w/qtIfZwX5J5X4Z+Q", "cb_ChipCtr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("cb_ChipCtr", cb_ChipCtr = (_dec = ccclass('cb_ChipCtr'), _dec(_class = class cb_ChipCtr extends (_crd && BaseUI === void 0 ? (_reportPossibleCrUseOfBaseUI({
        error: Error()
      }), BaseUI) : BaseUI) {
        InitParam() {}

        BindUI() {}

        RegDataNotify() {}

        LateInit() {}

        UnregDataNotify() {}

        CustmoerDestory() {}

        InitWithData() {
          this.SetChipData((_crd && CowboyData === void 0 ? (_reportPossibleCrUseOfCowboyData({
            error: Error()
          }), CowboyData) : CowboyData).GetInstance(), "Data_SelectedChip", 1, 0);
          this.SetChipData((_crd && CowboyData === void 0 ? (_reportPossibleCrUseOfCowboyData({
            error: Error()
          }), CowboyData) : CowboyData).GetInstance(), "Data_SelectedChip", 10, 1);
          this.SetChipData((_crd && CowboyData === void 0 ? (_reportPossibleCrUseOfCowboyData({
            error: Error()
          }), CowboyData) : CowboyData).GetInstance(), "Data_SelectedChip", 100, 2);
          this.SetChipData((_crd && CowboyData === void 0 ? (_reportPossibleCrUseOfCowboyData({
            error: Error()
          }), CowboyData) : CowboyData).GetInstance(), "Data_SelectedChip", 1000, 3);
          this.SetChipData((_crd && CowboyData === void 0 ? (_reportPossibleCrUseOfCowboyData({
            error: Error()
          }), CowboyData) : CowboyData).GetInstance(), "Data_SelectedChip", 5000, 4);
        }

        SetChipData(_dataNotify, _param, _custmoerData, _index) {
          let currentChild = this.node.children[_index].getComponent(_crd && ToggleBtn === void 0 ? (_reportPossibleCrUseOfToggleBtn({
            error: Error()
          }), ToggleBtn) : ToggleBtn);

          currentChild.SetDataNotify(_dataNotify, _param, _custmoerData);
          currentChild.SetTitle(this.ConvertNumber(_custmoerData));
        }

        ConvertNumber(_amount) {
          if (_amount < 1000) {
            return _amount.toString();
          }

          let tempAmount = _amount / 1000;
          let tempStr = tempAmount.toString() + "k";
          return tempStr;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=852443f2d925b65801a362abf93ee4b4086b803c.js.map