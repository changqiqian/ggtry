import { DataNotify } from '../../base/DataNotify';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';

export class HallData extends DataNotify {
    private static Instance: HallData = null;

    public static GetInstance(): HallData {
        if (HallData.Instance == null) {
            HallData.Instance = new HallData();
            HallData.Instance.CreateNotify();
        }

        return HallData.Instance;
    }

    Data_SubPage: Hall_SubPage = null; //大厅底部 分页
    Data_LunBoTu: any = null; //轮播图数据

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Mtt
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    Data_MttInfoSubPage: Mtt_InfoSubPage = null; //Mtt详细信息页面 分页
    Data_MttRankSubPage: Mtt_RankSubPage = null; //Mtt排行榜 分页面

    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Me
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    Data_MeMessageSubPage: number = null; //消息页展示内容
    Data_MeRecodeSubPage: number = null; //收支记录当前页

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Club
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    //俱乐部战绩
    Data_ClubRecordSubPage : Club_RecordSubPage = null; //俱乐部战绩 子页面
    Data_ClubRecordDetailSubPage : Club_RecordDetailSubPage = null; //俱乐部战绩详情 子页面
    Data_ClubRecordCoinType : GameCurrencyType = null;//俱乐部战绩 货币类型
    Data_ClubRecordDateType : RecordDateType = null;//俱乐部战绩 战绩时间段
                    //创建俱乐部
    Data_ClubLogoIndex : number = null; //创建俱乐部时候选择的logo编号
    Data_ClubStampIndex : number = null; //创建俱乐部时候选的封面编号

                    //创建牌局,追踪每个选项最终值，用于最后生成数据
    Data_ClubRefreshSmallBlind : number = null; //小盲选项值发生了变化
    Data_ClubRefreshShortBaseScore : number = null;//短牌底分选项发生了变化

    Data_Club_CreateTexasConfig : Club_CreateTexasConfig = new Club_CreateTexasConfig();
    Data_ClubRefreshGameModule : boolean = null;//刷新创建房间模版数据
    Data_ClubCurrentModuleIndex : number = null; //当前操作的模版编号
                    //创建牌局，初始化选项会用到的驱动
    Data_ClubCreateGameType :GameType = GameType.TexasCash; //俱乐部创建牌局时候，游戏类型
    Data_ClubCreateGameName : string = null; //俱乐部创建牌局时候，牌局名称
    Data_ClubCreateGameCurrencyType :GameCurrencyType = null; //俱乐部创建游戏的时候，货币类型设定
    Data_ClubCreateGameTaxType : GameTaxType = null; //俱乐部创建游戏的时候，抽水设定
    Data_ClubCreateGameTaxRate : number = null; //俱乐部创建牌局时候，抽水数值
    Data_ClubCreateGameCurrentSB : number = null; //俱乐部创建房间时，选中的小盲
    Data_ClubCreateGameStraddle : boolean = null; //俱乐部创建牌局时候，抓头设定
    Data_ClubCreateGameAnte : number = null; //俱乐部创建牌局时候，前注设定
    Data_ClubCreateGameMaxBuying : number = null; //俱乐部创建牌局时候，最大买入设定, 买了很多次后的总数量不能超过这个值
    Data_ClubCreateGameMaxBringin : number = null; //俱乐部创建牌局时候，最大带入设定，单次最多带入多少
    Data_ClubCreateGameAllowBringOut : boolean = null; //俱乐部创建牌局时候，是否允许带出
    Data_ClubMinScoreAfterBringOut : number = null; //俱乐部创建牌局时候，带出后，必须至少保留的积分
    Data_ClubCreateGameInsurance : boolean = null; //俱乐部创建牌局时候，是否开通保险功能
    Data_ClubCreateGameDuration : number = null;//俱乐部创建牌局时候，牌局时间长度
    Data_ClubCreateGameThinkingTime : number = null;//俱乐部创建牌局时候，思考时间长度
    Data_ClubCreateGameSeatNum : number = null;//俱乐部创建牌局时候，座位数
    Data_ClubCreateGameAutoStart : number = null;//俱乐部创建牌局时候，自动开始人数
    Data_ClubCreateGameGPS : boolean = null; //俱乐部创建牌局时候，gps
    Data_ClubCreateGameIP : boolean = null; //俱乐部创建牌局时候，ip
                    //创建短牌，初始化选项用到的数据驱动
    Data_ClubCreateShortScoreMode : ShortGameScoreMode = null; //俱乐部创建牌局时候，短牌底池类型
    Data_ClubCreateShortBaseScore : number = null; //短牌创建时候的底分选择
    Data_ClubCreateShortButtonDouble : boolean = null ;//短牌创建时候的 庄前双倍底分


    ResetCreateRoomParam(_type : GameType)
    {
        this.Data_ClubCreateGameType = _type;
        this.Data_ClubCreateGameName = "";
        this.Data_ClubCreateGameCurrencyType = GameCurrencyType.Point;
        this.Data_ClubCreateGameTaxType = GameTaxType.WholeGameEnd;
        this.Data_ClubCreateGameTaxRate = 0;
        this.Data_ClubCreateGameCurrentSB = 0;
        this.Data_ClubCreateGameStraddle = false;
        this.Data_ClubCreateGameAnte = 0;
        this.Data_ClubCreateGameMaxBuying = 0;
        this.Data_ClubCreateGameMaxBringin = 0;
        this.Data_ClubCreateGameAllowBringOut = false;
        this.Data_ClubMinScoreAfterBringOut = 0;
        this.Data_ClubCreateGameInsurance = false;
        this.Data_ClubCreateGameDuration = 0;
        this.Data_ClubCreateGameThinkingTime = 0;
        this.Data_ClubCreateGameSeatNum = 0;
        this.Data_ClubCreateGameAutoStart = 0;
        this.Data_ClubCreateGameGPS = false;
        this.Data_ClubCreateGameIP = false;
        this.Data_ClubCreateShortScoreMode = ShortGameScoreMode.BlindMode;
        this.Data_ClubCreateShortBaseScore = 0;
        this.Data_ClubCreateShortButtonDouble = false;

        this.Data_Club_CreateTexasConfig.gameType = this.Data_ClubCreateGameType;
        this.Data_Club_CreateTexasConfig.gameName = this.Data_ClubCreateGameName;
        this.Data_Club_CreateTexasConfig.currencyType = this.Data_ClubCreateGameCurrencyType;
        this.Data_Club_CreateTexasConfig.taxType = this.Data_ClubCreateGameTaxType;
        this.Data_Club_CreateTexasConfig.taxRatio = this.Data_ClubCreateGameTaxRate;
        this.Data_Club_CreateTexasConfig.smallBlind = this.Data_ClubCreateGameCurrentSB;
        this.Data_Club_CreateTexasConfig.straddle = this.Data_ClubCreateGameStraddle;
        this.Data_Club_CreateTexasConfig.ante =  this.Data_ClubCreateGameAnte;
        this.Data_Club_CreateTexasConfig.maxTotalBuyIn = this.Data_ClubCreateGameMaxBuying;
        this.Data_Club_CreateTexasConfig.maxBringIn = this.Data_ClubCreateGameMaxBringin;
        this.Data_Club_CreateTexasConfig.allowBringOut = this.Data_ClubCreateGameAllowBringOut;
        this.Data_Club_CreateTexasConfig.minScoreAfterBringOut = this.Data_ClubMinScoreAfterBringOut;
        this.Data_Club_CreateTexasConfig.insurance = this.Data_ClubCreateGameInsurance;
        this.Data_Club_CreateTexasConfig.gameDuration = this.Data_ClubCreateGameDuration;
        this.Data_Club_CreateTexasConfig.thinkingTime = this.Data_ClubCreateGameThinkingTime;
        this.Data_Club_CreateTexasConfig.seatNum = this.Data_ClubCreateGameSeatNum;
        this.Data_Club_CreateTexasConfig.autoStartNum = this.Data_ClubCreateGameAutoStart;
        this.Data_Club_CreateTexasConfig.gpsLimit = this.Data_ClubCreateGameGPS;
        this.Data_Club_CreateTexasConfig.ipLimit = this.Data_ClubCreateGameIP;
        this.Data_Club_CreateTexasConfig.shortScoreMode = this.Data_ClubCreateShortScoreMode;
        this.Data_Club_CreateTexasConfig.shortBaseScore = this.Data_ClubCreateShortBaseScore;
        this.Data_Club_CreateTexasConfig.buttonDouble = this.Data_ClubCreateShortButtonDouble;
    }

    ReadModule(_index : number)
    {
        let strData = GameConfig.GetCreateRoomModule(_index);
        if(strData == null)
        {
            console.log("halldata ReadModule error strData =null  _index ==" + _index);
            return;
        }
    
        this.Data_Club_CreateTexasConfig = JSON.parse(strData) as Club_CreateTexasConfig;
        this.Data_ClubCreateGameType = this.Data_Club_CreateTexasConfig.gameType
        this.Data_ClubCreateGameName = this.Data_Club_CreateTexasConfig.gameName
        this.Data_ClubCreateGameCurrencyType = this.Data_Club_CreateTexasConfig.currencyType
        this.Data_ClubCreateGameTaxType = this.Data_Club_CreateTexasConfig.taxType
        this.Data_ClubCreateGameTaxRate = this.Data_Club_CreateTexasConfig.taxRatio
        this.Data_ClubCreateGameCurrentSB = this.Data_Club_CreateTexasConfig.smallBlind
        this.Data_ClubCreateGameStraddle = this.Data_Club_CreateTexasConfig.straddle
        this.Data_ClubCreateGameAnte = this.Data_Club_CreateTexasConfig.ante
        this.Data_ClubCreateGameMaxBuying = this.Data_Club_CreateTexasConfig.maxTotalBuyIn
        this.Data_ClubCreateGameMaxBringin = this.Data_Club_CreateTexasConfig.maxBringIn
        this.Data_ClubCreateGameAllowBringOut = this.Data_Club_CreateTexasConfig.allowBringOut
        this.Data_ClubMinScoreAfterBringOut = this.Data_Club_CreateTexasConfig.minScoreAfterBringOut
        this.Data_ClubCreateGameInsurance = this.Data_Club_CreateTexasConfig.insurance
        this.Data_ClubCreateGameDuration = this.Data_Club_CreateTexasConfig.gameDuration
        this.Data_ClubCreateGameThinkingTime = this.Data_Club_CreateTexasConfig.thinkingTime
        this.Data_ClubCreateGameSeatNum = this.Data_Club_CreateTexasConfig.seatNum
        this.Data_ClubCreateGameAutoStart = this.Data_Club_CreateTexasConfig.autoStartNum
        this.Data_ClubCreateGameGPS = this.Data_Club_CreateTexasConfig.gpsLimit
        this.Data_ClubCreateGameIP = this.Data_Club_CreateTexasConfig.ipLimit
        this.Data_ClubCreateShortScoreMode = this.Data_Club_CreateTexasConfig.shortScoreMode
        this.Data_ClubCreateShortBaseScore = this.Data_Club_CreateTexasConfig.shortBaseScore
        this.Data_ClubCreateShortButtonDouble = this.Data_Club_CreateTexasConfig.buttonDouble
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
        
        if( _config.gameType == GameType.TexasCash)
        {
            finalData.texasConfig.maxTotalBuyIn = GameConfig.GetTexasCreateRoomMaxBuyInValue()[_config.maxTotalBuyIn] * bigBliind100;
            finalData.texasConfig.minBringIn = bigBliind100 / 2;
            finalData.texasConfig.maxBringIn = bigBliind100 * GameConfig.GetTexasCreateRoomBringInValue()[_config.maxBringIn];
        }
        else if( _config.gameType == GameType.ShortCash)
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


    RegisteMsg() {
       
    }

    UnregisteMsg() {
        Network.GetInstance().RemoveListenner(this);
    }
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
