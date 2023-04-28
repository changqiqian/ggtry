import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { GameControlBtn } from './GameControlBtn';
import { GameMoneyInfoUI } from './GameMoneyInfoUI';
import { GameNotifyBorad } from './GameNotifyBorad';
const { ccclass, property } = _decorator;

@ccclass('GameBottomUI')
export class GameBottomUI extends BaseUI 
{
    public static PrefabPath : string = "prefab/GameBottomUI";
    public static Bunddle : string = "gamePage";

    InitParam()
    {
        
    }
    BindUI()
    {
        this.AddSubView("GameControlBtn" , GameControlBtn.Bunddle , GameControlBtn.PrefabPath);
        this.AddSubView("GameMoneyInfoUI" , GameMoneyInfoUI.Bunddle , GameMoneyInfoUI.PrefabPath);
        this.AddSubView("GameNotifyBorad" , GameNotifyBorad.Bunddle , GameNotifyBorad.PrefabPath);
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

