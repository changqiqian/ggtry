import { _decorator, Component, Node, AudioSource, Vec3, Tween, UITransform, easing } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_MovingChip')
export class Game_MovingChip extends BaseUI 
{
    @property(AudioSource) 
    mAudioBet: AudioSource = null;
    @property(AudioSource) 
    mAudioCollect: AudioSource = null;
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
    UnregDataNotify()
    {

    }
    CustmoerDestory()
    {

    }

    public FlyToBet(_startWorldPos : Vec3 , _endWorldPos : Vec3 )
    {
        this.mAudioBet.play();
        this.Fly(_startWorldPos , _endWorldPos);
    }

    public FlyToCollect(_startWorldPos : Vec3 , _endWorldPos : Vec3 )
    {
        this.mAudioCollect.play();
        this.Fly(_startWorldPos , _endWorldPos);
    }


    public Fly(_startWorldPos : Vec3 , _endWorldPos : Vec3)
    {
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

