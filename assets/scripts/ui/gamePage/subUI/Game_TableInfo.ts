import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { GameConfig } from '../../../GameConfig';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_TableInfo')
export class Game_TableInfo extends BaseUI 
{
    @property(Label) 
    mRoomName: Label = null;
    @property(Label) 
    mRoomID: Label = null;
    @property(Label) 
    mBlindInfo: Label = null;
    @property(Label) 
    mDoubleScore: Label = null;
    @property(Label) 
    mMinHold: Label = null;
    @property(Label) 
    mOtherInfo: Label = null;
    @property(Label) 
    mLeftTime: Label = null;

    InitParam() 
    {

    }
    BindUI() 
    {

    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_EnterGame",(_current , _before)=>
        {
            let deskConfig = _current.deskConfig;
            this.mRoomName.string = deskConfig.gameName;
            this.mRoomID.string = deskConfig.gameId;
            let blindInfo = deskConfig.baseScore + "/" + deskConfig.baseScore * 2;

            if(deskConfig.isStraddle )
            {
                blindInfo += "/" + deskConfig.baseScore *4;
            }
            if(deskConfig.beforeScore > 0)
            {
                blindInfo += "(" + deskConfig.beforeScore + ")";
            }
            this.mBlindInfo.string = blindInfo;

            this.mDoubleScore.node.active = deskConfig.isDUserDouble;
            if(deskConfig.isDUserDouble)
            {
                this.mDoubleScore.string = Localization.GetString("00058");
            }

            this.mMinHold.node.active = deskConfig.minHoldScore > 0;
            if(deskConfig.minHoldScore > 0)
            {
                this.mMinHold.string = Localization.GetString("00059") + deskConfig.minHoldScore;
            }

            let otherInfo = "";
            if(deskConfig.isInsurance)
            {
                otherInfo += Localization.GetString("00060");
            }
            
            if(deskConfig.gpsNotify)
            {
                otherInfo += "/GPS";
            }
            if(deskConfig.ipNotify)
            {
                otherInfo += "/IP";
            }
            this.mOtherInfo.string = otherInfo;

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
        let preffix = Localization.GetString("00061");
        if(seconds >=0)
        {
            this.mLeftTime.string = preffix + GameConfig.GetRestTime_M_S(seconds);
        }
        else
        {
            this.mLeftTime.string = preffix + "00:00";
        }
    }
}

