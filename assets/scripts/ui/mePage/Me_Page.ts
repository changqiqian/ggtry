import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { HallData, Hall_SubPage } from '../hall/HallData';

const { ccclass, property } = _decorator;

@ccclass('Me_Page')
export class Me_Page extends BaseUI 
{

    InitParam() 
    {

    }
    BindUI() 
    {
        this.AddSubView("mePage","prefab/Me_Top");
        this.AddSubView("mePage","prefab/Me_Main");
    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_SubPage",(_current , _before)=>
        {
            this.Show(_current == Hall_SubPage.Me);
        },this);
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

}

