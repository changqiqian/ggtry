import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Tool } from '../../../Tool';
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
    @property(Game_BetAmount) 
    mGame_BetAmount: Game_BetAmount = null;
    @property(Node) 
    mCards: Node = null;
    

    mSeatID : number = 0;

    
    
    
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

    ResetUI()
    {
        this.mEmptyNode.active = false;
        this.mInfoNode.active = false;
        this.mGame_BetAmount.Show(false);
        this.mCards.active = false;
    }

    public InitSeat(_seatId : number)
    {
        this.mSeatID = _seatId;
        this.ResetUI();
        let playerInfo = GameReplayData.Instance.GetPlayerBySeat(_seatId);
        if(playerInfo == null)
        {
            this.mEmptyNode.active = true;
            return;
        }

        this.mInfoNode.active = true;

        this.LoadLocalHead(parseInt(playerInfo.head) , (_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        })

        this.mAmount.string =  Tool.ConvertMoney_S2C(playerInfo.currencyNum) + "";
        this.mName.string = playerInfo.nickName;

        this.mDealer.active = GameReplayData.Instance.Data_CopyReplayData.mData.dealerUid == playerInfo.uid;

    }
}

