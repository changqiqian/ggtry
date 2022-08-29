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
        HallData.GetInstance().AddListener("Data_SubPage",(_current , _before)=>
        {
            this.Show(_current == Hall_SubPage.MTT);
        },this);
    }
    LateInit() 
    {
        Network.GetInstance().SendGetLunBoTu();
    }
    UnregDataNotify() 
    {
        HallData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }

}

