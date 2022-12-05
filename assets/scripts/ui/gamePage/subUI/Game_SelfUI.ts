import { _decorator, Component, Node, Label, instantiate, Vec3, view } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { CardStruct, Combiantion } from '../../../base/Calculator';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
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

    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.HideAllUI();
        this.mGame_AddTime.SetCallback(()=>
        {

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

        gameData.Data_S2CCommonRoundStartNotify.AddListenner(this,(_data)=>
        {
            this.UpdateUI();
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
            
        })
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

    UpdateUI()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            this.HideAllUI();
            return;
        }
        this.UpdateDealer();
        this.UpdateMoney();
        this.UpdateAction();
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
        this.mGame_AddTime.node.active = _show;
        if(_show)
        {
            this.mGame_AddTime.SetButtonTitle(_delaySpend);
        }
    }
    UpdateAction()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let lastAct = gameData.FindLastActionByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(lastAct != null)
        {
            this.mGame_ActionTag.SetType(lastAct.actionType);
            this.Bet(lastAct.amount);
        }
    }


    Bet(_amount : number)
    {
        this.mGame_BetAmount.Bet(Tool.ConvertMoney_S2C(_amount));
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
        let cardNodes = this.mCards.children;
        this.mCards.active = true;
        for(let i = 0 ; i < cards.length ; i++)
        {
            let currentPoker = cardNodes[i].getComponent(Poker);
            currentPoker.ResetAndHide();
            currentPoker.ShowBack(); 
            currentPoker.SetFrontByCardInfo(cards[i]);
            currentPoker.DealAnimation();
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

