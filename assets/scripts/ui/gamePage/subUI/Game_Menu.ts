import { _decorator, Component, Node, UITransform, Tween, Vec3, easing, Widget } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_Menu')
export class Game_Menu extends BaseUI 
{
    @property(BaseButton) 
    mBGBtn: BaseButton = null;
    @property(Node) 
    mAnmationNode: Node = null;
    
    @property(BaseButton) 
    mRuleBtn: BaseButton = null;
    @property(BaseButton) 
    mServiceBtn: BaseButton = null;
    @property(BaseButton) 
    mShopBtn: BaseButton = null;
    @property(BaseButton) 
    mBringInBtn: BaseButton = null;
    @property(BaseButton) 
    mBringOutBtn: BaseButton = null;
    @property(BaseButton) 
    mSettingBtn: BaseButton = null;
    @property(BaseButton) 
    mStandBtn: BaseButton = null;
    @property(BaseButton) 
    mExitBtn: BaseButton = null;

    mTween : Tween = null;
    mMoving : boolean = false;
    mAnimationNodeOriginX : number = null;
    onEnable()
    {
        this.ShowAnimation();
    }

    InitParam()
    {
        this.mAnimationNodeOriginX = this.mAnmationNode.position.x;
    }
    BindUI()
    {
        this.mAnmationNode.getComponent(Widget).updateAlignment();
        this.mAnmationNode.getComponent(Widget).enabled = false;
        this.mBGBtn.SetClickCallback(()=>
        {
            this.HideAnimation();
        });
        this.mRuleBtn.SetClickCallback(()=>
        {

        });
        this.mServiceBtn.SetClickCallback(()=>
        {

        });
        this.mShopBtn.SetClickCallback(()=>
        {

        });
        this.mBringInBtn.SetClickCallback(()=>
        {

        });
        this.mBringOutBtn.SetClickCallback(()=>
        {

        });
        this.mSettingBtn.SetClickCallback(()=>
        {

        });
        this.mStandBtn.SetClickCallback(()=>
        {

        });
        this.mExitBtn.SetClickCallback(()=>
        {

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

    }

    ShowAnimation()
    {
        if(this.mMoving)
        {
            return;
        }
        this.mMoving = true;
        this.mBGBtn.node.active = true;
        this.StopAnimation();
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
        this.mMoving = true;
        this.mBGBtn.node.active = false;
        this.StopAnimation();
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

