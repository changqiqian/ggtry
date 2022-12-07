import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { GameConfig } from '../../../GameConfig';
import { BaseButton } from '../../common/BaseButton';
import { ToggleBtn } from '../../common/ToggleBtn';
import { GameReplayData } from '../GameReplayData';
const { ccclass, property } = _decorator;

@ccclass('Game_ReplayCtr')
export class Game_ReplayCtr extends BaseUI 
{
    @property(BaseButton) 
    mReStartBtn: BaseButton = null;
    @property(BaseButton) 
    mExitBtn: BaseButton = null;
    @property(ToggleBtn) 
    mAuotToggle: ToggleBtn = null;
    @property(BaseButton) 
    mNextBtn: BaseButton = null;

    private mExitCallback : Function = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mReStartBtn.SetClickCallback(()=>
        {
            GameReplayData.Instance.ReStart();
        })

        this.mAuotToggle.SetClickCallback((_data)=>
        {

        })

        this.mNextBtn.SetClickCallback(()=>
        {
            this.NextLogic();
        })

        this.mExitBtn.SetClickCallback(()=>
        {
            if(this.mExitCallback != null)
            {
                this.mExitCallback();
            }
        })
        
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

        this.mExitCallback = null;
    }

    public SetExitCallback(_exitCallback : Function)
    {
        this.mExitCallback = _exitCallback;
    }

    NextLogic()
    {
        let state = GameReplayData.Instance.Data_State.mData;
        switch(state)
        {
            case TexasCashState.TexasCashState_RoundStart:
            {
                GameReplayData.Instance.Data_Step.mData = -1;
                GameReplayData.Instance.Data_State.mData = TexasCashState.TexasCashState_PreFlopRound;
                UIMgr.Instance.ShowToast("TexasCashState_PreFlopRound");
            }
            break;
            case TexasCashState.TexasCashState_PreFlopRound:
            {
                let preFlopActions = GameReplayData.Instance.GetPreflopActions(); 
                GameReplayData.Instance.Data_Step.mData++;
                UIMgr.Instance.ShowToast("TexasCashState_PreFlopRound Data_Step==" +GameReplayData.Instance.Data_Step.mData);
                if(GameReplayData.Instance.Data_Step.mData >= preFlopActions.length)
                {
                    if(this.HaveNextPhase())
                    {
                        GameReplayData.Instance.Data_Step.mData =-1;
                        GameReplayData.Instance.Data_State.mData = TexasCashState.TexasCashState_FlopRound;
                        UIMgr.Instance.ShowToast("TexasCashState_FlopRound");
                    }
                }
            }
            break;
            case TexasCashState.TexasCashState_FlopRound:
            {
                let flopActions = GameReplayData.Instance.GetFlopActions(); 
                GameReplayData.Instance.Data_Step.mData++;
                UIMgr.Instance.ShowToast("TexasCashState_FlopRound Data_Step==" +GameReplayData.Instance.Data_Step.mData);

                if(GameReplayData.Instance.Data_Step.mData >= flopActions.length)
                {
                    if(this.HaveNextPhase())
                    {
                        GameReplayData.Instance.Data_Step.mData = -1;
                        GameReplayData.Instance.Data_State.mData = TexasCashState.TexasCashState_TurnRound;
                        UIMgr.Instance.ShowToast("TexasCashState_TurnRound");
                    }
                }
            }
            break;
            case TexasCashState.TexasCashState_TurnRound:
            {
                let turnActions = GameReplayData.Instance.GetTurnActions(); 
                GameReplayData.Instance.Data_Step.mData++;
                UIMgr.Instance.ShowToast("TexasCashState_TurnRound Data_Step==" +GameReplayData.Instance.Data_Step.mData);

                if(GameReplayData.Instance.Data_Step.mData >= turnActions.length)
                {
                    if(this.HaveNextPhase())
                    {
                        GameReplayData.Instance.Data_Step.mData = -1;
                        GameReplayData.Instance.Data_State.mData = TexasCashState.TexasCashState_RiverRound;
                        UIMgr.Instance.ShowToast("TexasCashState_RiverRound");
                    }
                }
            }
            break;
            case TexasCashState.TexasCashState_RiverRound:
            {
                let riverActions = GameReplayData.Instance.GetRiverActions(); 
                GameReplayData.Instance.Data_Step.mData++;
                UIMgr.Instance.ShowToast("TexasCashState_RiverRound Data_Step==" +GameReplayData.Instance.Data_Step.mData);
                if(GameReplayData.Instance.Data_Step.mData >= riverActions.length)
                {
                    if(this.HaveNextPhase())
                    {
                        GameReplayData.Instance.Data_Step.mData = -1;
                        GameReplayData.Instance.Data_State.mData = TexasCashState.TexasCashState_Settlement;
                        UIMgr.Instance.ShowToast("TexasCashState_Settlement");
                    }
                }
            }
            break;
            case TexasCashState.TexasCashState_Settlement:
            {

            }
            break;
        }

        GameReplayData.Instance.Data_Update.mData = true;

    }

    //是否有下一轮的数据
    HaveNextPhase()
    {
        let state = GameReplayData.Instance.Data_State.mData;

        switch(state)
        {
            case TexasCashState.TexasCashState_RoundStart:
            {
                return true;
            }
            case TexasCashState.TexasCashState_PreFlopRound:
            {
                let flopActions = GameReplayData.Instance.GetFlopActions(); 
                if(flopActions && flopActions.length > 0)
                {
                    return true;
                }
            }
            break;
            case TexasCashState.TexasCashState_FlopRound:
            {
                let turnActions = GameReplayData.Instance.GetTurnActions(); 
                if(turnActions && turnActions.length > 0)
                {
                    return true;
                }
            }
            break;
            case TexasCashState.TexasCashState_TurnRound:
            {
                let riverActions = GameReplayData.Instance.GetRiverActions(); 
                if(riverActions && riverActions.length > 0)
                {
                    return true;
                }
            }
            break;
            case TexasCashState.TexasCashState_RiverRound:
            {
                return true;
            }
            break;
            case TexasCashState.TexasCashState_Settlement:
            {

            }
            break;
        }

        GameReplayData.Instance.Data_State.mData = TexasCashState.TexasCashState_Settlement;
        UIMgr.Instance.ShowToast("牌局已结束");
        return false;
    }
}

