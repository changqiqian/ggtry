import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import { HallData, Hall_SubPage } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Cash_Page')
export class Cash_Page extends BaseUI {
    InitParam() 
    {

    }
    BindUI() 
    {
        this.AddSubView("hall","prefab/Hall_PlayerInfoBar",true);
        this.AddSubView("cashPage","prefab/Cash_Main",true);
    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_SubPage",(_current , _before)=>
        {
            this.Show(_current == Hall_SubPage.Cash);
        },this);
    }
    LateInit() 
    {
    }
    UnregDataNotify() 
    {
        HallData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }
}

