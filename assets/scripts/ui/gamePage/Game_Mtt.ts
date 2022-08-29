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
        super.RegDataNotify();
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

        GameData.GetInstance().AddListener("Data_MttGameResult",(_current , _before)=>
        {
            UIMgr.GetInstance().ShowToast("比赛结束" , 10);
        },this);
    }

    LateInit() 
    {
        Network.GetInstance().SendRefreshMttInfo(HallData.GetInstance().Data_CurrentMttMatchID);
    }

    InitOtherUI()
    {
        this.AddSubView("gamePage","prefab/Game_MttInfo");
        this.AddSubView("gamePage","prefab/Game_MttBottomTips");
        this.AddSubView("gamePage","prefab/Game_MttRestTimeTips");
    }

    GetGameInfoMsg()
    {
        let matchID = GameData.GetInstance().Data_MatchConfig.matchId;
        Network.GetInstance().SendMttGetRoomInfo(GameType.Mtt , matchID , HallData.GetInstance().Data_IsBackToGame);
    }


}

