import { _decorator, Component, Node, Sprite, Label, instantiate, AudioSource, Vec3, view } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { CardStruct } from '../../../base/Calculator';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
import { CircleTimer } from '../../common/CircleTimer';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Poker } from '../../common/Poker';
import { GameData } from '../GameData';
import { Game_ActionTag } from './Game_ActionTag';
import { Game_AddMoneyLabel } from './Game_AddMoneyLabel';
import { Game_BetAmount } from './Game_BetAmount';
import { Game_MovingCards } from './Game_MovingCards';
import { Game_MovingChip } from './Game_MovingChip';
const { ccclass, property } = _decorator;

@ccclass('Game_Player')
export class Game_Player extends BaseUI 
{
    @property(Node) 
    mBG: Node = null;
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
    mCards: Node = null;
    @property(Label) 
    mLeaveTitle: Label = null;
    @property(Node) 
    mDarkCover: Node = null;
    @property(Label) 
    mCountDown: Label = null;
    @property(BaseButton) 
    mSelfBtn: BaseButton = null;

    mSeatID : number = null; //座位编号
    private mIndex : number = null;
    InitParam() 
    {
    }
    BindUI() 
    {
        // this.node.active = false;
        this.mSelfBtn.SetClickCallback(()=>
        {

        });
    }


    HideAllUI()
    {
        this.mBG.active = false;
        this.mHead.node.active = false;
        this.mName.node.active = false;
        this.mAmount.node.active = false;
        this.mMiniCard.active = false;
        this.mCircleTimer.node.active = false;
        this.mDealer.active = false;
        this.mGame_ActionTag.node.active = false;
        this.mGame_BetAmount.node.active = false;
        this.mDarkCover.active = false;
        this.mCards.active = false;
        this.mLeaveTitle.node.active = false;
        this.mSelfBtn.node.active = false;
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

    InitWithData(_index : number , _id : number)
    {
        this.mIndex = _index;
        this.mSeatID = _id;
        this.HideAllUI();
        this.BindData();
    }

    BindData()
    {
        let gameData:GameData = MultipleTableCtr.GetGameDataByIndex(this.mIndex);
        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            let seatInfos = _data.gameDynamic.seatInfos;
            for(let i = 0 ; i < seatInfos.length ; i++)
            {
                let currentSeatInfo = seatInfos[i];
                if(currentSeatInfo.seat == this.mSeatID)
                {
                    this.PlayerSit(currentSeatInfo.playerInfo);
                    this.RestoreAction();
                    break;
                }
            }
        });
        gameData.Data_S2CCommonSitDownNotify.AddListenner(this,(_data)=>
        {
            let seatInfo = _data.seatInfo;
            if(seatInfo.seat == this.mSeatID)
            {
                this.PlayerSit(seatInfo.playerInfo);
            }
        });

        gameData.Data_S2CCommonStandUpNotify.AddListenner(this,(_data)=>
        {
            let tempSeatId = gameData.GetSeatByUid( _data.actionUid);
            if(tempSeatId == this.mSeatID)
            {
                this.HideAllUI();
            }
        });
    }

    PlayerSit(_playerInfo : PlayerInfo)
    {
        let gameData:GameData = MultipleTableCtr.GetGameDataByIndex(this.mIndex);
        this.UpdateName(_playerInfo.nickName);
        this.UpdateHead(_playerInfo.head);
        this.UpdateMoney(Tool.ConvertMoney_S2C(_playerInfo.currency));
        this.UpdateDealer(gameData.Data_S2CCommonEnterGameResp.mData.gameDynamic.dealerUid);

        if(_playerInfo.buyIn)
        {
            if(_playerInfo.playThisTurn)
            {
                let isSelf = gameData.IsSelfBySeat(this.mSeatID);
                if(isSelf)
                {
                    this.UpdateSelfCards(_playerInfo.cards);
                }
                else
                {
                    this.UpdateMiniCards(_playerInfo.playThisTurn);
                }
                this.mDarkCover.active = _playerInfo.fold || _playerInfo.auto;

                this.mLeaveTitle.node.active = _playerInfo.auto;
                if(_playerInfo.auto)
                {
                    this.StartSecondsTimer(_playerInfo.autoLeftTime)
                }
            }
        }
        else
        {
            this.mDarkCover.active = true;
            this.StartSecondsTimer(_playerInfo.buyInLeftTime);
        }
    }

    RestoreAction()
    {
        let gameData:GameData = MultipleTableCtr.GetGameDataByIndex(this.mIndex);
        let currentUid = gameData.GetUidBySeat(this.mSeatID);
        if(currentUid == null)
        {
            return;
        }
        let sbAction = gameData.FindAction(currentUid,ActionType.ActionType_SB);
        let bbAction = gameData.FindAction(currentUid,ActionType.ActionType_BB);
        let straddleAction = gameData.FindAction(currentUid,ActionType.ActionType_Straddle);
        let foldAction = gameData.FindAction(currentUid,ActionType.ActionType_Fold);
        let checkAction = gameData.FindAction(currentUid,ActionType.ActionType_Check);
        let betAction = gameData.FindAction(currentUid,ActionType.ActionType_Bet);
        if(sbAction != null)
        {
            this.UpdateActionTag(ActionType.ActionType_SB);
            this.Bet(sbAction.amount);
        }
        else if(bbAction != null)
        {
            this.UpdateActionTag(ActionType.ActionType_BB);
            this.Bet(bbAction.amount);
        }
        else if(straddleAction != null)
        {
            this.UpdateActionTag(ActionType.ActionType_Straddle);
            this.Bet(straddleAction.amount);
        }
        else if(foldAction != null)
        {
            this.UpdateActionTag(ActionType.ActionType_Fold);
        }
        else if(checkAction != null)
        {
            this.UpdateActionTag(ActionType.ActionType_Check);
        }
        else if(betAction != null)
        {
            this.UpdateActionTag(ActionType.ActionType_Bet);
            this.Bet(betAction.amount);
        }
        else
        {
            let actionLeftTime = gameData.Data_S2CCommonEnterGameResp.mData.gameDynamic.actionLeftTime;
            let currentActionUid =  gameData.Data_S2CCommonEnterGameResp.mData.gameDynamic.actionUid;
            if(currentActionUid == currentUid)
            {
                this.ShowCircleTimer(true , actionLeftTime);
            }
        }
    }

    OnSecondTimer()
    {
        let seconds = this.GetRestSeconds();
        this.mCountDown.string = seconds + "";
    }

    UpdateName(_name : string)
    {
        this.mName.node.active = true;
        this.mName.string = _name;
    }

    UpdateHead(_head : string)
    {
        this.LoadLocalHead(parseInt(_head) , (_spriteFrame)=>
        {
            this.mHead.node.active = true;
            this.mHead.spriteFrame = _spriteFrame;
        })
    }

    UpdateMoney(_money : number)
    {
        this.mAmount.node.active = true;
        this.mAmount.string = _money + "";
    }

    ShowCircleTimer(_show : boolean , _leftTime : number)
    {
        this.mCircleTimer.node.active = _show;
        if(_show)
        {
            this.mCircleTimer.StartTimer(_leftTime);
        }
    }

    UpdateSelfCards(_cards : Array<CardInfo>)
    {
        let cardNodes = this.mCards.children;
        if(_cards.length == 0)
        {
            this.mCards.active = false;
            return;
        }

        this.mCards.active = true;
        for(let i = 0 ; i < _cards.length ; i++)
        {
            let currentPoker = cardNodes[i].getComponent(Poker);
            let cardStruct = new CardStruct(_cards[i].number , _cards[i].type);
            currentPoker.ShowBack(); 
            currentPoker.SetFront(cardStruct);
            currentPoker.FlipToFront();
        }
    }

    UpdateMiniCards(_haveCards : boolean)
    {
        this.mMiniCard.active = _haveCards;
    }

    UpdateDealer(_dealerId : string)
    {
        let gameData:GameData = MultipleTableCtr.GetGameDataByIndex(this.mIndex);
        let currentUid = gameData.GetUidBySeat(this.mSeatID);
        this.mDealer.active = currentUid == _dealerId;
    }

    UpdateActionTag(_actionType : ActionType)
    {
        this.mGame_ActionTag.SetType(_actionType);
    }
    
    Bet(_amount : number)
    {
        this.mGame_BetAmount.node.active = true;
        this.mGame_BetAmount.Bet(_amount);
    }

    ShowWin(_winScore:number , _totalScore : number)
    {
        this.LoadPrefab("gamePage" , "prefab/Game_AddMoneyLabel" , (_prefab)=>
        {
            let tempNode = instantiate(_prefab);
            this.node.addChild(tempNode);
            let tempScript = tempNode.getComponent(Game_AddMoneyLabel);
            tempScript.InitWithData(_winScore);
        });

        this.LoadPrefab("gamePage" , "prefab/Game_WinEffect" , (_prefab)=>
        {
            let tempNode = instantiate(_prefab);
            this.node.addChild(tempNode);
        });
    }
}

