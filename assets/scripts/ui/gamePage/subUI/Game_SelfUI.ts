import { _decorator, Component, Node, Label, instantiate, Vec3, view } from 'cc';
import { AudioManager } from '../../../base/AudioManager';
import { BaseUI } from '../../../base/BaseUI';
import { Combiantion } from '../../../base/Calculator';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { NetworkSend } from '../../../network/NetworkSend';
import { Tool } from '../../../Tool';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Poker } from '../../common/Poker';
import { Game_ActionTag } from './Game_ActionTag';
import { Game_AddTime } from './Game_AddTime';
import { Game_BetAmount } from './Game_BetAmount';
import { Game_MovingCards } from './Game_MovingCards';
import { Game_MovingChip } from './Game_MovingChip';

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

    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.HideAllUI();
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
            currentCard.SetClickAble(this.ClickPoker.bind(this),i);
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
            this.UpdateUI();
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
        })
        gameData.Data_S2CCommonActionNotify.AddListenner(this,(_data)=>
        {
            this.ExcutiveCurrentAction();
            this.UpdateMoney();
        })

        gameData.Data_S2CCommonFlopRoundNotify.AddListenner(this,(_data)=>
        {
            this.CleanTable();
        })

        gameData.Data_S2CCommonTurnRoundNotify.AddListenner(this,(_data)=>
        {
            this.CleanTable();
        })

        gameData.Data_S2CCommonRiverRoundNotify.AddListenner(this,(_data)=>
        {
            this.CleanTable();
        })

        gameData.Data_S2CCommonSettlementNotify.AddListenner(this,(_data)=>
        {
            //this.HideAllUI();
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
        if(gameData.CanPlayerBuyIn(selfPlayer.uid))
        {
            this.mMoney.string = Tool.ConvertMoney_S2C(selfPlayer.currencyNum + selfPlayer.bringInNum) + "";
        }
        else
        {
            this.mMoney.string = Tool.ConvertMoney_S2C(selfPlayer.currencyNum) + "";
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

        let cards = selfPlayer.cards;
        if(cards == null || cards.length == 0)
        {
            this.mCards.active = false;
            return;
        }
        this.mCards.active = true;
        for(let i = 0 ; i < cards.length ; i++)
        {
            let delayTime = i*0.05;
            this.ShowCard(i , cards[i] , delayTime);
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

    ShowCard(_index : number , _cardInfo : CardInfo , _delayTime : number)
    {
        this.scheduleOnce(()=>
        {
            let cardNodes = this.mCards.children;
            let currentPoker = cardNodes[_index].getComponent(Poker);
            currentPoker.ResetAndHide();
            currentPoker.ShowBack(); 
            currentPoker.SetFrontByCardInfo(_cardInfo);
            currentPoker.DealAnimation();
        },_delayTime)
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
    }

    UpdateConbination(_conbination : Combiantion)
    {
        if(_conbination == Combiantion.None)
        {
            this.mConbinationBG.active = false;
            return;
        }
        this.mConbinationBG.active = true;
        this.mConbination.string = Poker.GetConbinationName(_conbination);
    }

}

