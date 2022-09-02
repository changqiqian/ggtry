import { _decorator, Component, Node, dragonBones, Vec3, Tween, easing, UITransform } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Emoji_BaseDBAnm')
export class Emoji_BaseDBAnm extends BaseUI 
{
    @property(dragonBones.ArmatureDisplay) 
    mDragonBone: dragonBones.ArmatureDisplay = null;


    mStartPos : Vec3 = null;
    mEndPos : Vec3 = null;

    mArmatureName : string = null;
    mStartAnmName : string = null;
    mMiddleAnmName : string = null;
    mEndAnmName : string = null;
    InitParam()
    {
        this.mArmatureName = "Armature";
        this.mStartAnmName = "Armature";
        this.mMiddleAnmName = "Armature";
        this.mEndAnmName = "Armature";
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

    PlayeStartAnm()
    {
        this.mDragonBone.armatureName = this.mArmatureName;
        this.mDragonBone.playAnimation(this.mStartAnmName , 1);
        let armature = this.mDragonBone.armature();
        
        armature.addEventListener(dragonBones.EventObject.COMPLETE,(_event)=>
        {
            this.AfterStart();
        },this);
    }

    AfterStart()
    {
        this.Move();
        this.PlayMiddleAnm();
    }

    Move()
    {
        let tween = new Tween(this.node);
        tween.to(0.8 , {position:this.mEndPos} , {easing:easing.linear});
        tween.call(()=>
        {
            this.AfterMove();
        })
        tween.start();
    }


    PlayMiddleAnm()
    {
        this.mDragonBone.armatureName = this.mArmatureName;
        this.mDragonBone.playAnimation(this.mMiddleAnmName , 1);
        let armature = this.mDragonBone.armature();
        
        armature.addEventListener(dragonBones.EventObject.COMPLETE,(_event)=>
        {
            this.AfterMiddle();
        },this);
    }

    AfterMiddle()
    {

    }

    AfterMove()
    {
        this.PlayEndAnm();
    }

    PlayEndAnm()
    {
        this.mDragonBone.armatureName = this.mArmatureName;
        this.mDragonBone.playAnimation(this.mEndAnmName , 1);
        let armature = this.mDragonBone.armature();
        
        armature.addEventListener(dragonBones.EventObject.COMPLETE,(_event)=>
        {
            this.AfterEnd();
        },this);
    }

    AfterEnd()
    {
        this.DeleteSelf();
    }

    public InitWithData(_worldPosStart : Vec3 , _worldPosEnd : Vec3)
    {
        this.mStartPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_worldPosStart);
        this.mEndPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_worldPosEnd);
        this.node.setPosition(this.mStartPos);
    }
}

