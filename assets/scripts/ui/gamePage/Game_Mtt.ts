import { _decorator, Component, Node } from 'cc';

import { TipsWindow } from '../common/TipsWindow';
import { HallData } from '../hall/HallData';
import { GameBase } from './GameBase';
const { ccclass, property } = _decorator;

@ccclass('Game_Mtt')
export class Game_Mtt extends GameBase 
{

    RegDataNotify() 
    {
        super.RegDataNotify();
       

    }

    LateInit() 
    {
    }

    InitOtherUI()
    {
        this.AddSubView("gamePage","prefab/Game_MttInfo");
        this.AddSubView("gamePage","prefab/Game_MttBottomTips");
        this.AddSubView("gamePage","prefab/Game_MttRestTimeTips");
    }

    GetGameInfoMsg()
    {
        
    }


}

