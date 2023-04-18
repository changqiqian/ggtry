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
             
    }

    public InitWithData(_amount : number , _parentScale : Vec3)
    {
        if(_parentScale != Vec3.ONE)
        {
            this.node.scale = new Vec3(0.8 , 0.8 , 0.8);
        }

        let clientAmount = Tool.ConvertMoney_S2C(_amount)
        if(clientAmount >= 0)
        {
            this.mWinAmount.string =   "+" + clientAmount;
            this.mWinAmount.color = Color.GREEN;
        }
        else
        {
            this.mWinAmount.string =   "" + clientAmount;
            this.mWinAmount.color = Color.RED;
        }

        this.StopAllTween(this.mWinAmount.node);
        let tempTween = new Tween(this.mWinAmount.node); 
        tempTween.to(0.5 , {position : new Vec3(0,120,0)} , {easing : easing.quadIn});
        tempTween.start();
        this.StartSecondsTimer(2 , 0.05 );
    }

    OnSecondTimer()
    {
        let restTime = this.GetRestMillSeconds();
        if(restTime == 0)
        {
            this.StopAllTween(this.mWinAmount.node);
            this.DeleteSelf();
        }
    }
}

