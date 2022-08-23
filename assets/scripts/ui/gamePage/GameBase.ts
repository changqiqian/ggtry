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
        this.InitSeatUI();
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {
        this.GetGameInfoMsg();
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
        this.AddSubView("gamePage","prefab/Game_GameStartInfo",true);
    }

    InitPot()
    {
        this.AddSubView("gamePage","prefab/Game_Pot",true);
    }

    InitPublicCards()
    {
        this.AddSubView("gamePage","prefab/Game_PublicCards",true);
    }

    InitSelfAction()
    {
        this.AddSubView("gamePage","prefab/Game_SelfAction",true);
    }

    InitSelfPreAction()
    {
        this.AddSubView("gamePage","prefab/Game_SelfPreAction",true);
    }

    InitSelfUI()
    {
        this.AddSubView("gamePage","prefab/Game_SelfUI",true);
    }

    InitTopUI()
    {
        this.AddSubView("gamePage","prefab/Game_TopUI",true);
    }

    InitSeatUI()
    {

    }

    GetGameInfoMsg()
    {

    }

}

