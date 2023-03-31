import { _decorator, Component, Node, Label, Sprite, Tween, Vec3 } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { GameConfig } from '../../../GameConfig';

const { ccclass, property } = _decorator;

@ccclass('Game_ActionTag')
export class Game_ActionTag extends BaseUI 
{
    @property(Node) 
    mBGNode: Node = null;
    @property(Node) 
    mLeft: Node = null;
    @property(Node) 
    mRight: Node = null;
    @property(Node) 
    mActionName: Node = null;

    mIsLeft : boolean;

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

    SetType(_actionType : ActionType  )
    {
        this.ShowLeftOrRight();
        this.node.active = true;

        this.ShowAction(_actionType);
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

    ShowLeftOrRight( )
    {
        this.mLeft.active = this.mIsLeft;
        this.mRight.active = ! this.mIsLeft;
    }

    ShowAction(_actionType : ActionType)
    {
        for(let i = 0 ; i < this.mLeft.children.length ; i++)
        {
            this.mLeft.children[i].active =false;
        }

        this.mLeft.getChildByName("Action" + _actionType).active = true;

        for(let i = 0 ; i < this.mRight.children.length ; i++)
        {
            this.mRight.children[i].active =false;
        }

        this.mRight.getChildByName("Action" + _actionType).active = true;

        for(let i = 0 ; i < this.mActionName.children.length ; i++)
        {
            this.mActionName.children[i].active =false;
        }

        this.mActionName.getChildByName("ActionName" + _actionType).active = true;
    }

    SetLeft(_left :boolean)
    {
        this.mIsLeft = _left;
    }
}

