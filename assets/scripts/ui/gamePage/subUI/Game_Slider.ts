import { _decorator, Component, Node, Slider, Sprite, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_Slider')
export class Game_Slider extends BaseUI 
{
    @property(Slider) 
    mSlider: Slider = null;
    @property(Node) 
    mHadnle: Node = null;
    @property(Sprite) 
    mProgress: Sprite = null;
    @property(Label) 
    mAmount: Label = null;
    @property(Label) 
    mTotalAmount: Label = null;
    @property(Node) 
    mTotalBG: Node = null;
    
    mCallback :Function = null;

    onEnable()
    {
        this.ResetSlider();
    }

    InitParam() 
    {

    }
    BindUI() 
    {
        this.mHadnle.on(Node.EventType.TOUCH_END,()=>
        {
            this.mProgress.fillRange = this.mSlider.progress;
            if(this.mCallback)
            {
                this.mCallback(this.mSlider.progress);
            }
        });


        this.mSlider.node.on("slide",()=>
        {
            this.mProgress.fillRange = this.mSlider.progress;
            this.mTotalBG.active = this.mProgress.fillRange < 1;
            if(this.mCallback)
            {
                this.mCallback(this.mSlider.progress);
            }
        });
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

    SetCallback(_callback : Function)
    {
        this.mCallback = _callback;
    }

    SetTotalAmount(_TotalAmount : number)
    {
        this.mTotalAmount.string = _TotalAmount + "";
    }

    SetCurrentAmount(_CurrentAmount : number)
    {
        this.mAmount.string = _CurrentAmount + "";
    }

    ResetSlider()
    {
        this.mAmount.string = "0";
        this.mProgress.fillRange = 0;
        this.mSlider.progress = 0;
        this.mTotalBG.active = true;
    }
}

