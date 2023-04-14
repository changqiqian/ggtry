import { _decorator, Component, Node, Label, Tween, UITransform, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Toast')
export class Toast extends BaseUI 
{
    @property(Sprite) 
    mBG: Sprite = null;
    @property(Label) 
    mTips: Label = null;
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

    ShowToast(_tips : string , _duration:number)
    {
        this.mTips.string = _tips;
        this.Show(true);
        this.StartSecondsTimer(0.5,_duration,()=>
        {
            if(this.GetRestMillSeconds() == 0)
            {
                this.Show(false);
            }
        })
        //this.UpdateBGSize();
    }

    UpdateBGSize()
    {
        this.mTips.updateRenderData(true);
        let contentWidth= this.mTips.getComponent(UITransform).contentSize.width;
        let contentHeight= this.mTips.getComponent(UITransform).contentSize.height;
        contentWidth += 200;
        contentHeight += 20;

        this.mBG.getComponent(UITransform).setContentSize(contentWidth,contentHeight);
    }
}

