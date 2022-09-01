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
            this.DragLogic();
            if(this.mCallback)
            {
                this.mCallback(this.mSlider.progress);
            }
        });

        this.mHadnle.on(Node.EventType.TOUCH_CANCEL,()=>
        {
            this.DragLogic();
            if(this.mCallback)
            {
                this.mCallback(this.mSlider.progress);
            }
        });


        this.mSlider.node.on("slide",()=>
        {
            this.DragLogic();
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

    private ResetSlider()
    {
        this.mProgress.fillRange = 0;
        this.mSlider.progress = 0;
    }

    private DragLogic()
    {
        this.mProgress.fillRange = this.mSlider.progress;
    }

    public SetCallback(_callback : Function)
    {
        this.mCallback = _callback;
    }
}

