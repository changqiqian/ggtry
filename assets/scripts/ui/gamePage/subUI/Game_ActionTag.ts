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

    CustmoerDestory() 
    {

    }

    SetType(_actionType : Game_ActionType)
    {
        this.node.active = true;
        let picName = "ActionTag";
        switch(_actionType)
        {
            case Game_ActionType.None:
                this.node.active = false;
                picName = "ActionTag0";
                break;
            case Game_ActionType.Fold:
                picName = "ActionTag0";
                this.mAction.string = Localization.GetString("00065");
                break;
            case Game_ActionType.Check:
                picName = "ActionTag0";
                this.mAction.string = Localization.GetString("00066");
                break;
            case Game_ActionType.Call:
                picName = "ActionTag0";
                this.mAction.string = Localization.GetString("00067");
                break;
            case Game_ActionType.Raise:
                this.mAction.string = Localization.GetString("00068");
                picName = "ActionTag4";
                break;
            case Game_ActionType.Allin:
                this.mAction.string = Localization.GetString("00069");
                picName = "ActionTag4";
                break;
            case Game_ActionType.Delay:
                picName = "ActionTag0";
                this.node.active = false;
                break;
            case Game_ActionType.Straddle:
                picName = "ActionTag0";
                this.mAction.string = Localization.GetString("00070");
                break;

        }

        this.LoadSprite("gamePage","texture/" + picName , (_spriteFrame)=>
        {
            this.mBG.spriteFrame = _spriteFrame;
        });
    }
}

