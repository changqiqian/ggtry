import { _decorator, Component, Node, Widget, Tween, UITransform, Vec3, easing } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('NotifycationBar')
export class NotifycationBar extends BaseUI 
{
    @property(BaseButton) 
    mBtn: BaseButton = null;

    mMoving : boolean = false;
    mAnimationNodeOriginX : number = null;

    mCallback : Function = null;
    onEnable()
    {
        this.ShowAnimation();
    }
    InitParam()
    {
        this.mAnimationNodeOriginX = this.mBtn.node.position.x;
    }
    BindUI()
    {
        this.node.getComponent(Widget).updateAlignment();
        this.node.getComponent(Widget).enabled = false;
        this.mBtn.SetClickCallback(()=>
        {
            //this.HideAnimation();
            if(this.mCallback != null)
            {
                this.mCallback();
            }
        });
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        this.mCallback = null;
    }

    public SetClickCallback(_callback : Function)
    {
        this.mCallback = _callback;
    }

    ShowAnimation()
    {
        if(this.mMoving)
        {
            return;
        }
        this.mMoving = true;
        this.StopAllTween();
        let width = this.mBtn.node.getComponent(UITransform).width;
        let startPos = new Vec3(this.mAnimationNodeOriginX - width, 0 , 0);
        this.mBtn.node.setPosition(startPos);
        let toPos = new Vec3(this.mAnimationNodeOriginX , 0 , 0);
        let tempTween = new Tween(this.mBtn.node);
        tempTween.to(0.3,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
        });
        tempTween.start();
    }

    HideAnimation()
    {
        if(this.mMoving)
        {
            return;
        }
        this.mMoving = true;
        this.StopAllTween();
        let width = this.mBtn.node.getComponent(UITransform).width;
        let startPos = new Vec3(this.mAnimationNodeOriginX  , 0 , 0);
        this.mBtn.node.setPosition(startPos);
        let toPos = new Vec3(this.mAnimationNodeOriginX - width , 0 , 0);
        let tempTween = new Tween(this.mBtn.node);
        tempTween.to(0.3,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            this.node.active = false;
        });
        tempTween.start();
    }

}

