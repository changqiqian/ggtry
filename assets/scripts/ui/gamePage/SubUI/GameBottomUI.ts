import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
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

