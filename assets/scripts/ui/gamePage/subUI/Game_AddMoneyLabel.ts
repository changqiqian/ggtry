import { _decorator, Component, Node, Label, Tween, easing, Vec3 } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_AddMoneyLabel')
export class Game_AddMoneyLabel extends BaseUI 
{
    @property(Label) 
    mAmount: Label = null;
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

    public InitWithData(_amount : number , _offsetY : number = 150)
    {
        this.mAmount.string = _amount+"";
        let totalDuration = 0.5 + 1;
        let currentPos = this.node.position;
        let toPos = new Vec3(currentPos.x , currentPos.y + _offsetY ,currentPos.z);
        let tween = new Tween(this.node);
        tween.to(0.5,{position:toPos},{easing:easing.quadOut});
        tween.start();
        this.StartSecondsTimer(totalDuration,0.01,()=>
        {
            let restTime = this.GetRestMillSeconds();
            if(restTime == 0)
            {
                this.DeleteSelf();
            }
        })

    }
}

