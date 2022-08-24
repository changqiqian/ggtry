import { _decorator, Component, Node } from 'cc';
import { DataNotify } from '../../base/DataNotify';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
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
    Data_CurrentMttMatchId : number = null;//当前mtt房间id
    Data_MttGetRoomInfo : any = null; //Mtt房间内信息
    Data_RefreshMttInfo : any = null; //刷新mtt的最新状态数据
    Data_MttErrorAndBackHall : any = null; //获取mtt房间内信息出错
    Data_CheckPublicCards : any = null ; //发发看数据
    Data_SendPublicCards : any = null; //发公共牌
    Data_GameStart : any = null; //游戏开始消息
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

        Network.GetInstance().AddMsgListenner(MsgID.CheckPublicCards ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS)
            {
                this.Data_CheckPublicCards = _msgBody;
            }
            else
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00057"));
            }
            
        },this);


        Network.GetInstance().AddMsgListenner(MsgID.SendPublicCards ,(_msgBody)=>
        {
            this.Data_SendPublicCards = _msgBody;
        },this);
        
        Network.GetInstance().AddMsgListenner(MsgID.GameStart ,(_msgBody)=>
        {
            this.Data_GameStart = _msgBody;
        },this);
        
    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }

}


  // 1 弃牌  2 看牌  3 跟注  4 加注  5 全下 6 延时, 7 强抓
export enum Game_ActionType
{
    Fold = 1,
    Check = 2,
    Call,
    Raise,
    Allin,
    Delay,
    Straddle,
}
