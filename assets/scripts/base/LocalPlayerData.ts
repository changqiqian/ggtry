import { _decorator, Component, Node } from 'cc';
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
        }

        return LocalPlayerData.Instance;
    }

    Data_Uid : number = null ; //玩家uid
    Data_Coin : number = null;//玩家金币
    Data_Diamond : number = null; //钻石
    Data_FrozenMoney : number = null ; //冻结的钱
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
}


export enum Gender
{
    Male = 1 , 
    Female = 2,
}