import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { cb_BetArea } from './cb_BetArea';
const { ccclass, property } = _decorator;

@ccclass('cb_BetRow4')
export class cb_BetRow4 extends BaseUI {
    @property(cb_BetArea) 
    mBetArea0: cb_BetArea = null;
    @property(cb_BetArea) 
    mBetArea1: cb_BetArea = null;
    @property(cb_BetArea) 
    mBetArea2: cb_BetArea = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.ResetUI();
        this.mBetArea0.SetAreaConfig(Localization.GetString("00291"),"10",CowboyAreaType.CowboyAreaType_8); //三条/顺子/同花
        this.mBetArea1.SetAreaConfig(Localization.GetString("00077"),"10",CowboyAreaType.CowboyAreaType_9); //葫芦
        this.mBetArea1.SetAreaConfig(Localization.GetString("00293"),"10",CowboyAreaType.CowboyAreaType_10); //四条/同花顺/皇家同花顺

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
    public ResetUI()
    {
        this.mBetArea0.ResetUI();
        this.mBetArea1.ResetUI();
        this.mBetArea2.ResetUI();
    }
}

