import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { GameType, Network } from '../../network/Network';
import { TipsWindow } from '../common/TipsWindow';
import { HallData } from '../hall/HallData';
import { GameBase } from './GameBase';
import { GameData } from './GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_Mtt')
export class Game_Mtt extends GameBase 
{

    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_MttGetRoomInfo",(_current , _before)=>
        {

        },this);

        GameData.GetInstance().AddListener("Data_MttErrorAndBackHall",(_current , _before)=>
        {
            this.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.GetString("00053");
                tempScript.SetTips(tips);
                tempScript.ShowConfirmBtnOnly();
                tempScript.SetCallback(()=>
                {
                    UIMgr.GetInstance().ChangeScene(SceneType.Hall);
                })
            })
        },this);

    }

    GetGameInfoMsg()
    {
        //let mttMatchId = GameData.GetInstance().Data_CurrentMttMatchId;
        //Network.GetInstance().SendMttGetRoomInfo(GameType.Mtt , mttMatchId , HallData.GetInstance().Data_IsBackToGame)
        //Network.GetInstance().SendRefreshMttInfo(mttMatchId);
    }

    InitTableinfo()
    {
        this.AddSubView("gamePage","prefab/Game_MttInfo",true);
    }

    InitOtherUI()
    {
        this.AddSubView("gamePage","prefab/Game_MttBottomTips",true);
        this.AddSubView("gamePage","prefab/Game_MttRestTimeTips",true);
    }

    InitSeatUI()
    {
        //let seatCount = HallData.GetInstance().Data_MttMatchDetails.matchConfig.seatCount;
        let seatCount = 5;
        let prefabName = "Game_SeatUI" + seatCount;
        this.AddSubView("gamePage","prefab/" + prefabName , true);
    }
}

