import { _decorator, Component, Node, Label, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { Tool } from '../../../Tool';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { GameReplayData } from '../GameReplayData';
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

    InitWithReplayData()
    {
        GameReplayData.Instance.Data_ReStart.AddListenner(this,(_data)=>
        {
            if(_data == false)
            {
                return;
            }
            this.ClearPot();
        })

        GameReplayData.Instance.Data_State.AddListenner(this,(_data)=>
        {
            this.UpdateSubPotsReplay(_data);
        })

        GameReplayData.Instance.Data_TotalPots.AddListenner(this,(_data)=>
        {
            if(_data > 0)
            {
                this.SetTotalPot(_data);
                this.mTotalPotBG.active = true;
            }
        })
        
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

    UpdateSubPotsReplay(_state : TexasCashState)
    {
        this.HideSubPot();
        this.mSubPots.active = true;
        let pots = null;
        switch(_state)
        {
            case TexasCashState.TexasCashState_RoundStart:
            {
                
            }
            break;
            case TexasCashState.TexasCashState_PreFlopRound:
            {
    
            }
            break;
            case TexasCashState.TexasCashState_FlopRound:
            {
                pots = GameReplayData.Instance.Data_ReplayData.mData.potInfoFlop;
            }
            break;
            case TexasCashState.TexasCashState_TurnRound:
            {
                pots = GameReplayData.Instance.Data_ReplayData.mData.potInfoTurn;
            }
            break;
            case TexasCashState.TexasCashState_RiverRound:
            {
                pots = GameReplayData.Instance.Data_ReplayData.mData.potInfoRiver;
            }
            break;
            case TexasCashState.TexasCashState_Settlement:
            {
      
            }
            break;
        }

        if(pots == null)
        {
            return;
        }

        for(let i = 0; i < pots.length ; i++)
        {
            let potAmount = pots[i].pot;
            let subPotNode = this.mSubPots.children[i];
            subPotNode.active = true;
            subPotNode.children[0].getComponent(Label).string = Tool.ConvertMoney_S2C(potAmount) + "";
        }
    
    }

}

