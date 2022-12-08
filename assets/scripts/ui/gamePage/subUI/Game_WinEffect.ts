import { _decorator, Component, Node, ParticleSystem, ParticleSystem2D, Label, Tween, Vec3, easing, Color } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Tool } from '../../../Tool';
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

        let tween = new Tween(this.mWinAmount.node); 
        tween.to(0.5 , {position : new Vec3(0,100,0)} , {easing : easing.quadIn});
        tween.delay(1.5);
        tween.call(()=>
        {
            this.DeleteSelf();
        });
        tween.start();
    }
}

