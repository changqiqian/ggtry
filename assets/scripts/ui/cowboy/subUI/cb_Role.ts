import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { CardStruct, CardType } from '../../../base/Calculator';
import { Poker } from '../../common/Poker';
const { ccclass, property } = _decorator;

@ccclass('cb_Role')
export class cb_Role extends BaseUI {

    @property(Node) 
    mCards: Node = null;

    InitParam() {

    }
    BindUI() {
        this.ShowCard(new CardStruct(14,CardType.Diamond) , 0);
    }
    RegDataNotify() {

    }
    LateInit() {

    }

    CustmoerDestory() {

    }

    public ShowAllCards(_cards : Array<CardStruct> )
    {
        for(let i = 0 ; i < this.mCards.children.length ; i++)
        {
            let currentCard = _cards[i];
            this.ShowCard(currentCard , i);
        }
    }

    public ShowCard(_card : CardStruct , _index : number)
    {
        let currentPoker = this.mCards.children[_index].getComponent(Poker);
        currentPoker.SetFront(_card);
        currentPoker.FlipToFront();
    }

}

