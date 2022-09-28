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


        HallData.Instance.Data_SubPage.AddListenner(this , (_data)=>
        {
            this.Show(_data == Hall_SubPage.Me);
        })
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

}

