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

    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_MttGetRoomInfo",(_current , _before)=>
        {
            let statusInfo = GameData.GetInstance().Data_StatusInfo;
            this.node.active = statusInfo.status == Mtt_MatchStatus.Rest;
            if(statusInfo.status == Mtt_MatchStatus.Rest)
            {
                var leftTime = statusInfo.leftTime;
                this.StartCountDown(leftTime);
            }
        },this);
        GameData.GetInstance().AddListener("Data_RefreshMttInfo",(_current , _before)=>
        {
            let matchConfig = GameData.GetInstance().Data_MatchConfig;
            let statusInfo = GameData.GetInstance().Data_StatusInfo;
            this.node.active = statusInfo.status == Mtt_MatchStatus.Rest;
            if(statusInfo.status == Mtt_MatchStatus.Rest)
            {
                var leftTime = statusInfo.restLeftTime;
                this.StartCountDown(leftTime);
            }
        },this);
        GameData.GetInstance().AddListener("Data_MttStatusChange",(_current , _before)=>
        {
            if(_current.reason == Mtt_MatchStatus.Rest)
            {
                var leftTime = _current.leftTime;
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
            let matchId = GameData.GetInstance().Data_RefreshMttInfo.matchConfig.matchId;
            Network.GetInstance().SendRefreshMttInfo(matchId);
        }
    }
}

