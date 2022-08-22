import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { GameConfig } from '../../../GameConfig';
const { ccclass, property } = _decorator;

@ccclass('Game_MttInfo')
export class Game_MttInfo extends BaseUI 
{
    @property(Label) 
    mCountDown: Label = null;
    @property(Label) 
    mBlindInfo: Label = null;
    @property(Label) 
    mRankInfo: Label = null;
    @property(Label) 
    mAvgChip: Label = null;

    mCurrentTime : number = null;
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
        this.unschedule(this.CountDownLogic);
    }

    StartCountDown(_time : number)
    {
        this.mCurrentTime = _time;
        this.unschedule(this.CountDownLogic);
        if(this.mCurrentTime > 0)
        {
            this.schedule(this.CountDownLogic, 1);
        }
        this.UpdateCountDownUI();
    }

    CountDownLogic()
    {
        this.mCurrentTime--;
        if(this.mCurrentTime <= 0)
        {
            this.unschedule(this.CountDownLogic);
        }
        this.UpdateCountDownUI();
    }

    UpdateCountDownUI()
    {
        if(this.mCurrentTime >=0)
        {
            this.mCountDown.string = GameConfig.GetRestTime_M_S(this.mCurrentTime);
        }
        else
        {
            this.mCountDown.string = "--";
        }
    }
}

