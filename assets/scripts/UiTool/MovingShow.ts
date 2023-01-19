import { _decorator, Component, Node, Tween, Widget, Vec3, UITransform, easing } from 'cc';
import { BaseUI } from '../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('MovingShow')
export class MovingShow extends BaseUI {
    private mMoving : boolean = false;

    private mAnimationShowType : AnimationShowType = null;
    private mOriginPos : Vec3 = null;
    private mShowCallback : Function = null;
    private mHideCallback : Function = null;
    private static mDuration : number = 0.3;

    private mRootNode : Node = null;


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
        this.mShowCallback = null;
        this.mRootNode = null;
    }

    public SetRoot(_RootNode : Node)
    {
        this.mRootNode = _RootNode;
    }


    public SetShowAnimationCallback(_showCallback : Function)
    {
        this.mShowCallback = _showCallback;
    }

    public SetHideAnimationCallback(_hideCallback : Function)
    {
        this.mHideCallback = _hideCallback;
    }


    public SetAnimationType(_type : AnimationShowType)
    {
        this.mAnimationShowType = _type;
    }

    public ShowAnimation(_druation : number = MovingShow.mDuration)
    {
        if(this.mMoving)
        {
            return;
        }
        this.mMoving = true;
        this.StopAllTween();
        switch(this.mAnimationShowType)
        {
            case AnimationShowType.FromLeft:
                this.ShowAnimationFromLeft(_druation);
                break
            case AnimationShowType.FromBottom:
                this.ShowAnimationFromBottom(_druation);
                break
            case AnimationShowType.FromRight:
                this.ShowAnimationFromRight(_druation);
                break
        }
    }

    public HideAnimation(_druation : number = MovingShow.mDuration)
    {
        if(this.mMoving)
        {
            return;
        }
        this.mMoving = true;
        this.StopAllTween();
        switch(this.mAnimationShowType)
        {
            case AnimationShowType.FromLeft:
                this.HideAnimationFromLeft(_druation);
                break
            case AnimationShowType.FromBottom:
                this.HideAnimationFromBottom(_druation);
                break
            case AnimationShowType.FromRight:
                this.HideAnimationFromRight(_druation);
                break
        }
    }

    private ShowAnimationFromLeft(_druation : number = MovingShow.mDuration)
    {
        let width = this.node.getComponent(UITransform).width;
        let startPos = new Vec3(this.mOriginPos.x - width, this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y , this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(_druation,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            if(this.mShowCallback !=null)
            {
                this.mShowCallback();
            }
        });
        tempTween.start();
    }

    private HideAnimationFromLeft(_druation : number = MovingShow.mDuration)
    {
        let width = this.node.getComponent(UITransform).width;
        let startPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x - width , this.mOriginPos.y , this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(_druation,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            this.HideRoot();
        });
        tempTween.start();
    }

    private ShowAnimationFromBottom(_druation : number = MovingShow.mDuration)
    {
        let height = this.node.getComponent(UITransform).height;
        let startPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y - height , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y , this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(_druation,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            if(this.mShowCallback !=null)
            {
                this.mShowCallback ();
            }
        });
        tempTween.start();
    }

    private HideAnimationFromBottom(_druation : number = MovingShow.mDuration)
    {
        let height = this.node.getComponent(UITransform).height;
        let startPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y - height, this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(_druation,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            this.HideRoot();
        });
        tempTween.start();
    }
    
    private ShowAnimationFromRight(_druation : number = MovingShow.mDuration)
    {
        let width = this.node.getComponent(UITransform).width;
        let startPos = new Vec3(this.mOriginPos.x + width,this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x, this.mOriginPos.y , this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(_druation,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            if(this.mShowCallback !=null)
            {
                this.mShowCallback ();
            }
        });
        tempTween.start();
    }

    private HideAnimationFromRight(_druation : number = MovingShow.mDuration)
    {
        let width = this.node.getComponent(UITransform).width;
        let startPos = new Vec3(this.mOriginPos.x  , this.mOriginPos.y , this.mOriginPos.z);
        this.node.setPosition(startPos);
        let toPos = new Vec3(this.mOriginPos.x + width , this.mOriginPos.y , this.mOriginPos.z);
        let tempTween = new Tween(this.node);
        tempTween.to(_druation,{position:toPos},{easing:easing.quadIn});
        tempTween.call(()=>
        {
            this.mMoving = false;
            this.HideRoot();
        });
        tempTween.start();
    }

    private HideRoot()
    {
        if(this.mRootNode != null)
        {
            this.mRootNode.active = false;
        }
        if(this.mHideCallback != null)
        {
            this.mHideCallback();
        }
    }
}

export enum AnimationShowType
{
    FromLeft = 0, //从屏幕左侧滑出
    FromBottom, //从屏幕底部滑出
    FromRight , //从屏幕右边滑出
}