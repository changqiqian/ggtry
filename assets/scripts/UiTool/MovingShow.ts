import { _decorator, Component, Node, Tween, Widget, Vec3, UITransform, easing } from 'cc';
import { BaseUI } from '../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('MovingShow')
export class MovingShow extends BaseUI {
    private mTween : Tween = null;
    private mMoving : boolean = false;

    private mAnimationShowType : AnimationShowType = null;
    private mOriginPos : Vec3 = null;
    private mHideCallback : Function = null;
    private mDuration : number = 0.3;

    InitParam()
    {

    }
    BindUI()
    {
        let widget = this.node.getComponent(Widget);
        if(widget)
        {
            widget.updateAlignment();
            widget.enabled = false;
        }
        this.mOriginPos = new Vec3(this.node.position.x , this.node.position.y , this.node.position.z);
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        this.mHideCallback = null;
    }

    public SetAnimationCallback(_hideCallBack : Function)
    {

        this.mHideCallback = _hideCallBack;
    }

    public SetAnimationType(_type : AnimationShowType)
    {
        this.mAnimationShowType = _type;
    }

    public ShowAnimation()
    {
        if(this.mMoving)
        {
            return;
        }
        this.mMoving = true;
        this.StopAnimation();
        switch(this.mAnimationShowType)
        {
            case AnimationShowType.FromLeft:
                this.ShowAnimationFromLeft();
                break
            case AnimationShowType.FromBottom:
                this.ShowAnimationFromBottom();
                break
            case AnimationShowType.FromRight:
                this.ShowAnimationFromRight()
                break
        }
    }

    public HideAnimation()
    {
        if(this.mMoving)
        {
            return;
        }
        this.mMoving = true;
        this.StopAnimation();
        switch(this.mAnimationShowType)
        {
            case AnimationShowType.FromLeft:
                this.HideAnimationFromLeft();
                break
            case AnimationShowType.FromBottom:
                this.HideAnimationFromBottom();
                break
            case AnimationShowType.FromRight:
                this.HideAnimationFromRight();
                break
        }
    }

    private ShowAnimationFromLeft()
    {
        let width = this.node.getComponent(UITransform).width;
        let startPos = new Vec3(this.mOriginPos.x - width, this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y , this.mOriginPos.z);
        this.mTween = new Tween(this.node);
        this.mTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        this.mTween.call(()=>
        {
            this.mMoving = false;
        });
        this.mTween.start();
    }

    private HideAnimationFromLeft()
    {
        let width = this.node.getComponent(UITransform).width;
        let startPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x - width , this.mOriginPos.y , this.mOriginPos.z);
        this.mTween = new Tween(this.node);
        this.mTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        this.mTween.call(()=>
        {
            this.mMoving = false;
            if(this.mHideCallback != null)
            {
                this.mHideCallback();
            }
        });
        this.mTween.start();
    }

    private ShowAnimationFromBottom()
    {
        let height = this.node.getComponent(UITransform).height;
        let startPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y - height , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y , this.mOriginPos.z);
        this.mTween = new Tween(this.node);
        this.mTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        this.mTween.call(()=>
        {
            this.mMoving = false;
        });
        this.mTween.start();
    }

    private HideAnimationFromBottom()
    {
        console.log("HideAnimationFromBottom");
        let height = this.node.getComponent(UITransform).height;
        let startPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y - height, this.mOriginPos.z);
        this.mTween = new Tween(this.node);
        this.mTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        this.mTween.call(()=>
        {
            this.mMoving = false;
            if(this.mHideCallback != null)
            {
                this.mHideCallback();
            }
        });
        this.mTween.start();
    }
    
    private ShowAnimationFromRight()
    {
        let width = this.node.getComponent(UITransform).width;
        let startPos = new Vec3(this.mOriginPos.x + width,this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y , this.mOriginPos.z);
        this.mTween = new Tween(this.node);
        this.mTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        this.mTween.call(()=>
        {
            this.mMoving = false;
        });
        this.mTween.start();
    }

    private HideAnimationFromRight()
    {
        let width = this.node.getComponent(UITransform).width;
        let startPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x + width , this.mOriginPos.y , this.mOriginPos.z);
        this.mTween = new Tween(this.node);
        this.mTween.to(this.mDuration,{position:toPos},{easing:easing.quadIn});
        this.mTween.call(()=>
        {
            this.mMoving = false;
            if(this.mHideCallback != null)
            {
                this.mHideCallback();
            }
        });
        this.mTween.start();
    }

    private StopAnimation()
    {
        if(this.mTween != null)
        {
            this.mTween.stop();
        }
    }
}

export enum AnimationShowType
{
    FromLeft = 0, //从屏幕左侧滑出
    FromBottom, //从屏幕底部滑出
    FromRight , //从屏幕右边滑出
}