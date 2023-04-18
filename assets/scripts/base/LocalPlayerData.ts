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
    Data_AccountLevel : BaseData<AccountLevel> = new BaseData<AccountLevel>(); //账户等级
    Data_AccountStatus : BaseData<AccountStatus> = new BaseData<AccountStatus>(); //账户状态
    Data_DiamondSelectIndex : BaseData<number> = new BaseData<number>(); //想要购买的钻石编号

    Data_UpdateHallMoney : BaseData<boolean> = new BaseData<boolean>(true); //更新大厅金币
    UpdateUserInfo(_userInfo : UserInfo)
    {
        this.Data_Uid.mData = _userInfo.uid;
        this.Data_NickName.mData = _userInfo.nickName;
        this.Data_Head.mData = _userInfo.head;
        this.Data_Coin.mData = _userInfo.coin;
        this.Data_Diamond.mData = _userInfo.diamond;
        this.Data_AccountLevel.mData = _userInfo.accountLevel;
        this.Data_AccountStatus.mData = _userInfo.accountStatus;
    }

    //自定义设置 本地存储变量读取
    LoadLocalConfig()
    {
        this.CustomerRaiseSetting = GameConfig.GetAllCustomerRaise();
        this.Data_BGSetting.mData = GameConfig.GetBGSetting();
        this.Data_PokerSetting.mData = GameConfig.GetPokerSetting();
        this.Data_CustomerSliderSetting.mData = GameConfig.GetCustomerSliderSetting();
        this.Data_BBModeSetting.mData = GameConfig.GetBBToggleSetting();
        this.Data_BGMSetting.mData = GameConfig.GetBGMSetting();
        this.Data_ChatSetting.mData = GameConfig.GetChatSetting();
    }

    CustomerRaiseSetting : Array<number>;
    Data_BGSetting : BaseData<number> = new BaseData<number>();
    Data_PokerSetting : BaseData<number> = new BaseData<number>();
    Data_CustomerSliderSetting : BaseData<boolean> = new BaseData<boolean>();
    Data_BBModeSetting : BaseData<boolean> = new BaseData<boolean>();
    Data_BGMSetting :BaseData<boolean> = new BaseData<boolean>();
    Data_ChatSetting :BaseData<boolean> = new BaseData<boolean>();
}
