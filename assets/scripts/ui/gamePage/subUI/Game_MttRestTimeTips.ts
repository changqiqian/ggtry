import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { GameConfig } from '../../../GameConfig';
import { Network } from '../../../network/Network';
import { Tool } from '../../../Tool';
const { ccclass, property } = _decorator;

@ccclass('Game_MttRestTimeTips')
export class Game_MttRestTimeTips extends BaseUI 
{
    @property(Label) 
    mCountDown: Label = null;

    onDisable()
    {
        
    }

    InitParam() 
    {

    }
    BindUI() 
    {
        this.node.active = false;
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

    StartCountDown(_time : number)
    {
        this.StartSecondsTimer(_time);
        this.OnSecondTimer();
    }

    OnSecondTimer()
    {
        let seconds = this.GetRestSeconds();
        let preffix = Localization.GetString("00022");
        this.node.active = seconds >0;
        if(this.node.active)
        {
            this.mCountDown.string = preffix + Tool.GetRestTime_M_S(seconds);
        }
        else
        {
            this.mCountDown.string = preffix + "00:00";
        }
    }

}

