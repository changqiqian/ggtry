import { DataNotify } from '../../base/DataNotify';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
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

    //Mtt
    Data_MttInfoSubPage: Mtt_InfoSubPage = null; //Mtt详细信息页面 分页
    Data_MttRankSubPage: Mtt_RankSubPage = null; //Mtt排行榜 分页面

    //Me
    Data_MeMessageSubPage: number = null; //消息页展示内容
    Data_MeRecodeSubPage: number = null; //收支记录当前页


    //Club
                    //创建俱乐部
    Data_ClubLogoIndex : number = null; //创建俱乐部时候选择的logo编号
    Data_ClubStampIndex : number = null; //创建俱乐部时候选的封面编号
                    //创建牌局
    Data_ClubCreateGameType : Club_GameType = Club_GameType.TexasCash; //俱乐部创建牌局时候，游戏类型
    Data_ClubCreateGameName : string = null; //俱乐部创建牌局时候，牌局名称
    Data_ClubCreateGameCurrencyType :Club_GameCurrencyType = null; //俱乐部创建游戏的时候，货币类型设定
    Data_ClubCreateGameTaxType : Club_TaxType = null; //俱乐部创建游戏的时候，抽水设定
    Data_ClubCreateGameTaxRate : number = null; //俱乐部创建牌局时候，抽水数值
    Data_ClubCreateGameCurrentSB : number = null; //俱乐部创建房间时，选中的小盲
    Data_ClubCreateGameStraddle : boolean = null; //俱乐部创建牌局时候，抓头设定
    Data_ClubCreateGameAnte : number = null; //俱乐部创建牌局时候，前注设定
    Data_ClubCreateMaxBuying : number = null; //俱乐部创建牌局时候，最大买入设定, 买了很多次后的总数量不能超过这个值
    Data_ClubCreateMaxBringin : number = null; //俱乐部创建牌局时候，最大带入设定，单次最多带入多少
    Data_ClubCreateAllowBringOut : boolean = null; //俱乐部创建牌局时候，是否允许带出
    Data_ClubCreateMinBringOut : number = null; //俱乐部创建牌局时候，带出后，必须至少保留的积分
    Data_ClubCreateInsurance : boolean = null; //俱乐部创建牌局时候，是否开通保险功能
    Data_ClubCreateGameDuration : number = null;//俱乐部创建牌局时候，牌局时间长度
    Data_ClubCreateThinkingTime : number = null;//俱乐部创建牌局时候，思考时间长度
    Data_ClubCreateSeatNum : number = null;//俱乐部创建牌局时候，座位数
    Data_ClubCreateAutoStart : number = null;//俱乐部创建牌局时候，自动开始人数
    Data_ClubCreateGPS : boolean = null; //俱乐部创建牌局时候，gps
    Data_ClubCreateIP : boolean = null; //俱乐部创建牌局时候，ip

                    //短牌
    Data_ClubCreateGameShortScoreMode : Club_ShortScoreType = Club_ShortScoreType.AnteMode; //俱乐部创建牌局时候，短牌底池模式选择


    ResetCreateTexasRoomParam()
    {
        this.Data_ClubCreateGameName = "";
        this.Data_ClubCreateGameCurrencyType = Club_GameCurrencyType.Point;
        this.Data_ClubCreateGameTaxType = Club_TaxType.WholeGameEnd;
        this.Data_ClubCreateGameTaxRate = 0;
        this.Data_ClubCreateGameCurrentSB = 1;
        this.Data_ClubCreateGameStraddle = false;
        this.Data_ClubCreateGameAnte = 0;
        this.Data_ClubCreateMaxBuying = 0;
        this.Data_ClubCreateMaxBringin = 0;
        this.Data_ClubCreateAllowBringOut = false;
        this.Data_ClubCreateMinBringOut = 0;
        this.Data_ClubCreateInsurance = false;
        this.Data_ClubCreateGameDuration = 0;
        this.Data_ClubCreateThinkingTime = 0;
        this.Data_ClubCreateSeatNum = 0;
        this.Data_ClubCreateAutoStart = 0;
        this.Data_ClubCreateGPS = false;
        this.Data_ClubCreateIP = false;
    }

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

export enum Club_GameType{ //俱乐部创建的游戏类型
    TexasCash = 0,
    ShortCash ,
    Mtt , 
    Omh,
}

export enum Club_TaxType{ //牌局抽水类型
    EveryRound = 0, //没轮都抽
    WholeGameEnd = 1, //游戏结束抽赢家
}

export enum Club_GameCurrencyType{ //牌局货币类型
    Point = 0, //积分
    Coin = 1 ,//金币
}

export enum Club_ShortScoreType{ //短牌底池类型
    AnteMode = 0, 
    BlindMode = 1 ,
}

