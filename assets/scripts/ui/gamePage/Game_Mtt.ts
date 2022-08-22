import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import { HallData } from '../hall/HallData';
import { GameBase } from './GameBase';
const { ccclass, property } = _decorator;

@ccclass('Game_Mtt')
export class Game_Mtt extends GameBase 
{

    GetGameInfoMsg()
    {
        let mttMatchId = HallData.GetInstance().Data_CurrentMttMatchID;
        Network.GetInstance().SendRefreshMttInfo(mttMatchId);
    }
}

