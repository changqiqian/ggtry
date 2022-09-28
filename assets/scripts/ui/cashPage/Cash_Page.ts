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
        this.AddSubView("hall","prefab/Hall_PlayerInfoBar");
        this.AddSubView("cashPage","prefab/Cash_Main");
    }
    RegDataNotify() 
    {
        HallData.Instance.Data_SubPage.AddListenner(this,(_data)=>
        {
            this.Show(_data == Hall_SubPage.Cash);
        })
    }
    LateInit() 
    {
    }

    CustmoerDestory() 
    {

    }
}

