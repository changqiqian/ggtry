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

        GameData.GetInstance().AddListener("Data_ErrorAndBackHall",(_current , _before)=>
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
        let matchId = GameData.GetInstance().Data_RefreshMttInfo.matchConfig.matchId;
        Network.GetInstance().SendMttGetRoomInfo(GameType.Mtt , matchId , HallData.GetInstance().Data_IsBackToGame)
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

    DealEnterMsg(_data : any)
    {

    }

}

