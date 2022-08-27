import { _decorator, Component, Node, Vec3, Rect, Vec2, Size } from 'cc';
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

export class CowboyData extends DataNotify {
    public static Instance:CowboyData = null;

    public static GetInstance() : CowboyData
    {
        if(CowboyData.Instance == null)
        {
            CowboyData.Instance = new CowboyData();
            CowboyData.Instance.CreateNotify();
        }

        return CowboyData.Instance;
    }

    Data_SelectedChip : number = null; //本地玩家选中的下注筹码
    Data_BetConfig :cb_BetConfig = null; //下注数据
    Data_LocalPlayerPos : Vec3 = null; //本地玩家位置，记录下来，筹码从这里飞出来


    //常量
    public static TotalCards : number = 5; 
}

