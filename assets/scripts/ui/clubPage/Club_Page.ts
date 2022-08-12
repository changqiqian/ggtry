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
        this.AddSubView("hall","prefab/Hall_PlayerInfoBar",true);
        this.AddSubView("clubPage","prefab/Club_Main",true);
    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_SubPage",(_current , _before)=>
        {
            this.Show(_current == Hall_SubPage.Club);
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

