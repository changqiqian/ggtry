import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { NetworkHttp } from '../../network/NetworkHttp';
import { Tool } from '../../Tool';
import { Game_CashReplay } from '../gamePage/subUI/Game_CashReplay';
import { BaseButton } from './BaseButton';
import { PlayerInfo } from './PlayerInfo';
import { Poker } from './Poker';
const { ccclass, property } = _decorator;

@ccclass('BriefRecordItem')
export class BriefRecordItem extends BaseUI 
{
    @property(PlayerInfo) 
    mWinnerPlayerInfo: PlayerInfo = null;
    @property(Node) 
    mWinnerCards: Node = null;
    @property(Node) 
    mPublicCards: Node = null;
    @property(Node) 
    mMineCards: Node = null;
    @property(Label) 
    mWinnerProfit: Label = null;
    @property(Label) 
    mMyProfit: Label = null;
    @property(BaseButton) 
    mVideoBtn: BaseButton = null;

    mVideoCallback : Function;
    
    mData : SimpleReplay = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mVideoBtn.SetClickCallback(()=>
        {
            let gameId = this.mData.gameId;
            let index = this.mData.index;
            let date = this.mData.date;
            if(this.mVideoCallback  != null)
            {
                this.mVideoCallback(gameId , index , date);
            }
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
    public InitWithData(_data : SimpleReplay , _VedioCallback)
    {
        this.mVideoCallback = _VedioCallback;
        this.mData = _data;
        this.mVideoBtn.SetTitle(Localization.GetString("00271") + _data.index)
        this.ResetCards();

        let winner : PlayerWinLose = this.GetBigestWinner(_data.winnerResult);
        
        this.mWinnerPlayerInfo.SetLocalHead(parseInt(winner.head));
        this.mWinnerPlayerInfo.SetName(winner.nickName);
        this.mWinnerProfit.string = Tool.ConvertMoney_S2C(winner.winLose) + "";

        let selfInfo = _data.mySimpleInfo
        if(selfInfo !=null)
        {
            this.mMyProfit.string = Tool.ConvertMoney_S2C(selfInfo.myResult) + "";
            for(let i = 0 ; i < selfInfo.myCards.length ; i++)
            {
                let currentCard = this.mMineCards.children[i].getComponent(Poker);
                currentCard.SetFrontByCardInfo(selfInfo.myCards[i]);
                currentCard.ShowFront();
            }
        }

        for(let i = 0 ; i < winner.cardInfo.length ; i++)
        {
            let currentCard = this.mWinnerCards.children[i].getComponent(Poker);
            currentCard.SetFrontByCardInfo(winner.cardInfo[i]);
            currentCard.ShowFront();
        }

        for(let i = 0 ; i < _data.publicCards.length ; i++)
        {
            let currentCard = this.mPublicCards.children[i].getComponent(Poker);
            currentCard.SetFrontByCardInfo(_data.publicCards[i]);
            currentCard.ShowFront();
        }
    }
    
    GetBigestWinner(_winners : Array<PlayerWinLose>) : PlayerWinLose
    {
        let bigWinner = null;
        for(let i = 0 ; i < _winners.length ; i++)
        {
            if(i == 0)
            {
                bigWinner = _winners[i];
            }
            else
            {
                let current = _winners[i];
                if(current.winLose > bigWinner.winLose)
                {
                    bigWinner = current;
                }
            }
        }

        return bigWinner;
    }

    ResetCards()
    {
        for(let i = 0 ; i < this.mWinnerCards.children.length ; i++)
        {
            let currentCard = this.mWinnerCards.children[i].getComponent(Poker);
            currentCard.ShowBack();
        }

        for(let i = 0 ; i < this.mPublicCards.children.length ; i++)
        {
            let currentCard = this.mPublicCards.children[i].getComponent(Poker);
            currentCard.ShowBack();
        }

        for(let i = 0 ; i < this.mMineCards.children.length ; i++)
        {
            let currentCard = this.mMineCards.children[i].getComponent(Poker);
            currentCard.ShowBack();
        }
    }
    
}

