import { _decorator, Component, Node, Label, UI } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { GameConfig } from '../../../GameConfig';
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

    UpdateRank(_rank : number , _totalPlayer : number)
    {
        if(_rank == 0) 
        {
            this.mRankInfo.string = Localization.GetString("00062") +":" + "--";
        }
        else
        {
            this.mRankInfo.string = Localization.GetString("00062") +":" +  _rank + "/" + _totalPlayer;
        }

    }

    UpdateBlindInfo(_data : any)
    {
        let anteNow = "";
        if(_data.beforeScore)
        {
            anteNow = "(" + _data.beforeScore + ")";
        }
        this.mBlindInfoNow.string = Localization.GetString("00054") + _data.curBlind + "/" + _data.curBlind * 2 + anteNow;

        let anteNext = "";
        if (_data.nextBeforeScore) 
        {
            anteNext = "(" + _data.nextBeforeScore + ")"
        }
        this.mBlindInfoNext.string = Localization.GetString("00055") + _data.nextBlind + "/" + _data.nextBlind * 2 + anteNext;
    }

    UpdateUI()
    {

    }

    StartCountDown(_time : number)
    {
        this.StartSecondsTimer(_time);
        this.OnSecondTimer();
    }

    OnSecondTimer()
    {

    }

}

