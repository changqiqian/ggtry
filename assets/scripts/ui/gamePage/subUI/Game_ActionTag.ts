import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { Game_ActionType } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_ActionTag')
export class Game_ActionTag extends BaseUI 
{
    @property(Sprite) 
    mBG: Sprite = null;
    @property(Label) 
    mAction: Label = null;
    InitParam() 
    {

    }
    BindUI() 
    {
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }

    SetType(_actionType : Game_ActionType)
    {
        this.node.active = true;
        switch(_actionType)
        {
            case Game_ActionType.None:
                this.node.active = false;
                break;
            case Game_ActionType.Fold:
                this.mAction.string = Localization.GetString("00065");
                break;
            case Game_ActionType.Check:
                this.mAction.string = Localization.GetString("00066");
                break;
            case Game_ActionType.Call:
                this.mAction.string = Localization.GetString("00067");
                break;
            case Game_ActionType.Raise:
                this.mAction.string = Localization.GetString("00068");
                break;
            case Game_ActionType.Allin:
                this.mAction.string = Localization.GetString("00069");
                break;
            case Game_ActionType.Delay:
                this.node.active = false;
                break;
            case Game_ActionType.Straddle:
                this.mAction.string = Localization.GetString("00070");
                break;

        }
    }
}

