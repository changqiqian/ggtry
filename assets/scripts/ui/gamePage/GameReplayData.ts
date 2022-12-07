import { _decorator, Component, Node } from 'cc';
import { BaseData } from '../../base/BaseData';
import { SingletonBaseNotify } from '../../base/Singleton';


export class GameReplayData extends SingletonBaseNotify<GameReplayData>()
{
    protected ResetInstance() 
    {
        GameReplayData.ClearInstance();
    }


    //回放数据
    Data_CopyReplayData  : BaseData<ReplayData> = new BaseData<ReplayData>(); //把回放数据保存一份
    Data_ReplayData : BaseData<ReplayData> = new BaseData<ReplayData>(); //回放数据，会根据播放实时变动
    Data_State  : BaseData<TexasCashState> = new BaseData<TexasCashState>(); //当前展示到哪一个阶段
    Data_Step  : BaseData<number> = new BaseData<number>(); //展示到当前阶段的第几步了
    Data_Auto : BaseData<boolean> = new BaseData<boolean>(); //是否自动播放
    Data_ReStart : BaseData<boolean> = new BaseData<boolean>(); //重置
    Data_Update : BaseData<boolean> = new BaseData<boolean>(); //更新下一步

    Data_RotateSeatEnd: BaseData<boolean> = new BaseData<boolean>(); //旋转座位完成
    public InitData(_data : ReplayData)
    {
        this.Data_CopyReplayData.mData = new ReplayData(_data);
        this.Data_ReplayData.mData = _data;
        this.ReStart();

    }

    public ReStart()
    {
        this.Data_ReplayData.mData = this.Data_CopyReplayData.mData;
        this.Data_State.mData = TexasCashState.TexasCashState_RoundStart;
        this.Data_Step.mData = 0;
        this.Data_Auto.mData = false;
        this.Data_Update.mData = false;
        this.Data_ReStart.mData = true;
    }

    GetCurrentAction() : ActionResult
    {
        let state = this.Data_State.mData;
        let step = this.Data_Step.mData;
        switch(state)
        {
            case TexasCashState.TexasCashState_RoundStart:
            {
                return null;
            }
            break;
            case TexasCashState.TexasCashState_PreFlopRound:
            {
                let preFlopActions = GameReplayData.Instance.GetPreflopActions(); 
                return preFlopActions[step];
            }
            break;
            case TexasCashState.TexasCashState_FlopRound:
            {
                let flopActions = GameReplayData.Instance.GetFlopActions(); 
                return flopActions[step];
            }
            break;
            case TexasCashState.TexasCashState_TurnRound:
            {
                let turnActions = GameReplayData.Instance.GetTurnActions(); 
                return turnActions[step];
            }
            break;
            case TexasCashState.TexasCashState_RiverRound:
            {
                let riverActions = GameReplayData.Instance.GetRiverActions(); 
                return riverActions[step];
            }
            break;
            case TexasCashState.TexasCashState_Settlement:
            {
                return null;
            }
            break;
        }

        return null;
    }

    GetPlayerInfoByUid(_uid : string) : PlayerInfo
    {
        let index = this.Data_ReplayData.mData.players.findIndex((_item) => _item.uid === _uid);
        if(index >=0)
        {
            return this.Data_ReplayData.mData.players[index];
        }

        return null;
   
    }

    GetPlayerBySeat(_seat : number): PlayerInfo
    {
        let index = this.Data_ReplayData.mData.players.findIndex((_item) => _item.seat === _seat);
        if(index >=0)
        {
            return this.Data_ReplayData.mData.players[index];
        }

        return null;
    }

    GetPreflopActions() : Array<ActionResult>
    {
        return this.Data_ReplayData.mData.preFlopActions;
    }

    GetFlopActions(): Array<ActionResult>
    {
        return this.Data_ReplayData.mData.flopActions;
    }

    GetTurnActions(): Array<ActionResult>
    {
        return this.Data_ReplayData.mData.turnActions;
    }

    GetRiverActions(): Array<ActionResult>
    {
        return this.Data_ReplayData.mData.riverActions;
    }


}
