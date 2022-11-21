import { _decorator, Component, Node, Label, Color } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { GameConfig } from '../../GameConfig';
import { CircleTimer } from '../common/CircleTimer';
import { Club_CreateTexasConfig, HallData } from '../hall/HallData';

const { ccclass, property } = _decorator;

@ccclass('Club_GameItem')
export class Club_GameItem extends BaseUI 
{
    @property(CircleTimer) 
    mCircleTimer: CircleTimer = null;
    @property(Label) 
    mGameType: Label = null;
    @property(Label) 
    mGameName: Label = null;
    @property(Label) 
    mBlindInfo: Label = null;
    @property(Label) 
    mLeftTime: Label = null;
    @property(Node) 
    mScoreTag: Node = null;
    @property(Node) 
    mInsuranceTag: Node = null;
    @property(Node) 
    mIpTag: Node = null;
    @property(Label) 
    mMinBringIn: Label = null;
    @property(Label) 
    mMaxBringIn: Label = null;
    

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

    }
    CustmoerDestory()
    {

    }

    public InitWithData(_data : Club_CreateTexasConfig)
    {
        let tempData = HallData.Instance.ConvertCreateTexasConfigToProto(_data);
        this.InitWithServerData(tempData);
    }

    public InitWithServerData(_data : ClubGameInfo)
    {
        let tempColor;
        let gameTypeName;

        switch(_data.basicConfig.gameType)
        {
            case GameType.GameType_TexasCash:
                tempColor = new Color(109,176,99);
                gameTypeName = "NLH";
                this.mBlindInfo.string = _data.texasConfig.smallBlind + "/" + _data.texasConfig.smallBlind * 2;
                if(_data.texasConfig.straddle)
                {
                    this.mBlindInfo.string += "/" + _data.texasConfig.smallBlind * 4;
                }
                if(_data.texasConfig.ante > 0)
                {
                    this.mBlindInfo.string += "(" + _data.texasConfig.ante+ ")";
                }
                this.mMinBringIn.string = _data.texasConfig.minBringIn + "";
                this.mMaxBringIn.string = _data.texasConfig.maxBringIn + "";
            break
            case GameType.GameType_ShortCash:
                tempColor = new Color(98,174,175);
                gameTypeName = "Short";
                if(_data.basicConfig.shortConfig.scoreMode == ShortGameScoreMode.ShortGameScoreMode_BlindMode)
                {
                    this.mBlindInfo.string = _data.texasConfig.smallBlind + "/" + _data.texasConfig.smallBlind * 2;
                    if(_data.texasConfig.straddle)
                    {
                        this.mBlindInfo.string += "/" + _data.texasConfig.smallBlind * 4;
                    }
                    if(_data.texasConfig.ante > 0)
                    {
                        this.mBlindInfo.string += "(" + _data.texasConfig.ante+ ")";
                    }
                    this.mMinBringIn.string = _data.texasConfig.minBringIn + "";
                    this.mMaxBringIn.string = _data.texasConfig.maxBringIn + "";
                }
                else if(_data.basicConfig.shortConfig.scoreMode == ShortGameScoreMode.ShortGameScoreMode_AnteMode)
                {
                    this.mBlindInfo.string = _data.basicConfig.shortConfig.baseScore + " ante";
                    this.mMinBringIn.string = _data.basicConfig.shortConfig.baseScore * 50 + "";
                    this.mMaxBringIn.string = _data.basicConfig.shortConfig.baseScore * 100 + "";
                }
            break
            // case GameType.GameType_Mtt:
            //     gameTypeName = "Mtt"
            //     tempColor = new Color(59,52,122);
            // break
            // case GameType.GameType_Omh:
            //     gameTypeName = "Omh"
            //     tempColor = Color.WHITE;
            // break
        }
        this.mCircleTimer.SetColor(tempColor);
        this.mGameType.string = gameTypeName;
        this.mGameType.color = tempColor;


        if(_data.aboutGameInfo != null)
        {
            this.mCircleTimer.SetProgress(_data.aboutGameInfo.currentPlayerNum / _data.texasConfig.seatNum);
            this.mCircleTimer.SetTimerTitle(_data.aboutGameInfo.currentPlayerNum + "/"+_data.texasConfig.seatNum);
            this.mLeftTime.string = _data.aboutGameInfo.leftTime+ "/" + _data.texasConfig.gameDuration + "h";
        }
        else
        {
            this.mCircleTimer.SetProgress(1);
            this.mCircleTimer.SetTimerTitle(_data.texasConfig.seatNum + "");
            this.mLeftTime.string = _data.texasConfig.gameDuration + "h";
        }

        this.mGameName.string = _data.basicConfig.gameName;
        if(_data.basicConfig.currencyType == GameCurrencyType.GameCurrencyType_Coin)
        {
            this.mScoreTag.getChildByName("Label").getComponent(Label).string = Localization.GetString("00092");
        }
        else if(_data.basicConfig.currencyType == GameCurrencyType.GameCurrencyType_Point)
        {
            this.mScoreTag.getChildByName("Label").getComponent(Label).string = Localization.GetString("00093");
        }

        this.mInsuranceTag.active = _data.texasConfig.insurance;

        this.mIpTag.active = _data.texasConfig.gpsLimit || _data.texasConfig.ipLimit;
        let gpsAndIp = "";
        if(_data.texasConfig.gpsLimit)
        {
            gpsAndIp = "GPS";
            if(_data.texasConfig.ipLimit)
            {
                gpsAndIp += "/IP";
            }
        }
        else if(_data.texasConfig.ipLimit)
        {
            gpsAndIp = "IP";
        }
        this.mIpTag.getChildByName("Label").getComponent(Label).string = gpsAndIp;
    }
}

