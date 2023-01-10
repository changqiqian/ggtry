import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { cb_BetArea } from './cb_BetArea';
const { ccclass, property } = _decorator;

@ccclass('cb_BetRow3')
export class cb_BetRow3 extends BaseUI {

    @property(Label) 
    mTitle: Label = null;
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
        this.mTitle.string = Localization.GetString("00290");
        this.mBetArea0.SetAreaConfig(Localization.GetString("00288"),"10",CowboyAreaType.CowboyAreaType_6); //高牌/对子
        this.mBetArea1.SetAreaConfig(Localization.GetString("00073"),"10",CowboyAreaType.CowboyAreaType_7); //两队
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

