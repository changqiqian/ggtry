import { _decorator, Component, Node, AudioSource, Vec3, Tween, UITransform, easing } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_MovingChip')
export class Game_MovingChip extends BaseUI 
{
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
        this.StopAnimation();
    }

    public Fly(_startWorldPos : Vec3 , _endWorldPos : Vec3)
    {
        this.StopAnimation();
        let duration = 0.5;
        let localStartPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_startWorldPos);
        let localEndPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_endWorldPos);
        this.node.setPosition(localStartPos);
        this.mTween = new Tween(this.node);
        this.mTween.to(duration,{position:localEndPos},{easing:easing.quadOut});
        this.mTween.start();
        this.StartSecondsTimer(duration , 0.05 , false );
    }

    public FlyWithDelay(_startWorldPos : Vec3 , _endWorldPos : Vec3)
    {
        this.node.active = false;
        this.StopAnimation();
        let duration = 0.5;
        let delayTime = 0.5;
        let localStartPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_startWorldPos);
        let localEndPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_endWorldPos);
        this.node.setPosition(localStartPos);
        this.mTween = new Tween(this.node);
        this.mTween.delay(delayTime);
        this.mTween.call(()=>
        {
            this.node.active = true;
        });
        this.mTween.to(duration,{position:localEndPos},{easing:easing.quadOut});
        this.mTween.start();
        this.StartSecondsTimer(duration + delayTime , 0.05 , false );
    }

    OnSecondTimer()
    {
        let restTime = this.GetRestMillSeconds();
        if(restTime == 0)
        {
            this.StopAnimation();
            this.DeleteSelf();
        }
    }

    StopAnimation()
    {
        if(this.mTween!=null)
        {
            this.mTween.stop();
            this.mTween = null;
        }
    }
}

