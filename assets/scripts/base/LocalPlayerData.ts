import { _decorator, Component, Node } from 'cc';
import { DataNotify } from './DataNotify';
const { ccclass, property } = _decorator;

@ccclass('LocalPlayerData')
export class LocalPlayerData extends DataNotify {
    public static Instance:LocalPlayerData = null;

    public static GetInstance() : LocalPlayerData
    {
        if(LocalPlayerData.Instance == null)
        {
            LocalPlayerData.Instance = new LocalPlayerData();
            LocalPlayerData.Instance.CreateNotify();
        }

        return LocalPlayerData.Instance;
    }

    Data_Uid : number = null ; //玩家uid
    Data_Money : number = null;//玩家金币
    Data_Name : string = null; //玩家名字
}

