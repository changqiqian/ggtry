import { _decorator, Component, Node, Sprite, Label, Color } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('CircleTimer')
export class CircleTimer extends BaseUI {
    @property(Sprite) 
    mBG: Sprite = null;
    @property(Sprite) 
    mProgress: Sprite = null;
    @property(Label) 
    mCount: Label = null;

    mTotalTime : number = 0;
    mRestTime : number = 0;
    mCurrentSecond : number = 0;
    mSecondCallback : Function = null;
    mStartTimer : boolean = false;

    OnDisabled()
    {
        this.StopTimer();
    }

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

    public StartTimer(_totalTime : number , _SecondCallback : Function = null)
    {
        this.mTotalTime = _totalTime;
        this.mRestTime = _totalTime;
        this.mCurrentSecond = Math.ceil(this.mRestTime);
        this.mSecondCallback = _SecondCallback;
        this.mStartTimer = true;
        this.node.active = true;
        this.UpdateCount();
        this.UpdateProgress();
    }

    public StopTimer()
    {
        this.mStartTimer = false;
        this.node.active = false;
    }

    update(deltaTime: number) 
    {
        if(this.node.active == false)
        {
            return;
        }
        if(this.mStartTimer == false)
        {
            return;
        }

        this.mRestTime -= deltaTime;
        let tempSecond = Math.ceil(this.mRestTime);
        if(tempSecond != this.mCurrentSecond)
        {
            this.mCurrentSecond = tempSecond;
            this.UpdateCount();
        }
        this.UpdateProgress();
        if(this.mRestTime < 0)
        {
            this.mStartTimer = false;
            this.mProgress.fillRange = 0;
        }
    }

    UpdateCount()
    {
        this.mCount.string = this.mCurrentSecond.toString();
        if(this.mSecondCallback != null)
        {
            this.mSecondCallback(this.mCurrentSecond);
        }

        this.UpdateColor();
    }

    UpdateProgress()
    {
        let ratio = this.mRestTime/this.mTotalTime;
        this.mProgress.fillRange = ratio;
    }

    UpdateColor()
    {
        let color;
        if(this.mCurrentSecond<=3)
        {
            color = new Color(220,34,34);
        }
        else
        {
            color = new Color(34,220,82);
        }
        this.mBG.color = color;
        this.mProgress.color = color;
        this.mCount.color = color;
    }
}

