System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CardStruct, Calculator, _crd, CardType, Combiantion;

  _export({
    CardStruct: void 0,
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

      _export("CardStruct", CardStruct = class CardStruct {
        constructor(_num, _type) {
          this.mType = void 0;
          this.mNum = void 0;
          this.mNum = _num;
          this.mType = _type;
        }

      });

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

        constructor() {
          this.mCurrentCombination = Combiantion.None;
          this.mCurrentCombineList = void 0;
          this.mCurrentFindFunctions = void 0;
          this.mCurrentCombineList = new Array();
          this.mCurrentCombineList.push(Combiantion.None);
          this.mCurrentCombineList.push(Combiantion.High);
          this.mCurrentCombineList.push(Combiantion.OnePair);
          this.mCurrentCombineList.push(Combiantion.TwoPair);
          this.mCurrentCombineList.push(Combiantion.ThreeOfKind);
          this.mCurrentCombineList.push(Combiantion.Straight);
          this.mCurrentCombineList.push(Combiantion.Flush);
          this.mCurrentCombineList.push(Combiantion.FullHouse);
          this.mCurrentCombineList.push(Combiantion.StraightFlush);
          this.mCurrentCombineList.push(Combiantion.RoyalStraightFlush);
          this.mCurrentFindFunctions = new Array();
          this.mCurrentFindFunctions.push(null);
          this.mCurrentFindFunctions.push(this.FindHighCard.bind(this));
          this.mCurrentFindFunctions.push(this.FindOnePair.bind(this));
          this.mCurrentFindFunctions.push(this.FindTwoPair.bind(this));
          this.mCurrentFindFunctions.push(this.FindThreeOfKind.bind(this));
          this.mCurrentFindFunctions.push(this.FindStraight.bind(this));
          this.mCurrentFindFunctions.push(this.FindFlush.bind(this));
          this.mCurrentFindFunctions.push(this.FindFullHouse.bind(this));
          this.mCurrentFindFunctions.push(this.FindFourOfKind.bind(this));
          this.mCurrentFindFunctions.push(this.FindStraightFlush.bind(this));
          this.mCurrentFindFunctions.push(this.FindRoyalStraightFlush.bind(this));
        }

        TryToCalculate(_publicCards, _playerCards) {
          let tempPublicCards = this.DeepCopyCards(_publicCards);
          let tempPlayerCards = this.DeepCopyCards(_playerCards);
          let totalCardList = tempPublicCards.concat(tempPlayerCards);
          totalCardList = this.SortCardList(totalCardList);
          let result = this.CalculateCombination(totalCardList);
          console.log("this.mCurrentCombination===" + this.mCurrentCombination.toString());
          this.LogCards(result);
          return result;
        }

        CalculateCombination(_targetCards) {
          if (_targetCards.length < 5) {
            this.mCurrentCombination = Combiantion.None;
            return null;
          }

          for (let i = this.mCurrentCombineList.length; i >= 1; i--) {
            let result = this.mCurrentFindFunctions[i](_targetCards);

            if (result != null) {
              this.mCurrentCombination = this.mCurrentCombineList[i];
              return result;
            }
          }

          this.mCurrentCombination = Combiantion.None;
          return null;
        }

        FindHighCard(_targetCards) {
          let count = 5;

          if (_targetCards.length < 5) {
            return null;
          }

          let result = this.FindBiggestCards(_targetCards, count);
          return result;
        }

        FindOnePair(_targetCards) {
          let pairResult = this.FindSameNumCards(_targetCards, 2);
          let pairCount = 1;

          if (pairResult.length != pairCount) {
            return null;
          }

          let restCards = this.RemoveCards(_targetCards, pairResult[0]);
          let highCards = this.FindBiggestCards(restCards, 3);
          let result = pairResult[0].concat(highCards);
          return result;
        }

        FindTwoPair(_targetCards) {
          let pairResult = this.FindSameNumCards(_targetCards, 2);
          let pairCount = 2;

          if (pairResult.length < pairCount) {
            return null;
          }

          while (pairResult.length > pairCount) {
            pairResult.shift();
          }

          let result = new Array();
          let restCards = _targetCards;

          for (let i = 0; i < pairResult.length; i++) {
            result = result.concat(pairResult[i]);
            restCards = this.RemoveCards(restCards, pairResult[i]);
          }

          let highCards = this.FindBiggestCards(restCards, 1);
          result = result.concat(highCards);
          return result;
        }

        FindThreeOfKind(_targetCards) {
          let tribleResult = this.FindSameNumCards(_targetCards, 3);

          if (tribleResult.length == 0) {
            return null;
          }

          while (tribleResult.length > 1) {
            tribleResult.shift();
          }

          let restCards = this.RemoveCards(_targetCards, tribleResult[0]);
          let highCards = this.FindBiggestCards(restCards, 2);
          let result = tribleResult[0].concat(highCards);
          return result;
        }

        FindStraight(_targetCards) {
          let smallAceStraight = this.FindA2345(_targetCards);
          let normalStraights = this.FindNormalStraight(_targetCards);

          if (normalStraights.length == 0 && smallAceStraight == null) {
            return null;
          }

          if (normalStraights.length == 0) {
            return smallAceStraight;
          } else {
            return normalStraights[normalStraights.length - 1];
          }
        }

        FindFlush(_targetCards) {
          for (let i = CardType.Diamond; i <= CardType.Speades; i++) {
            let currentFlush = this.FindSameTypeCards(_targetCards, i);

            if (currentFlush.length < 5) {
              continue;
            }

            while (currentFlush.length > 5) {
              currentFlush.shift();
            }

            return currentFlush;
          }

          return null;
        }

        FindFullHouse(_targetCards) {
          let tribleResult = this.FindSameNumCards(_targetCards, 3);

          if (tribleResult.length == 0) {
            return null;
          }

          while (tribleResult.length > 1) {
            tribleResult.shift();
          }

          let restCards = this.RemoveCards(_targetCards, tribleResult[0]);
          let pairResult = this.FindSameNumCards(restCards, 2);

          if (pairResult.length == 0) {
            return null;
          }

          while (pairResult.length > 1) {
            pairResult.shift();
          }

          let result = tribleResult[0].concat(pairResult[0]);
          return result;
        }

        FindFourOfKind(_targetCards) {
          let fourResult = this.FindSameNumCards(_targetCards, 4);

          if (fourResult.length == 0) {
            return null;
          }

          let restCards = this.RemoveCards(_targetCards, fourResult[0]);
          let highCards = this.FindBiggestCards(restCards, 1);
          let result = fourResult[0].concat(highCards);
          return result;
        }

        FindStraightFlush(_targetCards) {
          let flush = null;

          for (let i = CardType.Diamond; i <= CardType.Speades; i++) {
            let currentFlush = this.FindSameTypeCards(_targetCards, i);

            if (currentFlush.length < 5) {
              continue;
            }

            flush = currentFlush;
            break;
          }

          if (flush == null) {
            return null;
          }

          let straightFlush = this.FindStraight(flush);
          return straightFlush;
        }

        FindRoyalStraightFlush(_targetCards) {
          let result = this.FindStraightFlush(_targetCards);

          if (result == null) {
            return null;
          }

          if (result[result.length - 1].mNum != 14) {
            return null;
          }

          return result;
        }

        LogCards(_targetCards) {
          if (_targetCards == null) {
            console.log("当前牌组====null");
            return;
          }

          console.log("当前牌组====");

          for (let i = 0; i < _targetCards.length; i++) {
            let typeStr = "";

            switch (_targetCards[i].mType) {
              case CardType.Club:
                typeStr = "♣️";
                break;

              case CardType.Diamond:
                typeStr = "♦️";
                break;

              case CardType.Speades:
                typeStr = "♠️";
                break;

              case CardType.Heart:
                typeStr = "♥️";
                break;
            }

            console.log("==== " + _targetCards[i].mNum + typeStr);
          }
        }

        SortCardList(_targetList) {
          _targetList.sort(function (A, B) {
            return A.mNum - B.mNum;
          });

          return _targetList;
        }

        DeepCopyCards(_targetList) {
          let tempList = JSON.parse(JSON.stringify(_targetList));
          return tempList;
        }

        FindBiggestCards(_targetList, _findCount) {
          if (_targetList.length < _findCount) {
            return null;
          }

          let copyList = this.DeepCopyCards(_targetList);

          while (copyList.length > _findCount) {
            copyList.shift();
          }

          return copyList;
        }

        FindSameNumCards(_targetList, _sameCount) {
          let copyList = this.DeepCopyCards(_targetList);
          let result = new Array();

          for (let i = 2; i <= 14; i++) {
            let tempResult = this.FindTargetNumList(copyList, i);

            if (tempResult.length == _sameCount) {
              result.push(tempResult);
            }
          }

          return result;
        }

        FindTargetNumList(_targetList, _targetNum) {
          let temp = new Array();

          for (let i = 0; i < _targetList.length; i++) {
            if (_targetList[i].mNum == _targetNum) {
              temp.push(_targetList[i]);
            }
          }

          return temp;
        }

        FindTargetNumCard(_targetList, _targetNum) {
          for (let i = 0; i < _targetList.length; i++) {
            if (_targetList[i].mNum == _targetNum) {
              return new CardStruct(_targetList[i].mNum, _targetList[i].mType);
            }
          }

          return null;
        }

        IsSameCards(card0, card1) {
          if (card0.mNum == card1.mNum && card0.mType == card1.mType) {
            return true;
          }

          return false;
        }

        RemoveCards(_targetList, _removeList) {
          let copyList = this.DeepCopyCards(_targetList);
          let step = 0;

          while (step < copyList.length) {
            let currentCard = copyList[step];
            let found = false;

            for (let i = 0; i < _removeList.length; i++) {
              if (this.IsSameCards(currentCard, _removeList[i])) {
                copyList.splice(step, 1);
                found = true;
                break;
              }
            }

            if (found == false) {
              step++;
            }
          }

          return copyList;
        }

        FindA2345(_targetList) {
          let result = new Array();
          let ace = this.FindTargetNumCard(_targetList, 14);
          let card2 = this.FindTargetNumCard(_targetList, 6);
          let card3 = this.FindTargetNumCard(_targetList, 7);
          let card4 = this.FindTargetNumCard(_targetList, 8);
          let card5 = this.FindTargetNumCard(_targetList, 9);
          result.push(ace);
          result.push(card2);
          result.push(card3);
          result.push(card4);
          result.push(card5);

          for (let i = 0; i < result.length; i++) {
            if (result[i] == null) {
              return null;
            }
          }

          return result;
        }

        FindNormalStraight(_targetList) {
          let copyList = this.DeepCopyCards(_targetList);
          let result = new Array();
          let step = 0;
          let condition = 5;

          while (step < copyList.length) {
            let tempResult = new Array();
            tempResult.push(copyList[step]);

            for (let i = step; i < copyList.length; i++) {
              let currentStepCard = copyList[i];
              let lastStepCard = tempResult[tempResult.length - 1];

              if (currentStepCard.mNum == lastStepCard.mNum) {
                continue;
              } else {
                if (currentStepCard.mNum - lastStepCard.mNum == 1) {
                  tempResult.push(currentStepCard);

                  if (tempResult.length == 5) {
                    break;
                  }
                } else {
                  break;
                }
              }
            }

            if (tempResult.length == 5) {
              result.push(tempResult);
            }

            step++;
          }

          return result;
        }

        FindSameTypeCards(_targetList, _type) {
          let copyList = this.DeepCopyCards(_targetList);
          let result = new Array();

          for (let i = 0; i < copyList.length; i++) {
            let current = copyList[i];

            if (current.mType == _type) {
              result.push(current);
            }
          }

          return result;
        }

      });

      Calculator.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c89afa14e1a475ca1e149feb150a241a63542115.js.map