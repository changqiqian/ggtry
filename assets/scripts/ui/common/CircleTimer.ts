import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('CircleTimer')
export class CircleTimer extends BaseUI {

    @property(Sprite) 
    mProgress: Sprite = null;
    @property(Label) 
    mCount: Label = null;

    mTotalTime : number = 0;
    mRestTime : number = 0;
    mCurrentSecond : number = 0;
    mSecondCallback : Function = null;
    mStartTimer : boolean = false;
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

    public StartTimer(_totalTime : number , _SecondCallback : Function)
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
    }

    UpdateProgress()
    {
        let ratio = this.mRestTime/this.mTotalTime;
        this.mProgress.fillRange = ratio;
    }
}

