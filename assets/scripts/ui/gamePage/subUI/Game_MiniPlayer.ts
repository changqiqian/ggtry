import { _decorator, Component, Node, Sprite, Label, Widget } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Tool } from '../../../Tool';
import { Poker } from '../../common/Poker';
import { GameReplayData } from '../GameReplayData';
import { Game_BetAmount } from './Game_BetAmount';
const { ccclass, property } = _decorator;

@ccclass('Game_MiniPlayer')
export class Game_MiniPlayer extends BaseUI 
{
    @property(Node) 
    mEmptyNode: Node = null;
    @property(Node) 
    mInfoNode: Node = null;
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mAmount: Label = null;
    @property(Label) 
    mName: Label = null;
    @property(Node) 
    mDealer: Node = null;
    @property(Label) 
    mWinLose: Label = null;
    @property(Node) 
    mCards: Node = null;
    

    mSeatID : number = 0;

    
    
    mFinalAmount : number;
    InitParam()
    {

    }
    BindUI()
    {
        let widget = this.node.getComponent(Widget);
        if(widget != null)
        {
            if(widget.enabled == true)
            {
                widget.updateAlignment();
            }
            widget.enabled = false;
            widget.destroy();
        }
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

    ResetUI()
    {
        this.mEmptyNode.active = false;
        this.mInfoNode.active = false;
        this.mCards.active = false;
    }

    public InitSeat(_seatId : number)
    {
        this.mSeatID = _seatId;
        this.mWinLose.node.active = false;
        this.ResetUI();
        let playerInfo = GameReplayData.Instance.GetPlayerBySeat(_seatId);
        if(playerInfo == null)
        {
            //this.mEmptyNode.active = true;
            return;
        }

        this.mInfoNode.active = true;

        this.LoadHead(playerInfo.head , (_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        })

      
        this.mName.string = playerInfo.nickName;
        this.mDealer.active = GameReplayData.Instance.Data_CopyReplayData.mData.dealerUid == playerInfo.uid;
        this.mCards.active = true;
        for(let i = 0 ; i < this.mCards.children.length ; i++)
        {
            let currentPoker = this.mCards.children[i].getComponent(Poker);
            currentPoker.ShowBack();
        }

        let cardsInfo = GameReplayData.Instance.GetCardsByUid(playerInfo.uid);
        this.ShowCards(cardsInfo);
        this.CalculateFinalAmount(playerInfo);
    }

    CalculateFinalAmount(_playerInfo : PlayerInfo)
    {
        let winloseInfo = GameReplayData.Instance.GetWinResult(_playerInfo.seat);
        if(winloseInfo !=null && winloseInfo.winLose > 0)
        {
            this.mWinLose.node.active = true;
            this.mAmount.string =  Tool.ConvertMoneyTo_K(winloseInfo.amount) 
            this.mWinLose.string =  "+" + Tool.ConvertMoneyTo_K(winloseInfo.winLose);
            return;
        }

        this.mFinalAmount = _playerInfo.currencyNum;

        let blinds = GameReplayData.Instance.GetRoundStartActions();
        let preflop = GameReplayData.Instance.GetPreflopActions();
        let flop = GameReplayData.Instance.GetFlopActions();
        let turn = GameReplayData.Instance.GetTurnActions();
        let river = GameReplayData.Instance.GetRiverActions();
        this.CalculateAmountByActions(blinds , _playerInfo.uid);
        this.CalculateAmountByActions(preflop , _playerInfo.uid);
        this.CalculateAmountByActions(flop , _playerInfo.uid);
        this.CalculateAmountByActions(turn , _playerInfo.uid);
        this.CalculateAmountByActions(river , _playerInfo.uid);

        this.mAmount.string =  Tool.ConvertMoneyTo_K(this.mFinalAmount)
    }

    CalculateAmountByActions(_actions : Array<ActionResult> , _uid : string)
    {
        if(_actions == null)
        {
            return;
        }
        for(let i = 0 ; i < _actions.length ; i++)
        {
            let actionResult : ActionResult = _actions[i];
            let actInfo:ActionInfo = actionResult.actionInfo;
            if(actInfo.uid == _uid)
            {
                this.mFinalAmount -= actInfo.amount;
            }
        }
    }

    ShowCards(_cards : Array<CardInfo>)
    {
        if(_cards == null)
        {
            return;
        }
        for(let i = 0 ; i < _cards.length ; i++)
        {
            let currentCard = _cards[i];
            let currentPoker = this.mCards.children[i].getComponent(Poker);
            currentPoker.SetFrontByCardInfo(currentCard);
            currentPoker.ShowFront();
        }
    }
}

