import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import { HallData, Hall_SubPage } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Mtt_Page')
export class Mtt_Page extends BaseUI 
{
    InitParam() 
    {

    }
    BindUI() 
    {
        this.AddSubView("hall","prefab/Hall_PlayerInfoBar");
        this.AddSubView("mttPage","prefab/Mtt_Main");
    }
    RegDataNotify() 
    {

        HallData.Instance.Data_SubPage.AddListenner(this , (_data)=>
        {
            this.Show(_data == Hall_SubPage.MTT);
        })
    }
    LateInit() 
    {
    }

    CustmoerDestory() 
    {

    }

}

