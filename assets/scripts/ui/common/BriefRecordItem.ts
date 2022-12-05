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
    
    mData : any = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mVideoBtn.SetClickCallback(()=>
        {
            //UIMgr.Instance.ShowToast(this.mData.index + "");
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
    public InitWithData(_data : any)
    {
        this.mData = _data;
        // this.mVideoBtn.SetTitle(Localization.GetString("00271") + _data.index)
        // this.ResetCards();
        // this.mWinnerPlayerInfo.SetLocalHead(parseInt(_data.winnerHead));
        // this.mWinnerPlayerInfo.SetName(_data.winnerName);
        // this.mMyProfit.string = Tool.ConvertMoney_S2C(_data.myResult) + "";
        // this.mWinnerProfit.string = Tool.ConvertMoney_S2C(_data.winnerResult) + "";


        // for(let i = 0 ; i < _data.myCards.length ; i++)
        // {
        //     let currentCard = this.mMineCards.children[i].getComponent(Poker);
        //     currentCard.SetFrontByCardInfo(_data.myCards[i]);
        //     currentCard.ShowFront();
        // }

        // for(let i = 0 ; i < _data.winnerCards.length ; i++)
        // {
        //     let currentCard = this.mWinnerCards.children[i].getComponent(Poker);
        //     currentCard.SetFrontByCardInfo(_data.winnerCards[i]);
        //     currentCard.ShowFront();
        // }

        // for(let i = 0 ; i < _data.publicCards.length ; i++)
        // {
        //     let currentCard = this.mPublicCards.children[i].getComponent(Poker);
        //     currentCard.SetFrontByCardInfo(_data.publicCards[i]);
        //     currentCard.ShowFront();
        // }
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

