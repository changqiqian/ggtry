import { _decorator, Component, Node } from 'cc';
import { GameConfig } from '../GameConfig';
import { BaseData } from './BaseData';

import { DataNotify } from './DataNotify';
import { SingletonBaseNotify } from './Singleton';
const { ccclass, property } = _decorator;


@ccclass('LocalPlayerData')
export class LocalPlayerData extends SingletonBaseNotify<LocalPlayerData>()
{
    protected ResetInstance() 
    {
        LocalPlayerData.ClearInstance();
    }
    Data_Uid : BaseData<string> = new BaseData<string>(false,"selfUid"); //玩家uid
    Data_NickName : BaseData<string> = new BaseData<string>(); //玩家姓名
    Data_Head : BaseData<string> = new BaseData<string>(false , null); //头像地址
    Data_Coin : BaseData<number> = new BaseData<number>(); //玩家大厅金币
    Data_Diamond : BaseData<number> = new BaseData<number>(); //玩家g钻石

    //自定义设置 本地存储变量读取
    LoadLocalConfig()
    {

    }
}
