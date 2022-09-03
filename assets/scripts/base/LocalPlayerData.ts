import { _decorator, Component, Node } from 'cc';
import { GameConfig } from '../GameConfig';
import { DataNotify } from './DataNotify';
const { ccclass, property } = _decorator;

@ccclass('LocalPlayerData')
export class LocalPlayerData extends DataNotify {
    private static Instance:LocalPlayerData = null;

    public static GetInstance() : LocalPlayerData
    {
        if(LocalPlayerData.Instance == null)
        {
            LocalPlayerData.Instance = new LocalPlayerData();
            LocalPlayerData.Instance.CreateNotify();
            LocalPlayerData.Instance.CustomerInit();
        }

        return LocalPlayerData.Instance;
    }

    Data_Uid : string = null ; //玩家uid
    Data_AreaCode : number = 0; //区号
    Data_PhotoUrl : string = null; //头像地址


    //自定义设置
    CustomerInit()
    {
        this.Data_CustomerRaise0 = GameConfig.GetCustomerRaiseRatio(0);
        this.Data_CustomerRaise1 = GameConfig.GetCustomerRaiseRatio(1);
        this.Data_CustomerRaise2 = GameConfig.GetCustomerRaiseRatio(2);
        this.Data_BGSetting = GameConfig.GetBGSetting();
        this.Data_PokerSetting = GameConfig.GetPokerSetting();
        this.Data_CustomerSliderSetting = GameConfig.GaveCustomerSliderSetting();
        this.Data_BBModeSetting = GameConfig.GetBBToggleSetting();
        this.Data_BGMSetting = GameConfig.GetBGMSetting();
    }
    Data_CustomerRaise0 : number = null;
    Data_CustomerRaise1 : number = null;
    Data_CustomerRaise2 : number = null;
    Data_BGSetting : number = null;
    Data_PokerSetting : number = null;
    Data_CustomerSliderSetting : boolean = null;
    Data_BBModeSetting : boolean = null;
    Data_BGMSetting : boolean = null;
}


export enum Gender
{
    Male = 1 , 
    Female = 2,
}