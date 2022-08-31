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
            this.node.active = false;
            if(_current.reason == Mtt_MatchStatus.Rest)
            {
                this.node.active = true;
                var leftTime = _current.leftTime;
                this.StartCountDown(leftTime);
            }

        },this);
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
            this.mCountDown.string = preffix + GameConfig.GetRestTime_M_S(seconds);
        }
        else
        {
            this.mCountDown.string = preffix + "00:00";
            let matchId = GameData.GetInstance().Data_RefreshMttInfo.matchConfig.matchId;
            //Network.GetInstance().SendRefreshMttInfo(matchId);
        }
    }

}

