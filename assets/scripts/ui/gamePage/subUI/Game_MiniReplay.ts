import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { GameReplayData } from '../GameReplayData';
import { Game_MiniSeatUI } from './Game_MiniSeatUI';
const { ccclass, property } = _decorator;

@ccclass('Game_MiniReplay')
export class Game_MiniReplay extends BaseUI {
    @property(MovingShow) 
    mMovingShow: MovingShow = null;
    @property(Label) 
    mTitle: Label = null;
    @property(BaseButton) 
    mBackBtn: BaseButton = null;

    @property(Node) 
    mMiniTable: Node = null;
    @property(Node) 
    mPublicCards: Node = null;

    
    
    
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

    onDisable()
    {
        UIMgr.Instance.DeleteUIByTarget(this);
    }


    InitParam()
    {

    }
    BindUI()
    {
        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);
        this.mBackBtn.SetClickCallback(()=>
        {

        });
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory() 
    {
        GameReplayData.Instance.Clear();
    }

    public InitWithData(_data : DetailReplayRecord)
    {
        GameReplayData.Instance.InitData(_data);

        let testData = GameReplayData.Instance.Data_ReplayData.mData;
        let seatNum = testData.texasConfig.seatNum

        let prefabName = "prefab/Game_MiniSeatUI" + seatNum;
        this.AddSubView("gamePage",  prefabName  , (_script) =>
        {
            let tempScript = _script as Game_MiniSeatUI;
            tempScript.InitSeat();
        },this.mMiniTable);
    }
}

