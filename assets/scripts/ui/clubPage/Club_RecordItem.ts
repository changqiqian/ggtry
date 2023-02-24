import { _decorator, Component, Node, Label, Color } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import { NetworkHttp } from '../../network/NetworkHttp';
import { Tool } from '../../Tool';
import { BaseButton } from '../common/BaseButton';
import { CircleTimer } from '../common/CircleTimer';
import { Club_RecordDetailsLayer } from './Club_RecordDetailsLayer';
const { ccclass, property } = _decorator;

@ccclass('Club_RecordItem')
export class Club_RecordItem extends BaseUI 
{
    @property(CircleTimer) 
    mCircleTimer: CircleTimer = null;
    @property(Label) 
    mGameType: Label = null;
    @property(Label) 
    mBlindInfo: Label = null;
    @property(Label) 
    mDuration: Label = null;
    @property(Label) 
    mGameName: Label = null;
    @property(Label) 
    mDate: Label = null;
    @property(Label) 
    mProfit: Label = null;
    @property(BaseButton) 
    mBtn: BaseButton = null;
    mData : RecordSingle;
    InitParam()
    {

    }
    BindUI()
    {
        this.mBtn.SetClickCallback(()=>
        {
            let gameType = this.mData.texasConfig.gameType;
            let gameId = this.mData.gameCode;
            let date = this.mData.date;
            NetworkHttp.Instance.PostRecordDetailData(gameId , date , gameType);

            UIMgr.Instance.ShowLayer("clubPage","prefab/Club_RecordDetailsLayer");  
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

    public InitWithData(_data : RecordSingle)
    {
        this.mData = _data;
        let tempColor;
        let gameTypeName;
        switch(_data.texasConfig.gameType)
        {
            case GameType.GameType_TexasCash:
                tempColor = new Color(109,176,99);
                gameTypeName = "NLH";

            break
            case GameType.GameType_ShortCash:
                tempColor = new Color(98,174,175);
                gameTypeName = "SHORT";
            break
            case GameType.GameType_OmhCash:
                tempColor = new Color(98,174,175);
                gameTypeName = "OMH";
            break
        }
        this.mCircleTimer.SetColor(tempColor);
        this.mCircleTimer.SetTimerTitle(_data.texasConfig.seatNum)
        this.mGameType.string = gameTypeName;
        this.mGameType.color = tempColor;

        let sb = Tool.ConvertMoney_S2C(_data.texasConfig.smallBlind);
        let ante = Tool.ConvertMoney_S2C(_data.texasConfig.ante);
        let binldInfo = sb + "";
        binldInfo += "/" + sb * 2;
        if(_data.texasConfig.straddle)
        {
            binldInfo += "/" + sb * 4;
        }

        if(ante > 0)
        {
            binldInfo += "(" + ante  + ")";
        }

        this.mBlindInfo.string = binldInfo;
        this.mDuration.string =  Tool.ConvertSecondsToHour(_data.texasConfig.gameDuration);
        this.mGameName.string = _data.texasConfig.gameName;
        this.mDate.string = _data.date;
        this.mProfit.string = Tool.ConvertMoney_S2C(_data.winLose) + "";
    }
}

