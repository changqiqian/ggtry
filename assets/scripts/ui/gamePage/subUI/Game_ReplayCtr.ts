import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
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
            this.StopAutoPlay();
            GameReplayData.Instance.ReStart();
        })

        this.mAuotToggle.SetClickCallback((_data)=>
        {
            if(_data)
            {
                this.StartAutoPlay();
            }
            else
            {
                this.StopAutoPlay();
            }
        })
        this.mAuotToggle.ShowUnselected();

        this.mNextBtn.SetClickCallback(()=>
        {
            if(GameReplayData.Instance.Data_Auto.mData)
            {
                return;
            }
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

    StartAutoPlay()
    {
        GameReplayData.Instance.Data_Auto.mData = true;
        UIMgr.Instance.ShowToast(Localization.GetString("00272"),1);
        this.schedule(this.AutoPlayLogic,1.5);

        this.mNextBtn.Show(false);
    }

    StopAutoPlay()
    {
        GameReplayData.Instance.Data_Auto.mData = false;
        //UIMgr.Instance.ShowToast(Localization.GetString("00273"),1);
        this.unschedule(this.AutoPlayLogic);
        this.mAuotToggle.ShowUnselected();
        this.mNextBtn.Show(true);
    }

    AutoPlayLogic()
    {
        this.NextLogic();
        let state = GameReplayData.Instance.Data_State.mData;
        if(state == TexasCashState.TexasCashState_Settlement)
        {
            this.StopAutoPlay();
        }
    }

    NextLogic()
    {
        let state = GameReplayData.Instance.Data_State.mData;
        switch(state)
        {
            case TexasCashState.TexasCashState_RoundStart:
            {
                GameReplayData.Instance.Data_Step.mData = 0;
                GameReplayData.Instance.Data_State.mData = TexasCashState.TexasCashState_PreFlopRound;
            }
            break;
            case TexasCashState.TexasCashState_PreFlopRound:
            {
                let preFlopActions = GameReplayData.Instance.GetPreflopActions(); 
                GameReplayData.Instance.Data_Step.mData++;
                if(GameReplayData.Instance.Data_Step.mData >= preFlopActions.length)
                {
                    if(this.TrySettlment() == false)
                    {
                        GameReplayData.Instance.Data_Step.mData =-1;
                        GameReplayData.Instance.Data_State.mData = TexasCashState.TexasCashState_FlopRound;
                    }
                }
            }
            break;
            case TexasCashState.TexasCashState_FlopRound:
            {
                let flopActions = GameReplayData.Instance.GetFlopActions(); 
                GameReplayData.Instance.Data_Step.mData++;

                if(GameReplayData.Instance.Data_Step.mData >= flopActions.length)
                {
                    if(this.TrySettlment()  == false)
                    {
                        GameReplayData.Instance.Data_Step.mData = -1;
                        GameReplayData.Instance.Data_State.mData = TexasCashState.TexasCashState_TurnRound;
                    }
                }
            }
            break;
            case TexasCashState.TexasCashState_TurnRound:
            {
                let turnActions = GameReplayData.Instance.GetTurnActions(); 
                GameReplayData.Instance.Data_Step.mData++;

                if(GameReplayData.Instance.Data_Step.mData >= turnActions.length)
                {
                    if(this.TrySettlment()  == false)
                    {
                        GameReplayData.Instance.Data_Step.mData = -1;
                        GameReplayData.Instance.Data_State.mData = TexasCashState.TexasCashState_RiverRound;
                    }
                }
            }
            break;
            case TexasCashState.TexasCashState_RiverRound:
            {
                let riverActions = GameReplayData.Instance.GetRiverActions(); 
                GameReplayData.Instance.Data_Step.mData++;
                if(GameReplayData.Instance.Data_Step.mData >= riverActions.length)
                {
                    GameReplayData.Instance.Data_State.mData = TexasCashState.TexasCashState_Settlement;
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
    TrySettlment()
    {
        let state = GameReplayData.Instance.Data_State.mData;

        switch(state)
        {
            case TexasCashState.TexasCashState_RoundStart:
            {
                return false;
            }
            case TexasCashState.TexasCashState_PreFlopRound:
            {
                let flopActions = GameReplayData.Instance.GetFlopActions(); 
                if(flopActions && flopActions.length > 0)
                {
                    return false;
                }
            }
            break;
            case TexasCashState.TexasCashState_FlopRound:
            {
                let turnActions = GameReplayData.Instance.GetTurnActions(); 
                if(turnActions && turnActions.length > 0)
                {
                    return false;
                }
            }
            break;
            case TexasCashState.TexasCashState_TurnRound:
            {
                let riverActions = GameReplayData.Instance.GetRiverActions(); 
                if(riverActions && riverActions.length > 0)
                {
                    return false;
                }
            }
            break;
            case TexasCashState.TexasCashState_RiverRound:
            {
      
            }
            case TexasCashState.TexasCashState_Settlement:
            {

            }
            break;
        }


        GameReplayData.Instance.Data_State.mData = TexasCashState.TexasCashState_Settlement;
        return true;
    }
}

