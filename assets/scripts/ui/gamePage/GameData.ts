import { Vec3, _decorator} from 'cc';
import { BaseData } from '../../base/BaseData';
import { DataNotify } from '../../base/DataNotify';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { MultipleNotify, SingletonBaseNotify } from '../../base/Singleton';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';



export abstract class GameData extends MultipleNotify
{
    public static readonly GameUiTag = "GameUiTag";
    //UI控制
    Data_ChatingSubLayer :  BaseData<Game_ChattingSubLayer> = new BaseData<Game_ChattingSubLayer>();  //聊天页面子页面


    //服务器数据返回
    Data_S2CCommonEnterGameResp : BaseData<S2CCommonEnterGameResp> = new BaseData<S2CCommonEnterGameResp>();  //游戏基础配置信息
    Data_S2CCommonOpenNotify : BaseData<S2CCommonOpenNotify> = new BaseData<S2CCommonOpenNotify>(true);  //游戏开始推送
    Data_S2CCommonStartResp : BaseData<S2CCommonStartResp> = new BaseData<S2CCommonStartResp>(true);  //游戏开始回复
    Data_S2CCommonBringInTimerNotify : BaseData<S2CCommonBringInTimerNotify> = new BaseData<S2CCommonBringInTimerNotify>(true);  //买入倒计时推送
    Data_S2CCommonBringInNotify : BaseData<S2CCommonBringInNotify> = new BaseData<S2CCommonBringInNotify>(true);  //买入推送
    Data_S2CCommonSitDownResp : BaseData<S2CCommonSitDownResp> = new BaseData<S2CCommonSitDownResp>(true);  //坐下
    Data_S2CCommonSitDownNotify: BaseData<S2CCommonSitDownNotify> = new BaseData<S2CCommonSitDownNotify>(true);  //坐下推送
    Data_S2CCommonStandUpResp : BaseData<S2CCommonStandUpResp> = new BaseData<S2CCommonStandUpResp>(true);  //站起
    Data_S2CCommonStandUpNotify : BaseData<S2CCommonStandUpNotify> = new BaseData<S2CCommonStandUpNotify>(true);  //站起推送
    Data_S2CCommonBringInResp : BaseData<S2CCommonBringInResp> = new BaseData<S2CCommonBringInResp>(true);  //带入


    Data_S2CCommonRoundStartNotify : BaseData<S2CCommonRoundStartNotify> = new BaseData<S2CCommonRoundStartNotify>(true);  //本轮开始推送
    Data_S2CCommonPreFlopRoundNotify: BaseData<S2CCommonPreFlopRoundNotify> = new BaseData<S2CCommonPreFlopRoundNotify>(true);  //翻前发牌推送
    Data_S2CCommonCurrentActionNotify : BaseData<S2CCommonCurrentActionNotify> = new BaseData<S2CCommonCurrentActionNotify>(true);  //轮到谁行动推送
    Data_S2CCommonFlopRoundNotify : BaseData<S2CCommonFlopRoundNotify> = new BaseData<S2CCommonFlopRoundNotify>(true);  //发flop
    Data_S2CCommonTurnRoundNotify : BaseData<S2CCommonTurnRoundNotify> = new BaseData<S2CCommonTurnRoundNotify>(true);  //发转牌
    Data_S2CCommonRiverRoundNotify : BaseData<S2CCommonRiverRoundNotify> = new BaseData<S2CCommonRiverRoundNotify>(true);  //发河牌
    Data_S2CCommonActionNotify : BaseData<S2CCommonActionNotify> = new BaseData<S2CCommonActionNotify>(true);  //行动推送
    Data_S2CCommonSettlementNotify  : BaseData<S2CCommonSettlementNotify> = new BaseData<S2CCommonSettlementNotify>(true);  //游戏结算推送


    Data_PreCheckOrFold : BaseData<number> = new BaseData<number>();  //提前check 或者 fold  0代表没选中，1代表选中
    Data_RotateSeatEnd : BaseData<boolean> = new BaseData<boolean>(true);  //座位旋转结束
    
    public static CreateAction(_actionType : ActionType , _uid : string , _amount : number):ActionInfo
    {
        let act = new ActionInfo();
        act.actionType = _actionType;
        act.amount = _amount;
        act.uid = _uid;
        return act;
    }
    
    public SetGameInfo(_S2CCommonEnterGameResp : S2CCommonEnterGameResp)
    {
        this.Data_S2CCommonEnterGameResp.mData = _S2CCommonEnterGameResp;
    }

    public GetStaticData() : GameStaticData
    {
        return this.Data_S2CCommonEnterGameResp.mData.gameStatic;
    }

    public GetDynamicData() : GameDynamicData
    {
        return this.Data_S2CCommonEnterGameResp.mData.gameDynamic;
    }
    public ResetGameInfo()
    {
        let seatInfos = this.GetDynamicData().seatInfos;
        for(let i = 0 ; i < seatInfos.length ; i++)
        {
            seatInfos[i].cards = [];
            seatInfos[i].fold = false;
        }
        this.GetDynamicData().actionUid = "";
        this.GetDynamicData().actionLeftTime = 0;
        this.GetDynamicData().potInfo = [];
        this.GetDynamicData().actions = [];
        this.GetDynamicData().publicCards = [];
        this.GetDynamicData().dealerUid = "";
        this.GetDynamicData().state = TexasCashState.TexasCashState_RoundStart;
    }

    public ClearActions()
    {
        this.GetDynamicData().actions = [];
    }

    public PlayerSit(_playerInfo : PlayerInfo)
    {
        this.GetDynamicData().seatInfos.push(_playerInfo);
    }

    public PlayerStand(_userId : string)
    {
        let seats = this.GetDynamicData().seatInfos;
        for(let i = 0 ; i < seats.length ; i++)
        {
            if(seats[i].uid == _userId)
            {
                seats.splice(i,1);
                break;
            }
        }
    }

    public UpdatePlayerMoney(_userId : string , _money : number)
    {
        let playerInfo = this.GetPlayerInfoByUid(_userId);
        playerInfo.currencyNum = _money;
    }


    public CanPlayerBuyIn(_userId : string) : boolean
    {
        let state = this.GetDynamicData().state;
        let playerInfo = this.GetPlayerInfoByUid(_userId);
        if(state <= TexasCashState.TexasCashState_WaitStart)
        {
            return true;
        }

        if(playerInfo.cards.length == 0)
        {
            return true;
        }

        if(playerInfo.fold == true)
        {
            return true;
        }

        return false;
    }



    public SetGameState(_state : TexasCashState)
    {
        this.GetDynamicData().state = _state;
    }

    public GetGameState() : TexasCashState
    {
        return this.GetDynamicData().state;
    }


    public UpdatePlayer(_players : Array<PlayerInfo>)
    {
        for(let i = 0 ; i < _players.length ; i++)
        {
            let currentPlayer = _players[i];
            let index = this.GetDynamicData().seatInfos.findIndex((_item) => _item.uid === currentPlayer.uid);
            if(index >= 0)
            {
                this.GetDynamicData().seatInfos[index] = currentPlayer;
            }
        }
    }

    public GetActionUid() : string
    {
        return this.GetDynamicData().actionUid;
    }

    public GetActionTime() : number
    {
        return this.GetDynamicData().actionLeftTime;
    }

    public UpdateWhosTurn(_uid : string , _leftTime : number)
    {
        this.GetDynamicData().actionUid = _uid;
        this.GetDynamicData().actionLeftTime = _leftTime;
    }

    public UpdatePlayerCards(_uid : string , _cards : Array<CardInfo>)
    {
        let playerInfo = this.GetPlayerInfoByUid(_uid);
        if(playerInfo == null)
        {
            return;
        }
        playerInfo.cards = _cards;
    }

    public UpdatePots(_pots : Array<PotInfo>)
    {
        this.GetDynamicData().potInfo = _pots;
    }

    public GetTotalPotAmount()
    {
        let pots = this.GetDynamicData().potInfo;
        let result = 0;
        for(let i = 0 ; i < pots.length ; i++)
        {
            let currentPot = pots[i];
            result += currentPot.pot;
        }
        return result;
    }

    public SetDealer(_uid : string)
    {
        this.GetDynamicData().dealerUid = _uid;
    }

    public PlayerBet(_uid : string , _amount : number)
    {
        let playerInfo = this.GetPlayerInfoByUid(_uid);
        playerInfo.currencyNum -= _amount;
    }

    public InsertAction(_action : ActionInfo)
    {
        this.GetDynamicData().actions.push(_action);
    }

    public FindAction(_uid : string , _actionType : ActionType) : ActionInfo
    {
        let actions = this.GetDynamicData().actions;
        for(let i = 0 ; i < actions.length ; i++)
        {
            let currentAct = actions[i];
            if(currentAct.uid == _uid)
            {
                if(currentAct.actionType == _actionType)
                {
                    return currentAct;
                }
            }
        }
        return null;
    }

    public FindBiggestBetAction() : ActionInfo
    {
        let actions = this.GetDynamicData().actions;
        if(actions == null || actions.length == 0)
        {
            return null;
        }

        let result = actions[0];
        for(let i = 0 ; i < actions.length ; i++)
        {
            let currentAction = actions[i];
            if(result.roundAmount < currentAction.roundAmount)
            {
                result = currentAction;
            }
        }

        return result;
    }

    public FindLastActionByUid(_uid : string ) : ActionInfo
    {
        let actions = this.GetDynamicData().actions;
        if(actions != null)
        {
            let index = actions.findIndex((_item) => _item.uid === _uid);
            if(index < 0)
            {
                return null;
            }
        }


        let result = new ActionInfo();
        if(actions != null)
        {
            for(let i = 0 ; i < actions.length ; i++)
            {
                let currentAct = actions[i];
                if(currentAct.uid == _uid)
                {
                    result = currentAct;
                }
            }
        }
        return result;
    }


    public FindLastAction() : ActionInfo
    {
        let actions = this.GetDynamicData().actions;
        if(actions == null)
        {
            return null;    
        }

        return actions[actions.length - 1];
       
    }

    public SetActions(_actions : Array<ActionInfo>)
    {
        this.GetDynamicData().actions = _actions;
    }

    public IsSelfBySeat(_seatId : number) : boolean
    {
        let seatInfos = this.GetDynamicData().seatInfos;
        for(let i = 0 ; i < seatInfos.length ; i++)
        {
            let current = seatInfos[i];
            if(current.seat == _seatId)
            {
                if(current.uid == LocalPlayerData.Instance.Data_Uid.mData)
                {
                    return true;    
                }   
            }
        }

        return false;
    }

    public GetPlayerInfoByUid(_uid : string) : PlayerInfo
    {
        let seatInfos = this.GetDynamicData().seatInfos;
        for(let i = 0 ; i < seatInfos.length ; i++)
        {
            let current = seatInfos[i];
            if(current.uid == _uid)
            {
                return current;
            }
        }
        return null;
    }

    public GetPlayerInfoBySeatId(_seatId : number) : PlayerInfo
    {
        let seatInfos = this.GetDynamicData().seatInfos;
        for(let i = 0 ; i < seatInfos.length ; i++)
        {
            let current = seatInfos[i];
            if(current.seat == _seatId)
            {
                return current;
            }
        }
        return null;
    }

    public IsPlayerPlaying(_uid : string) : boolean
    {
        let playerInfo = this.GetPlayerInfoByUid(_uid);
        if(playerInfo == null)
        {
            return false;
        }

        if(playerInfo.cards == null)
        {
            return false;
        }

        if(playerInfo.cards.length == 0)
        {
            return false;
        }

        return true;
    }

    public GetSeatByUid(_uid : string) : number
    {
        let seatInfos = this.GetDynamicData().seatInfos;
        for(let i = 0 ; i < seatInfos.length ; i++)
        {
            let current = seatInfos[i];
            if(current.uid == _uid)
            {
                return current.seat;
            }
        }
        return null;
    }

    public GetUidBySeat(_seatId : number) : string
    {
        let seatInfos = this.GetDynamicData().seatInfos;
        for(let i = 0 ; i < seatInfos.length ; i++)
        {
            let current = seatInfos[i];
            if(current.seat == _seatId)
            {
                return current.uid;
            }
        }
        return null;
    }

    public GetTotalPots() : number
    {
        let potInfos = this.GetDynamicData().potInfo;
        let totalPot = 0;
        for(let i = 0 ; i < potInfos.length ; i++)
        {
            totalPot += potInfos[i].pot;
        }

        return totalPot;
    }

    
    public abstract GameStartSendMsgId() : number
    public abstract SitDownSendMsgId() : number
    public abstract StandUpSendMsgId() : number
    public abstract BringInSendMsgId() : number
    public abstract ActionSendMsgId() : number
    public abstract BuyInsuranceSendMsgId() : number
    public abstract ChatSendMsgId() : number
    public abstract ObListSendMsgId() : number
    public abstract BuyInListSendMsgId() : number
    
}


export enum Game_ChattingSubLayer
{
    ChatHistory,
    Shortcut,
}

export enum Game_PreCheckOrFold
{
    UnSelected, // 没选中
    Selected, //选中
}
