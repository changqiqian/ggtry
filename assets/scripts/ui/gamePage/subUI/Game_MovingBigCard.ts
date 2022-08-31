import { _decorator, Component, Node, Vec3, UITransform, AudioSource, easing, Tween } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_MovingBigCard')
export class Game_MovingBigCard extends BaseUI 
{
    @property(AudioSource) 
    mAudio: AudioSource = null;
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

    }

    public FlyTo(_startWorldPos : Vec3 , _endWorldPos : Vec3)
    {
        this.mAudio.play();
        let localStartPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_startWorldPos);
        let localEndPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(_endWorldPos);
        this.node.setPosition(localStartPos);
        let tween = new Tween(this.node);
        tween.to(0.5,{position:localEndPos},{easing:easing.quadOut});
        tween.call(()=>
        {
            this.node.removeFromParent();
            this.node.destroy();
        });
        tween.start();
    }
}

