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

    Data_Uid : BaseData<string> = new BaseData<string>(); //玩家uid
    Data_AreaCode : BaseData<number> = new BaseData<number>(false , 0); //区号
    Data_PhotoUrl : BaseData<string> = new BaseData<string>(); //头像地址


    //自定义设置
    CustomerInit()
    {
        this.Data_CustomerRaise0.mData = GameConfig.GetCustomerRaiseRatio(0);
        this.Data_CustomerRaise1.mData = GameConfig.GetCustomerRaiseRatio(1);
        this.Data_CustomerRaise2.mData = GameConfig.GetCustomerRaiseRatio(2);
        this.Data_BGSetting.mData = GameConfig.GetBGSetting();
        this.Data_PokerSetting.mData = GameConfig.GetPokerSetting();
        this.Data_CustomerSliderSetting.mData = GameConfig.GetCustomerSliderSetting();
        this.Data_BBModeSetting.mData = GameConfig.GetBBToggleSetting();
        this.Data_BGMSetting.mData = GameConfig.GetBGMSetting();
    }
    Data_CustomerRaise0 :BaseData<number> = new BaseData<number>();
    Data_CustomerRaise1 : BaseData<number> = new BaseData<number>();
    Data_CustomerRaise2 : BaseData<number> = new BaseData<number>();
    Data_BGSetting : BaseData<number> = new BaseData<number>();
    Data_PokerSetting : BaseData<number> = new BaseData<number>();
    Data_CustomerSliderSetting : BaseData<boolean> = new BaseData<boolean>();
    Data_BBModeSetting : BaseData<boolean> = new BaseData<boolean>();
    Data_BGMSetting :BaseData<boolean> = new BaseData<boolean>();
}


export enum Gender
{
    Male = 1 , 
    Female = 2,
}