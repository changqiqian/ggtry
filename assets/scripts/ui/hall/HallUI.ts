import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Calculator, CardStruct, CardType } from '../../base/Calculator';
const { ccclass, property } = _decorator;

@ccclass('HallUI')
export class HallUI extends BaseUI 
{
    InitParam() 
    {
        
    }
    BindUI() 
    {

    }
    RegDataNotify() 
    {
    }
    LateInit() 
    {

        let publicCards = new Array<CardStruct>();
        publicCards.push(new CardStruct(3,CardType.Diamond));
        publicCards.push(new CardStruct(14,CardType.Heart));
        publicCards.push(new CardStruct(2,CardType.Diamond));

        let playerCards = new Array<CardStruct>();
        playerCards.push(new CardStruct(5,CardType.Diamond));
        playerCards.push(new CardStruct(4,CardType.Speades));
        Calculator.GetInstance().TryToCalculate(publicCards,playerCards);
        
    }
    UnregDataNotify() 
    {
    }
    CustmoerDestory() 
    {
    }

}

