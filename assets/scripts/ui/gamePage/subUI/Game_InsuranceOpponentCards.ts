import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Poker } from '../../common/Poker';
import { Game_InsurancePoker } from './Game_InsurancePoker';
const { ccclass, property } = _decorator;

@ccclass('Game_InsuranceOpponentCards')
export class Game_InsuranceOpponentCards extends BaseUI 
{
    InitParam()
    {

    }
    BindUI()
    {
        this.HideAll();
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

    HideAll()
    {
        for(let i = 0 ; i < this.node.children.length ; i++)
        {
            this.node.children[i].active = false;
        }
    }

    public SetCards(_cards : Array<CardInfo>)
    {
        this.HideAll();
        for(let i = 0 ; i < _cards.length ; i++)
        {
            let cardInfo = _cards[i];
            let currentNode = this.node.children[i];
            let script = currentNode.getComponent(Poker);
            script.SetFrontByCardInfo(cardInfo);
            script.ShowFront();
        }
    }
}

