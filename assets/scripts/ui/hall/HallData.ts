
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


