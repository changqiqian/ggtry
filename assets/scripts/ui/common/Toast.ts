import { _decorator, Component, Node, Label, Tween } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Toast')
export class Toast extends BaseUI 
{
    @property(Label) 
    mTips: Label = null;

    mTween = null;
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

    ShowToast(_tips : string)
    {
        this.mTips.string = _tips;
        this.Show(true);
        this.StartAnm();
    }

    StartAnm()
    {
        this.StopAnm();
        this.mTween = new Tween(this.node); 
        this.mTween.delay(3);
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

