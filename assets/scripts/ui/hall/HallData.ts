
import { DataNotify } from '../../base/DataNotify';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { MsgID, MsgStatus, Network } from '../../network/Network';




export class HallData extends DataNotify {
    private static Instance:HallData = null;

    public static GetInstance() : HallData
    {
        if(HallData.Instance == null)
        {
            HallData.Instance = new HallData();
            HallData.Instance.CreateNotify();
        }

        return HallData.Instance;
    }

    Data_SubPage : Hall_SubPage = null; //大厅底部 分页
    Data_LunBoTu : any = null;
    Data_MttList : any = null;
    Data_CurrentMttMatchID : number = null ; //当前查看的mtt matchid
    Data_MttInfoSubPage : Mtt_InfoSubPage = null; //Mtt详细信息页面 分页
    Data_MttMatchDetails  : any = null; //进入mtt详细页面的数据
    Data_MttPlayerList : any = null; //进入mtt玩家页面的数据
    Data_MttTableList : any = null; //进入mtt桌号信息页面
    Data_MttStatusChange : any = null; //mtt比赛状态变化
    Data_MttGetRebuyInfo : any = null; //mtt报名时候，报名类型信息
    RegisteMsg()
    {
        Network.GetInstance().AddMsgListenner(MsgID.GetLunBoTu ,(_msgBody)=>
        {
            if(_msgBody != null && _msgBody.adverts != null && _msgBody.adverts.length !=0)
            {
                this.Data_LunBoTu = _msgBody;
            }
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.GetMttList ,(_msgBody)=>
        {
            if(_msgBody.list != null && _msgBody.list.length != 0) 
            {
                //排序
                {
                    for(let i = 0; i < _msgBody.list.length; i++) 
                    {
                        _msgBody.list[i].sortValue = -i
                        if(_msgBody.list[i].mttInfo.strapConfig.isTop) 
                        {
                            _msgBody.list[i].sortValue = 10000 - i 
                        }
                    }
                    _msgBody.list.sort((a, b) => 
                    {
                        return a.sortValue > b.sortValue ? -1 : 1
                    });
                }

                this.Data_MttList = _msgBody.list;
            }
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.GetMttMatchDetails ,(_msgBody)=>
        {
            UIMgr.GetInstance().ShowLoading(false);
            if (_msgBody.code == MsgStatus.FAILED) 
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00029"));
            } 
            else if (_msgBody.code == MsgStatus.SUCCESS) 
            {
                this.Data_MttMatchDetails = _msgBody;
            }
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.GetMttPlayerList ,(_msgBody)=>
        {
            UIMgr.GetInstance().ShowLoading(false);
            this.Data_MttPlayerList = _msgBody;
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.GetMttTableInfo ,(_msgBody)=>
        {
            UIMgr.GetInstance().ShowLoading(false);
            this.Data_MttTableList = _msgBody;
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.MttStatusChange ,(_msgBody)=>
        {
            this.Data_MttStatusChange = _msgBody;
        },this);
        Network.GetInstance().AddMsgListenner(MsgID.MttGetRebuyInfo ,(_msgBody)=>
        {
            this.Data_MttGetRebuyInfo = _msgBody;
        },this);
        
        
    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }

}


export enum Hall_SubPage //大厅底部分页
{
    MTT, 
    Cash,
    Club,
    Activity,
    Me,
}

export enum Mtt_MatchListStatus //Mtt列表中的Item状态
{
    ManualStart = 0, //手动开始
    NotStart = 1, //未开始 
    DelayReg = 2, //延迟报名
    MatchStarted = 3, //已开始 
    RestTime = 4, //休息中
    MatchEnd = 5, //比赛结束
}

export enum Mtt_RegType //mtt报名费类型
{
    Coin = 1 ,
    Diamond = 2,
    Ticket = 3,
    CoinAndTicket = 4,
    DiamondAndTicket = 5,
}

export enum Mtt_InfoSubPage //mtt详细信息页面 分页
{
    InfoPage = 0,
    PlayerPage = 1,
    RewardPage = 2,
    TablePage = 3,
}

export enum Mtt_UserStatus //mtt比赛玩家状态
{
    NotAttend = 1 , //没有报名
    WaitingApply = 2, //等待审核
    Registed = 3, //已报名
    Attending = 4 ,//已经参加
    Lose = 5, //已经淘汰
}

export enum Mtt_MatchStatus //Mtt详细信息页面的比赛状态
{
    Registring = 1, //报名中
    Only_15mins = 2, //准备开始 提前15分钟
    Only_10s = 3 , //预备开始 10秒倒计时
    Started = 4 , //正式开始
    Rest = 5 , //休息
    Pause = 6 ,//暂停
    End = 7 , //结束
}

export enum Mtt_StartMode
{
    ManualStart = 1,  //手动开始
    AutoStart = 2, //自动开始
}
