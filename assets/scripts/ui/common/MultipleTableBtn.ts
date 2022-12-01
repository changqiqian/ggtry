import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { Tool } from '../../Tool';
import { GameData } from '../gamePage/GameData';
import { HallData } from '../hall/HallData';
import { MultipleTableCtr } from './MultipleTableCtr';
import { Poker } from './Poker';
import { ToggleBtn } from './ToggleBtn';
const { ccclass, property } = _decorator;

@ccclass('MultipleTableBtn')
export class MultipleTableBtn extends BaseUI 
{
    @property(ToggleBtn) 
    mToggleBtn: ToggleBtn = null;
    @property(Node) 
    mProgressBG: Node = null;
    @property(Sprite) 
    mProgress: Sprite = null;
    @property(Node) 
    mTexasContainer: Node = null;
    @property(Node) 
    mOmhContainer: Node = null;
    @property(Node) 
    mPot: Node = null;
    @property(Label) 
    mPotInfo: Label = null;
    @property(Label) 
    mStatus: Label = null;

    mIndex : number = null;
    mCurrentGid : string = null;

    InitParam()
    {
        this.ResetUI();
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

    InitWithIndex(_index : number)
    {
        this.mIndex = _index;
        this.mToggleBtn.SetDataNotify(HallData.Instance.Data_MultipeIndex,_index);
    }

    ResetUI()
    {
        this.mProgressBG.active = false;
        this.mProgress.node.active = false;
        this.mTexasContainer.active = false;
        this.mOmhContainer.active = false;
        this.mPot.active = false;
        this.mStatus.node.active = false;
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
        })

        gameData.Data_S2CCommonStandUpNotify.AddListenner(this,(_data)=>
        {
            if(_data.actionUid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.UpdateUI();
        })

        gameData.Data_S2CCommonBringInNotify.AddListenner(this,(_data)=>
        {
            if(_data.actionUid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.UpdateUI();
        })

        gameData.Data_S2CCommonBringOutNotify.AddListenner(this,(_data)=>
        {
            if(_data.actionUid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.UpdateUI();
        })
        
        
        
    }

    UpdateUI()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let coreData = gameData.Data_S2CCommonEnterGameResp.mData;
        if(coreData.gameDynamic.state < TexasCashState.TexasCashState_Start)
        {
            this.WaitGameStart();
            return;
        }

        if(coreData.gameDynamic.state == TexasCashState.TexasCashState_RoundStart ||
            coreData.gameDynamic.state == TexasCashState.TexasCashState_Settlement )
        {
            this.WaitNextRound();
            return;
        }


        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            this.ShowPot();
            return;
        }

        if(selfPlayer.currencyNum)
        {
            this.ShowBuyIn(selfPlayer.buyInLeftTime);
            return;
        }

        if(!selfPlayer.cards || selfPlayer.cards.length == 0)
        {
            this.ShowPot();
            return;
        }

        this.ShowCards(selfPlayer.cards,selfPlayer.fold);
        if(coreData.gameDynamic.actionUid == selfPlayer.uid)
        {
            this.ShowCountDown(coreData.gameDynamic.actionLeftTime);
        }
    }

    WaitGameStart()
    {
        this.ResetUI();
        this.mStatus.node.active = true;
        this.mStatus.string = Localization.GetString("00246");
    }

    WaitNextRound()
    {
        this.ResetUI();
        this.mStatus.node.active = true;
        this.mStatus.string = Localization.GetString("00247");
    }

    ShowPot()
    {
        this.ResetUI();
        this.mPot.active = true;

        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let totalPot = gameData.GetTotalPots();
        this.mPotInfo.string = "$" + Tool.ConvertMoney_S2C(totalPot);
    }

    ShowBuyIn(_leftTime : number)
    {
        this.ResetUI();
        this.mStatus.node.active = true;
        this.mStatus.string = Localization.GetString("00248");

        this.ShowCountDown(_leftTime);
    }

    ShowCards(_cards : Array<CardInfo> ,  _fold : boolean) 
    {
        this.ResetUI();
        this.mProgressBG.active = true;
        let cardsContainer = this.GetCardRootNode();
        cardsContainer.active = true;
        for(let i = 0 ; i < cardsContainer.children.length ; i++)
        {
            let cardData = _cards[i];
            let currentPoker =  cardsContainer.children[i].getComponent(Poker);
            currentPoker.ShowBack();
            currentPoker.SetFrontByCardInfo(cardData);
            currentPoker.FlipToFront(0.2);
            currentPoker.SetGary(_fold);
        }
    }
    
    ShowCountDown(_leftTime : number)
    {
        this.StopSecondsTimer();
        this.mProgressBG.active = true;
        this.mProgress.node.active = true;
        this.StartSecondsTimer(_leftTime , 0.1);
    }

    OnSecondTimer()
    {
        let millSeconds = this.GetRestMillSeconds();
        let ratio = millSeconds/this.mTotalCountTime;
        this.mProgress.fillRange = ratio;
    }


    GetCardRootNode() : Node
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let gameType = gameData.Data_S2CCommonEnterGameResp.mData.gameStatic.basicConfig.gameType;
        if(gameType == GameType.GameType_OmhCash || gameType == GameType.GameType_OmhMtt)
        {
            return this.mOmhContainer;
        }
        else
        {
            return this.mTexasContainer;
        }
    }

}

