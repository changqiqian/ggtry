import { _decorator, Component, Node, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { GameReplayData } from '../GameReplayData';
import { Game_Pot } from './Game_Pot';
import { Game_PublicCards } from './Game_PublicCards';
import { Game_ReplayCtr } from './Game_ReplayCtr';
import { Game_SeatUI } from './Game_SeatUI';
import { Game_TableInfo } from './Game_TableInfo';
const { ccclass, property } = _decorator;

@ccclass('Game_CashReplay')
export class Game_CashReplay extends BaseUI {
    public static readonly PrefabName :string = "Game_CashReplay";

    @property(Sprite) 
    mBG: Sprite = null;
    @property(MovingShow) 
    mMovingShow: MovingShow = null;

    onDisable()
    {
        UIMgr.Instance.DeleteUIByTarget(this);
    }

    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }
    InitParam() 
    {
        this.OffsetTop();
    }
    BindUI() 
    {
        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);
        this.mMovingShow.SetShowAnimationCallback(()=>
        {
            
        })

        this.AddSubView("gamePage","prefab/Game_ReplayCtr" , (_script)=>
        {
            let tempScript = _script as Game_ReplayCtr;
            tempScript.SetExitCallback(()=>
            {
                this.Show(false);
            })
        },this.mMovingShow.node);
        this.AddSubView("gamePage","prefab/Game_Pot", (_script)=>
        {
            let tempScript = _script as Game_Pot;
            tempScript.InitWithReplayData();
        },this.mBG.node);
        this.AddSubView("gamePage","prefab/Game_PublicCards", (_script)=>
        {
            let tempScript = _script as Game_PublicCards;
            tempScript.InitWithReplayData();
        },this.mBG.node);

        this.AddSubView("gamePage","prefab/Game_TableInfo", (_script)=>
        {
            let tempScript = _script as Game_TableInfo;
            tempScript.InitWithReplayData();

        },this.mBG.node);
        
        let replayData = GameReplayData.Instance.Data_ReplayData.mData;
        let seatNum = replayData.texasConfig.seatNum

        let prefabName = "prefab/Game_SeatUI" + seatNum;
        this.AddSubView("gamePage",  prefabName  , (_script) =>
        {
            let tempScript = _script as Game_SeatUI;
            tempScript.InitWithReplayData();
        },this.mBG.node);
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

