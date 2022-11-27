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
    Data_S2CCommonSitDownResp : BaseData<S2CCommonSitDownResp> = new BaseData<S2CCommonSitDownResp>(true);  //坐下
    Data_S2CCommonSitDownNotify: BaseData<S2CCommonSitDownResp> = new BaseData<S2CCommonSitDownResp>(true);  //坐下推送
    Data_S2CCommonStandUpResp : BaseData<S2CCommonStandUpResp> = new BaseData<S2CCommonStandUpResp>(true);  //站起
    Data_S2CCommonStandUpNotify : BaseData<S2CCommonStandUpNotify> = new BaseData<S2CCommonStandUpNotify>(true);  //站起推送

    public SetGameInfo(_S2CCommonEnterGameResp : S2CCommonEnterGameResp)
    {
        this.Data_S2CCommonEnterGameResp.mData = _S2CCommonEnterGameResp;
    }

    public PlayerSit(_seatInfo : SeatInfo)
    {
        this.Data_S2CCommonEnterGameResp.mData.gameDynamic.seatInfos.push(_seatInfo);
    }

    public PlayerStand(_userId : string)
    {
        let seats = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.seatInfos;
        for(let i = 0 ; i < seats.length ; i++)
        {
            if(seats[i].playerInfo.uid == _userId)
            {
                seats.splice(i,1);
            }
        }
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

    public IsSelfBySeat(_seatId : number) : boolean
    {
        let seatInfos = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.seatInfos;
        for(let i = 0 ; i < seatInfos.length ; i++)
        {
            let current = seatInfos[i];
            if(current.seat == _seatId)
            {
                if(current.playerInfo.uid == LocalPlayerData.Instance.Data_Uid.mData)
                {
                    return true;    
                }   
            }
        }

        return false;
    }

    public GetSeatByUid(_uid : string) : number
    {
        let seatInfos = this.Data_S2CCommonEnterGameResp.mData.gameDynamic.seatInfos;
        for(let i = 0 ; i < seatInfos.length ; i++)
        {
            let current = seatInfos[i];
            if(current.playerInfo.uid == _uid)
            {
                return current.seat;
            }
        }
        console.log("GetUidBySeat 没有找到这个_uid===" + _uid);
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
                return current.playerInfo.uid;
            }
        }
        console.log("GetUidBySeat 没有找到这个seatid ===" + _seatId);
        return null;
    }

    
    public abstract GameStartSendMsgId() : number
    public abstract SitDownSendMsgId() : number
    public abstract StandUpSendMsgId() : number
    public abstract BringInSendMsgId() : number
    public abstract BringOutSendMsgId() : number
    public abstract ActionSendMsgId() : number
    public abstract BuyInsuranceSendMsgId() : number
    public abstract ChatSendMsgId() : number



    
}


export enum Game_ChattingSubLayer
{
    ChatHistory,
    Shortcut,
}

