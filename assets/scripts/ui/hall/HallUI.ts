import { _decorator, Component, Node, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Calculator, CardStruct, CardType } from '../../base/Calculator';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { Network } from '../../network/Network';
import { Poker } from '../common/Poker';
import { HallData } from './HallData';
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
        this.AddSubView("mttPage","prefab/Mtt_Page",false);
        this.AddSubView("cashPage","prefab/Cash_Page",false);
        this.AddSubView("clubPage","prefab/Club_Page",false);
        this.AddSubView("mePage","prefab/Me_Page",false);
        this.AddSubView("hall","prefab/Hall_Bottom",true);
    }

    RegDataNotify() 
    {

    }
    LateInit() 
    {
        
    }
    UnregDataNotify() 
    {
    }
    CustmoerDestory() 
    {
        HallData.GetInstance().UnregisteMsg();
        HallData.GetInstance().Reset();
    }

}
