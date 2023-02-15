import { _decorator, Component, Node, Label, Tween } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Tool } from '../../../Tool';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_CommonTips')
export class Game_CommonTips extends BaseUI 
{
    @property(Label) 
    mTips: Label = null;


    mCustomerTips : string ;
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

    }

    ShowTips(_tips : string , _duration:number = 3)
    {
        this.mTips.string = _tips;
        this.mDuration = _duration;
        this.StopSecondsTimer();
        this.StartAnm();
    }

    ShowTipsWithCountDown(_tips : string , _duration:number = 30)
    {
        this.mCustomerTips = _tips;
        this.mDuration = _duration;
        this.StartAnm();
        this.UpdateTips(_duration);
        this.StartSecondsTimer(_duration,1 , ()=>
        {
            let restTime = this.GetRestSeconds();
            this.UpdateTips(restTime);
            if(restTime == 0)
            {

            }
        });
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

 

    UpdateTips(_leftTime : number)
    {
        let tips = this.mCustomerTips + "\n" + _leftTime + "s";
        this.mTips.string = tips;
    }
}

