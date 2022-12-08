import { _decorator, Component, Node, Label, Sprite, Tween, Vec3 } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';

const { ccclass, property } = _decorator;

@ccclass('Game_ActionTag')
export class Game_ActionTag extends BaseUI 
{
    @property(Sprite) 
    mBG: Sprite = null;
    @property(Label) 
    mAction: Label = null;

    mTween : Tween = null;
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

    SetType(_actionType : ActionType)
    {
        this.node.active = true;

        let title = "";
        switch(_actionType)
        {
            case ActionType.ActionType_Ante:
            {
                title = Localization.GetString("00211");
            }
            break;
            case ActionType.ActionType_SB:
            {
                title = Localization.GetString("00252");
            }
            break;
            case ActionType.ActionType_BB:
            {
                title = Localization.GetString("00253");
            }
            break;
            case ActionType.ActionType_Straddle:
            {
                title = Localization.GetString("00210");
            }
            break;
            case ActionType.ActionType_Bet:
            {
                title = Localization.GetString("00254");
            }
            break;
            case ActionType.ActionType_Raise:
            {
                title = Localization.GetString("00068");
            }
            break;
            case ActionType.ActionType_AllIn:
            {
                title = Localization.GetString("00069");
            }
            break;
            case ActionType.ActionType_Check:
            {
                title = Localization.GetString("00066");
            }
            break;
            case ActionType.ActionType_Fold:
            {
                title = Localization.GetString("00065");
            }
            break;
            case ActionType.ActionType_Call:
            {
                title = Localization.GetString("00067");
            }
            break;
        }

        this.mAction.string = title;

        this.ShowAnimation();
    }

    ShowAnimation()
    {
        if(this.mTween != null)
        {
            this.mTween.stop();
        }
        let bigScale = 1.5;
        this.node.scale = Vec3.ONE;
        this.mTween = new Tween(this.node); 
        this.mTween.to(0.15,{scale : new Vec3(bigScale,bigScale,bigScale)});
        this.mTween.to(0.15,{scale : Vec3.ONE});
        this.mTween.start();
    }
}

