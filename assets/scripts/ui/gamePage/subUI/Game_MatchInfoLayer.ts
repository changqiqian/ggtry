import { _decorator, Component, Node, ScrollView, Label, Tween, Widget, Vec3, UITransform, easing } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_MatchInfoLayer')
export class Game_MatchInfoLayer extends BaseUI 
{
    @property(BaseButton) 
    mBGBtn: BaseButton = null;
    @property(Node) 
    mAnmationNode: Node = null;
    @property(Label) 
    mMatchName: Label = null;
    @property(Label) 
    mClubName: Label = null;
    @property(Label) 
    mCountDown: Label = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;

    mTween : Tween = null;
    mMoving : boolean = false;
    mAnimationNodeOriginX : number = null;
    InitParam()
    {
        this.mAnimationNodeOriginX = this.mAnmationNode.position.x;
        this.mAnmationNode.getComponent(Widget).updateAlignment();
        this.mAnmationNode.getComponent(Widget).enabled = false;
        this.mBGBtn.SetClickCallback(()=>
        {
            this.HideAnimation();
        });

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

    ShowAnimation()
    {
        if(this.mMoving)
        {
            return;
        }
        this.StopAnimation();
        this.mMoving = true;
        this.mBGBtn.node.active = true;
        let width = this.mAnmationNode.getComponent(UITransform).width;
        let startPos = new Vec3(this.mAnimationNodeOriginX - width, 0 , 0);
        this.mAnmationNode.setPosition(startPos);
        let toPos = new Vec3(this.mAnimationNodeOriginX , 0 , 0);
        this.mTween = new Tween(this.mAnmationNode);
        this.mTween.to(0.3,{position:toPos},{easing:easing.quadIn});
        this.mTween.call(()=>
        {
            this.mMoving = false;
        });
        this.mTween.start();
    }

    HideAnimation()
    {
        if(this.mMoving)
        {
            return;
        }
        this.StopAnimation();
        this.mMoving = true;
        this.mBGBtn.node.active = false;
        let width = this.mAnmationNode.getComponent(UITransform).width;
        let startPos = new Vec3(this.mAnimationNodeOriginX  , 0 , 0);
        this.mAnmationNode.setPosition(startPos);
        let toPos = new Vec3(this.mAnimationNodeOriginX - width , 0 , 0);
        this.mTween = new Tween(this.mAnmationNode);
        this.mTween.to(0.3,{position:toPos},{easing:easing.quadIn});
        this.mTween.call(()=>
        {
            this.mMoving = false;
            this.node.active = false;
        });
        this.mTween.start();
    }

    StopAnimation()
    {
        if(this.mTween != null)
        {
            this.mTween.stop();
        }
    }
}

