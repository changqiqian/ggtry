import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Network } from '../../../network/Network';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_ControlBtns')
export class Game_ControlBtns extends BaseUI 
{
    @property(BaseButton) 
    mDealCardsBtn: BaseButton = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mDealCardsBtn.SetClickCallback(()=>
        {
            Network.GetInstance().SendCheckPublicCards();
            this.mDealCardsBtn.node.active = false;
        });
        this.mDealCardsBtn.node.active = false;
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }
}

