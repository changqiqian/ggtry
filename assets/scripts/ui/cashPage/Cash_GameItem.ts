import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { NetworkSend } from '../../network/NetworkSend';
import { Tool } from '../../Tool';
import { BaseButton } from '../common/BaseButton';
import { MultipleTableCtr } from '../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Cash_GameItem')
export class Cash_GameItem extends BaseUI 
{
    @property(Label) 
    mDuration: Label = null;
    @property(Label) 
    mGameType: Label = null;
    @property(Label) 
    mBB: Label = null;
    @property(Label) 
    mBuyIn: Label = null;
    @property(Label) 
    mPlayerCount: Label = null;
    @property(Label) 
    mGameName: Label = null;
    @property(BaseButton) 
    mEnterBtn: BaseButton = null;
    @property(Node) 
    mTips: Node = null;
    mHallTexasGameInfo : HallTexasGameInfo = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mEnterBtn.SetClickCallback((_data)=>
        {
            MultipleTableCtr.TryToEnterGame(this.mHallTexasGameInfo.gameId , this.mHallTexasGameInfo.basicTexasConfig.gameType);
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

    public InitWithData(_data : HallTexasGameInfo)
    {
        this.mHallTexasGameInfo = _data;
        this.UpdateUI();
    }

    UpdateUI()
    {
        this.mGameName.string = this.mHallTexasGameInfo.basicTexasConfig.gameName;
        //显示盲注信息
        let sb = this.mHallTexasGameInfo.basicTexasConfig.smallBlind;
        let bb = sb * 2;
        let straddle = bb *  2;
        let ante = this.mHallTexasGameInfo.basicTexasConfig.ante;
        let bbInfo = Tool.ConvertMoney_S2C(sb) + "";
        bbInfo += "/";
        bbInfo += Tool.ConvertMoney_S2C(bb) + "";
        if(this.mHallTexasGameInfo.basicTexasConfig.straddle)
        {
            bbInfo += "/";
            bbInfo += Tool.ConvertMoney_S2C(straddle) + "";
        }
 
        bbInfo += "(" +Tool.ConvertMoney_S2C(ante) + ")";
        this.mBB.string = bbInfo;

        //显示买入信息
        let minBuy = this.mHallTexasGameInfo.basicTexasConfig.minBringIn;
        let maxBuy = this.mHallTexasGameInfo.basicTexasConfig.maxBringIn;
        this.mBuyIn.string = Tool.ConvertMoney_S2C(minBuy) + "-" + Tool.ConvertMoney_S2C(maxBuy);


        //游戏类型
        let gameType = this.mHallTexasGameInfo.basicTexasConfig.gameType;
        if(gameType == GameType.GameType_OmhCash)
        {
            this.mGameType.string = Localization.GetString("00238");
        }
        else if(gameType == GameType.GameType_ShortCash)
        {
            this.mGameType.string = Localization.GetString("00188");
        }
        else if(gameType == GameType.GameType_TexasCash)
        {
            this.mGameType.string = Localization.GetString("00306");
        }
        
        //玩家人数
        let maxPlayer = this.mHallTexasGameInfo.basicTexasConfig.seatNum;
        let currentPlayer = this.mHallTexasGameInfo.aboutGameInfo.currentPlayerNum;
        this.mPlayerCount.string = currentPlayer + "/" + maxPlayer;

        //刷新时间
        let totalTime = this.mHallTexasGameInfo.basicTexasConfig.gameDuration;
        let currentTime = this.mHallTexasGameInfo.aboutGameInfo.leftTime;
        this.mDuration.string = Tool.ConvertSecondsToHour(currentTime) + " / " + Tool.ConvertSecondsToHour(totalTime);


        let gameId = this.mHallTexasGameInfo.gameId;
        let struct = MultipleTableCtr.FindGameStructByGameId(gameId);
        this.mTips.active = struct != null;
    }

    
}

