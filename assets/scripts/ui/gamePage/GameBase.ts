import { _decorator, Component, Node, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { CommonNotify } from '../../CommonNotify';
import { Network } from '../../network/Network';
import { AnimationShowType, MovingShow } from '../../UiTool/MovingShow';
import { HallData } from '../hall/HallData';
import { LoginData } from '../login/LoginData';
import { GameData } from './GameData';
import { Game_MovingChip } from './subUI/Game_MovingChip';
import { Game_SeatUI } from './subUI/Game_SeatUI';
const { ccclass, property } = _decorator;

@ccclass('GameBase')
export class GameBase extends BaseUI 
{
    private mIndex : number = null;
    mMovingShow: MovingShow = null;
    // onEnable()
    // {
    //     this.mMovingShow.ShowAnimation();
    // }
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mMovingShow = this.node.getComponent(MovingShow);
        this.mMovingShow.SetAnimationType(AnimationShowType.FromRight);
        this.mMovingShow.SetAnimationCallback(()=>
        {
            this.node.active = false;
        })
    }
    RegDataNotify() 
    {
        LoginData.Instance.Data_LoginSuccessData.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                return;
            }
            this.GetGameInfoMsg();
        });


    }
    LateInit() 
    {
        
    }

    CustmoerDestory() 
    {

    }

    public ShowMoveInAnimation()
    {
        this.mMovingShow.ShowAnimation(0.5);
    }

    InitBottom()
    {
        this.AddSubView("gamePage","prefab/Game_BottomUI");
    }

    InitGameStartInfo()
    {
        this.AddSubView("gamePage","prefab/Game_GameStartInfo");
    }

    InitPot()
    {
        this.AddSubView("gamePage","prefab/Game_Pot");
    }

    InitPublicCards()
    {
        this.AddSubView("gamePage","prefab/Game_PublicCards");
    }

    InitSelfAction()
    {
        this.AddSubView("gamePage","prefab/Game_SelfAction");
    }

    InitSelfPreAction()
    {
        this.AddSubView("gamePage","prefab/Game_SelfPreAction");
    }

    InitSelfUI()
    {
        this.AddSubView("gamePage","prefab/Game_SelfUI");
    }

    InitTopUI()
    {
        this.AddSubView("gamePage","prefab/Game_TopUI");
    }

    InitControlBtns()
    {
        this.AddSubView("gamePage","prefab/Game_ControlBtns");
    }

    InitSeatUI(_seatCount : number)
    {
        let prefabName = "prefab/Game_SeatUI" + _seatCount;
        this.AddSubView("gamePage",  prefabName  , (_script) =>
        {

        });
    }

    InitOtherUI()
    {

    }

    public InitWithData(_index : number,_seatNum : number)
    {
        this.mIndex = _index;
        this.InitBottom();
        this.InitGameStartInfo();
        this.InitPot();
        this.InitPublicCards();
        this.InitSelfAction();
        this.InitSelfPreAction();
        this.InitSelfUI();
        this.InitTopUI();
        this.InitControlBtns();
        this.InitOtherUI();
        this.InitSeatUI(_seatNum);
    }

    public GetIndex() : number
    {
        return this.mIndex;
    }

    GetGameInfoMsg()
    {

    }

}

