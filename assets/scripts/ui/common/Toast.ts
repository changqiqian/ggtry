import { _decorator, Component, Node, Label, Tween } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Toast')
export class Toast extends BaseUI 
{
    @property(Label) 
    mTips: Label = null;

    mTween = null;
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
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {
        this.StopAnm();
    }

    ShowToast(_tips : string , _duration:number = 3)
    {
        this.mTips.string = _tips;
        this.Show(true);
        this.StartAnm();
        this.mDuration = _duration;
    }

    StartAnm()
    {
        this.StopAnm();
        this.mTween = new Tween(this.node); 
        this.mTween.delay( this.mDuration);
        this.mTween.call(()=>
        {
            this.Show(false);
        });
        this.mTween.start();   
    }


    StopAnm()
    {
        if(this.mTween != null)
        {
            this.mTween.stop();
        }
    }
}

