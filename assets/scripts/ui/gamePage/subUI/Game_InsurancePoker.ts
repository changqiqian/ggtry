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

    }
    CustmoerDestory()
    {

    }

    public SetCard(_cardInfo : CardInfo)
    {
        this.mPoker.ResetAndHide();
        this.mPoker.SetFrontByCardInfo(_cardInfo);
        this.mPoker.ShowFront();
    } 
}

