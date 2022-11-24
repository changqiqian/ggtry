import { _decorator} from 'cc';
import { BaseData } from '../../base/BaseData';
import { DataNotify } from '../../base/DataNotify';
import { MultipleNotify, SingletonBaseNotify } from '../../base/Singleton';
import { Network } from '../../network/Network';



export abstract class GameData extends MultipleNotify
{
    public static GameUiTag = "GameUiTag";
    //UI控制
    Data_ChatingSubLayer :  BaseData<Game_ChattingSubLayer> = new BaseData<Game_ChattingSubLayer>();  //聊天页面子页面
    Data_GameStaticData : BaseData<GameStaticData> = new BaseData<GameStaticData>();  //游戏基础配置信息

    public SetGameInfo(_gameStaticData : GameStaticData)
    {
        this.Data_GameStaticData.mData = _gameStaticData;
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

