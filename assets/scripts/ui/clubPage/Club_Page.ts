import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { HallData, Hall_SubPage } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_Page')
export class Club_Page extends BaseUI 
{
    InitParam() 
    {

    }
    BindUI() 
    {
        this.AddSubView("hall","prefab/Hall_PlayerInfoBar");
        this.AddSubView("clubPage","prefab/Club_Main");
    }
    RegDataNotify() 
    {
        HallData.GetInstance().Data_SubPage.AddListenner(this,(_data)=>
        {
            this.Show(_data == Hall_SubPage.Club);
        })
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

}

