import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
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

    DealEnterMsg(_data : any)
    {

        if(_data.deskConfig.isInsurance) 
        {
            //gc.ws.getInsDetail(gc.data.gameId)
        }
        //let matchId = 
        //Network.GetInstance().SendRecordDuringMatch();
    }

}

