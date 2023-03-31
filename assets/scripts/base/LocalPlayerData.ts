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
    Data_AreaCode : BaseData<number> = new BaseData<number>(false , 0); //区号
    Data_Head : BaseData<string> = new BaseData<string>(false , null); //头像地址
    Data_SupervisorInviteCode : BaseData<string> = new BaseData<string>(false , ""); //谁邀请的我
    Data_Coin : BaseData<number> = new BaseData<number>(); //玩家金币
    Data_Diamond : BaseData<number> = new BaseData<number>(); //玩家g钻石
    Data_AccountLevel : BaseData<AccountLevel> = new BaseData<AccountLevel>(); //账户等级
    Data_AccountStatus : BaseData<AccountStatus> = new BaseData<AccountStatus>(); //账户状态

    //Data_JoinTexasList : BaseData<Array<InHallGameInfo>> = new BaseData<Array<InHallGameInfo>>(); //短线重连后 已经加入的德州游戏列表
    //Data_JoinMiniGameList : BaseData<Array<InHallGameInfo>> = new BaseData<Array<InHallGameInfo>>(); //短线重连后 已经加入的小游戏列表

    Data_LastInputPhoneNum : BaseData<string> = new BaseData<string>(); //最后一次输入的手机号
    Data_LastInputPwd : BaseData<string> = new BaseData<string>();//最后一次输入的密码

    //Data_EnterClubs : BaseData<Array<S2CEnterClub>> = new BaseData<Array<S2CEnterClub>>(false,new Array<S2CEnterClub>()); //玩家的俱乐部数据
    Data_CurrentEnterClubId : BaseData<string> = new BaseData<string>();//当前进入的俱乐部

    Data_RecordData: BaseData<RecordData> = new BaseData<RecordData>();//日月星期-战绩数据
    Data_RecordSingleData: BaseData<RecordSingleData> = new BaseData<RecordSingleData>();//战绩入口数据
    Data_RecordDetail: BaseData<RecordDetail> = new BaseData<RecordDetail>();//战绩详细
    Data_SimpleReplayData : BaseData<SimpleReplayRecord> = new BaseData<SimpleReplayRecord>();//获取手牌简要数据
    Data_ReplayData: BaseData<DetailReplayRecord> = new BaseData<DetailReplayRecord>();//获取手牌详细数据
    // public ClearEnterClubInfo()
    // {
    //     this.Data_EnterClubs.mData = new Array<S2CEnterClub>();
    //     this.Data_CurrentEnterClubId.ResetData();
    // }

    // public GetClubInfoByClubId(_clubId : string):S2CEnterClub
    // {
    //     for(let i = 0 ; i < this.Data_EnterClubs.mData.length ; i++)
    //     {
    //         let current = this.Data_EnterClubs.mData[i];
    //         if(current.clubInfo.id == _clubId)
    //         {
    //             return current;
    //         }
    //     }
    //     console.log("GetClubInfoByClubId 没有找到这个俱乐部信息 _clubId===" + _clubId);
    //     return null;
    // }

    // public UpdateClubInfo(_enterClub : S2CEnterClub)
    // {
    //     let index = this.Data_EnterClubs.mData.findIndex((_item) => _item.clubInfo.id === _enterClub.clubInfo.id);
    //     if(index < 0)
    //     {
    //         this.Data_EnterClubs.mData.push(_enterClub);
    //     }
    //     else
    //     {
    //         if(_enterClub.clubInfo !=null)
    //         {
    //             this.Data_EnterClubs.mData[index].clubInfo = _enterClub.clubInfo;
    //         }
    //         if(_enterClub.clubMember !=null)
    //         {
    //             this.Data_EnterClubs.mData[index].clubMember = _enterClub.clubMember;
    //         }
    //     }
    // }

    // public ReUpdateClubInfo(_clubInfos : Array<ClubDetailsInfo>)
    // {
    //     let needRemoveClubId = new Array<string>();
    //     for(let i = 0 ; i < this.Data_EnterClubs.mData.length ; i++)
    //     {
    //         let currentOldClub = this.Data_EnterClubs.mData[i].clubInfo;
    //         let index = _clubInfos.findIndex((_item) => _item.id === currentOldClub.id);
    //         if(index < 0)
    //         {
    //             needRemoveClubId.push(currentOldClub.id);
    //         }
    //     }

    //     for(let i = 0 ; i < needRemoveClubId.length ; i++)
    //     {
    //         let needRemoveId = needRemoveClubId[i];
    //         let index = this.Data_EnterClubs.mData.findIndex((_item) => _item.clubInfo.id === needRemoveId);
    //         if(index >= 0)
    //         {
    //             this.Data_EnterClubs.mData.splice(index , 1);
    //         }
    //     }

    //     for(let i = 0 ; i < _clubInfos.length ; i++)
    //     {
    //         this.CreateEnterClubWithClubInfo(_clubInfos[i]);
    //     }

    // }

    // public CreateEnterClubWithClubInfo(_clubInfo : ClubDetailsInfo)
    // {
    //     let tempEnterClub = new S2CEnterClub();
    //     tempEnterClub.clubInfo = _clubInfo;
    //     tempEnterClub.clubMember = null;
    //     this.UpdateClubInfo(tempEnterClub);
    // }

    // public RemoveEnterClub(_clubId : string)
    // {
    //     let index = this.Data_EnterClubs.mData.findIndex((_item) => _item.clubInfo.id === _clubId);
    //     if(index >= 0)
    //     {
    //         this.Data_EnterClubs.mData.splice(index , 1);
    //     }
    // }

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

    // UpdateJoinGame(_texasGameList : Array<InHallGameInfo> , _miniGameList : Array<InHallGameInfo>)
    // {
    //     this.Data_JoinTexasList.mData = _texasGameList;
    //     this.Data_JoinMiniGameList.mData = _miniGameList;
    // }

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


export enum Gender
{
    Male = 1 , 
    Female = 2,
}