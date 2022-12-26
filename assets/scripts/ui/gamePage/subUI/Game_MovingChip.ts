import { _decorator, Component, Node, AudioSource, Vec3, Tween, UITransform, easing } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_MovingChip')
export class Game_MovingChip extends BaseUI 
{
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
        this.StopAllTween();
    }

    public Fly(_startWorldPos : Vec3 , _endWorldPos : Vec3)
    {
        this.StopAllTween();
        let duration = 0.5;
        let localStartPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_startWorldPos);
        let localEndPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_endWorldPos);
        this.node.setPosition(localStartPos);
        let tempTween = new Tween(this.node);
        tempTween.to(duration,{position:localEndPos},{easing:easing.quadOut});
        tempTween.start();
        this.StartSecondsTimer(duration , 0.05  );
    }

    public FlyWithDelay(_startWorldPos : Vec3 , _endWorldPos : Vec3)
    {
        this.node.active = false;
        this.StopAllTween();
        let duration = 0.5;
        let delayTime = 0.5;
        let localStartPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_startWorldPos);
        let localEndPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_endWorldPos);
        this.node.setPosition(localStartPos);
        let tempTween = new Tween(this.node);
        tempTween.delay(delayTime);
        tempTween.call(()=>
        {
            this.node.active = true;
        });
        tempTween.to(duration,{position:localEndPos},{easing:easing.quadOut});
        tempTween.start();
        this.StartSecondsTimer(duration + delayTime , 0.05  );
    }

    OnSecondTimer()
    {
        let restTime = this.GetRestMillSeconds();
        if(restTime == 0)
        {
            this.StopAllTween();
            this.DeleteSelf();
        }
    }

}

