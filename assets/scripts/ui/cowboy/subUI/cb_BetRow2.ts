import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { cb_BetArea } from './cb_BetArea';
const { ccclass, property } = _decorator;

@ccclass('cb_BetRow2')
export class cb_BetRow2 extends BaseUI {
    @property(cb_BetArea) 
    mBetArea0: cb_BetArea = null;
    @property(cb_BetArea) 
    mBetArea1: cb_BetArea = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.ResetUI();
        this.mBetArea0.SetAreaConfig(Localization.GetString("00286"),"10",CowboyAreaType.CowboyAreaType_4); //对子
        this.mBetArea1.SetAreaConfig(Localization.GetString("00287"),"10",CowboyAreaType.CowboyAreaType_5); //对A
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
    }

}

