import { _decorator, Component, Node, Label, Tween } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Toast')
export class Toast extends BaseUI 
{
    @property(Label) 
    mTips: Label = null;
    mDuration : number;
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

    ShowToast(_tips : string , _duration:number)
    {
        this.mTips.string = _tips;
        this.Show(true);
        this.StartAnm();
        this.mDuration = _duration;
    }

    StartAnm()
    {
        this.StopAllTween();
        let tempTween = new Tween(this.node); 
        tempTween.delay( this.mDuration);
        tempTween.call(()=>
        {
            this.Show(false);
        });
        tempTween.start();   
    }
}

