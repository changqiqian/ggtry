import { _decorator, Component, Node } from 'cc';
import { DataNotify } from '../../base/DataNotify';
import { MsgID, Network } from '../../network/Network';
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

    Data_RefreshMttInfo : any = null; //刷新mtt的最新状态数据

    RegisteMsg()
    {
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

