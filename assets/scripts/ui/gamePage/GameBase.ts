import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import { HallData } from '../hall/HallData';
import { GameData } from './GameData';
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
        GameData.GetInstance().AddListener("Data_RefreshMttInfo",(_current , _before)=>
        {
            this.InitSeatUI(_current.matchConfig.seatCount);
        },this);
    }
    LateInit() 
    {
        
    }
    UnregDataNotify() 
    {
        GameData.GetInstance().RemoveListenerByTarget(this);
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

