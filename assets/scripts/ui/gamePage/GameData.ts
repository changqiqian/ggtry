import { _decorator} from 'cc';
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
    Data_S2CCommonStartNotify : BaseData<S2CCommonStartNotify> = new BaseData<S2CCommonStartNotify>(true);  //游戏开始推送
    Data_S2CCommonBuyInCountDownNotify : BaseData<S2CCommonBuyInCountDownNotify> = new BaseData<S2CCommonBuyInCountDownNotify>(true);  //买入倒计时推送
    Data_S2CCommonSitDownResp : BaseData<S2CCommonSitDownResp> = new BaseData<S2CCommonSitDownResp>(true);  //坐下
    Data_S2CCommonSitDownNotify: BaseData<S2CCommonSitDownNotify> = new BaseData<S2CCommonSitDownNotify>(true);  //坐下推送
    Data_S2CCommonStandUpResp : BaseData<S2CCommonStandUpResp> = new BaseData<S2CCommonStandUpResp>(true);  //站起
    Data_S2CCommonStandUpNotify : BaseData<S2CCommonStandUpNotify> = new BaseData<S2CCommonStandUpNotify>(true);  //站起推送
    Data_S2CCommonBringInResp : BaseData<S2CCommonBringInResp> = new BaseData<S2CCommonBringInResp>(true);  //带入
    Data_S2CCommonBringInNotify : BaseData<S2CCommonBringInNotify> = new BaseData<S2CCommonBringInNotify>(true);  //带入推送
    Data_S2CCommonBringOutResp : BaseData<S2CCommonBringOutResp> = new BaseData<S2CCommonBringOutResp>(true);  //带出
    Data_S2CCommonBringOutNotify : BaseData<S2CCommonBringOutNotify> = new BaseData<S2CCommonBringOutNotify>(true);  //带出推送


    Data_S2CCommonRoundStartNotify : BaseData<S2CCommonRoundStartNotify> = new BaseData<S2CCommonRoundStartNotify>();  //本轮开始推送
    Data_S2CCommonPreFlopRoundNotify: BaseData<S2CCommonPreFlopRoundNotify> = new BaseData<S2CCommonPreFlopRoundNotify>();  //翻前发牌推送
    Data_S2CCommonCurrentActionNotify : BaseData<S2CCommonCurrentActionNotify> = new BaseData<S2CCommonCurrentActionNotify>();  //轮到谁行动推送

    
    public SetGameInfo(_S2CCommonEnterGameResp : S2CCommonEnterGameResp)
    {
        this.Data_S2CCommonEnterGameResp.mData = _S2CCommonEnterGameResp;
    }

    public ResetGameInfo()
    {
        let seatInfos = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.seatInfos;
        for(let i = 0 ; i < seatInfos.length ; i++)
        {
            seatInfos[i].cards = [];
            seatInfos[i].fold = false;
        }
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.actionUid = "";
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.actionLeftTime = 0;
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.potInfo = [];
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.actions = [];
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.publicCards = [];
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.dealerUid = "";
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.state = TexasCashState.TexasCashState_RoundStart;
    }

    public PlayerSit(_playerInfo : PlayerInfo)
    {
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.seatInfos.push(_playerInfo);
    }

    public PlayerStand(_userId : string)
    {
        let seats = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.seatInfos;
        for(let i = 0 ; i < seats.length ; i++)
        {
            if(seats[i].uid == _userId)
            {
                seats.splice(i,1);
                break;
            }
        }
    }



    public SetGameState(_state : TexasCashState)
    {
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.state = _state;
    }

    public UpdatePlayer(_players : Array<PlayerInfo>)
    {
        for(let i = 0 ; i < _players.length ; i++)
        {
            let currentPlayer = _players[i];
            let targetPlayerInfo = this.GetPlayerInfoByUid(currentPlayer.uid);
            if(targetPlayerInfo != null)
            {
                targetPlayerInfo = currentPlayer;
            }
        }
    }

    public UpdateWhosTurn(_uid : string , _leftTime : number)
    {
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.actionUid = _uid;
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.actionLeftTime = _leftTime;
    }

    public UpdatePlayerCards(_uid : string , _cards : Array<CardInfo>)
    {
        let playerInfo = this.GetPlayerInfoByUid(_uid);
        playerInfo.cards = _cards;
    }

    public UpdatePots(_pots : Array<PotInfo>)
    {
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.potInfo = _pots;
    }

    public SetDealer(_uid : string)
    {
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.dealerUid = _uid;
    }

    public InsertAction(_action : ActionInfo)
    {
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.actions.push(_action);
    }

    public FindAction(_uid : string , _actionType : ActionType) : ActionInfo
    {
        let actions = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.actions;
        for(let i = 0 ; i < actions.length ; i++)
        {
            let current = actions[i];
            let playerInfo = current.playerInfo;
            if(playerInfo.uid == _uid)
            {
                if(current.actionType == _actionType)
                {
                    return current;
                }
            }
        }
        return null;
    }

    public FindActionByUid(_uid : string ) : Array<ActionInfo>
    {
        let result = new Array<ActionInfo>();
        let actions = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.actions;
        if(actions != null)
        {
            for(let i = 0 ; i < actions.length ; i++)
            {
                let current = actions[i];
                let playerInfo = current.playerInfo;
                if(playerInfo.uid == _uid)
                {
                    result.push(current);
                }
            }
        }
        return result;
    }
    


    public IsSelfBySeat(_seatId : number) : boolean
    {
        let seatInfos = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.seatInfos;
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
        let seatInfos = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.seatInfos;
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
        let seatInfos = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.seatInfos;
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

    public GetSeatByUid(_uid : string) : number
    {
        let seatInfos = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.seatInfos;
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
        let seatInfos = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.seatInfos;
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
        let potInfos = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.potInfo;
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
    public abstract BringOutSendMsgId() : number
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

