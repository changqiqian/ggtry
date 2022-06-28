System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CardStruct, Calculator, _crd, CardType, Combiantion;

  _export({
    Calculator: void 0,
    CardType: void 0,
    Combiantion: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f792c1vNINLkZh+TVKLGmpg", "Calculator", undefined);

      CardStruct = class CardStruct {
        constructor() {
          this.mType = void 0;
          this.mNum = void 0;
        }

        CardStruct(_num, _type) {
          this.mNum = _num;
          this.mType = _type;
        }

      };

      (function (CardType) {
        CardType[CardType["None"] = 0] = "None";
        CardType[CardType["Diamond"] = 1] = "Diamond";
        CardType[CardType["Club"] = 2] = "Club";
        CardType[CardType["Heart"] = 3] = "Heart";
        CardType[CardType["Speades"] = 4] = "Speades";
      })(CardType || _export("CardType", CardType = {}));

      (function (Combiantion) {
        Combiantion[Combiantion["None"] = 0] = "None";
        Combiantion[Combiantion["High"] = 1] = "High";
        Combiantion[Combiantion["OnePair"] = 2] = "OnePair";
        Combiantion[Combiantion["TwoPair"] = 3] = "TwoPair";
        Combiantion[Combiantion["ThreeOfKind"] = 4] = "ThreeOfKind";
        Combiantion[Combiantion["Straight"] = 5] = "Straight";
        Combiantion[Combiantion["Flush"] = 6] = "Flush";
        Combiantion[Combiantion["FullHouse"] = 7] = "FullHouse";
        Combiantion[Combiantion["FourOfKind"] = 8] = "FourOfKind";
        Combiantion[Combiantion["StraightFlush"] = 9] = "StraightFlush";
        Combiantion[Combiantion["RoyalStraightFlush"] = 10] = "RoyalStraightFlush";
      })(Combiantion || _export("Combiantion", Combiantion = {}));

      _export("Calculator", Calculator = class Calculator {
        static GetInstance() {
          if (Calculator.instance == null) {
            Calculator.instance = new Calculator();
          }

          return Calculator.instance;
        }

        TryToCalculate(_publicCards, _playerCards) {
          let totalCardList = _publicCards.concat(_playerCards); //List<CardStruct> targetList = CreateCardList(tempCards);
          //List<CardStruct> result = CalculateCombination(targetList);
          // return result;


          return null;
        }

        LogCards(_targetCards) {
          for (let i = 0; i < _targetCards.length; i++) {
            console.log("num ==== " + _targetCards[i].mNum);
            console.log("type ==== " + _targetCards[i].mType.toString());
          }
        }

      });

      Calculator.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=72697add390590c1ca9ff147bc3b42736c0c68da.js.map