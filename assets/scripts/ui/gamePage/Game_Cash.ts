import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameBase } from './GameBase';
const { ccclass, property } = _decorator;

@ccclass('Game_Cash')
export class Game_Cash extends GameBase 
{
    GetGameInfoMsg()
    {

    }

    InitTableinfo()
    {
        this.AddSubView("gamePage","prefab/Game_TableInfo",true);
    }



    InitSeatUI()
    {
        //let seatCount = HallData.GetInstance().Data_MttMatchDetails.matchConfig.seatCount;
        let seatCount = 5;
        let prefabName = "Game_SeatUI" + seatCount;
        this.AddSubView("gamePage","prefab/" + prefabName , true);
    }
}

