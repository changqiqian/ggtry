import { _decorator, Component, Node, ParticleSystem, ParticleSystem2D, Label, Tween, Vec3, easing, Color } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Tool } from '../../../Tool';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_WinEffect')
export class Game_WinEffect extends BaseUI 
{
    @property(ParticleSystem2D) 
    mParticular: ParticleSystem2D = null;
    @property(Label) 
    mWinAmount: Label = null;
    mTween : Tween = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mParticular.positionType = ParticleSystem2D.PositionType.RELATIVE;
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }

    CustmoerDestory()
    {
        this.StopAnimation();        
    }

    public InitWithData(_amount : number)
    {
        let clientAmount = Tool.ConvertMoney_S2C(_amount)
        if(clientAmount >= 0)
        {
            this.mWinAmount.string =   "+" + clientAmount;
            this.mWinAmount.color = new Color(0,255,0);
        }
        else
        {
            this.mWinAmount.string =   "" + clientAmount;
            this.mWinAmount.color = new Color(255,0,0);
        }

        this.StopAnimation();
        this.mTween = new Tween(this.mWinAmount.node); 
        this.mTween.to(0.5 , {position : new Vec3(0,200,0)} , {easing : easing.quadIn});
        this.mTween.start();
        this.StartSecondsTimer(2 , 0.05 , false);
    }

    OnSecondTimer()
    {
        let restTime = this.GetRestMillSeconds();
        if(restTime == 0)
        {
            this.StopAnimation();
            this.DeleteSelf();
        }
    }


    StopAnimation()
    {
        if(this.mTween!=null)
        {
            this.mTween.stop();
            this.mTween = null;
        }
    }
}

