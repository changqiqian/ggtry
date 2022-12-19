import { _decorator, Component, Node, AudioSource, Vec3, UITransform, Tween, easing } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_MovingCards')
export class Game_MovingCards extends BaseUI 
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

    public FlyTo(_startWorldPos : Vec3 , _endWorldPos : Vec3)
    {
        this.StopAnimation();

        let duration = 0.5;
        let localStartPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_startWorldPos);
        let localEndPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_endWorldPos);
        this.node.setPosition(localStartPos);


        let tweenMove = new Tween();
        tweenMove.to(duration,{position:localEndPos},{easing:easing.quadOut});
        let tweenRotate = new Tween();
        tweenRotate.to(duration,{angle:350});

        let tween = new Tween(this.node)
        .parallel(tweenMove, tweenRotate)
        .start()

        this.StartSecondsTimer(duration , 0.05 , false );
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

