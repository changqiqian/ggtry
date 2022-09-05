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
    Data_ClubLogoIndex : number = null; //创建俱乐部时候选择的logo编号
    Data_ClubStampIndex : number = null; //创建俱乐部时候选的封面编号
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