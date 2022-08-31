import { _decorator, Component, Node, ParticleSystem, ParticleSystem2D } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_WinEffect')
export class Game_WinEffect extends BaseUI 
{
    @property(ParticleSystem2D) 
    mParticular: ParticleSystem2D = null;
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
        this.scheduleOnce(()=>
        {
            this.DeleteSelf();
        },this.mParticular.duration * 2);
    }

    CustmoerDestory()
    {

    }
}

