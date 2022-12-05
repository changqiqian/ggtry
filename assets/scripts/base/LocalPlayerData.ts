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

    Data_EnterClubs : BaseData<Array<S2CEnterClub>> = new BaseData<Array<S2CEnterClub>>(false,new Array<S2CEnterClub>()); //玩家的俱乐部数据
    Data_CurrentEnterClubId : BaseData<string> = new BaseData<string>();//当前进入的俱乐部


    public GetClubInfoByClubId(_clubId : string):S2CEnterClub
    {
        for(let i = 0 ; i < this.Data_EnterClubs.mData.length ; i++)
        {
            let current = this.Data_EnterClubs.mData[i];
            if(current.clubInfo.id == _clubId)
            {
                return current;
            }
        }
        console.log("GetClubInfoByClubId 没有找到这个俱乐部信息 _clubId===" + _clubId);
        return null;
    }

    public UpdateClubInfo(_enterClub : S2CEnterClub)
    {
        let index = this.Data_EnterClubs.mData.findIndex((_item) => _item.clubInfo.id === _enterClub.clubInfo.id);
        if(index < 0)
        {
            this.Data_EnterClubs.mData.push(_enterClub);
        }
        else
        {
            this.Data_EnterClubs.mData[index] = _enterClub;
        }
    }

    GetFullPhoneNumber(_phoneNum : string = null)
    {
        if(_phoneNum != null )
        {
            this.Data_LastInputPhoneNum.mData = _phoneNum;
        }

        let currentAreaCodeIndex = this.Data_AreaCode.mData;
        let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
        let fullPhoneNumber = currentAreaCode + ' ' + this.Data_LastInputPhoneNum.mData;
        return fullPhoneNumber;
    }

    UpdateUserInfo(_userInfo : UserInfo)
    {
        LocalPlayerData.Instance.Data_Uid.mData = _userInfo.uid;
        LocalPlayerData.Instance.Data_NickName.mData = _userInfo.nickName;
        LocalPlayerData.Instance.Data_Head.mData = _userInfo.head;
        LocalPlayerData.Instance.Data_Coin.mData = _userInfo.coin;
        LocalPlayerData.Instance.Data_Diamond.mData = _userInfo.diamond;
        LocalPlayerData.Instance.Data_AccountLevel.mData = _userInfo.accountLevel;
        LocalPlayerData.Instance.Data_AccountStatus.mData = _userInfo.accountStatus;
    }

    //自定义设置 本地存储变量读取
    LoadLocalConfig()
    {
        this.Data_CustomerRaise0.mData = GameConfig.GetCustomerRaise(0);
        this.Data_CustomerRaise1.mData = GameConfig.GetCustomerRaise(1);
        this.Data_CustomerRaise2.mData = GameConfig.GetCustomerRaise(2);
        this.Data_BGSetting.mData = GameConfig.GetBGSetting();
        this.Data_PokerSetting.mData = GameConfig.GetPokerSetting();
        this.Data_CustomerSliderSetting.mData = GameConfig.GetCustomerSliderSetting();
        this.Data_BBModeSetting.mData = GameConfig.GetBBToggleSetting();
        this.Data_BGMSetting.mData = GameConfig.GetBGMSetting();

        console.log("this.Data_CustomerRaise0.mData == " + this.Data_CustomerRaise0.mData )
        console.log("this.Data_CustomerRaise1.mData == " + this.Data_CustomerRaise1.mData )
        console.log("this.Data_CustomerRaise2.mData == " + this.Data_CustomerRaise2.mData )
        console.log("this.Data_BGSetting.mData == " + this.Data_BGSetting.mData )
        console.log("this.Data_PokerSetting.mData == " + this.Data_PokerSetting.mData )
        console.log("this.Data_CustomerSliderSetting.mData == " + this.Data_CustomerSliderSetting.mData )
        console.log("this.Data_BBModeSetting.mData == " + this.Data_BBModeSetting.mData )
        console.log("this.Data_BGMSetting.mData == " + this.Data_BGMSetting.mData )
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