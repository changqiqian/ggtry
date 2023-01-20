import { BaseData } from '../../base/BaseData';
import { DataNotify } from '../../base/DataNotify';
import { SingletonBaseNotify } from '../../base/Singleton';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
import { Tool } from '../../Tool';

export class HallData extends SingletonBaseNotify<HallData>()
{

    protected ResetInstance() 
    {
        HallData.ClearInstance();
    }
    Data_SubPage:  BaseData<Hall_SubPage> = new BaseData<Hall_SubPage>(); //大厅底部 分页



    Data_MultipeIndex : BaseData<number> = new BaseData<number>();      //多桌游戏选中
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //游戏列表
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    Data_S2CGetHallSubGameInfoResp  : BaseData<S2CGetHallSubGameInfoResp> = new BaseData<S2CGetHallSubGameInfoResp>(); //小游戏列表
    Data_S2CHallTexasGameInfoResp  : BaseData<S2CHallTexasGameInfoResp> = new BaseData<S2CHallTexasGameInfoResp>(); //德州游戏列表

    Data_EnterCowboy : BaseData<boolean> = new BaseData<boolean>(true); //进入牛仔

    Data_DropBoxSeatOption : BaseData<number> = new BaseData<number>(); //现金桌选中的座位下拉框
    Data_DropBoxGameTypeOption : BaseData<number> = new BaseData<number>(); //现金桌选中的游戏类型下拉框
    Data_DropBoxBBOption : BaseData<number> = new BaseData<number>(); //现金桌选中的盲注下拉框
    public GetHallGameList(_gameType : GameType) : Array<HallSubGameInfo>
    {
        if(this.Data_S2CGetHallSubGameInfoResp.mData == null)
        {
            return null;
        }

        let list = this.Data_S2CGetHallSubGameInfoResp.mData.gameList;
        if(list.length == 0)
        {
            return null;
        }
        let gameList = new Array<HallSubGameInfo>();
        for(let i = 0 ; i < list.length ; i++)
        {
            let current = list[i];
            if(current.gameType == _gameType)
            {
                gameList.push(current);
            }
        }

        return gameList;
    }
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Me
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    Data_MeMessageSubPage : BaseData<number> = new BaseData<number>();//消息页展示内容
    Data_MeRecodeSubPage: BaseData<number> = new BaseData<number>();//收支记录当前页

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Club
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static readonly ClubUiTag = "ClubTag";            
    Data_ClubRecordSubPage : BaseData<Club_RecordSubPage> = new BaseData<Club_RecordSubPage>();//俱乐部战绩 子页面
    Data_ClubRecordDetailSubPage : BaseData<Club_RecordDetailSubPage> = new BaseData<Club_RecordDetailSubPage>();//俱乐部战绩详情 子页面
    Data_ClubRecordCoinType : BaseData<GameCurrencyType> = new BaseData<GameCurrencyType>();//俱乐部战绩 货币类型
    Data_ClubRecordDateType : BaseData<Club_RecordDateType> = new BaseData<Club_RecordDateType>();//俱乐部战绩 战绩时间段
    Data_ClubLogoIndex : BaseData<number> = new BaseData<number>(false,0); //创建俱乐部时候选择的logo编号
    Data_ClubStampIndex : BaseData<number> = new BaseData<number>(false,0); //创建俱乐部时候选的封面编号
    Data_ClubCreateData : BaseData<ClubDetailsInfo> = new BaseData<ClubDetailsInfo>(); //生产一个新俱乐部
    Data_UpdateAllClub : BaseData<boolean> = new BaseData<boolean>(true); //刷新所有俱乐部
    Data_ClubEnter : BaseData<boolean> = new BaseData<boolean>(); //进入俱乐部
    Data_ClubDismiss : BaseData<string> = new BaseData<string>(); //解散俱乐部
    Data_ClubSearchSuccess : BaseData<boolean> = new BaseData<boolean>(); //搜索俱乐部成功
    Data_ClubSearchResult : BaseData<ClubDetailsInfo> = new BaseData<ClubDetailsInfo>(); //解散俱乐部
    Data_ClubJoinNotify : BaseData<ClubDetailsInfo> = new BaseData<ClubDetailsInfo>(); //俱乐部申请回复结果
    Data_ClubApplyingInfo :BaseData<Array<ClubJoinRequest>> = new BaseData<Array<ClubJoinRequest>>(false,new Array<ClubJoinRequest>()); //有玩家申请加入我创建的俱乐部
    Data_ClubApplyingNotify : BaseData<boolean> = new BaseData<boolean>(); //新的俱乐部申请推送
    Data_ClubRemoveNotify : BaseData<string> = new BaseData<string>(); //你被移除了某个俱乐部
    Data_S2CGetClubMember : BaseData<S2CGetClubMember> = new BaseData<S2CGetClubMember>(true); //收到的俱乐部成员列表
    Data_S2CRemoveMember : BaseData<S2CRemoveMember> = new BaseData<S2CRemoveMember>(); //收到的移除俱乐部成员消息
    Data_ClubScoreManageUid : BaseData<number> = new BaseData<number>(); //当前想要操作的积分的成员id
    Data_ClubScoreManageUserInfo : BaseData<ClubMember> = new BaseData<ClubMember>(); //当前发放或者回收的俱乐部积分的成员详细信息
    Data_ShareClubScore :  BaseData<S2CShareClubScore> = new BaseData<S2CShareClubScore>(true); //修改玩家俱乐部积分
    Data_S2CModifyMemberRole:  BaseData<S2CModifyMemberRole> = new BaseData<S2CModifyMemberRole>(true); //修改俱乐部成员权限返回
    Data_ModifyClubInfo : BaseData<ClubDetailsInfo> = new BaseData<ClubDetailsInfo>(true);//修改俱乐部信息

    Data_ClubGameInfos : BaseData<Array<ClubTexasGameInfo>> = new BaseData<Array<ClubTexasGameInfo>>(false, new Array<ClubTexasGameInfo>()); //俱乐部游戏列表
    Data_S2CCreateClubGame :  BaseData<S2CCreateClubGame> = new BaseData<S2CCreateClubGame>(true); //创建一个剧了不游戏返回结果
    Data_S2CGetClubTexasGameInfoResp :  BaseData<S2CGetClubTexasGameInfoResp> = new BaseData<S2CGetClubTexasGameInfoResp>(true); //更新俱乐部游戏列表
    Data_S2CEnterGame :  BaseData<S2CCommonEnterGameResp> = new BaseData<S2CCommonEnterGameResp>(true); //进入游戏
    Data_S2CExitGame : BaseData<S2CCommonSitDownResp> = new BaseData<S2CCommonSitDownResp>(true); //退出游戏
    Data_S2CDismissClubGame : BaseData<S2CDismissClubGame> = new BaseData<S2CDismissClubGame>(true); //解散游戏
    Data_S2CDismissClubGameNotify : BaseData<S2CDismissClubGameNotify> = new BaseData<S2CDismissClubGameNotify>(true); //解散游戏推送

    Data_S2CClubPlayerPointNotify : BaseData<S2CClubPlayerPointNotify> = new BaseData<S2CClubPlayerPointNotify>(true); //我的俱乐部积分变动推送
    Data_S2CModifyMemberRoleNotify : BaseData<S2CModifyMemberRoleNotify> = new BaseData<S2CModifyMemberRoleNotify>(true); //我的俱乐部角色变动推送

    public AddOneGame(_clubGameInfo : ClubTexasGameInfo)
    {
        this.Data_ClubGameInfos.mData.push(_clubGameInfo);
    }

    public DeleteOneGame(_gameId : string)
    {
        let index = this.Data_ClubGameInfos.mData.findIndex((_item) => _item.gameId === _gameId);
        if(index >= 0)
        {
            this.Data_ClubGameInfos.mData.splice(index , 1);
        }
    }

    public UpdateGameList(_clubGameInfo : Array<ClubTexasGameInfo>)
    {
        this.Data_ClubGameInfos.mData = _clubGameInfo;
    }


    public RecieveNewClubApply(_request : ClubJoinRequest)
    {
        let clubIndex = this.Data_ClubApplyingInfo.mData.findIndex((_item) => _item.clubInfo.id === _request.clubInfo.id);
        if(clubIndex < 0)
        {
            this.Data_ClubApplyingInfo.mData.push(_request);
        }
        else
        {
            for(let i = 0 ; i < _request.clubBasicJoinRequest.length ; i++)
            {
                let currentNewUser = _request.clubBasicJoinRequest[i];
                let currentClubApplyInfo = this.Data_ClubApplyingInfo.mData[clubIndex];
                let userIndex = currentClubApplyInfo.clubBasicJoinRequest.findIndex((_item) => _item.uid === currentNewUser.uid);
                if(userIndex < 0)
                {
                    currentClubApplyInfo.clubBasicJoinRequest.push(currentNewUser);
                }
            }            
        }
    }

    public ApplyingNotifyContain(_clubId : string) : boolean
    {
        for(let i = 0 ; i < this.Data_ClubApplyingInfo.mData.length ; i++)
        {
            let current = this.Data_ClubApplyingInfo.mData[i];
            let clubInfo = current.clubInfo;
            if(clubInfo.id == _clubId)
            {
                if(current.clubBasicJoinRequest.length > 0)
                {
                    return true;
                }
            }
        }
        return false;
    }

    public GetApplyingUsers(_clubId : string) : Array<ClubBasicJoinRequest>
    {
        for(let i = 0 ; i < this.Data_ClubApplyingInfo.mData.length ; i++)
        {
            let current = this.Data_ClubApplyingInfo.mData[i];
            let clubInfo = current.clubInfo;
            if(clubInfo.id == _clubId)
            {
                return current.clubBasicJoinRequest;
            }
        }

        return [];
    }

    public RemoveApplyingMembers(_clubId : string , _uid : string)
    {
        for(let i = 0 ; i < this.Data_ClubApplyingInfo.mData.length ; i++)
        {
            let current = this.Data_ClubApplyingInfo.mData[i];
            let clubInfo = current.clubInfo;
            if(clubInfo.id == _clubId)
            {
                let users = current.clubBasicJoinRequest;
                let index = users.findIndex((_item) => _item.uid === _uid);
                if(index >= 0)
                {
                    users.splice(index , 1);
                }
                break;
            }
        }
    }
                    //创建牌局,追踪每个选项最终值，用于最后生成数据
    Data_ClubRefreshSmallBlind : BaseData<number> = new BaseData<number>(); //小盲选项值发生了变化

    Data_Club_CreateTexasConfig :  BaseData<Club_CreateTexasConfig> = new BaseData<Club_CreateTexasConfig>(false,new Club_CreateTexasConfig());   
    Data_ClubRefreshGameModule : BaseData<boolean> = new BaseData<boolean>();//刷新创建房间模版数据
    Data_ClubCurrentModuleIndex : BaseData<number> = new BaseData<number>();//当前操作的模版编号
                    //创建牌局，初始化选项会用到的驱动
    Data_ClubCreateGameType :   BaseData<GameType> = new BaseData<GameType>(false ,GameType.GameType_TexasCash);//俱乐部创建牌局时候，游戏类型
    Data_ClubCreateGameName : BaseData<string> = new BaseData<string>(); //俱乐部创建牌局时候，牌局名称
    Data_ClubCreateGameTaxType : BaseData<GameTaxType> = new BaseData<GameTaxType>(); //俱乐部创建游戏的时候，抽水设定
    Data_ClubCreateGameTaxRate : BaseData<number> = new BaseData<number>(); //俱乐部创建牌局时候，抽水数值
    Data_ClubCreateGameCurrentSB : BaseData<number> = new BaseData<number>(); //俱乐部创建房间时，选中的小盲
    Data_ClubCreateGameStraddle : BaseData<boolean> = new BaseData<boolean>(); //俱乐部创建牌局时候，抓头设定
    Data_ClubCreateGameAnte : BaseData<number> = new BaseData<number>(); //俱乐部创建牌局时候，前注设定
    Data_ClubCreateGameMaxBuying : BaseData<number> = new BaseData<number>(); //俱乐部创建牌局时候，最大买入设定, 买了很多次后的总数量不能超过这个值
    Data_ClubCreateGameMaxBringin : BaseData<number> = new BaseData<number>(); //俱乐部创建牌局时候，最大带入设定，单次最多带入多少
    Data_ClubCreateGameAllowBringOut : BaseData<boolean> = new BaseData<boolean>(); //俱乐部创建牌局时候，是否允许带出
    Data_ClubMinScoreAfterBringOut : BaseData<number> = new BaseData<number>(); //俱乐部创建牌局时候，带出后，必须至少保留的积分
    Data_ClubCreateGameInsurance : BaseData<boolean> = new BaseData<boolean>(); //俱乐部创建牌局时候，是否开通保险功能
    Data_ClubCreateGameDuration : BaseData<number> = new BaseData<number>();//俱乐部创建牌局时候，牌局时间长度
    Data_ClubCreateGameThinkingTime : BaseData<number> = new BaseData<number>();//俱乐部创建牌局时候，思考时间长度
    Data_ClubCreateGameSeatNum : BaseData<number> = new BaseData<number>();//俱乐部创建牌局时候，座位数
    Data_ClubCreateGameAutoStart :BaseData<number> = new BaseData<number>();//俱乐部创建牌局时候，自动开始人数
    Data_ClubCreateGameGPS : BaseData<boolean> = new BaseData<boolean>(); //俱乐部创建牌局时候，gps
    Data_ClubCreateGameIP : BaseData<boolean> = new BaseData<boolean>(); //俱乐部创建牌局时候，ip
                    //创建短牌，初始化选项用到的数据驱动

    //创建俱乐部房间时候的 生成基础配置
    ResetCreateRoomParam(_type : GameType)
    {
        this.Data_ClubCurrentModuleIndex.mData = GameConfig.WrongIndex;


        this.Data_ClubCreateGameType.mData = _type;
        this.Data_ClubCreateGameName.mData = "";
        this.Data_ClubCreateGameTaxType.mData = GameTaxType.GameTaxType_WholeGameEnd;
        this.Data_ClubCreateGameTaxRate.mData = 0;
        this.Data_ClubCreateGameCurrentSB.mData = 0;
        this.Data_ClubCreateGameStraddle.mData = false;
        this.Data_ClubCreateGameAnte.mData = 0;
        this.Data_ClubCreateGameMaxBuying.mData = 0;
        this.Data_ClubCreateGameMaxBringin.mData = 0;
        this.Data_ClubCreateGameAllowBringOut.mData = false;
        this.Data_ClubMinScoreAfterBringOut.mData = 0;
        this.Data_ClubCreateGameInsurance.mData = false;
        this.Data_ClubCreateGameDuration.mData = 0;
        this.Data_ClubCreateGameThinkingTime.mData = 0;
        this.Data_ClubCreateGameSeatNum.mData = 0;
        this.Data_ClubCreateGameAutoStart.mData = 0;
        this.Data_ClubCreateGameGPS.mData = false;
        this.Data_ClubCreateGameIP.mData = false;



        this.Data_Club_CreateTexasConfig.mData.gameType = this.Data_ClubCreateGameType.mData;
        this.Data_Club_CreateTexasConfig.mData.gameName = this.Data_ClubCreateGameName.mData;
        this.Data_Club_CreateTexasConfig.mData.currencyType = GameCurrencyType.GameCurrencyType_Point;
        this.Data_Club_CreateTexasConfig.mData.taxType = this.Data_ClubCreateGameTaxType.mData;
        this.Data_Club_CreateTexasConfig.mData.taxRatio = this.Data_ClubCreateGameTaxRate.mData;
        this.Data_Club_CreateTexasConfig.mData.smallBlind = this.Data_ClubCreateGameCurrentSB.mData;
        this.Data_Club_CreateTexasConfig.mData.straddle = this.Data_ClubCreateGameStraddle.mData;
        this.Data_Club_CreateTexasConfig.mData.ante =  this.Data_ClubCreateGameAnte.mData;
        this.Data_Club_CreateTexasConfig.mData.maxTotalBuyIn = this.Data_ClubCreateGameMaxBuying.mData;
        this.Data_Club_CreateTexasConfig.mData.maxBringIn = this.Data_ClubCreateGameMaxBringin.mData;
        this.Data_Club_CreateTexasConfig.mData.allowBringOut = this.Data_ClubCreateGameAllowBringOut.mData;
        this.Data_Club_CreateTexasConfig.mData.minScoreAfterBringOut = this.Data_ClubMinScoreAfterBringOut.mData;
        this.Data_Club_CreateTexasConfig.mData.insurance = this.Data_ClubCreateGameInsurance.mData;
        this.Data_Club_CreateTexasConfig.mData.gameDuration = this.Data_ClubCreateGameDuration.mData;
        this.Data_Club_CreateTexasConfig.mData.thinkingTime = this.Data_ClubCreateGameThinkingTime.mData;
        this.Data_Club_CreateTexasConfig.mData.seatNum = this.Data_ClubCreateGameSeatNum.mData;
        this.Data_Club_CreateTexasConfig.mData.autoStartNum = this.Data_ClubCreateGameAutoStart.mData;
        this.Data_Club_CreateTexasConfig.mData.gpsLimit = this.Data_ClubCreateGameGPS.mData;
        this.Data_Club_CreateTexasConfig.mData.ipLimit = this.Data_ClubCreateGameIP.mData;
    }
    //读取已经储存的 房间创建配置
    ReadModule(_index : number)
    {
        let strData = GameConfig.GetCreateRoomModule(_index);
        if(strData == null)
        {
            console.log("halldata ReadModule error strData =null  _index ==" + _index);
            return;
        }
    
        this.Data_Club_CreateTexasConfig.mData = JSON.parse(strData) as Club_CreateTexasConfig;
        this.Data_ClubCreateGameType.mData = this.Data_Club_CreateTexasConfig.mData.gameType
        this.Data_ClubCreateGameName.mData = this.Data_Club_CreateTexasConfig.mData.gameName
        this.Data_ClubCreateGameTaxType.mData = this.Data_Club_CreateTexasConfig.mData.taxType
        this.Data_ClubCreateGameTaxRate.mData = this.Data_Club_CreateTexasConfig.mData.taxRatio
        this.Data_ClubCreateGameCurrentSB.mData = this.Data_Club_CreateTexasConfig.mData.smallBlind
        this.Data_ClubCreateGameStraddle.mData = this.Data_Club_CreateTexasConfig.mData.straddle
        this.Data_ClubCreateGameAnte.mData = this.Data_Club_CreateTexasConfig.mData.ante
        this.Data_ClubCreateGameMaxBuying.mData = this.Data_Club_CreateTexasConfig.mData.maxTotalBuyIn
        this.Data_ClubCreateGameMaxBringin.mData = this.Data_Club_CreateTexasConfig.mData.maxBringIn
        this.Data_ClubCreateGameAllowBringOut.mData = this.Data_Club_CreateTexasConfig.mData.allowBringOut
        this.Data_ClubMinScoreAfterBringOut.mData = this.Data_Club_CreateTexasConfig.mData.minScoreAfterBringOut
        this.Data_ClubCreateGameInsurance.mData = this.Data_Club_CreateTexasConfig.mData.insurance
        this.Data_ClubCreateGameDuration.mData = this.Data_Club_CreateTexasConfig.mData.gameDuration
        this.Data_ClubCreateGameThinkingTime.mData = this.Data_Club_CreateTexasConfig.mData.thinkingTime
        this.Data_ClubCreateGameSeatNum.mData = this.Data_Club_CreateTexasConfig.mData.seatNum
        this.Data_ClubCreateGameAutoStart.mData = this.Data_Club_CreateTexasConfig.mData.autoStartNum
        this.Data_ClubCreateGameGPS.mData = this.Data_Club_CreateTexasConfig.mData.gpsLimit
        this.Data_ClubCreateGameIP.mData = this.Data_Club_CreateTexasConfig.mData.ipLimit
    }
    //把房间配置转换成 proto
    ConvertCreateTexasConfigToProto(_config : Club_CreateTexasConfig) : ClubTexasGameInfo
    {

        let texasData = new BasicTexasConfig();


        texasData.gameType = _config.gameType;
        texasData.gameName = _config.gameName;
        texasData.currencyType = _config.currencyType;
        texasData.taxType = _config.taxType;
        texasData.taxRatio = GameConfig.GetTexasCreateRoomTaxValue(_config.taxType)[_config.taxRatio];
        texasData.smallBlind = GameConfig.GetTexasCreateRoomBlindValue()[_config.smallBlind];

        
        let bigBlind = texasData.smallBlind * 2;
        let bigBliind100 = bigBlind* 100;
        texasData.straddle = _config.straddle;
        texasData.ante = GameConfig.GetTexasCreateRoomAnteValue(texasData.smallBlind)[_config.ante];
        
        if( _config.gameType == GameType.GameType_TexasCash)
        {
            texasData.maxTotalBuyIn = GameConfig.GetTexasCreateRoomMaxBuyInValue()[_config.maxTotalBuyIn] * bigBliind100;
            texasData.minBringIn = bigBliind100 / 2;
            texasData.maxBringIn = bigBliind100 * GameConfig.GetTexasCreateRoomBringInValue()[_config.maxBringIn];
        }


        texasData.allowBringOut = _config.allowBringOut;
        texasData.minScoreAfterBringOut = _config.minScoreAfterBringOut;
        texasData.insurance = _config.insurance;
        texasData.gameDuration = GameConfig.GetTexasCreateRoomGameDurationValue()[_config.gameDuration];
        texasData.thinkingTime = GameConfig.GetTexasCreateRoomThinkingTimeValue()[_config.thinkingTime];
        texasData.seatNum = GameConfig.GetTexasCreateRoomSeatNumValue()[_config.seatNum];
        texasData.autoStartNum = GameConfig.GetTexasCreateRoomAutoStartValue()[_config.autoStartNum];
        texasData.gpsLimit = _config.gpsLimit;
        texasData.ipLimit = _config.ipLimit;



        texasData.ante = Tool.ConvertMoney_C2S(texasData.ante);
        texasData.smallBlind = Tool.ConvertMoney_C2S(texasData.smallBlind);
        texasData.maxTotalBuyIn = Tool.ConvertMoney_C2S(texasData.maxTotalBuyIn);
        texasData.minBringIn = Tool.ConvertMoney_C2S(texasData.minBringIn);
        texasData.maxBringIn = Tool.ConvertMoney_C2S(texasData.maxBringIn);

        let protoData = new ClubTexasGameInfo();
        protoData.basicTexasConfig = new BasicTexasConfig();
        protoData.basicTexasConfig = texasData;
        return protoData;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Cash
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //activity
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


}

export enum Hall_SubPage { //大厅底部分页
    Cash,
    Club,
    Me,
}


export enum Mtt_RankSubPage { //mtt排行榜页面 分页
    All = 0,
    Month = 1,
    Week = 2,
    Season = 3,
}

export enum Mtt_InfoSubPage { //mtt详细信息页面 分页
    InfoPage = 0,
    PlayerPage = 1,
    RewardPage = 2,
    TablePage = 3,
}


export enum Me_MessageSubPage { //消息页内容
    Announcement = 0,
    Message = 1,
}

export enum Me_ReocordSubPage { //收支记录内容
    CyberRecord = 0,
    DiamondReocd = 1,
}

export enum Club_RecordSubPage { //俱乐部战绩页面 子页面
    Texas = 0,
    Short = 1,
    Omh = 2,
}

export enum Club_RecordDetailSubPage { //俱乐部战绩详情 子页面
    General = 0, //牌局概述页面
    Recipe = 1, //牌铺页面
}


export enum Club_RecordDateType{ //俱乐部战记
    Today = 0,
    Week,
    Month
}


export class Club_CreateTexasConfig
{
    constructor()
    {

    }
    gameType :GameType;
    gameName : string;
    currencyType :GameCurrencyType;
    taxType : GameTaxType;
    taxRatio : number;
    smallBlind : number;
    straddle : boolean;
    ante : number;
    maxTotalBuyIn  : number;
    maxBringIn: number;
    allowBringOut : boolean;
    minScoreAfterBringOut : number;
    insurance :boolean;
    gameDuration : number;
    thinkingTime : number;
    seatNum : number;
    autoStartNum : number;
    gpsLimit :boolean;
    ipLimit :boolean;

}
