import { _decorator, Component, Node, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { CommonNotify } from '../../CommonNotify';
import { Network } from '../../network/Network';
import { HallData, Hall_SubPage } from './HallData';
const { ccclass, property } = _decorator;

@ccclass('HallUI')
export class HallUI extends BaseUI 
{
    public static GetUsingBundleFolder() : Array<string>
    {
        return ["hall","mttPage","cashPage" ,"clubPage","mePage","cowboy"];
    }

    InitParam() 
    {
        HallData.GetInstance().RegisteMsg();
    }
    BindUI() 
    {
        this.AddSubView("mttPage","prefab/Mtt_Page");
        this.AddSubView("cashPage","prefab/Cash_Page");
        this.AddSubView("clubPage","prefab/Club_Page");
        this.AddSubView("mePage","prefab/Me_Page");
        this.AddSubView("hall","prefab/Hall_Bottom");
    }

    RegDataNotify() 
    {
        CommonNotify.GetInstance().AddListener("Data_LoginSuccessData",(_current , _before)=>
        {
            if(_current == null)
            {
                return;
            }
        },this);
    }
    LateInit() 
    {
        HallData.GetInstance().Data_SubPage = Hall_SubPage.MTT;
    }

    CustmoerDestory() 
    {
        HallData.GetInstance().UnregisteMsg();
        HallData.GetInstance().RemoveAllListenner();
        HallData.GetInstance().ResetAllData();
    }

}
