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

    Data_Money : number = null;//玩家金币

    TestData()
    {
        this.Data_Money = 300;
    }
}

