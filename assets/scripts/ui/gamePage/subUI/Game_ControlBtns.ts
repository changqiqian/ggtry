import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Network } from '../../../network/Network';
import { NetworkSend } from '../../../network/NetworkSend';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_ControlBtns')
export class Game_ControlBtns extends BaseUI 
{
    @property(BaseButton) 
    mDealCardsBtn: BaseButton = null;
    @property(BaseButton) 
    mShowHandsBtn: BaseButton = null;
    @property(BaseButton) 
    mBackToGameBtn: BaseButton = null;

    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {

        this.mBackToGameBtn.SetClickCallback(()=>
        {
        });
        this.mBackToGameBtn.node.active = false;

        this.mDealCardsBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let msgId = gameData.ShowPublicMsgId();
            let gameId = gameStruct.mGameId;
            NetworkSend.Instance.SendShowPublicCards(msgId , gameId)
            this.mDealCardsBtn.node.active = false;
        });
        this.mDealCardsBtn.node.active = false;

        this.mShowHandsBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let msgId = gameData.ShowHansMsgId();
            let gameId = gameStruct.mGameId;
            NetworkSend.Instance.SendShowHands(msgId , gameId)
            this.mShowHandsBtn.node.active = false;
        });
        this.mShowHandsBtn.node.active = false;

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
        this.BindData()
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.mDealCardsBtn.node.active = false;
            this.mShowHandsBtn.node.active = false;
        });

        gameData.Data_S2CCommonWaitStartNotify.AddListenner(this,(_data)=>
        {
            this.mDealCardsBtn.node.active = false;
            this.mShowHandsBtn.node.active = false;
        })
        gameData.Data_S2CCommonRoundStartNotify.AddListenner(this,(_data)=>
        {
            this.mDealCardsBtn.node.active = false;
            this.mShowHandsBtn.node.active = false;
        });
        gameData.Data_S2CCommonSettlementNotify.AddListenner(this,(_data)=>
        {
            let publicCards = gameData.GetDynamicData().publicCards;
            this.mDealCardsBtn.node.active = publicCards.length< 5;
            this.mShowHandsBtn.node.active = true;
        });
        gameData.Data_S2CCommonWaitStartNotify.AddListenner(this,(_data)=>
        {
            this.mDealCardsBtn.node.active = false;
            this.mShowHandsBtn.node.active = false;
        });

        
    }
}

