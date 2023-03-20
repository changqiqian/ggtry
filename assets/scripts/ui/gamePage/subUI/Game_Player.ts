import { _decorator, Component, Node, Sprite, Label, instantiate, AudioSource, Vec3, view, Color } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Combiantion } from '../../../base/Calculator';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { UIMgr } from '../../../base/UIMgr';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
import { CircleTimer } from '../../common/CircleTimer';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Poker } from '../../common/Poker';
import { GameReplayData } from '../GameReplayData';
import { Game_ActionTag } from './Game_ActionTag';
import { Game_BetAmount } from './Game_BetAmount';
import { Game_BuyInWindow } from './Game_BuyInWindow';
import { Game_MovingCards } from './Game_MovingCards';
import { Game_MovingChip } from './Game_MovingChip';
import { Game_PlayerState } from './Game_PlayerState';
import { Game_ProfileLayer } from './Game_ProfileLayer';
import { Game_WinEffect } from './Game_WinEffect';
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
    @property(BaseButton) 
    mSelfBtn: BaseButton = null;
    @property(Node) 
    mConbination: Node = null;
    @property(Node) 
    mInsuranceBG: Node = null;
    @property(Game_PlayerState) 
    mGame_PlayerState: Game_PlayerState = null;

    mSeatID : number = null; //座位编号
    private mIndex : number = null;
    InitParam() 
    {
    }
    BindUI() 
    {
        this.mSelfBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
            if(playerInfo == null)
            {
                return;
            }
            UIMgr.Instance.ShowWindow("gamePage","prefab/Game_ProfileLayer",true,(_script)=>
            {
                let tempScript = _script as Game_ProfileLayer;
                tempScript.InitWithData(this.mIndex  , playerInfo.uid);
            },MultipleTableCtr.GetUiTag(this.mIndex) , this.mIndex.toString());
        });

        this.mCircleTimer.SetColor(new Color(251,160,2));
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
        this.mCards.active = false;
        this.mSelfBtn.node.active = false;
        this.mConbination.active = false;
        this.mInsuranceBG.active = false;
        this.mGame_PlayerState.HideAll();
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

    public InitWithData(_index : number , _id : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.mSeatID = _id;
        this.HideAllUI();
        this.BindData();
    }

    public InitWithReplayData(_id : number)
    {
        this.mSeatID = _id;
        GameReplayData.Instance.Data_ReStart.AddListenner(this,(_data)=>
        {
            if(_data == false)
            {
                return;
            }

            this.HideAllUI();
            let replayData = GameReplayData.Instance.Data_ReplayData.mData;
            let playerInfo = GameReplayData.Instance.GetPlayerBySeat(this.mSeatID );
            let selfUid = LocalPlayerData.Instance.Data_Uid.mData;
            if(playerInfo == null)
            {
                return;
            }

            if(playerInfo.uid == selfUid)
            {
                playerInfo.cards = GameReplayData.Instance.GetCardsByUid(selfUid);
            }


            this.mCards.active = false;
            this.mSelfBtn.node.active = false;
            this.mBG.active = true;
            this.UpdateName(playerInfo.nickName);
            this.UpdateHead(playerInfo.head);
            this.UpdateMoney(true ,playerInfo);
            this.UpdateDealer(replayData.dealerUid , playerInfo );

            if(playerInfo.uid == selfUid)
            {
                this.ShowCards(playerInfo.cards , true);
            }
            else
            {
                this.ShowMiniCard(true , true);
            }


            let act = GameReplayData.Instance.GetRoundStartActionUid(playerInfo.uid);
            if(act != null)
            {
                this.ShowActionType(act.actionInfo.actionType , true);
                this.Bet(act.actionInfo.amount ,act.actionInfo.roundAmount,act.actionInfo.actionType, true);
            }

        })

        GameReplayData.Instance.Data_Update.AddListenner(this,(_data)=>
        {
            if(_data == false)
            {
                return;
            }

            let state = GameReplayData.Instance.Data_State.mData;
            if(state == TexasCashState.TexasCashState_Settlement)
            {
                let winResult = GameReplayData.Instance.GetWinResult(this.mSeatID);
                if(winResult == null)
                {
                    return;
                }
                if(winResult.cardInfo!=null && winResult.cardInfo.length > 0)
                {
                    this.ShowCards(winResult.cardInfo , true);
                }

                if(winResult.winLose > 0)
                {
                    this.LoadPrefab("gamePage","prefab/Game_WinEffect",(_node)=>
                    {
                        this.node.addChild(_node);
                        let script = _node.getComponent(Game_WinEffect);
                        script.InitWithData(winResult.winLose);
                    })
                }

            }
            else
            {
                this.ExcutiveAction(true);
            }
        })


        GameReplayData.Instance.Data_State.AddListenner(this,(_data)=>
        {
            switch(_data)
            {
                case TexasCashState.TexasCashState_RoundStart:
                {
                    
                }
                break;
                case TexasCashState.TexasCashState_PreFlopRound:
                {
        
                }
                break;
                case TexasCashState.TexasCashState_FlopRound:
                {
                    this.CleanTable();
                }
                break;
                case TexasCashState.TexasCashState_TurnRound:
                {
                    this.CleanTable();
                }
                break;
                case TexasCashState.TexasCashState_RiverRound:
                {
                    this.CleanTable();
                }
                break;
                case TexasCashState.TexasCashState_Settlement:
                {
                    this.CleanTable();
                }
                break;
            }
        })
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
            

            if(gameData.IsGamePlayingNow() == false)
            {
                return;
            }

            if(gameData.IsPlayerPlaying(playerInfo.uid) == false)
            {
                return;
            }

            this.RestoreAction();
            this.RestoreTurn();
            this.UpdateDealer(gameData.GetDynamicData().dealerUid , playerInfo );
            this.UpdatePlayerPlayingState(playerInfo);
        });

        gameData.Data_S2CCommonAutoOperatorNotify.AddListenner(this,(_data)=>
        {
            let playerInfo = gameData.GetPlayerInfoByUid(_data.uid);
            if(playerInfo == null)
            {
                return;
            }

            if(playerInfo.seat != this.mSeatID)
            {
                return;
            }

            this.mGame_PlayerState.ShowAuto(playerInfo.autoLeftTime,playerInfo.auto);
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
                this.mGame_PlayerState.ShowBuyin(0);
                this.UpdateMoney(false , selfPlayer);
            }
        })

        gameData.Data_S2CCommonWaitStartNotify.AddListenner(this,(_data)=>
        {
            let currentPlayer = gameData.GetPlayerInfoBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                return;
            }
            this.PrepareRoundStart();
        })

        gameData.Data_S2CCommonRoundStartNotify.AddListenner(this,(_data)=>
        {
            let currentPlayer = gameData.GetPlayerInfoBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                return;
            }

            if(gameData.IsPlayerPlaying(currentPlayer.uid) == false)
            {
                return;
            }

            
            this.ShowMiniCard(gameData.IsPlayerPlaying(currentPlayer.uid),false);

            let lastBet = gameData.FindLastActionByUid(currentPlayer.uid);
            if(lastBet != null)
            {
                this.ShowActionType(lastBet.actionType , false);
                this.Bet( lastBet.amount,lastBet.roundAmount ,lastBet.actionType , false)
            }

            let dealerId = gameData.GetDynamicData().dealerUid;
            this.UpdateDealer(dealerId,currentPlayer);
            this.UpdateMoney(false , currentPlayer);
        })


        gameData.Data_S2CCommonPreFlopRoundNotify.AddListenner(this,(_data)=>
        {
            let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
            if(playerInfo == null)
            {
                return;
            }
            if(gameData.IsPlayerPlaying(playerInfo.uid) == false)
            {
                return;
            }
            this.ShowMiniCard(true , false);
        })

        gameData.Data_S2CCommonFlopRoundNotify.AddListenner(this,(_data)=>
        {
            this.ShowLocalPlayerLogic(true);
            this.CleanTable();
        })

        gameData.Data_S2CCommonTurnRoundNotify.AddListenner(this,(_data)=>
        {
            this.ShowLocalPlayerLogic(true);
            this.CleanTable();
        })

        gameData.Data_S2CCommonRiverRoundNotify.AddListenner(this,(_data)=>
        {
            this.ShowLocalPlayerLogic(true);
            this.CleanTable();
        })
        

        gameData.Data_S2CCommonCurrentActionNotify.AddListenner(this,(_data)=>
        {
            this.RestoreTurn();
        })

        gameData.Data_S2CCommonExtraThinkNotify.AddListenner(this,(_data)=>
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
            this.mCircleTimer.StartTimer(_data.totalTime);
        })


        gameData.Data_S2CCommonActionNotify.AddListenner(this,(_data)=>
        {
            let currentPlayer = gameData.GetPlayerInfoBySeatId(this.mSeatID);
            if(currentPlayer == null)
            {
                return;
            }

            if(currentPlayer.uid == _data.actionInfo.uid)
            {
                this.ShowLocalPlayerLogic(true);
            }

            
            this.ExcutiveAction(false);
            this.UpdateMoney(false,currentPlayer);
        })

        gameData.Data_S2CCommonBringInTimerNotify.AddListenner(this,(_data)=>
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

        gameData.Data_S2CCommonBringInNotify.AddListenner(this,(_data)=>
        {
            let playerInfo = gameData.GetPlayerInfoByUid(_data.uid);
            if(playerInfo == null)
            {
                return;
            }

            if(playerInfo.seat != this.mSeatID)
            {
                return;
            }

            this.mGame_PlayerState.ShowBuyin(0);
            this.UpdateMoney(false, playerInfo);
        })
   

        gameData.Data_S2CCommonSettlementNotify.AddListenner(this,(_data)=>
        {
            let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
            if(playerInfo == null)
            {
                return;
            }

            this.ShowLocalPlayerLogic(true);

            let winLoseInfos = _data.result;
            let index = winLoseInfos.findIndex((_item) => _item.uid === playerInfo.uid);
            if(index < 0)
            {
                return;
            }
            let selfUid = LocalPlayerData.Instance.Data_Uid.mData;
            this.mGame_ActionTag.node.active = false;
            this.mGame_BetAmount.node.active = false;
            let currentWinLose = winLoseInfos[index];
            if(playerInfo.fold == false && playerInfo.uid != selfUid)
            {
                this.ShowCards(currentWinLose.cardInfo , false);
            }
            if(currentWinLose.combinationResult != null)
            {
                if(currentWinLose.combinationResult.Combination != null)
                {
                    if(playerInfo.uid != selfUid)
                    {
                        this.ShowConbination(currentWinLose.combinationResult.Combination);
                    }
                }
            }
            this.StartSecondsTimer(1.5 , 0.01  , ()=>
            {
                let restTime = this.GetRestMillSeconds();
                if(restTime == 0)
                {
                    this.UpdateMoney(false , playerInfo);
                    this.UpdateWinLose(currentWinLose);
                    this.mGame_ActionTag.node.active = false;
                }
            });
        })

        gameData.Data_S2CCommonExaminePrivateCardResp.AddListenner(this,(_data)=>
        {
            let playerDatas = _data.playerList;
            let currentPlayer = null;
            for(let i = 0 ; i < playerDatas.length ; i++)
            {
                let current = playerDatas[i];
                if(current.seat == this.mSeatID)
                {
                    currentPlayer = current;
                    break;
                }
            }

            if(currentPlayer == null)
            {
                return;
            }

            if(currentPlayer.uid == LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            let hands = currentPlayer.cards;
            this.ShowCards(hands , false);
        });

        gameData.Data_S2CCommonOpenCardNotify.AddListenner(this,(_data)=>
        {
            let playerDatas = _data.players;
            let currentPlayer = null;
            for(let i = 0 ; i < playerDatas.length ; i++)
            {
                let current = playerDatas[i];
                if(current.seat == this.mSeatID)
                {
                    currentPlayer = current;
                    break;
                }
            }

            if(currentPlayer == null)
            {
                return;
            }
            this.ShowLocalPlayerLogic(true);

            if(currentPlayer.uid == LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            let hands = currentPlayer.cards;
            this.ShowCards(hands , false);
        });

        gameData.Data_BuyInsuranceTurn.AddListenner(this,(_data)=>
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

            this.mInsuranceBG.active = true;
            this.UpdateUIDirection();
            this.StartSecondsTimer(_data.leftTime , 1  , ()=>
            {
                let seconds = this.GetRestSeconds();
                this.mInsuranceBG.getChildByName("InsCount").getComponent(Label).string = seconds + "";
            })
        })

        gameData.Data_S2CCommonBuyInsuranceTurnRespNotify.AddListenner(this,(_data)=>
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

            this.mInsuranceBG.active = false;
        })
        
        gameData.Data_S2CCommonInsuranceLotteryNotify.AddListenner(this,(_data)=>
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
            this.mInsuranceBG.active = false;

            this.UpdateMoney(false , playerInfo);
            this.LoadPrefab("gamePage","prefab/Game_WinEffect",(_node)=>
            {
                this.node.addChild(_node);
                let script = _node.getComponent(Game_WinEffect);
                script.InitWithData(_data.amount);
            })
        })
        gameData.Data_S2CCommonJackpotLotteryNotify.AddListenner(this,(_data)=>
        {
            let playerInfo = gameData.GetPlayerInfoByUid(_data.uid);
            if(playerInfo == null)
            {
                return;
            }

            if(playerInfo.seat != this.mSeatID)
            {
                return;
            }

            this.UpdateMoney(false , playerInfo);
            this.LoadPrefab("gamePage","prefab/Game_WinEffect",(_node)=>
            {
                this.node.addChild(_node);
                let script = _node.getComponent(Game_WinEffect);
                script.InitWithData(_data.lotteryNum);
            })
        })

        LocalPlayerData.Instance.Data_BBModeSetting.AddListenner(this,(_data)=>
        {
            let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
            if(playerInfo == null)
            {
                return;
            }

            this.UpdateMoney(false , playerInfo);
        });
    }

    UpdateWinLose(_winLoseInfo : PlayerWinLose)
    {
        if(_winLoseInfo.winLose >0)
        {
            this.LoadPrefab("gamePage","prefab/Game_WinEffect",(_node)=>
            {
                this.node.addChild(_node);
                let script = _node.getComponent(Game_WinEffect);
                script.InitWithData(_winLoseInfo.winLose);
            })
        }
    }

    CleanTable()
    {
        // if(this.mGame_BetAmount.node.activeInHierarchy == true )
        // {
        //     this.LoadPrefab("gamePage","prefab/Game_MovingChip",(_node)=>
        //     {
        //         this.node.addChild(_node);
        //         let script = _node.getComponent(Game_MovingChip);
        //         let startWorldPos = this.mGame_BetAmount.GetChipWorldPos();
        //         let screenSize = view.getVisibleSize();
        //         script.FlyWithDelay(startWorldPos ,new Vec3(screenSize.width/2 , screenSize.height/2));

        //     })
        // }
        this.mGame_ActionTag.node.active = false;
        this.mGame_BetAmount.node.active = false;
    }


    public UpdateUIDirection()
    {
        let posX = this.node.parent.worldPosition.x;
        let getVisibleSize = view.getVisibleSize();
        let dealerPos = this.mDealer.position;
        let insPos = this.mInsuranceBG.position;
        if(posX >= getVisibleSize.width/2)
        {
            this.mDealer.setPosition(-Math.abs(dealerPos.x) , dealerPos.y , dealerPos.z);
            this.mInsuranceBG.setPosition(-Math.abs(insPos.x) , insPos.y , insPos.z);
        }
        else 
        {
            this.mDealer.setPosition(Math.abs(dealerPos.x) , dealerPos.y , dealerPos.z);
            this.mInsuranceBG.setPosition(Math.abs(insPos.x) , insPos.y , insPos.z);
        }
    }

    PrepareRoundStart()
    {
        this.mMiniCard.active = false;
        this.mCircleTimer.StopTimer();
        this.mDealer.active = false;
        this.mGame_ActionTag.node.active = false;
        this.mGame_BetAmount.node.active = false;
        this.mCards.active = false;
        this.mConbination.active = false;
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
        this.mGame_PlayerState.ShowAuto(playerInfo.autoLeftTime , playerInfo.auto);
        this.mSelfBtn.node.active = true;
        this.UpdateName(playerInfo.nickName);
        this.UpdateHead(playerInfo.head);
        this.UpdateMoney(false,playerInfo);
        this.UpdateUIDirection();
    }

    UpdatePlayerPlayingState(_playerInfo : PlayerInfo)
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let playerPlaying = gameData.IsPlayerPlaying(_playerInfo.uid);
        if(_playerInfo.currencyNum)
        {
            this.ShowMiniCard(playerPlaying && _playerInfo.fold == false,false);
            this.mGame_PlayerState.ShowAuto(_playerInfo.autoLeftTime,_playerInfo.auto);
        }
        else
        {
            if(_playerInfo.currencyNum == 0 && _playerInfo.bringInNum == 0)
            {
                this.UpdateBuyInCountDown();
            }
            
        }
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

        this.mGame_PlayerState.ShowBuyin(playerInfo.buyInLeftTime);
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
            this.ShowActionType(lastAct.actionType , false);
            this.Bet( lastAct.amount,lastAct.roundAmount ,lastAct.actionType, false);
        }

    }

    ExcutiveAction(_replay : boolean )
    {
        if( _replay == false)
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
    
            this.mCircleTimer.StopTimer();
            this.ShowActionType(lastAct.actionType , false);
            this.Bet( lastAct.amount,lastAct.roundAmount ,lastAct.actionType , false);
        }
        else
        {
            let playerInfo = GameReplayData.Instance.GetPlayerBySeat(this.mSeatID);
            if(playerInfo == null)
            {
                return;
            }
            let currentAction = GameReplayData.Instance.GetCurrentAction();
            if(currentAction == null)
            {
                return;
            }

            if(playerInfo.uid != currentAction.actionInfo.uid)
            {
                return;
            }
            this.ShowActionType(currentAction.actionInfo.actionType , true);
            this.Bet(currentAction.actionInfo.amount,currentAction.actionInfo.roundAmount ,currentAction.actionInfo.actionType, true);
        }
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

        this.ShowLocalPlayerLogic(currentActionUid != LocalPlayerData.Instance.Data_Uid.mData);
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

    UpdateMoney(_replay : boolean , _playerInfo : PlayerInfo)
    {
        this.mAmount.node.active = true;
        if(_replay == false)
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;

            let bb = gameData.GetStaticData().smallBlind * 2;
            if(gameData.CanPlayerBuyIn(_playerInfo.uid))
            {
                let totalMoney = _playerInfo.bringInNum + _playerInfo.currencyNum;
                if(LocalPlayerData.Instance.Data_BBModeSetting.mData)
                {
                    this.mAmount.string = Tool.ConvertToBB(totalMoney,bb);
                }
                else
                {
                    this.mAmount.string =  Tool.ConvertMoney_S2C(totalMoney) + "";
                }
            }
            else
            {
                this.mAmount.string =  Tool.ConvertMoney_S2C(_playerInfo.currencyNum) + "";
                if(LocalPlayerData.Instance.Data_BBModeSetting.mData)
                {
                    this.mAmount.string = Tool.ConvertToBB(_playerInfo.currencyNum , bb);
                }
                else
                {
                    this.mAmount.string =  Tool.ConvertMoney_S2C(_playerInfo.currencyNum) + "";
                }
            }
        }
        else
        {
            this.mAmount.string =  Tool.ConvertMoney_S2C(_playerInfo.currencyNum) + "";
        }
    }

    ShowCards(_cards : Array<CardInfo> , _replay : boolean)
    {
        if(_cards == null || _cards.length == 0)
        {
            this.mCards.active = false;
            return;
        }
        this.ShowMiniCard(false , _replay);
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

    ShowFoldCard()
    {
        let cardNodes = this.mCards.children;
        this.mCards.active = true;
        for(let i = 0 ; i < cardNodes.length ; i++)
        {
            let currentPoker = cardNodes[i].getComponent(Poker);
            currentPoker.SetGary(true);
        }
    }

    UpdateDealer(_dealerId : string , _playerInfo : PlayerInfo )
    {
        let currentUid = _playerInfo.uid;
        this.mDealer.active = currentUid == _dealerId;
        if(currentUid == LocalPlayerData.Instance.Data_Uid.mData)
        {
            this.mDealer.active = false;
        }
        this.UpdateUIDirection();
    }

    Bet(_amount : number ,_roundAmount : number ,_actionType : ActionType ,  _replay : boolean)
    {
        if(_actionType == ActionType.ActionType_Check)
        {
            return;
        }

        if(_actionType == ActionType.ActionType_Fold)
        {
            return;
        }


        let bb;
        if(_replay)
        {
            bb = GameReplayData.Instance.Data_ReplayData.mData.texasConfig.smallBlind * 2;
            let playerInfo = GameReplayData.Instance.GetPlayerBySeat(this.mSeatID);
            playerInfo.currencyNum -= _amount;
            this.UpdateMoney(true,playerInfo);
            GameReplayData.Instance.Data_TotalPots.mData += _amount;
        }
        else
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            bb = gameData.GetStaticData().smallBlind * 2;
        }

        this.LoadPrefab("gamePage","prefab/Game_MovingChip",(_node)=>
        {
            this.node.addChild(_node);
            let script = _node.getComponent(Game_MovingChip);
            let startWorldPos = this.node.worldPosition;
            let entWorldPos = this.mGame_BetAmount.GetChipWorldPos();
            script.Fly(startWorldPos ,entWorldPos);
        })


        this.mGame_BetAmount.Bet(_roundAmount , bb , _replay);

    }

    ShowActionType(_actionType : ActionType , _replay : boolean)
    {
        let isFold = _actionType == ActionType.ActionType_Fold;
        this.ShowMiniCard(!isFold , _replay);
        
        if(_replay == false)
        {

        }
        else
        {
            if(isFold)
            {
                let playerInfo = GameReplayData.Instance.GetPlayerBySeat(this.mSeatID);
                if(playerInfo.uid == LocalPlayerData.Instance.Data_Uid.mData)
                {
                    this.ShowFoldCard();
                }
            }
        }

        if(isFold)
        {
            this.LoadPrefab("gamePage","prefab/Game_MovingCards",(_node)=>
            {
                this.node.addChild(_node);
                let script = _node.getComponent(Game_MovingCards);
                let startWorldPos = this.node.worldPosition;
                let screenSize = view.getVisibleSize();
                script.FlyTo(startWorldPos , new Vec3(screenSize.width/2 , screenSize.height/2));
            })
        }
        this.mGame_ActionTag.SetType(_actionType);
    }

    ShowMiniCard(_value : boolean , _replay : boolean)
    {
        let selfUid = LocalPlayerData.Instance.Data_Uid.mData;
        let isSelf;
        if(_replay)
        {
            let playerInfo = GameReplayData.Instance.GetPlayerBySeat(this.mSeatID);
            isSelf = playerInfo.uid == selfUid;
        }
        else
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
            isSelf = playerInfo.uid == selfUid;
        }

        if(isSelf)
        {
            this.mMiniCard.active = false;
            return;
        }
        this.mMiniCard.active = _value;
    }

    ShowConbination(_conbination : Combiantion)
    {
        if(_conbination == null)
        {
            return;
        }
        if(_conbination == Combiantion.None)
        {
            return;
        }
        this.mConbination.active = true;
        this.mConbination.getChildByName("Conbination").getComponent(Label).string = Poker.GetConbinationName(_conbination);
    }

    ShowLocalPlayerLogic(_value : boolean)
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
        if(playerInfo == null)
        {
            return;
        }
        if(gameData.IsPlayerPlaying(playerInfo.uid) == false)
        {
            return;
        }

        if(playerInfo.uid == LocalPlayerData.Instance.Data_Uid.mData)
        {
            this.node.active = _value;
        }
    }
}

