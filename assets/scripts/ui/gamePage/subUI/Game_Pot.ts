import { _decorator, Component, Node, Label, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { Tool } from '../../../Tool';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_Pot')
export class Game_Pot extends BaseUI 
{
    @property(Node) 
    mTotalPotBG: Node = null;
    @property(Node) 
    mRoundPot: Node = null;
    @property(Label) 
    mTotalAmount: Label = null;
    @property(Node) 
    mSubPots: Node = null;

    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.ClearPot();
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

    SetTotalPot(_amount : number)
    {
        this.mTotalAmount.string = Localization.GetString("00064")+":" + Tool.ConvertMoney_S2C(_amount);
    }


    HideSubPot()
    {
        for(let i = 0 ; i < this.mSubPots.children.length ; i++)
        {
            this.mSubPots.children[i].active = false;
        }
        this.mSubPots.active = false;
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
            this.ClearPot();
            if(gameData.IsGamePlayingNow() == false)
            {
                return;
            }
            this.UpdateSubPots();
            this.UpdateTotalPot();
        })

        gameData.Data_S2CCommonWaitStartNotify.AddListenner(this,(_data)=>
        {
            this.ClearPot();
        });

        gameData.Data_S2CCommonRoundStartNotify.AddListenner(this,(_data)=>
        {
            this.UpdateSubPots();
            this.UpdateTotalPot();
        })

        gameData.Data_S2CCommonPotsNotify.AddListenner(this,(_data)=>
        {
            this.UpdateSubPots();
            this.UpdateTotalPot();
        })

        gameData.Data_S2CCommonActionNotify.AddListenner(this,(_data)=>
        {
            this.UpdateSubPots();
            this.UpdateTotalPot();
        })
        
    }

    public InitWithReplay()
    {
        
    }

    ClearPot()
    {
        this.mTotalPotBG.active = false;
        this.mTotalAmount.string = "";
        this.HideSubPot();
    }

    UpdateTotalPot()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let totalPot = gameData.GetDynamicData().totalPot;

        this.mTotalPotBG.active = false;
        if(totalPot > 0)
        {
            this.SetTotalPot(totalPot);
            this.mTotalPotBG.active = true;
        }
    }

    UpdateSubPots()
    {
        this.HideSubPot();
        this.mSubPots.active = true;
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let potInfos = gameData.GetDynamicData().potInfo;
        for(let i = 0; i < potInfos.length ; i++)
        {
            let potAmount = potInfos[i].pot;
            let subPotNode = this.mSubPots.children[i];
            subPotNode.active = true;
            subPotNode.children[0].getComponent(Label).string = Tool.ConvertMoney_S2C(potAmount) + "";
        }
    }
}

