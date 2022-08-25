import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { BaseButton } from '../../common/BaseButton';
import { CircleTimer } from '../../common/CircleTimer';
import { GameData, Game_ActionType } from '../GameData';
import { Game_ActionTag } from './Game_ActionTag';
import { Game_BetAmount } from './Game_BetAmount';
const { ccclass, property } = _decorator;

@ccclass('Game_Player')
export class Game_Player extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mAmount: Label = null;
    @property(Node) 
    mMiniCard: Node = null;
    @property(CircleTimer) 
    mCircleTimer: CircleTimer = null;
    @property(Node) 
    mDealer: Node = null;
    @property(Game_ActionTag) 
    mGame_ActionTag: Game_ActionTag = null;
    @property(Game_BetAmount) 
    mGame_BetAmount: Game_BetAmount = null;
    @property(BaseButton) 
    mSelfBtn: BaseButton = null;
    mSeatID : number = null; //座位编号
    mData : any = null; //玩家数据
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mSelfBtn.SetClickCallback(()=>
        {

        });
    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_WhosTurn",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                return;
            }

            let time = GameData.GetInstance().Data_EnterGame.deskConfig.turnExpiredTime;
            this.mCircleTimer.StartTimer(time,(_leftTime)=>
            {
                
            })

        },this);
        GameData.GetInstance().AddListener("Data_UpdatePlayingPlayer",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            this.node.active = currentPlayer != null;
            if(currentPlayer == null)
            {
                return;
            }
            this.mData = currentPlayer;
            this.UpdatePlayer(currentPlayer);

        },this);

        GameData.GetInstance().AddListener("Data_UpdatePlayerScore",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                return;
            }
            this.mAmount.string = _current.score;

        },this);

        GameData.GetInstance().AddListener("Data_GameStart",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                return;
            }
  
            if(currentPlayer.userInfo.userId == _current.sUserId)
            {
                let sb = _current.baseScore;
                this.Bet(sb);
                this.SetActionTag(Game_ActionType.SB);
            }
            else if(currentPlayer.userInfo.userId == _current.bUserId)
            {
                let bb = _current.baseScore * 2;
                this.Bet(bb);
                this.SetActionTag(Game_ActionType.BB);
            }
            else
            {
                this.SetActionTag(Game_ActionType.None);
            }
            this.ShowMiniCards(true);
            this.UpdateDealer(_current.dUserId);
        },this);

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        GameData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {
        this.mData = null;
    }

    SetSeatID(_id : number)
    {
        this.mSeatID = _id;
    }

    UpdatePlayer(_playerData : any)
    {
        let userInfo = _playerData.userInfo;
        this.LoadLocalHead(userInfo.photoUrl , (_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });

        this.mName.string = userInfo.nickname;
        this.mAmount.string = userInfo.score;
    }

    UpdateDealer(_dealerId : number)
    {
        let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
        if(currentPlayer == null)
        {
            return;
        }
        this.mDealer.active = currentPlayer.userInfo.userId == _dealerId;
    }
    
    Bet(_amount : number)
    {

    }

    //发牌后，显示头像上的小扑克牌
    ShowMiniCards(_value : boolean)
    {
        let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
        if(currentPlayer.userInfo.userId == LocalPlayerData.GetInstance().Data_Uid)
        {
            this.mMiniCard.active = false;
        }
        else
        {
            this.mMiniCard.active = _value;
        }
    }

    SetActionTag(_actionType : Game_ActionType)
    {
        let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
        if(currentPlayer.userInfo.userId == LocalPlayerData.GetInstance().Data_Uid)
        {
            this.mGame_ActionTag.SetType(Game_ActionType.None);        
        }
        else
        {
            this.mGame_ActionTag.SetType(_actionType);
        }

        
    }
}

