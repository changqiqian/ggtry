import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
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
                break;
            case Game_ActionType.Check:
                break;
            case Game_ActionType.Call:
                break;
            case Game_ActionType.Raise:
                break;
            case Game_ActionType.Allin:
                break;
            case Game_ActionType.Straddle:
                break;
            case Game_ActionType.Delay:
                break;
        }
    }
}

