import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import { HallData } from '../hall/HallData';
import { GameData } from './GameData';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends BaseUI 
{
    public static GetUsingBundleFolder() : Array<string>
    {
        return ["gamePage"];
    }

    InitParam() 
    {
        GameData.GetInstance().RegisteMsg();
    }
    BindUI() 
    {
        if(HallData.GetInstance().Data_CurrentMttMatchID)
        {
            Network.GetInstance().SendRefreshMttInfo(HallData.GetInstance().Data_CurrentMttMatchID);
            this.AddSubView("gamePage","prefab/Game_Mtt",true);
        }
        else
        {
            this.AddSubView("gamePage","prefab/Game_Cash",true);
        }
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        //GameData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {
        GameData.GetInstance().RemoveAllListenner();
        GameData.GetInstance().ResetAllData();
        GameData.GetInstance().UnregisteMsg();
    }
}

