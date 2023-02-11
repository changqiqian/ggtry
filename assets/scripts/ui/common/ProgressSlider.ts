import { _decorator, Component, Node, Slider, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('ProgressSlider')
export class ProgressSlider extends BaseUI 
{
    @property(Slider) 
    mSlider: Slider = null;
    @property(Node) 
    mHadnle: Node = null;
    @property(Sprite) 
    mProgress: Sprite = null;
    mEndCallback :Function = null;
    mDragCallback:Function = null;
    onEnable()
    {

    }
    InitParam()
    {

    }
    BindUI()
    {
        this.mHadnle.on(Node.EventType.TOUCH_END,()=>
        {
            this.mProgress.fillRange = this.mSlider.progress;
            if(this.mEndCallback)
            {
                this.mEndCallback(this.mSlider.progress);
            }
        });

        this.mHadnle.on(Node.EventType.TOUCH_CANCEL,()=>
        {
            this.mProgress.fillRange = this.mSlider.progress;
            if(this.mEndCallback)
            {
                this.mEndCallback(this.mSlider.progress);
            }
        });


        this.mSlider.node.on("slide",()=>
        {
            this.mProgress.fillRange = this.mSlider.progress;
            if(this.mDragCallback)
            {
                this.mDragCallback(this.mSlider.progress);
            }
        });
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

    public GetPercent():number
    {
        return this.mSlider.progress;
    }


    public SetEndCallback(_callback : Function)
    {
        this.mEndCallback = _callback;
    }

    public SetDragCallback(_callback : Function)
    {
        this.mDragCallback = _callback;
    }

    public SetPercent(_value : number)
    {
        this.mSlider.progress = _value;
        this.mProgress.fillRange = this.mSlider.progress;
    }

    public SetEnable(_value : boolean)
    {
        this.mSlider.enabled = _value;
    }
}

