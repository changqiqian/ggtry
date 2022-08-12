
import { DataNotify } from '../../base/DataNotify';
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

    Data_SubPage : Hall_SubPage = null;
    Data_LunBoTu : any = null;
    Data_MttList : any = null;
    
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

export enum Mtt_MatchStatus
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
