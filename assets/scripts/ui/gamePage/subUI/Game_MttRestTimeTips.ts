import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { GameConfig } from '../../../GameConfig';
import { Network } from '../../../network/Network';
import { Mtt_MatchStatus } from '../../hall/HallData';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_MttRestTimeTips')
export class Game_MttRestTimeTips extends BaseUI 
{
    @property(Node) 
    mBG: Node = null;
    @property(Label) 
    mCountDown: Label = null;

    mCurrentTime : number = null;

    onDisable()
    {
        this.unschedule(this.CountDownLogic);
    }

    InitParam() 
    {

    }
    BindUI() 
    {
        this.mBG.active = false;
        this.mCountDown.string = "";
    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_MttGetRoomInfo",(_current , _before)=>
        {
            this.mBG.active = _current.status == Mtt_MatchStatus.Rest;
            if(_current.status == Mtt_MatchStatus.Rest)
            {
                var leftTime = _current.status.leftTime
                this.StartCountDown(leftTime);
            }

        },this);

        GameData.GetInstance().AddListener("Data_RefreshMttInfo",(_current , _before)=>
        {
            let matchConfig = _current.matchConfig;
            let statusInfo = _current.statusInfo;
            this.mBG.active = statusInfo.status == Mtt_MatchStatus.Rest;
            if(statusInfo.status == Mtt_MatchStatus.Rest)
            {
                var leftTime = statusInfo.restLeftTime;
                this.StartCountDown(leftTime);
            }

        },this);
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        GameData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

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
        let preffix = Localization.GetString("00022");
        this.mBG.active = this.mCurrentTime >=0;
        if(this.mCurrentTime >=0)
        {
            this.mCountDown.string = preffix + GameConfig.GetRestTime_M_S(this.mCurrentTime);
        }
        else
        {
            this.mCountDown.string = preffix + "00:00";
            Network.GetInstance().SendRefreshMttInfo(GameData.GetInstance().Data_CurrentMttMatchId);
        }
    }
}

