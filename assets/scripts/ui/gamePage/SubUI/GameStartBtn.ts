import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('GameStartBtn')
export class GameStartBtn  extends BaseUI 
{
    public static PrefabPath : string = "prefab/GameStartBtn";
    public static Bunddle : string = "gamePage";

    mStartBtn : BaseButton = null;
    StartBtnAnmOn : Node = null;
    StartBtnAnmOff : Node = null;
    mStopBtn : BaseButton = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mStartBtn = this.node.getChildByPath("StartBtn").getComponent(BaseButton);
        this.StartBtnAnmOn = this.node.getChildByPath("StartBtnAnmOn")
        this.StartBtnAnmOff = this.node.getChildByPath("StartBtnAnmOff")
        this.mStopBtn = this.node.getChildByPath("StopBtn").getComponent(BaseButton);
        this.SwitchToStopStatus();


        this.mStartBtn.SetClickCallback(()=>
        {

        });
        this.mStopBtn.SetClickCallback(()=>
        {
            
        });
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


    SwitchToStopStatus()
    {
        this.mStartBtn.Show(true);
        this.mStopBtn.Show(false);
        this.StartBtnAnmOn.active = false;
        this.StartBtnAnmOff.active = true;
    }

    SwitchToAutoStatus()
    {
        this.mStartBtn.Show(false);
        this.mStopBtn.Show(true);
        this.StartBtnAnmOn.active = false;
        this.StartBtnAnmOff.active = false;
    }

    SwitchToPlayingStatus()
    {
        this.mStartBtn.Show(true);
        this.mStopBtn.Show(false);
        this.StartBtnAnmOn.active = true;
        this.StartBtnAnmOff.active = false;
    }
}

