import { _decorator, Component, Node, Label, Color } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { GameConfig } from '../../GameConfig';
import { NetworkSend } from '../../network/NetworkSend';
import { Tool } from '../../Tool';
import { BaseButton } from '../common/BaseButton';
import { CircleTimer } from '../common/CircleTimer';
import { MultipleTableCtr } from '../common/MultipleTableCtr';
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
    @property(Label) 
    mEnterAlready: Label = null;
    @property(BaseButton) 
    mEnterBtn: BaseButton = null;

    mData : ClubGameInfo = null;
    mGameId : string ;
    InitParam()
    {

    }
    BindUI()
    {
        this.mEnterBtn.SetClickCallback(()=>
        {
            NetworkSend.Instance.EnterGame(this.mGameId , this.mData.gameStaticData.basicConfig.gameType , this.mData.clubId);
        })
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

    public InitWithData(_gameId : string ,_data : Club_CreateTexasConfig)
    {
        let tempData = HallData.Instance.ConvertCreateTexasConfigToProto(_data);
        this.InitWithServerData(_gameId,tempData);
    }

    public ForbbidenEnter()
    {
        this.mEnterBtn.SetInteractable(false);
    }

    UpdateEnterAlready()
    {
        let gameStruct = MultipleTableCtr.FindGameStructByGameId(this.mGameId);
        if(gameStruct == null)
        {
            this.mEnterAlready.node.active = false;
        }
        else
        {
            this.mEnterAlready.node.active = true;
        }
    }

    public InitWithServerData(_gameId : string , _data : ClubGameInfo)
    {
        this.mGameId = _gameId;
        this.mData = _data;
        let tempColor;
        let gameTypeName;

        let smallBlind = Tool.ConvertMoney_S2C(_data.gameStaticData.texasConfig.smallBlind);
        switch(_data.gameStaticData.basicConfig.gameType)
        {
            case GameType.GameType_TexasCash:
                tempColor = new Color(109,176,99);
                gameTypeName = "NLH";
                this.mBlindInfo.string = smallBlind + "/" +smallBlind * 2;
                if(_data.gameStaticData.texasConfig.straddle)
                {
                    this.mBlindInfo.string += "/" + smallBlind * 4;
                }
                if(_data.gameStaticData.texasConfig.ante > 0)
                {
                    this.mBlindInfo.string += "(" + _data.gameStaticData.texasConfig.ante+ ")";
                }
                this.mMinBringIn.string = Tool.ConvertMoney_S2C(_data.gameStaticData.texasConfig.minBringIn) + "";
                this.mMaxBringIn.string = Tool.ConvertMoney_S2C(_data.gameStaticData.texasConfig.maxBringIn) + "";
            break
            case GameType.GameType_ShortCash:
                tempColor = new Color(98,174,175);
                gameTypeName = "Short";
                if(_data.gameStaticData.basicConfig.shortConfig.scoreMode == ShortGameScoreMode.ShortGameScoreMode_BlindMode)
                {
                    this.mBlindInfo.string = _data.gameStaticData.texasConfig.smallBlind + "/" + _data.gameStaticData.texasConfig.smallBlind * 2;
                    if(_data.gameStaticData.texasConfig.straddle)
                    {
                        this.mBlindInfo.string += "/" + _data.gameStaticData.texasConfig.smallBlind * 4;
                    }
                    if(_data.gameStaticData.texasConfig.ante > 0)
                    {
                        this.mBlindInfo.string += "(" + _data.gameStaticData.texasConfig.ante+ ")";
                    }
                    this.mMinBringIn.string = _data.gameStaticData.texasConfig.minBringIn + "";
                    this.mMaxBringIn.string = _data.gameStaticData.texasConfig.maxBringIn + "";
                }
                else if(_data.gameStaticData.basicConfig.shortConfig.scoreMode == ShortGameScoreMode.ShortGameScoreMode_AnteMode)
                {
                    this.mBlindInfo.string = _data.gameStaticData.basicConfig.shortConfig.baseScore + " ante";
                    this.mMinBringIn.string = _data.gameStaticData.basicConfig.shortConfig.baseScore * 50 + "";
                    this.mMaxBringIn.string = _data.gameStaticData.basicConfig.shortConfig.baseScore * 100 + "";
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


        this.mCircleTimer.SetProgress(1);
        if(_data.aboutGameInfo != null)
        {
            //this.mCircleTimer.SetProgress(_data.aboutGameInfo.currentPlayerNum / _data.gameStaticData.texasConfig.seatNum);
            this.mCircleTimer.SetTimerTitle(_data.aboutGameInfo.currentPlayerNum + "/"+_data.gameStaticData.texasConfig.seatNum);
            this.mLeftTime.string = _data.aboutGameInfo.leftTime+ "/" + _data.gameStaticData.texasConfig.gameDuration + "h";
        }
        else
        {
            //this.mCircleTimer.SetProgress(1);
            this.mCircleTimer.SetTimerTitle(_data.gameStaticData.texasConfig.seatNum + "");
            this.mLeftTime.string = _data.gameStaticData.texasConfig.gameDuration + "h";
        }

        this.mGameName.string = _data.gameStaticData.basicConfig.gameName;
        if(_data.gameStaticData.basicConfig.currencyType == GameCurrencyType.GameCurrencyType_Coin)
        {
            this.mScoreTag.getChildByName("Label").getComponent(Label).string = Localization.GetString("00092");
        }
        else if(_data.gameStaticData.basicConfig.currencyType == GameCurrencyType.GameCurrencyType_Point)
        {
            this.mScoreTag.getChildByName("Label").getComponent(Label).string = Localization.GetString("00093");
        }

        this.mInsuranceTag.active = _data.gameStaticData.texasConfig.insurance;

        this.mIpTag.active = _data.gameStaticData.texasConfig.gpsLimit || _data.gameStaticData.texasConfig.ipLimit;
        let gpsAndIp = "";
        if(_data.gameStaticData.texasConfig.gpsLimit)
        {
            gpsAndIp = "GPS";
            if(_data.gameStaticData.texasConfig.ipLimit)
            {
                gpsAndIp += "/IP";
            }
        }
        else if(_data.gameStaticData.texasConfig.ipLimit)
        {
            gpsAndIp = "IP";
        }
        this.mIpTag.getChildByName("Label").getComponent(Label).string = gpsAndIp;


        this.UpdateEnterAlready();
    }
}

