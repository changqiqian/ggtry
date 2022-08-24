import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { GameConfig } from '../../../GameConfig';
import { Mtt_MatchStatus } from '../../hall/HallData';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_MttInfo')
export class Game_MttInfo extends BaseUI 
{
    @property(Label) 
    mCountDown: Label = null;
    @property(Label) 
    mBlindInfoNow: Label = null;
    @property(Label) 
    mBlindInfoNext: Label = null;
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

        GameData.GetInstance().AddListener("Data_RefreshMttInfo",(_current , _before)=>
        {
            let matchConfig = _current.matchConfig;
            let statusInfo = _current.statusInfo;
            this.UpdateUI(statusInfo);
            this.mRankInfo.string = _current.rank + "/" + statusInfo.totalUser;
            let avgScore = (matchConfig.beginScore * (statusInfo.totalUser + statusInfo.totalReBuy)) / statusInfo.playerUser;
            let bbStr = Math.floor(avgScore/(statusInfo.curBlind*2));
            this.mAvgChip.string = avgScore.toFixed(2) + "(" + bbStr + "BB)" ;

        },this);
        GameData.GetInstance().AddListener("Data_MttGetRoomInfo",(_current , _before)=>
        {
            this.UpdateUI(_current.status);
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
        this.unschedule(this.CountDownLogic);
    }

    UpdateUI(_data)
    {
        this.node.active = _data.status >= Mtt_MatchStatus.Started;
        if(this.node.active == false)
        {
            return;
        }


        let anteNow = "";
        if(_data.beforeScore)
        {
            anteNow = "(" + _data.nextBeforeScore + ")";
        }
        this.mBlindInfoNow.string = Localization.GetString("00054") + _data.curBlind + "/" + _data.curBlind * 2 + anteNow;

        let anteNext = "";
        if (_data.nextBeforeScore) 
        {
            anteNext = "(" + _data.nextBeforeScore + ")"
        }
        this.mBlindInfoNext.string = Localization.GetString("00055") + _data.nextBlind + "/" + _data.nextBlind * 2 + anteNext;

        if(_data.status != Mtt_MatchStatus.Rest && _data.status != Mtt_MatchStatus.End)
        {
            this.StartCountDown(_data.leftTime);
        }
        else
        {
            this.StartCountDown(0);
        }
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
            this.mCountDown.string = "00:00";
        }
    }
}

