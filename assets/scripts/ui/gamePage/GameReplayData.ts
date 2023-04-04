import { _decorator, Component, Node } from 'cc';
import { BaseData } from '../../base/BaseData';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { SingletonBaseNotify } from '../../base/Singleton';


export class GameReplayData extends SingletonBaseNotify<GameReplayData>()
{
    protected ResetInstance() 
    {
        GameReplayData.ClearInstance();
    }


    //回放数据
    Data_CopyReplayData  : BaseData<DetailReplayRecord> = new BaseData<DetailReplayRecord>(); //把回放数据保存一份
    Data_ReplayData : BaseData<DetailReplayRecord> = new BaseData<DetailReplayRecord>(); //回放数据，会根据播放实时变动
    Data_State  : BaseData<TexasCashState> = new BaseData<TexasCashState>(); //当前展示到哪一个阶段
    Data_Step  : BaseData<number> = new BaseData<number>(); //展示到当前阶段的第几步了
    Data_Auto : BaseData<boolean> = new BaseData<boolean>(); //是否自动播放
    Data_ReStart : BaseData<boolean> = new BaseData<boolean>(); //重置
    Data_Update : BaseData<boolean> = new BaseData<boolean>(); //更新下一步
    Data_TotalPots : BaseData<number> = new BaseData<number>(); //总底池

    public InitData(_data : DetailReplayRecord)
    {
        let str = JSON.stringify(_data);
        this.Data_ReplayData.mData = JSON.parse(str) as DetailReplayRecord;
        this.Data_CopyReplayData.mData = JSON.parse(str) as DetailReplayRecord;
        this.ReStart();

    }


    public ReStart()
    {
        this.Data_TotalPots.mData = 0;
        let str = JSON.stringify(this.Data_CopyReplayData.mData);
        this.Data_ReplayData.mData = JSON.parse(str) as DetailReplayRecord;
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

        if(step < 0)
        {
            return null;
        }

        switch(state)
        {
            case TexasCashState.TexasCashState_RoundStart:
            {
                return null;
            }
            case TexasCashState.TexasCashState_PreFlopRound:
            {
                let preFlopActions = GameReplayData.Instance.GetPreflopActions(); 
                return preFlopActions[step];
            }
            case TexasCashState.TexasCashState_FlopRound:
            {
                let flopActions = GameReplayData.Instance.GetFlopActions(); 
                return flopActions[step];
            }
            case TexasCashState.TexasCashState_TurnRound:
            {
                let turnActions = GameReplayData.Instance.GetTurnActions(); 
                return turnActions[step];
            }
            case TexasCashState.TexasCashState_RiverRound:
            {
                let riverActions = GameReplayData.Instance.GetRiverActions(); 
                return riverActions[step];
            }
            case TexasCashState.TexasCashState_Settlement:
            {
                return null;
            }
        }

        return null;
        
    }

    GetCardsByUid(_uid : string) : Array<CardInfo>
    {
        let result = null;
        let winLoseResult = this.Data_ReplayData.mData.correspondSettlementResult;
        for(let i = 0 ; i < winLoseResult.length ; i++)
        {
            let current = winLoseResult[i];
            if(current.uid == _uid)
            {
                result = current.cardInfo;
                break;
            }
        }

        return result;
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

    GetRoundStartActionUid(_uid : string) : ActionResult
    {
        let roundStartActions = this.GetRoundStartActions();
        for(let i = 0 ; i < roundStartActions.length ; i++)
        {
            let current = roundStartActions[i];
            if(current.actionInfo.uid == _uid)
            {
                return current;
            }
        }

        return null;
    }

    GetRoundStartActions() : Array<ActionResult>
    {
        return this.Data_ReplayData.mData.roundStartActions;
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

    GetAllWinlose() : Array<PlayerWinLose>
    {
        return this.Data_ReplayData.mData.correspondSettlementResult;
    }

    GetWinResult(_seat : number) : PlayerWinLose
    {
        let index = this.Data_ReplayData.mData.players.findIndex((_item) => _item.seat === _seat);
        let playerInfo = null;
        if(index >=0)
        {
            playerInfo = this.Data_ReplayData.mData.players[index];
        }

        if(playerInfo == null)
        {
            return null;
        }

        index = this.Data_ReplayData.mData.correspondSettlementResult.findIndex((_item) => _item.uid === playerInfo.uid);
        if(index >=0)
        {
            return this.Data_ReplayData.mData.correspondSettlementResult[index];
        }

        return null;
   
    }


    GetPosIndex(_uid : string)
    {
        let totalSeatNum = this.Data_CopyReplayData.mData.texasConfig.seatNum;
        let dealerUid = this.Data_CopyReplayData.mData.dealerUid;
        let dealerInfo = this.GetPlayerInfoByUid(dealerUid);
        let standardSeat = dealerInfo.seat;
        let targetPlayer = this.GetPlayerInfoByUid(_uid);
        let targetSeatNum = targetPlayer.seat;
        let result = 0;
        while(standardSeat != targetSeatNum)
        {
            standardSeat++;
            if(standardSeat >totalSeatNum)
            {
                standardSeat = 0;
            }

            let tempPlayer = this.GetPlayerBySeat(standardSeat);
            if(tempPlayer == null)
            {
                continue;
            }
            
            result++;
        }

        return result;
    }

    GetPosName(_uid : string) : string
    {
        let totalSeatNum = this.Data_CopyReplayData.mData.texasConfig.seatNum;
        let straddle = this.Data_CopyReplayData.mData.texasConfig.straddle;
        let PosNames : Array<string> = new Array<string>();

        let posNameIndex = this.GetPosIndex(_uid);
        if(straddle == false)
        {
            if(totalSeatNum == 2)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
            }
            else if(totalSeatNum == 3)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
            }
            else if(totalSeatNum == 4)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
                PosNames.push("CO");
            }
            else if(totalSeatNum == 5)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
                PosNames.push("UTG");
                PosNames.push("CO");
            }
            else if(totalSeatNum == 6)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
                PosNames.push("UTG");
                PosNames.push("MP");
                PosNames.push("CO");
            }
            else if(totalSeatNum == 7)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
                PosNames.push("UTG");
                PosNames.push("UTG+1");
                PosNames.push("MP");
                PosNames.push("CO");
            }
            else if(totalSeatNum == 8)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
                PosNames.push("UTG");
                PosNames.push("UTG+1");
                PosNames.push("MP");
                PosNames.push("MP+1");
                PosNames.push("CO");
            }
            else if(totalSeatNum == 9)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
                PosNames.push("UTG");
                PosNames.push("UTG+1");
                PosNames.push("MP");
                PosNames.push("MP+1");
                PosNames.push("MP+2");
                PosNames.push("CO");
            }
        }
        else
        {
            if(totalSeatNum == 2)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
            }
            else if(totalSeatNum == 3)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
            }
            else if(totalSeatNum == 4)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
                PosNames.push("Straddle");
            }
            else if(totalSeatNum == 5)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
                PosNames.push("Straddle");
                PosNames.push("UTG");
            }
            else if(totalSeatNum == 6)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
                PosNames.push("Straddle");
                PosNames.push("UTG");
                PosNames.push("CO");
            }
            else if(totalSeatNum == 7)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
                PosNames.push("Straddle");
                PosNames.push("UTG");
                PosNames.push("MP");
                PosNames.push("CO");
            }
            else if(totalSeatNum == 8)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
                PosNames.push("Straddle");
                PosNames.push("UTG");
                PosNames.push("UTG+1");
                PosNames.push("MP");
                PosNames.push("CO");
            }
            else if(totalSeatNum == 9)
            {
                PosNames.push("Btn");
                PosNames.push("SB");
                PosNames.push("BB");
                PosNames.push("Straddle");
                PosNames.push("UTG");
                PosNames.push("UTG+1");
                PosNames.push("MP");
                PosNames.push("MP+1");
                PosNames.push("CO");
            }
        }

        return PosNames[posNameIndex];
    }

}

// 庄位>小盲大盲struddle>CO>UTG>MP>UTG+1>MP+1>MP+2
// 4人时：从大盲开始，命名为CO；
// 5人时：从大盲开始，命名为UTG CO；
// 6人时：从大盲开始，命名为UTG MP CO；
// 7人时：从大盲开始，命名为UTG UTG+1 MP CO；
// 8人时：从大盲开始，命名为UTG UTG+1 MP MP+1 CO；
// 9人时：从大盲开始，命名为UTG UTG+1 MP MP+1 MP+2 CO；