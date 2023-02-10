import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { Poker } from '../../common/Poker';
const { ccclass, property } = _decorator;

@ccclass('Game_InsurancePoker')
export class Game_InsurancePoker extends BaseUI 
{

    @property(Poker) 
    mPoker: Poker = null;
    @property(Node) 
    mIcon: Node = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mIcon.active = false;
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

    public SetCard(_cardInfo : CardInfo)
    {
        this.mPoker.SetFrontByCardInfo(_cardInfo);
    } 
}

