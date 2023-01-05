import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { cb_BetArea } from './cb_BetArea';
const { ccclass, property } = _decorator;

@ccclass('cb_BetRow1')
export class cb_BetRow1 extends BaseUI {
    @property(cb_BetArea) 
    mBetArea: cb_BetArea = null;

    @property(Label) 
    mTitle: Label = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.ResetUI();
        this.mTitle.string = Localization.GetString("00284")
        //同花/连牌/同花连张
        this.mBetArea.SetAreaConfig(Localization.GetString("00285"),"5",CowboyAreaType.CowboyAreaType_3); 
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
        this.mBetArea.ResetUI();

    }
}

