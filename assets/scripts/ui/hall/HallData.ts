import { DataNotify } from '../../base/DataNotify';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { MsgID, MsgStatus, Network } from '../../network/Network';

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
    Data_MttList: any = null; //mtt 比赛列表数据
    Data_CurrentMttMatchID: number = null; //当前查看的mtt matchid
    Data_MttInfoSubPage: Mtt_InfoSubPage = null; //Mtt详细信息页面 分页
    Data_MttMatchDetails: any = null; //进入mtt详细页面的数据
    Data_MttPlayerList: any = null; //进入mtt玩家页面的数据
    Data_MttTableList: any = null; //进入mtt桌号信息页面
    Data_MttStatusChange: any = null; //mtt比赛状态变化
    Data_MttGetRebuyInfo: any = null; //mtt报名时候，报名类型信息
    Data_MttAttendOption: Mtt_RegType = null; //当前选中的报名方式
    Data_UnionAssets: any = null; //联盟资产
    Data_SelfTickets: any = null; //自己拥有的门票
    Data_AttendMttResp: any = null; //报名mtt的返回数据
    Data_CancelMttResp: any = null; //取消报名mtt
    Data_MttJoinNotify: any = null; //服务器主动推送的mtt有人报名
    Data_MttReadyNotify: any = null; //mtt比赛准备开始了
    Data_MttDismiss: any = null; //解散比赛
    Data_MttManualStart: any = null; // 手动开始比赛
    Data_MttRankSubPage: Mtt_RankSubPage = null; //Mtt排行榜 分页面
    Data_MttRankData: any = null; //Mtt排行榜数据
    Data_MeMessageSubPage: number = null; //消息页展示内容
    Data_MeMessageReadAllRead: any = null; // 公告红点数据
    Data_MeMessageData: any = null; // 公告或消息资料
    Data_MeMessagDetailId: any = null; // 消息id
    Data_MeMessagDetailData: any = null; // 消息资料
    Data_NewPlayerAttendingMtt: any = null; //mtt比赛有新用户报名或取消报名
    Data_IsBackToGame: boolean = null; //老项目代码里面需要用这个值来获取比赛信息，我也不知道有什么用
    Data_MeRankData: any = null; //我的mtt战绩资料
    Data_DetectCanDeleteData: any = null; //是否可删除帐号资料
    Data_LogOffCode: any = null; //删除帐号验证码
    Data_DeleteAccountData: any = null; //删除帐号讯息

    RegisteMsg() {
        Network.GetInstance().AddMsgListenner(
            MsgID.GetLunBoTu,
            (_msgBody) => {
                if (_msgBody != null && _msgBody.adverts != null && _msgBody.adverts.length != 0) {
                    this.Data_LunBoTu = _msgBody;
                }
            },
            this
        );

        Network.GetInstance().AddMsgListenner(
            MsgID.GetMttList,
            (_msgBody) => {
                if (_msgBody.list != null && _msgBody.list.length != 0) {
                    //排序 照搬原来的代码 反正就是排序的意思
                    {
                        for (let i = 0; i < _msgBody.list.length; i++) {
                            _msgBody.list[i].sortValue = -i;
                            if (_msgBody.list[i].mttInfo.strapConfig.isTop) {
                                _msgBody.list[i].sortValue = 10000 - i;
                            }
                        }
                        _msgBody.list.sort((a, b) => {
                            return a.sortValue > b.sortValue ? -1 : 1;
                        });
                    }

                    this.Data_MttList = _msgBody.list;
                }
            },
            this
        );

        Network.GetInstance().AddMsgListenner(
            MsgID.GetMttMatchDetails,
            (_msgBody) => {
                if (_msgBody.code == MsgStatus.FAILED) {
                    UIMgr.GetInstance().ShowToast(Localization.GetString('00029'));
                } else if (_msgBody.code == MsgStatus.SUCCESS) {
                    this.Data_MttMatchDetails = _msgBody;
                }
            },
            this
        );

        Network.GetInstance().AddMsgListenner(
            MsgID.GetMttPlayerList,
            (_msgBody) => {
                this.Data_MttPlayerList = _msgBody;
            },
            this
        );

        Network.GetInstance().AddMsgListenner(
            MsgID.GetMttTableInfo,
            (_msgBody) => {
                this.Data_MttTableList = _msgBody;
            },
            this
        );

        Network.GetInstance().AddMsgListenner(
            MsgID.MttStatusChange,
            (_msgBody) => {
                this.Data_MttStatusChange = _msgBody;
            },
            this
        );
        Network.GetInstance().AddMsgListenner(
            MsgID.MttGetRebuyInfo,
            (_msgBody) => {
                this.Data_MttGetRebuyInfo = _msgBody;
            },
            this
        );
        Network.GetInstance().AddMsgListenner(
            MsgID.GetUnionAssets,
            (_msgBody) => {
                this.Data_UnionAssets = _msgBody;
            },
            this
        );
        Network.GetInstance().AddMsgListenner(
            MsgID.GetSelfTicket,
            (_msgBody) => {
                this.Data_SelfTickets = _msgBody;
            },
            this
        );

        Network.GetInstance().AddMsgListenner(
            MsgID.AttendMtt,
            (_msgBody) => {
                if (_msgBody.code == MsgStatus.SUCCESS) {
                    this.Data_AttendMttResp = _msgBody;
                } else {
                    UIMgr.GetInstance().ShowToast(Localization.GetString(_msgBody.reason));
                }
            },
            this
        );

        Network.GetInstance().AddMsgListenner(
            MsgID.MttCancelReg,
            (_msgBody) => {
                this.Data_CancelMttResp = _msgBody;
                UIMgr.GetInstance().ShowToast(_msgBody.reason);
            },
            this
        );

        Network.GetInstance().AddMsgListenner(
            MsgID.MttJoinNotify,
            (_msgBody) => {
                this.Data_MttJoinNotify = _msgBody;
            },
            this
        );

        Network.GetInstance().AddMsgListenner(
            MsgID.MttReadyNotify,
            (_msgBody) => {
                if (_msgBody.code == MsgStatus.SUCCESS) {
                    this.Data_IsBackToGame = true;
                    this.Data_MttReadyNotify = _msgBody;
                } else {
                    UIMgr.GetInstance().ShowToast(Localization.GetString('00045'));
                }
            },
            this
        );
        Network.GetInstance().AddMsgListenner(
            MsgID.MttDismiss,
            (_msgBody) => {
                if (_msgBody.code == MsgStatus.SUCCESS) {
                    this.Data_MttDismiss = _msgBody;
                } else {
                    UIMgr.GetInstance().ShowToast('MttDismiss code ==' + _msgBody.code);
                }
            },
            this
        );
        Network.GetInstance().AddMsgListenner(
            MsgID.MttManualStart,
            (_msgBody) => {
                if (_msgBody.code == MsgStatus.SUCCESS) {
                    this.Data_MttManualStart = _msgBody;
                } else {
                    UIMgr.GetInstance().ShowToast('MttManualStart code ==' + _msgBody.code);
                }
            },
            this
        );
        Network.GetInstance().AddMsgListenner(
            MsgID.GetMttRank,
            (_msgBody) => {
                this.Data_MttRankData = _msgBody;
            },
            this
        );

        Network.GetInstance().AddMsgListenner(
            MsgID.GetMessageAllRead,
            (_msgBody) => {
                if (_msgBody != null) {
                    this.Data_MeMessageReadAllRead = _msgBody;
                }
            },
            this
        );
        Network.GetInstance().AddMsgListenner(
            MsgID.GetMessageInfo,
            (_msgBody) => {
                if (_msgBody != null) {
                    this.Data_MeMessageData = _msgBody;
                }
            },
            this
        );

        Network.GetInstance().AddMsgListenner(
            MsgID.NewPlayerAttendingMtt,
            (_msgBody) => {
                if (_msgBody != null) {
                    this.Data_NewPlayerAttendingMtt = _msgBody;
                }
            },
            this
        );
        Network.GetInstance().AddMsgListenner(
            MsgID.MeRank,
            (_msgBody) => {
                if (_msgBody != null) {
                    this.Data_MeRankData = _msgBody;
                }
            },
            this
        );
        Network.GetInstance().AddMsgListenner(
            MsgID.detectCanDeleteAccount,
            (_msgBody) => {
                if (_msgBody != null) {
                    this.Data_DetectCanDeleteData = _msgBody;
                }
            },
            this
        );
        Network.GetInstance().AddMsgListenner(
            MsgID.GetLogOffCode,
            (_msgBody) => {
                if (_msgBody != null) {
                    this.Data_LogOffCode = _msgBody;
                }
            },
            this
        );
        Network.GetInstance().AddMsgListenner(
            MsgID.deleteAccount,
            (_msgBody) => {
                if (_msgBody != null) {
                    this.Data_DeleteAccountData = _msgBody;
                }
            },
            this
        );
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

export enum Mtt_MatchListStatus { //Mtt列表中的Item状态
    ManualStart = 0, //手动开始
    NotStart = 1, //未开始
    DelayReg = 2, //延迟报名
    MatchStarted = 3, //已开始
    RestTime = 4, //休息中
    MatchEnd = 5, //比赛结束
}

export enum Mtt_RegType { //mtt报名费类型
    None = 0,
    Coin = 1,
    Diamond = 2,
    Ticket = 3,
    CoinAndTicket = 4,
    DiamondAndTicket = 5,
    Point = 6,
    UnionCoin = 7,
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

export enum Mtt_UserStatus { //mtt比赛玩家状态
    NotAttend = 1, //没有报名
    WaitingApply = 2, //等待审核
    Registed = 3, //已报名
    Attending = 4, //已经参加
    Lose = 5, //已经淘汰
}

export enum Mtt_MatchStatus { //Mtt详细信息页面的比赛状态
    Registring = 1, //报名中
    Only_15mins = 2, //准备开始 提前15分钟
    Only_10s = 3, //预备开始 10秒倒计时
    Started = 4, //正式开始
    Rest = 5, //休息
    Pause = 6, //暂停
    End = 7, //结束
    LevelUp = 8, //涨盲通知
}

export enum Mtt_StartMode {
    ManualStart = 1, //手动开始
    AutoStart = 2, //自动开始
}

export enum Me_MessageSubPage { //消息页内容
    Announcement = 0,
    Message = 1,
}
