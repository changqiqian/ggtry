import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
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
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            NetworkSend.Instance.AutoState(gameData.AutoMsgId(),gameStruct.mGameId);
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
            this.mBackToGameBtn.node.active = false;
            this.UpdateBackGameBtn();
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
            if(gameData.Data_S2CCommonOpenCardNotify.mData == null)
            {
                this.mShowHandsBtn.node.active = true;
            }
        });

        gameData.Data_S2CCommonStandUpNotify.AddListenner(this,(_data)=>
        {
            let localUid =  LocalPlayerData.Instance.Data_Uid.mData;
            if(_data.actionUid == localUid)
            {
                this.mBackToGameBtn.node.active = false;
            }
        });

        gameData.Data_S2CCommonAutoOperatorNotify.AddListenner(this,(_data)=>
        {
            let localUid =  LocalPlayerData.Instance.Data_Uid.mData;
            if(_data.uid == localUid)
            {
                this.UpdateBackGameBtn();
            }
        });
    }

    UpdateBackGameBtn()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let localUid =  LocalPlayerData.Instance.Data_Uid.mData;
        let selfPlayer = gameData.GetPlayerInfoByUid(localUid);
        if(selfPlayer == null)
        {
            return;
        }
        this.StopSecondsTimer();

        if(selfPlayer.auto)
        {
            this.mBackToGameBtn.node.active = true;
            if(selfPlayer.autoLeftTime > 0)
            {
                this.StartSecondsTimer(selfPlayer.autoLeftTime,1,()=>
                {
                    let restTime = this.GetRestSeconds();
                    this.mBackToGameBtn.SetTitle(restTime + "s");
                });
            }
            else
            {
                this.mBackToGameBtn.SetTitle(Localization.GetString("00368"));
            }
        }
        else
        {
            this.mBackToGameBtn.node.active = false;
        }


    }
}

