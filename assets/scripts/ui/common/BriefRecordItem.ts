import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { Tool } from '../../Tool';
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
    
    mData : SimpleReplayRecord = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mVideoBtn.SetClickCallback(()=>
        {
            if(this.mData  == null)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00377"));
                return;
            }
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
    public InitWithData(_data : SimpleReplayRecord , _VedioCallback)
    {
        this.ResetLabel();
        this.ResetCards();
        this.mData = _data;

        this.mVideoCallback = _VedioCallback;
        this.mVideoBtn.SetTitle(Localization.GetString("00271") + _data.index)
       
        let winner : PlayerWinLose = this.GetBigestWinner(_data.winnerSettlementResult);
        
        this.mWinnerPlayerInfo.SetLocalHead(parseInt(winner.head));
        this.mWinnerPlayerInfo.SetName(winner.nickName);
        this.mWinnerProfit.string = Tool.ConvertMoney_S2C(winner.winLose) + "";

        let selfInfo = _data.mySimpleInfo
        if(selfInfo !=null)
        {
            if(selfInfo.myResult != 0)
            {
                this.mMyProfit.string = Tool.ConvertMoney_S2C(selfInfo.myResult) + "";
            }
            for(let i = 0 ; i < selfInfo.myCards.length ; i++)
            {
                let currentCard = this.mMineCards.children[i].getComponent(Poker);
                currentCard.ShowRoot(true);
                currentCard.SetFrontByCardInfo(selfInfo.myCards[i]);
                currentCard.ShowFront();
            }
        }


        for(let i = 0 ; i < winner.cardInfo.length ; i++)
        {
            let currentCard = this.mWinnerCards.children[i].getComponent(Poker);
            //currentCard.ShowRoot(true);
            currentCard.SetFrontByCardInfo(winner.cardInfo[i]);
            currentCard.ShowFront();
        }

        for(let i = 0 ; i < _data.publicCards.length ; i++)
        {
            let currentCard = this.mPublicCards.children[i].getComponent(Poker);
            currentCard.ShowRoot(true);
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
            //currentCard.ShowRoot(false);
        }

        for(let i = 0 ; i < this.mPublicCards.children.length ; i++)
        {
            let currentCard = this.mPublicCards.children[i].getComponent(Poker);
            currentCard.ShowBack();
            currentCard.ShowRoot(false);
        }

        for(let i = 0 ; i < this.mMineCards.children.length ; i++)
        {
            let currentCard = this.mMineCards.children[i].getComponent(Poker);
            currentCard.ShowBack();
            currentCard.ShowRoot(false);
        }
    }
    
    ResetLabel()
    {
        this.mWinnerProfit.string = "";
        this.mMyProfit.string = "";
        this.mVideoBtn.SetTitle("");
        this.mWinnerPlayerInfo.SetName("");
    }
}

