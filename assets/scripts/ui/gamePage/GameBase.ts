import { _decorator, Component, Node, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { CommonNotify } from '../../CommonNotify';
import { Network } from '../../network/Network';
import { HallData } from '../hall/HallData';
import { GameData } from './GameData';
import { Game_MovingChip } from './subUI/Game_MovingChip';
import { Game_SeatUI } from './subUI/Game_SeatUI';
const { ccclass, property } = _decorator;

@ccclass('GameBase')
export class GameBase extends BaseUI 
{
    InitParam() 
    {

    }
    BindUI() 
    {
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
    }
    RegDataNotify() 
    {
    

        CommonNotify.GetInstance().AddListener("Data_LoginSuccessData",(_current , _before)=>
        {
            if(_current == null)
            {
                return;
            }
            this.GetGameInfoMsg();
        },this);
    }
    LateInit() 
    {
        
    }

    CustmoerDestory() 
    {

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
        if(this.HaveSubView("gamePage" , prefabName ) == false)
        {
            this.AddSubView("gamePage",  prefabName  , (_script) =>
            {
                this.GetGameInfoMsg();
            });
        }
    }

    InitOtherUI()
    {

    }

    GetGameInfoMsg()
    {

    }

}

