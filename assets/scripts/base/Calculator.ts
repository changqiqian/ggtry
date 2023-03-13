import { _decorator, Component, Node } from 'cc';
import { Singleton } from './Singleton';




export class CardStruct
{
    constructor(_num : number , _type : CardType)
    {
        this.mNum = _num;
        this.mType = _type;
    }
    public mType : CardType;
    public mNum : number;
}

export enum CardType
{
    None,
    Diamond,
    Club,
    Heart,
    Speades
}

export enum Combiantion
{
    None,
    High,
    OnePair,
    TwoPair,
    ThreeOfKind,
    Straight,
    Flush,
    FullHouse,
    FourOfKind,
    StraightFlush,
    RoyalStraightFlush,
}

export class Calculator extends Singleton<Calculator>()
{


    constructor()
    {
        super();
        this.mCurrentCombineList = new Array<Combiantion>();
        this.mCurrentCombineList.push(Combiantion.None);
        this.mCurrentCombineList.push(Combiantion.High);
        this.mCurrentCombineList.push(Combiantion.OnePair);
        this.mCurrentCombineList.push(Combiantion.TwoPair);
        this.mCurrentCombineList.push(Combiantion.ThreeOfKind);
        this.mCurrentCombineList.push(Combiantion.Straight);
        this.mCurrentCombineList.push(Combiantion.Flush);
        this.mCurrentCombineList.push(Combiantion.FullHouse);
        this.mCurrentCombineList.push(Combiantion.FourOfKind);
        this.mCurrentCombineList.push(Combiantion.StraightFlush);
        this.mCurrentCombineList.push(Combiantion.RoyalStraightFlush);

        this.mCurrentFindFunctions = new Array<Function>();
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

    mCurrentCombination : Combiantion = Combiantion.None;
    mCurrentCombineList : Array<Combiantion>;
    mCurrentFindFunctions : Array<Function>;

    public static ConvertCardInfo(_cardInfo : CardInfo) : CardStruct
    {
        let struct = new CardStruct(_cardInfo.number , _cardInfo.type);
        return struct;
    }

    public static ConvertCardInfos(_cardInfos : Array<CardInfo>) : Array<CardStruct>
    {
        let structs = new Array<CardStruct>();
        for(let i = 0 ; i < _cardInfos.length ; i++)
        {
            let current = _cardInfos[i];
            let struct = Calculator.ConvertCardInfo(current);
            structs.push(struct);
        }
        return structs;
    }

    public TryToCalculate( _publicCards:Array<CardStruct> , _playerCards:Array<CardStruct> ) : Array<CardStruct>
    {
        let tempPublicCards = this.DeepCopyCards(_publicCards);
        let tempPlayerCards = this.DeepCopyCards(_playerCards);
        let totalCardList = tempPublicCards.concat(tempPlayerCards);
        totalCardList = this.SortCardList(totalCardList);
        let result = this.CalculateCombination(totalCardList);

        //this.LogCards(result);
        return result;
    }

    public CalculateCombination(_targetCards : Array<CardStruct>) :Array<CardStruct>
    {
        if (_targetCards.length < 5)
        {
            this.mCurrentCombination = Combiantion.None;
            return null;
        }

        for (let i = this.mCurrentCombineList.length - 1 ; i >= 1; i--)
        {
            let result = this.mCurrentFindFunctions[i](_targetCards);
            if (result != null)
            {
                this.mCurrentCombination = this.mCurrentCombineList[i];
                return result;
            }
        }
        
        this.mCurrentCombination = Combiantion.None;
        return null;
    }

    public FindHighCard(_targetCards : Array<CardStruct>) : Array<CardStruct>
    {
        let count = 5;
        if (_targetCards.length < 5)
        {
            return null;
        }
        let result = this.FindBiggestCards(_targetCards,count);
        return result;
    }

    public FindOnePair(_targetCards : Array<CardStruct>): Array<CardStruct>
    {
        let pairResult = this.FindSameNumCards(_targetCards , 2);
        let pairCount = 1;
        if (pairResult.length != pairCount)
        {
            return null;
        }

        let restCards = this.RemoveCards(_targetCards, pairResult[0]);
        let highCards = this.FindBiggestCards(restCards,3);
        let result = pairResult[0].concat(highCards);
        return result;
    }

    public FindTwoPair(_targetCards : Array<CardStruct>): Array<CardStruct>
    {
        let pairResult = this.FindSameNumCards(_targetCards , 2);
        let pairCount = 2;
        if (pairResult.length < pairCount)
        {
            return null;
        }
        while (pairResult.length > pairCount)
        {
            pairResult.shift();
        }

        let result = new Array<CardStruct>();
        let restCards = _targetCards;
        for (let i = 0; i < pairResult.length; i++)
        {
            result = result.concat(pairResult[i]);
            restCards = this.RemoveCards(restCards, pairResult[i]);
        }
        
        let highCards = this.FindBiggestCards(restCards,1);
        result = result.concat(highCards);
        return result;
    }

    public FindThreeOfKind(_targetCards : Array<CardStruct>): Array<CardStruct>
    {
        let tribleResult = this.FindSameNumCards(_targetCards,3);
        if (tribleResult.length == 0)
        {
            return null;
        }
        
        while (tribleResult.length > 1)
        {
            tribleResult.shift();
        }
        
        let restCards = this.RemoveCards(_targetCards, tribleResult[0]);
        let highCards = this.FindBiggestCards(restCards,2);
        let result  = tribleResult[0].concat(highCards);
        return result;
    }

    public FindStraight(_targetCards : Array<CardStruct>): Array<CardStruct>
    {
        let smallAceStraight = this.FindA2345(_targetCards);
        let normalStraights = this.FindNormalStraight(_targetCards);
        
        if (normalStraights.length == 0 && smallAceStraight == null)
        {
            return null;
        }
        
        if (normalStraights.length == 0)
        {
            return smallAceStraight;
        }
        else
        {
            return normalStraights[normalStraights.length - 1];
        }
    }

    public FindFlush(_targetCards : Array<CardStruct>): Array<CardStruct>
    {
        for (let i = CardType.Diamond; i <= CardType.Speades; i++)
        {
            let currentFlush = this.FindSameTypeCards(_targetCards , i);
            if (currentFlush.length < 5)
            {
                continue;
            }

            while (currentFlush.length > 5)
            {
                currentFlush.shift();
            }

            return currentFlush;
        }

        return null;
    }

    public FindFullHouse(_targetCards : Array<CardStruct>): Array<CardStruct>
    {
        let tribleResult = this.FindSameNumCards(_targetCards,3);
        if (tribleResult.length == 0)
        {
            return null;
        }
        let resTrible = null;
        while (tribleResult.length > 1)
        {
            resTrible = tribleResult[0];
            tribleResult.shift();
        }

        if(resTrible != null)
        {
            resTrible.shift();
            let result = tribleResult[0].concat(resTrible);
            return result;
        }
        else
        {
            let restCards = this.RemoveCards(_targetCards, tribleResult[0]);
            let pairResult = this.FindSameNumCards(restCards,2);
            if (pairResult.length == 0)
            {
                return null;
            }
            while (pairResult.length > 1)
            {
                pairResult.shift();
            }
            let result = tribleResult[0].concat(pairResult[0]);
            return result;
        }
    }
        
    public FindFourOfKind(_targetCards : Array<CardStruct>): Array<CardStruct>
    {
        let fourResult = this.FindSameNumCards(_targetCards,4);
        if (fourResult.length == 0)
        {
            return null;
        }
        let restCards = this.RemoveCards(_targetCards, fourResult[0]);
        let highCards = this.FindBiggestCards(restCards,1);
        let result = fourResult[0].concat(highCards);
        return result;
    }

    public FindStraightFlush(_targetCards : Array<CardStruct>): Array<CardStruct>
    {
        let flush = null;
        for (let i = CardType.Diamond; i <= CardType.Speades; i++)
        {
            let currentFlush = this.FindSameTypeCards(_targetCards , i);
            if (currentFlush.length < 5)
            {
                continue;
            }

            flush = currentFlush;
            break;
        }

        if (flush == null)
        {
            return null;
        }

        let straightFlush = this.FindStraight(flush);
        return straightFlush;
    }

    public FindRoyalStraightFlush(_targetCards : Array<CardStruct>): Array<CardStruct>
    {
        let result = this.FindStraightFlush(_targetCards);
        if (result == null)
        {
            return null;
        }

        if (result[result.length - 1].mNum != 14)
        {
            return null;
        }
        return result;
    }


    public LogCards(_targetCards : Array<CardStruct>)
    {

        if(_targetCards == null)
        {
            console.log("当前牌组====null");
            return;
        }

        console.log("当前牌组====");

        for(let i = 0 ; i < _targetCards.length ; i++)
        {
            let typeStr = "";
            switch(_targetCards[i].mType)
            {
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
            console.log("==== "+ _targetCards[i].mNum + typeStr);
        }
    }

    private SortCardList(_targetList : Array<CardStruct>)  :  Array<CardStruct>
    {
        _targetList.sort(function (A, B) {
            return A.mNum - B.mNum;
        });
        return _targetList;
    }

    private DeepCopyCards(_targetList : Array<CardStruct>)  :  Array<CardStruct>
    {
        let tempList = JSON.parse(JSON.stringify(_targetList));
        return tempList;
    }

    public FindBiggestCards(_targetList : Array<CardStruct>, _findCount : number)  : Array<CardStruct>
    {
        if (_targetList.length < _findCount)
        {
            return null;
        }
        let copyList = this.DeepCopyCards(_targetList);
        while (copyList.length > _findCount)
        {
            copyList.shift();
        }
        return copyList;
    }

    private FindSameNumCards(_targetList : Array<CardStruct>, _sameCount : number) : Array<Array<CardStruct>>
    {
        let copyList = this.DeepCopyCards(_targetList);
        let result = new Array<Array<CardStruct>>();
        for (let i = 2; i <= 14; i++)
        {
            let tempResult = this.FindTargetNumList(copyList , i);
            if (tempResult.length == _sameCount)
            {
                result.push(tempResult);
            }
        }
        return result;
    }

    private FindTargetNumList(_targetList : Array<CardStruct> , _targetNum : number) : Array<CardStruct>
    {
        let temp = new Array<CardStruct>();
        for(let i = 0 ; i < _targetList.length ; i++)
        {
            if(_targetList[i].mNum == _targetNum)
            {
                temp.push(_targetList[i]);
            }
        }
        return temp;
    }

    private FindTargetNumCard(_targetList : Array<CardStruct> , _targetNum : number) : CardStruct
    {
        for (let i = 0; i < _targetList.length; i++)
        {
            if (_targetList[i].mNum == _targetNum)
            {
                return new CardStruct(_targetList[i].mNum , _targetList[i].mType);
            }
        }
        return null;
    }


    private IsSameCards(card0 : CardStruct , card1 : CardStruct) : boolean
    {
        if(card0.mNum == card1.mNum && card0.mType == card1.mType)
        {
            return true;
        }

        return false;

    }

    private RemoveCards(_targetList:Array<CardStruct> , _removeList:Array<CardStruct>) : Array<CardStruct>
    {
        let copyList = this.DeepCopyCards(_targetList);
        let step = 0 ;
        while(step < copyList.length)
        {
            let currentCard = copyList[step];
            let found = false;
            for(let i = 0 ; i < _removeList.length ; i++)
            {
                if(this.IsSameCards(currentCard , _removeList[i]))
                {
                    copyList.splice(step,1);
                    found = true;
                    break;
                }
            }
            if(found == false)
            {
                step++;
            }
        }
        return copyList;
    }

    private FindA2345(_targetList : Array<CardStruct>)  :  Array<CardStruct>
    {
        let result = new Array<CardStruct>();
        let ace = this.FindTargetNumCard(_targetList, 14);
        let card2 = this.FindTargetNumCard(_targetList, 2);
        let card3 = this.FindTargetNumCard(_targetList, 3);
        let card4 = this.FindTargetNumCard(_targetList, 4);
        let card5 = this.FindTargetNumCard(_targetList, 5);
        result.push(ace);
        result.push(card2);
        result.push(card3);
        result.push(card4);
        result.push(card5);
        
        for (let i = 0; i < result.length; i++)
        {
            if (result[i] == null)
            {
                return null;
            }
        }

        return result;
    }

    private FindNormalStraight(_targetList : Array<CardStruct>) : Array<Array<CardStruct>>
    {
        let copyList = this.DeepCopyCards(_targetList);
        let result = new Array<Array<CardStruct>>();
        let step = 0;
        let condition = 5;
        while (step  < copyList.length)
        {
            let tempResult = new Array<CardStruct>();
            tempResult.push(copyList[step]);
            for (let i = step; i < copyList.length; i++)
            {
                let currentStepCard = copyList[i];
                let lastStepCard = tempResult[tempResult.length - 1];
                if (currentStepCard.mNum == lastStepCard.mNum)
                {
                    continue;   
                }
                else 
                {
                    if (currentStepCard.mNum - lastStepCard.mNum == 1)
                    {
                        tempResult.push(currentStepCard);
                        if (tempResult.length == condition)
                        {
                            break;
                        }
                    }
                    else
                    {
                        break;
                    }
                }
            }
            if (tempResult.length == condition)
            {
                result.push(tempResult);
            }
            step++;
        }

        return result;
    }

    private FindSameTypeCards(_targetList : Array<CardStruct> , _type : CardType) : Array<CardStruct>
    {
        let copyList = this.DeepCopyCards(_targetList);
        let result = new Array<CardStruct>();
        for(let i = 0 ; i < copyList.length ; i++)
        {
            let current = copyList[i];
            if(current.mType == _type)
            {
                result.push(current);
            }
        }

        return result;
    }
}

