import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Combiantion } from '../../../base/Calculator';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Poker } from '../../common/Poker';
import { GameData, Game_ActionType } from '../GameData';
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
    InitParam() 
    {

    }
    BindUI() 
    {
        this.node.active = false;
        this.HideAllUI();
        this.mGame_AddTime.SetCallback(()=>
        {

        });
    }
    RegDataNotify() 
    {

        
        GameData.GetInstance().AddListener("Data_EnterGame",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                this.node.active = false;
                return;
            }
            this.node.active = true;

            let deskInfo = GameData.GetInstance().Data_DeskInfo;
            this.HideAllUI();
            this.UpdateCards(currentPlayer);
            let showAddTimeBtn = currentPlayer.userInfo.userId == deskInfo.curTurnUserId && deskInfo.isCanDelay;
            this.UpdateAddTimeBtn(showAddTimeBtn , deskInfo.delaySpend);
            this.Bet(currentPlayer.tableScore);
            this.SetActionTag(currentPlayer.operateCard);
            this.UpdateDealer(deskInfo.dUserId == currentPlayer.userInfo.userId);
            this.UpdateConbination(currentPlayer.cardType);
            this.UpdateMoney(currentPlayer.userInfo.score , deskInfo);
        },this);
        GameData.GetInstance().AddListener("Data_GameStart",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                this.node.active = false;
                return;
            }
            this.node.active = true;

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
                //straddle
            }
            this.UpdateAddTimeBtn(false , "");
            this.Bet(-1);
            this.SetActionTag(Game_ActionType.None);
            this.ShowCards(_current.handCard);
            this.UpdateConbination(Combiantion.None);
            this.UpdateDealer(_current.dUserId == currentPlayer.userInfo.userId);
        },this);
        GameData.GetInstance().AddListener("Data_WhosTurn",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                return;
            }

            let showAddTimeBtn = (currentPlayer.userInfo.userId == _current.userId) && _current.isCanDelay;
            this.UpdateAddTimeBtn(showAddTimeBtn , _current.delaySpend);
        },this);

        GameData.GetInstance().AddListener("Data_PlayerAction",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                return;
            }

            if(currentPlayer.userInfo.userId != _current.userId)
            {
                return;
            }
            this.UpdateAddTimeBtn(false , "");
            this.SetActionTag(_current.gameOpType);
            this.Bet(_current.tableScore);

        },this);
        
        GameData.GetInstance().AddListener("Data_UpdatePlayerScore",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                return;
            }
            let deskInfo = GameData.GetInstance().Data_DeskInfo;
            this.UpdateMoney(_current.score , deskInfo);
        },this);

        GameData.GetInstance().AddListener("Data_DecideConbination",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                return;
            }
            this.UpdateConbination(_current.cardType);
            
            
        },this);


        GameData.GetInstance().AddListener("Data_SendPublicCards",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                return;
            }
            
            this.Bet(-1);
            this.SetActionTag(Game_ActionType.None);
            this.UpdateAddTimeBtn(false,"");
        },this);

        GameData.GetInstance().AddListener("Data_GameResult",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                return;
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
                    
                }
            }

            for(let i = 0 ; i < _current.winList.length ; i++)
            {
                let currentWinData = _current.winList[i];
                if(currentPlayer.userInfo.userId == currentWinData.userId)
                {
                }
            }

            if(_current.loseList != null)
            {
                for(let i = 0 ; i < _current.loseList.length ; i++)
                {
                    let currentLoseData = _current.loseList[i];
                    if(currentPlayer.userInfo.userId == currentLoseData.userId)
                    {
                    }
                }
    
            }

        },this);
        
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }

    HideAllUI()
    {
        this.mCards.active = false;
        this.mGame_AddTime.node.active = false;
        this.mGame_BetAmount.node.active = false;
        this.mGame_ActionTag.node.active = false;
        this.mDealer.active = false;
        this.mConbinationBG.active = false;
        this.mMoney.node.active = false;
    }

    UpdateDealer(_value : boolean)
    {
        this.mDealer.active = _value;
    }


    UpdateCards(_playerData : any)
    {
        this.mCards.active = _playerData.isSendHandCard;
        if(_playerData.isSendHandCard)
        {
            //_playerData.cards
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
    SetActionTag(_actionType : Game_ActionType)
    {
        this.mGame_ActionTag.SetType(_actionType);
    }


    Bet(_amount : number)
    {
        this.mGame_BetAmount.node.active = false;
        if(_amount == -1)
        {
            return;
        }

        if(_amount > 0)
        {
            this.mGame_BetAmount.node.active = true;
            this.mGame_BetAmount.Bet(_amount);
        } 
    }

    ShowCards(_cards : Array<number>)
    {
        this.mCards.active = true;
        for(let i = 0 ; i < _cards.length ; i++)
        {
            let data = _cards[i];
            if(data <= 0)
            {
                continue;
            }
            let currentCard = this.mCards.children[i].getComponent(Poker);
            currentCard.ShowBack();
            currentCard.SetFrontByServerData(data);
            currentCard.SetClickAble();
            currentCard.FlipToFront();
        }
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

    UpdateMoney(_amount : number , _deskInfo : any)
    {
        if(_deskInfo.curTurnUserId == LocalPlayerData.GetInstance().Data_Uid)
        {
            this.mMoney.node.active = true;
        }
        else
        {
            this.mMoney.node.active = false;
        }
        
        this.mMoney.string = _amount + "";
    }
}

