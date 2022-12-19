import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { ToggleBtn } from '../../common/ToggleBtn';
import { Game_PreCheckOrFold } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_SelfPreAction')
export class Game_SelfPreAction extends BaseUI 
{
    @property(ToggleBtn) 
    mPreFoldCheck: ToggleBtn = null;
    @property(ToggleBtn) 
    mPreCall: ToggleBtn = null;

    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.node.active = false;
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

        gameData.Data_PreCheckOrFold.mData = Game_PreCheckOrFold.UnSelected;
        this.mPreFoldCheck.SetDataNotify( gameData.Data_PreCheckOrFold , Game_PreCheckOrFold.Selected);

        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.UpdateUI();
        });

        gameData.Data_S2CCommonCurrentActionNotify.AddListenner(this,(_data)=>
        {
            if(_data.actionUid == LocalPlayerData.Instance.Data_Uid.mData)
            {
                this.node.active = false;
            }
        })

        gameData.Data_S2CCommonSettlementNotify.AddListenner(this,(_data)=>
        {
            this.node.active = false;
        })

        gameData.Data_S2CCommonStandUpNotify.AddListenner(this,(_data)=>
        {
            this.UpdateUI();
        })

        gameData.Data_S2CCommonSitDownNotify.AddListenner(this,(_data)=>
        {
            this.UpdateUI();
        })

        gameData.Data_S2CCommonActionNotify.AddListenner(this,(_data)=>
        {
            this.UpdateUI();
        })

    }

    UpdateUI()
    {
        this.node.active = false;
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let gameState = gameData.GetGameState();

        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            return;
        }

        if(selfPlayer.cards.length == 0)
        {
            return;
        }

        if(gameState == TexasCashState.TexasCashState_Create ||
            gameState == TexasCashState.TexasCashState_RoundStart ||
            gameState == TexasCashState.TexasCashState_Settlement ||
            gameState == TexasCashState.TexasCashState_WaitStart)
        {

            return;
        }

        let currentActionUid =  gameData.GetActionUid();
        if(currentActionUid == selfPlayer.uid)
        {
            return;
        }

        let selfLastAct = gameData.FindLastActionByUid(selfPlayer.uid);
        let biggestAct = gameData.FindBiggestBetAction();

        if(biggestAct == null)
        {
            this.node.active = true;
            return;
        }

        if(selfLastAct == null)
        {
            this.node.active = true;
            return;
        }


        this.node.active = selfLastAct.roundAmount < biggestAct.roundAmount;
    }
}

