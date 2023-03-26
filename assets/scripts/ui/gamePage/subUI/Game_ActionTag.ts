import { _decorator, Component, Node, Label, Sprite, Tween, Vec3 } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { GameConfig } from '../../../GameConfig';

const { ccclass, property } = _decorator;

@ccclass('Game_ActionTag')
export class Game_ActionTag extends BaseUI 
{
    @property(Sprite) 
    mBG: Sprite = null;
    @property(Label) 
    mAction: Label = null;

    onDisable()
    {
        this.StopAllTween();
    }

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

        this.mAction.string = GameConfig.GetActionTypeName(_actionType);
        this.ShowAnimation();
    }

    ShowAnimation()
    {
        this.StopAllTween();
        let bigScale = 1.5;
        this.node.scale = Vec3.ONE;
        let tempTween = new Tween(this.node); 
        tempTween.to(0.15,{scale : new Vec3(bigScale,bigScale,bigScale)});
        tempTween.to(0.15,{scale : Vec3.ONE});
        tempTween.start();
    }
}

