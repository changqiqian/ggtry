import { _decorator, Component, Node, Vec3, Rect, Vec2, Size } from 'cc';
import { BaseData } from '../../base/BaseData';
import { BaseDataNotify } from '../../base/BaseDataNotify';
import { DataNotify } from '../../base/DataNotify';
const { ccclass, property } = _decorator;



export enum cbEnum_Gender
{
    Boy,
    Girl,
}

export enum cbEnum_TotalHistory //总记录
{
    Boy,
    Girl,
    Tie,
}

export class cb_BetConfig //下注数据
{
    constructor(_targetWorldPos:Vec3,_offset:Size, _betID : number , _uid : string)
    {
        this.mTargetWorldPos = _targetWorldPos;
        this.mOffset = _offset;
        this.mBetID = _betID;
        this.mUid = _uid;
    }
    mUid : string;
    mOffset : Size;
    mTargetWorldPos : Vec3;
    mBetID : number;
}

export class CowboyData extends BaseDataNotify 
{
    public static Instance:CowboyData = null;

    public static GetInstance() : CowboyData
    {
        if(CowboyData.Instance == null)
        {
            CowboyData.Instance = new CowboyData();
        }

        return CowboyData.Instance;
    }

    Data_SelectedChip : BaseData<number> = new BaseData<number>(); //本地玩家选中的下注筹码
    Data_BetConfig :  BaseData<cb_BetConfig> = new BaseData<cb_BetConfig>(); //下注数据 
    Data_LocalPlayerPos :  BaseData<Vec3> = new BaseData<Vec3>();//本地玩家位置，记录下来，筹码从这里飞出来


    //常量
    public static TotalCards : number = 5; 
}

