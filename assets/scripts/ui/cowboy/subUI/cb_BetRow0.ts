import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { cb_BetArea } from './cb_BetArea';
const { ccclass, property } = _decorator;

@ccclass('cb_BetRow0')
export class cb_BetRow0 extends BaseUI 
{
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
        this.mBetArea0.SetAreaConfig(Localization.GetString("00281") , CowboyAreaType.CowboyAreaType_0); //牛仔赢
        this.mBetArea1.SetAreaConfig(Localization.GetString("00282") , CowboyAreaType.CowboyAreaType_1); //平
        this.mBetArea2.SetAreaConfig(Localization.GetString("00283") , CowboyAreaType.CowboyAreaType_2); //美女赢
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
}

