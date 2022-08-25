import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
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
        this.InitTableinfo();
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

        GameData.GetInstance().AddListener("Data_EnterGame",(_current , _before)=>
        {
            this.DealEnterMsg(_current);
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
        this.AddSubView("gamePage","prefab/Game_BottomUI",true);
    }

    InitTableinfo()
    {
       
    }

    InitGameStartInfo()
    {
        this.AddSubView("gamePage","prefab/Game_GameStartInfo",false);
    }

    InitPot()
    {
        this.AddSubView("gamePage","prefab/Game_Pot",false);
    }

    InitPublicCards()
    {
        this.AddSubView("gamePage","prefab/Game_PublicCards",false);
    }

    InitSelfAction()
    {
        this.AddSubView("gamePage","prefab/Game_SelfAction",false);
    }

    InitSelfPreAction()
    {
        this.AddSubView("gamePage","prefab/Game_SelfPreAction",false);
    }

    InitSelfUI()
    {
        this.AddSubView("gamePage","prefab/Game_SelfUI",false);
    }

    InitTopUI()
    {
        this.AddSubView("gamePage","prefab/Game_TopUI",true);
    }

    InitControlBtns()
    {
        this.AddSubView("gamePage","prefab/Game_ControlBtns",false);
    }

    InitSeatUI(_seatCount : number)
    {
        let prefabName = "prefab/Game_SeatUI" + _seatCount;
        if(this.HaveSubView("gamePage" , prefabName ) == false)
        {
            this.AddSubView("gamePage",  prefabName , true , (_script) =>
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

    DealEnterMsg(_data : any)
    {

    }

}

