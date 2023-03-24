import { _decorator, Component, Node, Label, instantiate, Vec3, view } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Calculator, CardType, Combiantion } from '../../../base/Calculator';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { NetworkSend } from '../../../network/NetworkSend';
import { Tool } from '../../../Tool';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Poker } from '../../common/Poker';
import { Game_ActionTag } from './Game_ActionTag';
import { Game_AddTime } from './Game_AddTime';
import { Game_BetAmount } from './Game_BetAmount';


const { ccclass, property } = _decorator;

@ccclass('Game_SelfUI')
export class Game_SelfUI extends BaseUI 
{
    @property(Node) 
    mCards: Node = null;
    @property(Game_AddTime) 
    mGame_AddTime: Game_AddTime = null;
    @property(Game_BetAmount) 
    mGame_BetAmount: Game_BetAmount = null;
    @property(Game_ActionTag) 
    mGame_ActionTag: Game_ActionTag = null;
    @property(Node) 
    mConbinationBG: Node = null;
    @property(Label) 
    mConbination: Label = null;
    @property(Node) 
    mDealer: Node = null;
    @property(Label) 
    mMoney: Label = null;


    mAlreadyShowCards : boolean = false;
    private mIndex : number = null;
    mSelectedPoker : Array<boolean>;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.HideAllUI();
        this.ResetShowCard();
        this.mGame_AddTime.SetCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let msgId = gameData.ExtraThinkingTimeMsgId();
            NetworkSend.Instance.SendExtraThinkingTime(msgId,gameStruct.mGameId);
        });

        for(let i = 0 ; i < this.mCards.children.length ; i++)
        {
            let currentCard = this.mCards.children[i].getComponent(Poker);
            currentCard.SetClickAble((_selected , _index)=>
            {
                this.mSelectedPoker[_index] = _selected;
            },i);
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
    public InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.ResetShowCard();
            this.UpdateUI();
            this.UpdateCombination();
        });

        gameData.Data_S2CCommonSitDownNotify.AddListenner(this,(_data)=>
        {
            if(_data.seatPlayerInfo.uid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.UpdateUI();
        });

        gameData.Data_S2CCommonStandUpNotify.AddListenner(this,(_data)=>
        {
            if(_data.actionUid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.HideAllUI();
        });

        gameData.Data_S2CCommonBringInResp.AddListenner(this,(_data)=>
        {
            this.UpdateMoney();
        })

        gameData.Data_S2CCommonWaitStartNotify.AddListenner(this,(_data)=>
        {
            this.HideAllUI();
        });

        gameData.Data_S2CCommonRoundStartNotify.AddListenner(this,(_data)=>
        {
            this.UpdateDealer();
            this.UpdateMoney();
            this.RestoreAction();
        })

        gameData.Data_S2CCommonPreFlopRoundNotify.AddListenner(this,(_data)=>
        {
            this.UpdateCards();
        })

        gameData.Data_S2CCommonCurrentActionNotify.AddListenner(this,(_data)=>
        {
            this.UpdateAddTime();
            this.UpdateCards();
        })
        gameData.Data_S2CCommonActionNotify.AddListenner(this,(_data)=>
        {
            this.ExcutiveCurrentAction();
            this.UpdateMoney();
        })

        gameData.Data_S2CCommonFlopRoundNotify.AddListenner(this,(_data)=>
        {
            this.CleanTable();
            this.UpdateCombination();
        })

        gameData.Data_S2CCommonTurnRoundNotify.AddListenner(this,(_data)=>
        {
            this.CleanTable();
            this.UpdateCombination();
        })

        gameData.Data_S2CCommonRiverRoundNotify.AddListenner(this,(_data)=>
        {
            this.CleanTable();
            this.UpdateCombination();
        })

        gameData.Data_S2CCommonSettlementNotify.AddListenner(this,(_data)=>
        {
            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
            if(selfPlayer == null)
            {
                return
            }

            let needShow = false;
            for(let h = 0 ; h < this.mSelectedPoker.length ; h++)
            {
                if(this.mSelectedPoker[h] ==  true)
                {
                    needShow = true;
                    break;
                }
            }
            
            let winLoseInfos = _data.result;
            let index = winLoseInfos.findIndex((_item) => _item.uid === selfPlayer.uid);
            if(this.mAlreadyShowCards == false)
            {
                if(index < 0)
                {
                    return;
                }

                for(let k = 0 ; k < selfPlayer.cards.length ; k++)
                {
                    this.ShowCard(k , selfPlayer.cards[k] );
                }
            }

            if(needShow)
            {
                let cardNodes = this.mCards.children;
                let showCards = new Array<CardInfo>();

                for(let g = 0 ; g < cardNodes.length ; g++)
                {
                    if(this.mSelectedPoker[g] ==  true)
                    {
                        showCards.push(selfPlayer.cards[g]);
                        let currentPoker = cardNodes[g].getComponent(Poker);
                        currentPoker.SetFrontByCardInfo(selfPlayer.cards[g]);
                        currentPoker.ShowBack();
                        currentPoker.FlipToFront();
                    }
                }
      
                if(showCards.length != 0)
                {
                    let msgId = gameData.ShowSelfCardsMsgId();
                    NetworkSend.Instance.ShowSelfCards(msgId,gameStruct.mGameId ,showCards );
                }
            }

            this.ResetShowCard();
        })

        gameData.Data_BuyInsuranceTurn.AddListenner(this,(_data)=>
        {
            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
            if(selfPlayer == null)
            {
                return;
            }

            this.mGame_AddTime.node.active = false;
        });

        LocalPlayerData.Instance.Data_BBModeSetting.AddListenner(this,(_data)=>
        {
            this.UpdateMoney();
        });
    }


    HideAllUI()
    {
        this.mCards.active = false;
        this.mGame_AddTime.node.active = false;
        this.mGame_BetAmount.node.active = false;
        this.mGame_ActionTag.node.active = false;
        this.mDealer.active = false;
        this.mConbinationBG.active = false;
        this.mMoney.string = "";
        this.mAlreadyShowCards = false;
    }

    ResetShowCard()
    {
        if(this.mSelectedPoker == null)
        {
            this.mSelectedPoker = new Array<boolean>();
            this.mSelectedPoker.push(false);
            this.mSelectedPoker.push(false);
            this.mSelectedPoker.push(false);
            this.mSelectedPoker.push(false);
        }
        for(let i = 0 ; i < this.mSelectedPoker.length ; i++)
        {
            this.mSelectedPoker[i] = false;
        }
    }

    CleanTable()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        if(gameStruct == null)
        {
            return;
        }
        let gameData = gameStruct.mGameData;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            return;
        }

        if(gameData.IsPlayerPlaying(selfPlayer.uid) == false)
        {
            return;
        }

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
        // this.mGame_BetAmount.node.active = false;
        // this.mGame_ActionTag.node.active = false;
    }

    UpdateUI()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;

        if(gameData.IsGamePlayingNow() == false)
        {
            this.HideAllUI();
            return;
        }

        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            this.HideAllUI();
            return;
        }

        this.UpdateDealer();
        this.UpdateMoney();
        this.RestoreAction();
        this.UpdateCards();
        this.UpdateFold();
        this.UpdateAddTime();
    }

    UpdateDealer()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let dealerUid = gameData.GetDynamicData().dealerUid;
        this.mDealer.active = dealerUid == LocalPlayerData.Instance.Data_Uid.mData;
    }

    UpdateMoney()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            return;
        }
        let bbMode = LocalPlayerData.Instance.Data_BBModeSetting.mData;
        let bb = gameData.GetStaticData().smallBlind * 2;
        if(gameData.CanPlayerBuyIn(selfPlayer.uid))
        {
            if(bbMode)
            {
                let amount = selfPlayer.currencyNum + selfPlayer.bringInNum;
                let bbShow = Tool.ConvertToBB(amount,bb);
                this.mMoney.string = bbShow;
            }
            else
            {
                this.mMoney.string = Tool.ConvertMoney_S2C(selfPlayer.currencyNum + selfPlayer.bringInNum) + "";
            }
        }
        else
        {
            if(bbMode)
            {
                let amount = selfPlayer.currencyNum;
                let bbShow = Tool.ConvertToBB(amount,bb);
                this.mMoney.string = bbShow;
            }
            else
            {
                this.mMoney.string = Tool.ConvertMoney_S2C(selfPlayer.currencyNum) + "";
            }
            
        }
    }
    UpdateAddTimeBtn(_show : boolean , _delaySpend : string)
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            return;
        }
        this.mGame_AddTime.node.active = _show;
        if(_show)
        {
            this.mGame_AddTime.SetButtonTitle(_delaySpend);
        }
    }
    RestoreAction()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            return;
        }
        let lastAct = gameData.FindLastActionByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(lastAct != null)
        {
            //this.ShowActionType(lastAct.actionType);
            //this.Bet(lastAct.roundAmount , lastAct.actionType);
        }
    }

    ExcutiveCurrentAction()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            return;
        }
        let lastAct = gameData.FindLastAction();
        if(lastAct != null)
        {
            if(lastAct.uid == LocalPlayerData.Instance.Data_Uid.mData)
            {
                if(selfPlayer.fold)
                {
                    this.FoldCards();
                }
                //this.ShowActionType(lastAct.actionType);
                //this.Bet(lastAct.roundAmount , lastAct.actionType);
            }
        }
    }

    Bet(_amount : number , _actionType : ActionType)
    {
        // if(_actionType == ActionType.ActionType_Check)
        // {
        //     return;
        // }

        // if(_actionType == ActionType.ActionType_Fold)
        // {
        //     return;
        // }

        // this.LoadPrefab("gamePage","prefab/Game_MovingChip",(_node)=>
        // {
        //     this.node.addChild(_node);
        //     let script = _node.getComponent(Game_MovingChip);
        //     let startWorldPos = this.node.worldPosition;
        //     let entWorldPos = this.mGame_BetAmount.GetChipWorldPos();
        //     script.Fly(startWorldPos ,entWorldPos);
        // })
        // let amountS2C = Tool.ConvertMoney_S2C(_amount);
        // this.mGame_BetAmount.Bet(amountS2C);
    }

    ShowActionType(_actionType : ActionType )
    {
        // if(_actionType == ActionType.ActionType_Fold)
        // {
        //     this.LoadPrefab("gamePage","prefab/Game_MovingCards",(_node)=>
        //     {
        //         this.node.addChild(_node);
        //         let script = _node.getComponent(Game_MovingCards);
        //         let startWorldPos = this.mCards.worldPosition;
        //         let screenSize = view.getVisibleSize();
        //         script.FlyTo(startWorldPos , new Vec3(screenSize.width/2 , screenSize.height/2));
        //     })
        //     this.FoldCards();

        // }
        // this.mGame_ActionTag.SetType(_actionType);
    }


    UpdateCards()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            return;
        }


        if(gameData.PlayerHaveCards(selfPlayer.uid) == false)
        {
            this.mCards.active = false;
            return;
        }

        this.mCards.active = true;

        if(this.mAlreadyShowCards == true)
        {
            return;
        }

        let state = gameData.GetGameState();
        let lastAct = gameData.FindLastActionByUid(selfPlayer.uid)
        let cardNodes = this.mCards.children;

        let cards = selfPlayer.cards;
        if(state <= TexasCashState.TexasCashState_PreFlopRound)
        {
            if(lastAct == null ||
                lastAct.actionType == ActionType.ActionType_Ante ||
                lastAct.actionType == ActionType.ActionType_SB ||
                lastAct.actionType == ActionType.ActionType_BB ||
                lastAct.actionType == ActionType.ActionType_Straddle )
            {
                if(gameData.GetActionUid() != selfPlayer.uid)
                {
                    for(let i = 0 ; i < cards.length ; i++)
                    {
                        let currentPoker = cardNodes[i].getComponent(Poker);
                        currentPoker.ResetAndHide();
                        currentPoker.ShowBack(); 
                    }
                    return;
                }
            }
        }

        for(let k = 0 ; k < cards.length ; k++)
        {
            this.ShowCard(k , cards[k] );
        }
    }

    ClickPoker(_index : number)
    {
        
    }

    UpdateFold()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);

        if(selfPlayer.cards.length == 0)
        {
            return;
        }
        if(selfPlayer.fold == false)
        {
            return;
        }
        this.FoldCards();
    }

    ShowCard(_index : number , _cardInfo : CardInfo )
    {
        let cardNodes = this.mCards.children;
        let currentPoker = cardNodes[_index].getComponent(Poker);
        currentPoker.ResetAndHide();
        currentPoker.ShowBack(); 
        currentPoker.SetFrontByCardInfo(_cardInfo);
        currentPoker.DealAnimation();
        this.mAlreadyShowCards = true;
    }

    FoldCards()
    {
        for(let i = 0 ; i < this.mCards.children.length ; i++)
        {
            let currentCard = this.mCards.children[i].getComponent(Poker);
            currentCard.SetGary(true);
        }
    }

    UpdateAddTime()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            return;
        }
        let actionUid =  gameData.GetDynamicData().actionUid;

        this.mGame_AddTime.Show(actionUid == LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer.auto)
        {
            this.mGame_AddTime.Show(false);
        }
    }

    UpdateCombination()
    {
        this.mConbinationBG.active = false;
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            return;
        }
        
        let playerCards = selfPlayer.cards;

        if(playerCards.length == 0)
        {
            return;
        }

        for(let i = 0 ; i < playerCards.length ; i++)
        {
            let current = playerCards[i];
            if(current.type == CardType.None || current.number == 0)
            {
                return;
            }
        }

        let publicCards = gameData.GetDynamicData().publicCards;

        if(publicCards == null)
        {
            return;
        }
        if(publicCards.length == 0)
        {
            return;
        }

        let hands = Calculator.ConvertCardInfos(playerCards);
        let publics = Calculator.ConvertCardInfos(publicCards);

        let calculator = new Calculator();
        calculator.TryToCalculate(publics,hands);
        let combination = calculator.mCurrentCombination;

        if(combination == Combiantion.None)
        {
            
            return;
        }

        this.mConbinationBG.active = true;
        this.mConbination.string = Poker.GetConbinationName(combination);
    }

}

