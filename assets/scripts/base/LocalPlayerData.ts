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
    Data_Token : BaseData<string> = new BaseData<string>();
    Data_Uid : BaseData<string> = new BaseData<string>(); //玩家uid
    Data_NickName : BaseData<string> = new BaseData<string>(); //玩家姓名
    Data_AreaCode : BaseData<number> = new BaseData<number>(false , 0); //区号
    Data_Head : BaseData<string> = new BaseData<string>(false , null); //头像地址
    Data_SupervisorInviteCode : BaseData<string> = new BaseData<string>(false , ""); //谁邀请的我
    Data_Coin : BaseData<number> = new BaseData<number>(); //玩家金币
    Data_Diamond : BaseData<number> = new BaseData<number>(); //玩家g钻石
    Data_AccountLevel : BaseData<AccountLevel> = new BaseData<AccountLevel>(); //账户等级
    Data_AccountStatus : BaseData<AccountStatus> = new BaseData<AccountStatus>(); //账户状态


    Data_LastInputPhoneNum : BaseData<string> = new BaseData<string>(); //最后一次输入的手机号
    Data_LastInputPwd : BaseData<string> = new BaseData<string>();//最后一次输入的密码

    Data_SelfClubInfo : BaseData<IClubMember> = new BaseData<IClubMember>();//进入俱乐部后，我的俱乐部个人信息
    Data_CurrentEnterClub : BaseData<IClubDetailsInfo> = new BaseData<IClubDetailsInfo>();//当前进入的俱乐部

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