import { _decorator, Component, Node, Label, instantiate, Vec3, view } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Combiantion } from '../../../base/Calculator';
import { Poker } from '../../common/Poker';
import { Game_ActionTag } from './Game_ActionTag';
import { Game_AddTime } from './Game_AddTime';
import { Game_BetAmount } from './Game_BetAmount';

const { ccclass, property } = _decorator;

@ccclass('Game_SelfUI')
export class Game_SelfUI extends BaseUI 
{
    @property(Node) 
    mCards: Node = null;
    @property(Game_AddTime) 
    mGame_AddTime: Game_AddTime = null;
    @property(Game_BetAmount) 
    mGame_BetAmount: Game_BetAmount = null;
    @property(Game_ActionTag) 
    mGame_ActionTag: Game_ActionTag = null;
    @property(Node) 
    mConbinationBG: Node = null;
    @property(Label) 
    mConbination: Label = null;
    @property(Node) 
    mDealer: Node = null;
    @property(Label) 
    mMoney: Label = null;

    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.node.active = false;
        this.HideAllUI();
        this.mGame_AddTime.SetCallback(()=>
        {

        });

        for(let i = 0 ; i < this.mCards.children.length ; i++)
        {
            let currentCard = this.mCards.children[i].getComponent(Poker);
            currentCard.SetClickAble(this.ClickPoker.bind(this),i);
        }
    }
    RegDataNotify() 
    {

        
       
        
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }
    public InitWithData(_index : number)
    {
        this.mIndex = _index;
    }
    HideAllUI()
    {
        this.mCards.active = false;
        this.mGame_AddTime.node.active = false;
        this.mGame_BetAmount.node.active = false;
        this.mGame_ActionTag.node.active = false;
        this.mDealer.active = false;
        this.mConbinationBG.active = false;
        this.mMoney.node.active = false;
    }

    UpdateDealer(_value : boolean)
    {
        this.mDealer.active = _value;
    }


    UpdateAddTimeBtn(_show : boolean , _delaySpend : string)
    {
        this.mGame_AddTime.node.active = _show;
        if(_show)
        {
            this.mGame_AddTime.SetButtonTitle(_delaySpend);
        }
    }
    SetActionTag()
    {
        this.mGame_ActionTag.SetType();

    }


    Bet(_amount : number)
    {
        this.mGame_BetAmount.node.active = false;
        if(_amount == -1)
        {
            return;
        }

        if(_amount > 0)
        {
            this.mGame_BetAmount.node.active = true;
            this.mGame_BetAmount.Bet(_amount);
        } 
    }

    ShowCards()
    {

    }

    ClickPoker(_index : number)
    {

    }

    Fold()
    {
        for(let i = 0 ; i < this.mCards.children.length ; i++)
        {
            let currentCard = this.mCards.children[i].getComponent(Poker);
            currentCard.SetGary();
        }
    }

    UpdateConbination(_conbination : Combiantion)
    {
        if(_conbination == Combiantion.None)
        {
            this.mConbinationBG.active = false;
            return;
        }
        this.mConbinationBG.active = true;
        this.mConbination.string = Poker.GetConbinationName(_conbination);
    }

}

