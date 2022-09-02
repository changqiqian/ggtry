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

    Data_CurrentUsingMttMatchID : number = null ; ////当前尝试进入的mtt游戏
    Data_Uid : string = null ; //玩家uid
    Data_Coin : number = null;//玩家金币
    Data_Diamond : number = null; //钻石
    Data_Point : number = 0; //point积分
    Data_UnionCoin : number = 0; //联盟币
    Data_FrozenMoney : number = null ; //冻结的钱
    Data_CurrentClubId : number = 0 ; //当前clubID
    Data_NickName : string = null; //玩家名字
    Data_AdminRole : number = null; //角色类型， 100是运营账户
    Data_AreaCode : number = 0; //区号
    Data_Decorations : any = null; //不知道是啥  "decorations\":{\"pos1\":0,\"pos2\":0,\"pos3\":0,\"pos4\":0,\"pos5\":0}
    Data_Email : string = null; //邮件
    Data_Gender : Gender = null; //性别
    Data_Signiture : string = null; //用户签名
    Data_IsBind : boolean = null ; //是否绑定
    Data_PhotoUrl : string = null; //头像地址
    Data_SafeToken : string = null; //
    Data_InviteUserId : number = null;
    Data_UserName : number = null; //实际上是手机号
    Data_GiftScore : number = null;
    Data_Clubs : any = null;//俱乐部信息 "clubs\":[{\"clubId\":14834,\"role\":1,\"time\":1658200159,\"isPushOpen\":true,\"clubScore\":0,\"decorations\":{\"pos1\":0,\"pos2\":0,\"pos3\":0,\"pos4\":0,\"pos5\":0}},{\"clubId\":47850,\"role\":0,\"time\":1658214502,\"isPushOpen\":true,\"clubScore\":0,\"decorations\":{\"pos1\":0,\"pos2\":0,\"pos3\":0,\"pos4\":0,\"pos5\":0}}]


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


    ClearData()
    {
        this.Data_CurrentUsingMttMatchID = null;
    }
}


export enum Gender
{
    Male = 1 , 
    Female = 2,
}