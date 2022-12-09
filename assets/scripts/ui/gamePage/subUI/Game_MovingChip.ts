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
            this.DeleteSelf();
        });
        tween.start();
    }
}

