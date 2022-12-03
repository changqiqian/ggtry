import { _decorator, Component, Node, Sprite, Label, instantiate, AudioSource, Vec3, view } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { CardStruct } from '../../../base/Calculator';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { UIMgr } from '../../../base/UIMgr';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
import { CircleTimer } from '../../common/CircleTimer';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Poker } from '../../common/Poker';
import { GameData } from '../GameData';
import { Game_ActionTag } from './Game_ActionTag';
import { Game_AddMoneyLabel } from './Game_AddMoneyLabel';
import { Game_BetAmount } from './Game_BetAmount';
import { Game_BuyInWindow } from './Game_BuyInWindow';
import { Game_MovingCards } from './Game_MovingCards';
import { Game_MovingChip } from './Game_MovingChip';
import { Game_ProfileLayer } from './Game_ProfileLayer';
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
    mStateTitle: Label = null;
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
        this.mSelfBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("gamePage","prefab/Game_ProfileLayer",true,(_script)=>
            {
                let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
                let gameData = gameStruct.mGameData;
                let tempScript = _script as Game_ProfileLayer;
                let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
                if(playerInfo == null)
                {
                    return;
                }
                tempScript.InitWithData(this.mIndex,playerInfo.uid);
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });
    }


    HideAllUI()
    {
        this.mBG.active = false;
        this.mHead.node.active = false;
        this.mName.node.active = false;
        this.mAmount.node.active = false;
        this.mMiniCard.active = false;
        this.mCircleTimer.StopTimer();
        this.mDealer.active = false;
        this.mGame_ActionTag.node.active = false;
        this.mGame_BetAmount.node.active = false;
        this.mDarkCover.active = false;
        this.mCards.active = false;
        this.mStateTitle.node.active = false;
        this.mSelfBtn.node.active = false;
        this.mCountDown.string = "";
        this.StopSecondsTimer();
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
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
            if(playerInfo == null)
            {
                return;
            }
            this.PlayerSit();
            this.RestoreAction();
            this.RestoreTurn();
        });
        gameData.Data_S2CCommonSitDownNotify.AddListenner(this,(_data)=>
        {
            let playerInfo = _data.seatPlayerInfo;
            if(playerInfo.seat == this.mSeatID)
            {
                this.PlayerSit();
            }
        });

        gameData.Data_S2CCommonStandUpNotify.AddListenner(this,(_data)=>
        {
            if(_data.actionSeat == this.mSeatID)
            {
                this.HideAllUI();
                if(_data.actionUid == LocalPlayerData.Instance.Data_Uid.mData)
                {
                    UIMgr.Instance.ShowWindow("gamePage","prefab/Game_BuyInWindow",false,(_script)=>
                    {

                    },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
                }
            }
        });

        gameData.Data_S2CCommonBringInResp.AddListenner(this,(_data)=>
        {
            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
            if(selfPlayer == null)
            {
                return;
            }
            if(selfPlayer.seat == this.mSeatID)
            {
                if(gameData.CanPlayerBuyIn(LocalPlayerData.Instance.Data_Uid.mData))
                {
                    this.UpdateMoney();
                    this.ShowBuying(false)
                }
            }
        })

        gameData.Data_S2CCommonRoundStartNotify.AddListenner(this,(_data)=>
        {
            let currentPlayer = gameData.GetPlayerInfoBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                return;
            }

            this.PrepareRoundStart();
            
            let actionSB = gameData.FindAction(currentPlayer.uid , ActionType.ActionType_SB);
            if(actionSB != null)
            {
                this.ShowActionType(ActionType.ActionType_SB);
                this.Bet(actionSB.amount)
            }

            let actionBB = gameData.FindAction(currentPlayer.uid , ActionType.ActionType_BB);
            if(actionBB != null)
            {
                this.ShowActionType(ActionType.ActionType_BB);
                this.Bet(actionBB.amount)
            }

            let actionStraddle = gameData.FindAction(currentPlayer.uid , ActionType.ActionType_Straddle);
            if(actionStraddle != null)
            {
                this.ShowActionType(ActionType.ActionType_Straddle);
                this.Bet(actionStraddle.amount)
            }

            let dealerId = gameData.GetDynamicData().dealerUid;
            this.UpdateDealer(dealerId);
        })


        gameData.Data_S2CCommonPreFlopRoundNotify.AddListenner(this,(_data)=>
        {
            let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
            if(playerInfo == null)
            {
                return;
            }
            this.mMiniCard.active = true;
        })

        gameData.Data_S2CCommonCurrentActionNotify.AddListenner(this,(_data)=>
        {
            this.RestoreTurn();
        })


        gameData.Data_S2CCommonActionNotify.AddListenner(this,(_data)=>
        {
            this.ExcutiveAction();
        })

        gameData.Data_S2CCommonBuyInCountDownNotify.AddListenner(this,(_data)=>
        {
            let playerInfo = gameData.GetPlayerInfoByUid(_data.actionUid);
            if(playerInfo == null)
            {
                return;
            }

            if(playerInfo.seat != this.mSeatID)
            {
                return;
            }
            this.UpdateBuyInCountDown();
        })
    }

    PrepareRoundStart()
    {
        this.mMiniCard.active = false;
        this.mCircleTimer.StopTimer();
        this.mDealer.active = false;
        this.mGame_ActionTag.node.active = false;
        this.mGame_BetAmount.node.active = false;
        this.mCards.active = false;
    }

    PlayerSit()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;

        let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
        if(playerInfo == null)
        {
            return;
        }

        this.mSelfBtn.node.active = true;
        this.mBG.active = true;
        this.UpdateName();
        this.UpdateHead(playerInfo.head);
        this.UpdateMoney();
        this.UpdateDealer(gameData.GetDynamicData().dealerUid);

        if(playerInfo.currencyNum)
        {
            let playerPlaying = playerInfo.cards.length > 0;
            this.mMiniCard.active = playerPlaying;

            if(playerPlaying)
            {
                if(playerInfo.auto)
                {
                    this.ShowAuto(true  ,playerInfo.autoLeftTime);
                }
                else
                {
                    this.mDarkCover.active = playerInfo.fold;
                }
            }
        }
        else
        {
            if(playerInfo.currencyNum == 0 && playerInfo.bringInNum == 0)
            {
                this.UpdateBuyInCountDown();
            }
        }
    }

    ShowAuto( _show :boolean , _leftTime : number)
    {
        this.StopSecondsTimer();
        this.mCountDown.string = "";
        this.mStateTitle.node.active =_show;
        this.mDarkCover.active = _show;
        if(_show == false)
        {
            return;
        }
        this.mStateTitle.string = Localization.GetString("00241");
        this.StartSecondsTimer(_leftTime)
    }

    ShowBuying(_show :boolean ,_leftTime : number = 0)
    {
        this.StopSecondsTimer();
        this.mCountDown.string = "";
        this.mDarkCover.active = _show;
        this.mStateTitle.node.active =_show;
        if(_show == false)
        {
            return;
        }
        this.mStateTitle.string = Localization.GetString("00248");
        this.StartSecondsTimer(_leftTime)
    }

    UpdateBuyInCountDown()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;

        let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
        if(playerInfo == null)
        {
            return;
        }
        this.ShowBuying(true , playerInfo.buyInLeftTime);
        if(playerInfo.uid == LocalPlayerData.Instance.Data_Uid.mData)
        {
            UIMgr.Instance.ShowWindow("gamePage","prefab/Game_BuyInWindow",true,(_script)=>
            {
                let temp = _script as Game_BuyInWindow;
                temp.InitWithData(this.mIndex);
                temp.StartCountDown(playerInfo.buyInLeftTime);
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        }
    }

    RestoreAction()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
        if(playerInfo == null)
        {
            return;
        }

        let lastAct = gameData.FindLastActionByUid(playerInfo.uid);
        if(lastAct != null)
        {
            this.ShowActionType(lastAct.actionType);
            this.Bet(lastAct.amount);
        }

    }

    ExcutiveAction()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
        if(playerInfo == null)
        {
            return;
        }

        let lastAct = gameData.FindLastAction();
        if(lastAct == null)
        {
            return;
        }

        if(lastAct.uid != playerInfo.uid)
        {
            return;
        }

        if(playerInfo.uid == LocalPlayerData.Instance.Data_Uid.mData)
        {
            return;
        }

        this.mCircleTimer.StopTimer();
        this.ShowActionType(lastAct.actionType);
        this.Bet(lastAct.amount);
    }

    RestoreTurn()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
        if(playerInfo == null)
        {
            return;
        }
        let actionLeftTime = gameData.GetDynamicData().actionLeftTime;
        let currentActionUid =  gameData.GetDynamicData().actionUid;
        this.mCircleTimer.StopTimer();
        if(currentActionUid == playerInfo.uid)
        {
            this.mCircleTimer.StartTimer(actionLeftTime);
        }
    }

    OnSecondTimer()
    {
        let seconds = this.GetRestSeconds();
        this.mCountDown.string = seconds + "";
    }

    UpdateName()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
        if(playerInfo == null)
        {
            return;
        }

        if(playerInfo.uid == LocalPlayerData.Instance.Data_Uid.mData)
        {
            return;
        }
        this.mName.node.active = true;
        this.mName.string = playerInfo.nickName;
    }

    UpdateHead(_head : string)
    {
        this.LoadLocalHead(parseInt(_head) , (_spriteFrame)=>
        {
            this.mHead.node.active = true;
            this.mHead.spriteFrame = _spriteFrame;
        })
    }

    UpdateMoney()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
        if(playerInfo == null)
        {
            return;
        }

        if(playerInfo.uid == LocalPlayerData.Instance.Data_Uid.mData)
        {
            return;
        }

        this.mAmount.node.active = true;
        if(gameData.CanPlayerBuyIn(playerInfo.uid))
        {
            let totalMoney = playerInfo.bringInNum + playerInfo.currencyNum;
            this.mAmount.string =  Tool.ConvertMoney_S2C(totalMoney) + "";
        }
        else
        {
            this.mAmount.string =  Tool.ConvertMoney_S2C(playerInfo.currencyNum) + "";
        }
    
    }

    ShowCards(_cards : Array<CardInfo>)
    {
        if(_cards == null || _cards.length == 0)
        {
            this.mCards.active = false;
            return;
        }

        let cardNodes = this.mCards.children;
        this.mCards.active = true;
        for(let i = 0 ; i < _cards.length ; i++)
        {
            let currentPoker = cardNodes[i].getComponent(Poker);
            currentPoker.ResetAndHide();
            currentPoker.ShowBack(); 
            currentPoker.SetFrontByCardInfo(_cards[i]);
            currentPoker.FlipToFront();
        }
    }

    UpdateDealer(_dealerId : string)
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let isSelf = gameData.IsSelfBySeat(this.mSeatID);
        if(isSelf)
        {
            return;
        }
        let currentUid = gameData.GetUidBySeat(this.mSeatID);
        this.mDealer.active = currentUid == _dealerId;
    }

    Bet(_amount : number)
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let isSelf = gameData.IsSelfBySeat(this.mSeatID);
        if(isSelf)
        {
            return;
        }
        this.mGame_BetAmount.node.active = true;
        let amountS2C = Tool.ConvertMoney_S2C(_amount);
        this.mGame_BetAmount.Bet(amountS2C);
    }

    ShowActionType(_actionType : ActionType)
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        this.mDarkCover.active = _actionType == ActionType.ActionType_Fold;
        let isSelf = gameData.IsSelfBySeat(this.mSeatID);
        if(isSelf)
        {
            return;
        }

        this.mGame_ActionTag.SetType(_actionType);
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

