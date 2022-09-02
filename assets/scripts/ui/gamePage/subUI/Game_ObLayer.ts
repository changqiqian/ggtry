import { _decorator, Component, Node, Tween, Vec3, UITransform, easing, Widget, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { ToggleBtn } from '../../common/ToggleBtn';
import { Game_ObItem } from './Game_ObItem';
const { ccclass, property } = _decorator;

@ccclass('Game_ObLayer')
export class Game_ObLayer extends BaseUI 
{
    @property(BaseButton) 
    mBGBtn: BaseButton = null;
    @property(Node) 
    mAnmationNode: Node = null;
    @property(Label) 
    mObNum: Label = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    @property(ToggleBtn) 
    mVoiceToggle: ToggleBtn = null;
    @property(ToggleBtn) 
    mChatToggle: ToggleBtn = null;

    mTween : Tween = null;
    mMoving : boolean = false;
    mAnimationNodeOriginX : number = null;
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

        // for(let i = 0 ; i < 5 ; i++)
        // {
        //     this.LoadPrefab("gamePage" , "prefab/Game_ObItem" , (_prefab)=>
        //     {
        //         let tempNode = instantiate(_prefab);
        //         this.mScrollView.content.addChild(tempNode);
        //         let tempScript = tempNode.getComponent(Game_ObItem);
        //     });
        // }
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
        let startPos = new Vec3(this.mAnimationNodeOriginX + width, 0 , 0);
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
        let toPos = new Vec3(this.mAnimationNodeOriginX + width , 0 , 0);
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

