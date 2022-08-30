import { _decorator, Component, Node, Sprite, Label, instantiate, AudioSource, Vec3, view } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { BaseButton } from '../../common/BaseButton';
import { CircleTimer } from '../../common/CircleTimer';
import { Poker } from '../../common/Poker';
import { GameData, Game_ActionType } from '../GameData';
import { Game_ActionTag } from './Game_ActionTag';
import { Game_BetAmount } from './Game_BetAmount';
import { Game_MovingCards } from './Game_MovingCards';
import { Game_MovingChip } from './Game_MovingChip';
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
    @property(Node) 
    mFold: Node = null;
    @property(Node) 
    mCards: Node = null;
    @property(Node) 
    mLeaveStatus: Node = null;
    @property(BaseButton) 
    mSelfBtn: BaseButton = null;

    mSeatID : number = null; //座位编号
    InitParam() 
    {
    }
    BindUI() 
    {
        this.node.active = false;
        this.mSelfBtn.SetClickCallback(()=>
        {

        });

        this.HideAllUI();
    }


    HideAllUI()
    {
        this.mMiniCard.active = false;
        this.mCircleTimer.node.active = false;
        this.mDealer.active = false;
        this.mGame_ActionTag.node.active = false;
        this.mGame_BetAmount.node.active = false;
        this.mCards.active = false;

    }

    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_EnterGame",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                this.node.active = false;
                return;
            }
            let deskInfo = GameData.GetInstance().Data_DeskInfo;
            if(currentPlayer.userInfo.userId == LocalPlayerData.GetInstance().Data_Uid)
            {
                if(deskInfo.curTurnUserId == LocalPlayerData.GetInstance().Data_Uid)
                {
                    this.node.active = false;
                }
                else
                {
                    this.node.active = true;
                }
            }
            else
            {
                this.node.active = true;
            }
            this.UpdatePlayer(currentPlayer , deskInfo);
        },this);

        GameData.GetInstance().AddListener("Data_WhosTurn",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                this.node.active = false;
                return;
            }

            this.node.active = true;
            if(currentPlayer.userInfo.userId != _current.userId)
            {
                return;
            }

            if(currentPlayer.userInfo.userId == LocalPlayerData.GetInstance().Data_Uid)
            {
                this.node.active = false;
            }
            else
            {
                
            }
            let time = GameData.GetInstance().Data_EnterGame.deskConfig.turnExpiredTime;
            this.UpdateTimer(true , time);
        },this);

        GameData.GetInstance().AddListener("Data_UpdatePlayingPlayer",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            this.node.active = false;
            if(currentPlayer == null)
            {
                return;
            }

            if(currentPlayer.userInfo.userId == LocalPlayerData.GetInstance().Data_Uid)
            {
                let deskInfo = GameData.GetInstance().Data_DeskInfo;
                if(deskInfo.curTurnUserId != LocalPlayerData.GetInstance().Data_Uid)
                {
                    this.node.active = true;
                }
                
            }
            else
            {
                this.node.active = currentPlayer != null;
            }

            if(currentPlayer.isGiveUp)
            {

            }

            this.mLeaveStatus.active = currentPlayer.isLeave;
        },this);

        GameData.GetInstance().AddListener("Data_UpdatePlayerScore",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                return;
            }

            if(currentPlayer.userInfo.userId == _current.userId)
            {
                this.mAmount.string = _current.score;
            }
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
            }
            else if(currentPlayer.userInfo.userId == _current.bUserId)
            {
                let bb = _current.baseScore * 2;
                this.Bet(bb);
            }
            else 
            {
                this.Bet(-1);
            }

            this.SetActionTag(Game_ActionType.None);
            this.ShowCards(null);
            this.UpdateTimer(false,0);
            this.ShowMiniCards(true);
            this.UpdateDealer(_current.dUserId);
        },this);

        GameData.GetInstance().AddListener("Data_PlayerAction",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                return;
            }
            if(currentPlayer.userInfo.userId != _current.userId)
            {
                return;
            }

            if(currentPlayer.userInfo.userId == LocalPlayerData.GetInstance().Data_Uid)
            {
                this.node.active = _current.gameOpType != Game_ActionType.Delay
            }

            if(_current.gameOpType == Game_ActionType.Delay)
            {
                this.UpdateTimer(true,_current.leftTime);
            }
            else
            {
                if(currentPlayer.userInfo.userId == LocalPlayerData.GetInstance().Data_Uid)
                {
                    return
                }

                if(_current.gameOpType == Game_ActionType.Fold)
                {
                    this.LoadPrefab("gamePage" , "prefab/Game_MovingCards" , (_prefab)=>
                    {
                        let tempNode = instantiate(_prefab);
                        this.node.addChild(tempNode);
                        let tempScript = tempNode.getComponent(Game_MovingCards);
                        let startWolrdPos = this.node.worldPosition;
                        let screenSize = view.getVisibleSize();
                        let endWolrdPos = new Vec3(screenSize.width/2, screenSize.height * 0.6 , 0);
                        tempScript.FlyTo(startWolrdPos , endWolrdPos);
                    });
                }

                if(_current.gameOpType == Game_ActionType.Call ||
                    _current.gameOpType == Game_ActionType.Raise ||
                    _current.gameOpType == Game_ActionType.Allin )
                {
                    this.LoadPrefab("gamePage" , "prefab/Game_MovingChip" , (_prefab)=>
                    {
                        let tempNode = instantiate(_prefab);
                        this.node.addChild(tempNode);
                        let tempScript = tempNode.getComponent(Game_MovingChip);
                        let startWolrdPos = this.node.worldPosition;
                        let endWolrdPos = this.mGame_BetAmount.node.worldPosition;
                        tempScript.FlyToBet(startWolrdPos , endWolrdPos);
                    });
                    this.Bet(_current.tableScore);
                }
                this.UpdateTimer(false,0);
                this.SetActionTag(_current.gameOpType);
            }
            this.ShowMiniCards(_current.gameOpType != Game_ActionType.Fold);

        },this);
        GameData.GetInstance().AddListener("Data_SendPublicCards",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                return;
            }
            this.UpdateTimer(false,0);
            this.SetActionTag(Game_ActionType.None);
            this.Bet(-1);

            if(currentPlayer.userInfo.userId == LocalPlayerData.GetInstance().Data_Uid)
            {
                return;
            }

            if(currentPlayer.tableScore > 0) //收筹码
            {
                GameData.GetInstance().Data_CollectChipFromPlayer = this.mGame_BetAmount.node.worldPosition;
            }

        },this);

        GameData.GetInstance().AddListener("Data_GameResult",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                return;
            }

            this.UpdateTimer(false,0);
            this.SetActionTag(Game_ActionType.None);
            this.Bet(-1);
            if(currentPlayer.tableScore > 0) //收筹码
            {
                GameData.GetInstance().Data_CollectChipFromPlayer = this.mGame_BetAmount.node.worldPosition;
            }



            if(_current.showInfo != null)
            {
                for(let i = 0 ; i < _current.showInfo.length ; i++)
                {
                    let currentShowData = _current.showInfo[i];
                    if(currentPlayer.userInfo.userId == currentShowData.userId)
                    {
                        this.ShowCards(currentShowData.cards);
                    }
                }
            }

            for(let i = 0 ; i < _current.cardList.length ; i++)
            {
                let currentCardData = _current.cardList[i];
                if(currentPlayer.userInfo.userId == currentCardData.userId)
                {
                    this.ShowCards(currentCardData.cards);
                }
            }

            if( _current.loseList != null)
            {
                for(let i = 0 ; i < _current.loseList.length ; i++)
                {
                    let currentLoseData = _current.loseList[i];
                    if(currentPlayer.userInfo.userId == currentLoseData.userId)
                    {
                        this.ShowLose(currentLoseData.winScore , currentLoseData.totalScore);
                    }
                }
            }

            this.scheduleOnce(()=>
            {
                for(let i = 0 ; i < _current.winList.length ; i++)
                {
                    let currentWinData = _current.winList[i];
                    if(currentPlayer.userInfo.userId == currentWinData.userId)
                    {
                        GameData.GetInstance().Data_SendChipToWinner = this.mGame_BetAmount.node.worldPosition;
                        this.scheduleOnce(()=>
                        {
                            this.ShowWin(currentWinData.winScore , currentWinData.totalScore);
                        },1.0);
                    }
                }
            },1.5);
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
    }

    SetSeatID(_id : number)
    {
        this.mSeatID = _id;
    }

    UpdatePlayer(_playerData : any , _deskInfo : any)
    {
        this.LoadLocalHead(parseInt(_playerData.userInfo.photoUrl) , (_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });
        this.HideActionUI();
        this.mName.string = _playerData.userInfo.nickname;
        this.mAmount.string = _playerData.userInfo.score + "";
        this.Bet(_playerData.tableScore);
        this.UpdateDealer(_deskInfo.dUserId);        
        this.ShowMiniCards((_playerData.isGiveUp == false) && (_playerData.isSendHandCard == true));
        let showTimer = _playerData.userInfo.userId == _deskInfo.curTurnUserId;
        this.UpdateTimer(showTimer, _deskInfo.leftTime);
        this.SetActionTag(_playerData.operateCard);
        this.ShowCards(_playerData.cards);
    }

    SetActionTag(_actionType : Game_ActionType)
    {
        if(this.NeedHide())
        {
            this.mGame_ActionTag.node.active = false;
            return;
        }
        this.mGame_ActionTag.SetType(_actionType);
    }
    UpdateTimer(_show : boolean , _leftTime : number)
    {
        if(this.NeedHide())
        {
            this.mCircleTimer.node.active = false;
            return;
        }

        this.mCircleTimer.node.active = _show;
        if(_show)
        {
            this.mCircleTimer.StartTimer(_leftTime);
        }
    }

    UpdateDealer(_dealerId : string)
    {
        if(this.NeedHide())
        {
            this.mDealer.active = false;
            return;
        }

        let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
        if(currentPlayer == null)
        {
            this.mDealer.active = false;
            return;
        }
        this.mDealer.active = currentPlayer.userInfo.userId == _dealerId;
    }
    
    Bet(_amount : number)
    {
        this.mGame_BetAmount.node.active = false;
        if(_amount == -1)
        {
            return;
        }

        if(this.NeedHide())
        {
            return;
        }
        if(_amount > 0)
        {
            this.mGame_BetAmount.node.active = true;
            this.mGame_BetAmount.Bet(_amount);
        } 
    }

    //发牌后，显示头像上的小扑克牌
    ShowMiniCards(_show : boolean)
    {
        this.mFold.active = !_show;
        if(this.NeedHide())
        {
            this.mMiniCard.active = false;
            return;
        }

        this.mMiniCard.active = _show;
    }

    ShowCards(_cards : Array<number>)
    {
        this.mCards.active = false;
        if(this.NeedHide())
        {
            return;
        }
        if(_cards == null)
        {
            return;
        }
        if(_cards.length == 0)
        {
            return;
        }
        for(let i = 0 ; i < _cards.length ; i++)
        {
            let currentData = _cards[i];
            if(currentData <= 0)
            {
                continue;
            }
            this.mCards.active = true;
            let poker = this.mCards.children[i].getComponent(Poker);
            poker.ShowBack();
            poker.SetFrontByServerData(currentData);
            poker.FlipToFront();
        }
    }

    ShowWin(_winScore:number , _totalScore : number)
    {
        
    }

    ShowLose(_winScore:number , _totalScore : number)
    {

    }

    HideActionUI()
    {
        this.mMiniCard.active = false;
        this.mCircleTimer.node.active = false;
        this.mDealer.active = false;
        this.mGame_ActionTag.node.active = false;
        this.mGame_BetAmount.node.active = false;
        this.mCards.active = false;
    }

    NeedHide()  : boolean
    {
        let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
        if(currentPlayer == null)
        {
            return true;
        }
        if(currentPlayer.userInfo.userId == LocalPlayerData.GetInstance().Data_Uid)
        {
            return true;        
        }
        return false;
    }
}

