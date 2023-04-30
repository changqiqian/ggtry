import { _decorator, Component, Label, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { GameNotifyBorad } from './GameNotifyBorad';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('GameBonusUI')
export class GameBonusUI extends BaseUI 
{
    public static PrefabPath : string = "prefab/GameBonusUI";
    public static Bunddle : string = "gamePage";

    mCount : Label = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.AddSubView("GameNotifyBorad" , GameNotifyBorad.Bunddle , GameNotifyBorad.PrefabPath);
        this.mCount = this.node.getChildByPath("Count").getComponent(Label);
    }
    RegDataNotify()
    {
        GameData.Instance.Data_BonusCount.AddListenner(this , (_data)=>
        {
            this.mCount.string = _data + "";
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

