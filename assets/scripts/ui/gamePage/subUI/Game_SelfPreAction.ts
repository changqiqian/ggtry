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
            this.UpdateUI();
        })

    }

    UpdateUI()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let dynamicData =  gameData.GetDynamicData();

        if(dynamicData.state == TexasCashState.TexasCashState_Create ||
        dynamicData.state == TexasCashState.TexasCashState_RoundStart ||
        dynamicData.state == TexasCashState.TexasCashState_Settlement ||
        dynamicData.state == TexasCashState.TexasCashState_WaitStart)
        {
            this.node.active = false;
            return;
        }

        let currentActionUid =  dynamicData.actionUid;
        if(currentActionUid == LocalPlayerData.Instance.Data_Uid.mData)
        {
            this.node.active = false;
            return;
        }

        let selfLastAct = gameData.FindLastActionByUid(LocalPlayerData.Instance.Data_Uid.mData);
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


        this.node.active = selfLastAct.amount < biggestAct.amount;
    }
}

