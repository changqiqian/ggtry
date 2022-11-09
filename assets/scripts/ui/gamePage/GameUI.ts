import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { Network } from '../../network/Network';
import { HallData } from '../hall/HallData';
import { GameData } from './GameData';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends BaseUI 
{
    public static GetUsingBundleFolder() : Array<string>
    {
        return [];
        //return ["gamePage" , "emoji"];
    }

    InitParam() 
    {
        this.AutoAdaptMultipleTableUI();
        
    }
    BindUI() 
    {
        // if(LocalPlayerData.Instance.Data_CurrentUsingMttMatchID)
        // {
        //     this.AddSubView("gamePage","prefab/Game_Mtt");
        // }
        // else
        // {
        //     this.AddSubView("gamePage","prefab/Game_Cash");
        // }
    }
    
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }
}

