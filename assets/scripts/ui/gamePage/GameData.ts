import { _decorator, Component, Node } from 'cc';
import { DataNotify } from '../../base/DataNotify';
import { Localization } from '../../base/Localization';
import { MsgID, MsgStatus, Network } from '../../network/Network';
const { ccclass, property } = _decorator;

@ccclass('GameData')
export class GameData extends DataNotify 
{
    private static Instance:GameData = null;

    public static GetInstance() : GameData
    {
        if(GameData.Instance == null)
        {
            GameData.Instance = new GameData();
            GameData.Instance.CreateNotify();
        }

        return GameData.Instance;
    }

    Data_MttGetRoomInfo : any = null; //Mtt房间内信息
    Data_RefreshMttInfo : any = null; //刷新mtt的最新状态数据
    Data_MttErrorAndBackHall : any = null; //获取mtt房间内信息出错
    RegisteMsg()
    {
        Network.GetInstance().AddMsgListenner(MsgID.MttGetRoomInfo ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS)
            {
                this.Data_MttGetRoomInfo = _msgBody;
            }
            else
            {
                this.Data_MttErrorAndBackHall = _msgBody.reason;
            }
            
        },this);
        
        Network.GetInstance().AddMsgListenner(MsgID.RefreshMttInfo ,(_msgBody)=>
        {
            this.Data_RefreshMttInfo = _msgBody;
        },this);
    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }

}

