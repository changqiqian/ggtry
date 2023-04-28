import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameTop } from './SubUI/GameTop';
import { GameBottomUI } from './SubUI/GameBottomUI';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends BaseUI 
{
    public static PrefabPath : string = "prefab/GameUI";
    public static Bunddle : string = "gamePage";
    InitParam()
    {

    }
    BindUI()
    {
        this.AddSubView("GameTop" , GameTop.Bunddle , GameTop.PrefabPath);
        this.AddSubView("GameBottomUI" , GameBottomUI.Bunddle , GameBottomUI.PrefabPath);
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

