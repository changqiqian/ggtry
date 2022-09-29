import { BaseData } from '../../base/BaseData';
import { DataNotify } from '../../base/DataNotify';
import { SingletonBaseNotify } from '../../base/Singleton';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';

export class HallData extends SingletonBaseNotify<HallData>()
{

    protected ResetInstance() 
    {
        HallData.ClearInstance();
    }
    Data_SubPage:  BaseData<Hall_SubPage> = new BaseData<Hall_SubPage>(); //大厅底部 分页
    Data_LunBoTu: BaseData<any> = new BaseData<any>();//轮播图数据

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Mtt
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    Data_MttInfoSubPage: BaseData<Mtt_InfoSubPage> = new BaseData<Mtt_InfoSubPage>();  //Mtt详细信息页面 分页
    Data_MttRankSubPage: BaseData<Mtt_RankSubPage> = new BaseData<Mtt_RankSubPage>();  //Mtt排行榜 分页面

    
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
                    //俱乐部战绩
    Data_ClubRecordSubPage : BaseData<Club_RecordSubPage> = new BaseData<Club_RecordSubPage>();//俱乐部战绩 子页面
    Data_ClubRecordDetailSubPage : BaseData<Club_RecordDetailSubPage> = new BaseData<Club_RecordDetailSubPage>();//俱乐部战绩详情 子页面
    Data_ClubRecordCoinType : BaseData<GameCurrencyType> = new BaseData<GameCurrencyType>();//俱乐部战绩 货币类型
    Data_ClubRecordDateType : BaseData<RecordDateType> = new BaseData<RecordDateType>();//俱乐部战绩 战绩时间段
                    //创建俱乐部
    Data_ClubLogoIndex : BaseData<number> = new BaseData<number>(); //创建俱乐部时候选择的logo编号
    Data_ClubStampIndex : BaseData<number> = new BaseData<number>(); //创建俱乐部时候选的封面编号

                    //创建牌局,追踪每个选项最终值，用于最后生成数据
    Data_ClubRefreshSmallBlind : BaseData<number> = new BaseData<number>(); //小盲选项值发生了变化
    Data_ClubRefreshShortBaseScore : BaseData<number> = new BaseData<number>();//短牌底分选项发生了变化

    Data_Club_CreateTexasConfig :  BaseData<Club_CreateTexasConfig> = new BaseData<Club_CreateTexasConfig>(false,new Club_CreateTexasConfig());   
    Data_ClubRefreshGameModule : BaseData<boolean> = new BaseData<boolean>();//刷新创建房间模版数据
    Data_ClubCurrentModuleIndex : BaseData<number> = new BaseData<number>();//当前操作的模版编号
                    //创建牌局，初始化选项会用到的驱动
    Data_ClubCreateGameType :   BaseData<GameType> = new BaseData<GameType>(false ,GameType.GameType_TexasCash);//俱乐部创建牌局时候，游戏类型
    Data_ClubCreateGameName : BaseData<string> = new BaseData<string>(); //俱乐部创建牌局时候，牌局名称
    Data_ClubCreateGameCurrencyType : BaseData<GameCurrencyType> = new BaseData<GameCurrencyType>();//俱乐部创建游戏的时候，货币类型设定
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
    Data_ClubCreateShortScoreMode :  BaseData<ShortGameScoreMode> = new BaseData<ShortGameScoreMode>();//俱乐部创建牌局时候，短牌底池类型
    Data_ClubCreateShortBaseScore : BaseData<number> = new BaseData<number>(); //短牌创建时候的底分选择
    Data_ClubCreateShortButtonDouble : BaseData<boolean> = new BaseData<boolean>();//短牌创建时候的 庄前双倍底分

    //创建俱乐部房间时候的 生成基础配置
    ResetCreateRoomParam(_type : GameType)
    {
        this.Data_ClubCreateGameType.mData = _type;
        this.Data_ClubCreateGameName.mData = "";
        this.Data_ClubCreateGameCurrencyType.mData = GameCurrencyType.GameCurrencyType_Point;
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
        this.Data_ClubCreateShortScoreMode.mData = ShortGameScoreMode.ShortGameScoreMode_BlindMode;
        this.Data_ClubCreateShortBaseScore.mData = 0;
        this.Data_ClubCreateShortButtonDouble.mData = false;



        this.Data_Club_CreateTexasConfig.mData.gameType = this.Data_ClubCreateGameType.mData;
        this.Data_Club_CreateTexasConfig.mData.gameName = this.Data_ClubCreateGameName.mData;
        this.Data_Club_CreateTexasConfig.mData.currencyType = this.Data_ClubCreateGameCurrencyType.mData;
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
        this.Data_Club_CreateTexasConfig.mData.shortScoreMode = this.Data_ClubCreateShortScoreMode.mData;
        this.Data_Club_CreateTexasConfig.mData.shortBaseScore = this.Data_ClubCreateShortBaseScore.mData;
        this.Data_Club_CreateTexasConfig.mData.buttonDouble = this.Data_ClubCreateShortButtonDouble.mData;
    }

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
        this.Data_ClubCreateGameCurrencyType.mData = this.Data_Club_CreateTexasConfig.mData.currencyType
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
        this.Data_ClubCreateShortScoreMode.mData = this.Data_Club_CreateTexasConfig.mData.shortScoreMode
        this.Data_ClubCreateShortBaseScore.mData = this.Data_Club_CreateTexasConfig.mData.shortBaseScore
        this.Data_ClubCreateShortButtonDouble.mData = this.Data_Club_CreateTexasConfig.mData.buttonDouble
    }

    ConvertCreateTexasConfigToProto(_config : Club_CreateTexasConfig) : ClubGameConfig
    {
        let finalData = new ClubGameConfig();
        finalData.basicConfig = new GameBasicConfig();
        finalData.texasConfig = new TexasConfig();
        finalData.shortConfig = new ShortConfig();

        finalData.basicConfig.gameType = _config.gameType;
        finalData.basicConfig.gameName = _config.gameName;
        finalData.basicConfig.currencyType = _config.currencyType;
        finalData.basicConfig.taxType = _config.taxType;
        finalData.basicConfig.taxRatio = GameConfig.GetTexasCreateRoomTaxValue(_config.taxType)[_config.taxRatio];
        finalData.texasConfig.smallBlind = GameConfig.GetTexasCreateRoomBlindValue()[_config.smallBlind];
        finalData.shortConfig.baseScore = GameConfig.GetShortCreateRoomBaseScoreValue()[_config.shortBaseScore];
        finalData.shortConfig.scoreMode = _config.shortScoreMode;
        finalData.shortConfig.buttonDouble = _config.buttonDouble;
        
        let bigBlind = finalData.texasConfig.smallBlind * 2;
        let bigBliind100 = bigBlind* 100;
        let baseScore100 = finalData.shortConfig.baseScore * 100;
        finalData.texasConfig.straddle = _config.straddle;
        finalData.texasConfig.ante = GameConfig.GetTexasCreateRoomAnteValue(finalData.texasConfig.smallBlind)[_config.ante];
        
        if( _config.gameType == GameType.GameType_TexasCash)
        {
            finalData.texasConfig.maxTotalBuyIn = GameConfig.GetTexasCreateRoomMaxBuyInValue()[_config.maxTotalBuyIn] * bigBliind100;
            finalData.texasConfig.minBringIn = bigBliind100 / 2;
            finalData.texasConfig.maxBringIn = bigBliind100 * GameConfig.GetTexasCreateRoomBringInValue()[_config.maxBringIn];
        }
        else if( _config.gameType == GameType.GameType_ShortCash)
        {
            finalData.texasConfig.maxTotalBuyIn = GameConfig.GetTexasCreateRoomMaxBuyInValue()[_config.maxTotalBuyIn] * baseScore100;
            finalData.texasConfig.minBringIn = baseScore100 / 2;
            finalData.texasConfig.maxBringIn = baseScore100 * GameConfig.GetTexasCreateRoomBringInValue()[_config.maxBringIn];
        }

        finalData.texasConfig.allowBringOut = _config.allowBringOut;
        finalData.texasConfig.minScoreAfterBringOut = _config.minScoreAfterBringOut;
        finalData.texasConfig.insurance = _config.insurance;
        finalData.texasConfig.gameDuration = GameConfig.GetTexasCreateRoomGameDurationValue()[_config.gameDuration];
        finalData.texasConfig.thinkingTime = GameConfig.GetTexasCreateRoomThinkingTimeValue()[_config.thinkingTime];
        finalData.texasConfig.seatNum = GameConfig.GetTexasCreateRoomSeatNumValue()[_config.seatNum];
        finalData.texasConfig.autoStartNum = GameConfig.GetTexasCreateRoomAutoStartValue()[_config.autoStartNum];
        finalData.texasConfig.gpsLimit = _config.gpsLimit;
        finalData.texasConfig.ipLimit = _config.ipLimit;
        return finalData;
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
    MTT,
    Cash,
    Club,
    Activity,
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

    //short
    shortScoreMode : ShortGameScoreMode;
    shortBaseScore : number;
    buttonDouble : boolean;
}
