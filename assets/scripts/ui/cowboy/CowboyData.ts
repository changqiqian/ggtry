import { _decorator, Component, Node, Vec3, Rect, Vec2, Size } from 'cc';
import { BaseData } from '../../base/BaseData';
import { DataNotify } from '../../base/DataNotify';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { SingletonBaseNotify } from '../../base/Singleton';
import { Tool } from '../../Tool';
const { ccclass, property } = _decorator;



export enum cbEnum_Gender
{
    Boy,
    Girl,
}


export class cb_BetConfig //下注数据
{
    constructor(_targetWorldPos:Vec3,_offset:Size, _betArea : CowboyAreaType , _uid : string , _amount : number)
    {
        this.mTargetWorldPos = _targetWorldPos;
        this.mOffset = _offset;
        this.mBetArea = _betArea;
        this.mUid = _uid;
        this.mAmount = _amount;
    }
    mUid : string;
    mOffset : Size;
    mTargetWorldPos : Vec3;
    mBetArea : CowboyAreaType;
    mAmount : number;
}



export class CowboyData extends SingletonBaseNotify<CowboyData>()
{
    protected ResetInstance() 
    {
        CowboyData.ClearInstance();
    }

    public static UITag = "CowBoy";

    Data_S2CTexasCowboyEnterGameResp : BaseData<S2CTexasCowboyEnterGameResp> = new BaseData<S2CTexasCowboyEnterGameResp>(); //进入游戏总数据
    Data_S2CTexasCowboyExitGameResp: BaseData<S2CTexasCowboyExitGameResp> = new BaseData<S2CTexasCowboyExitGameResp>(); //退出游戏
    Data_S2CTexasCowboyBetResp : BaseData<S2CTexasCowboyBetResp> = new BaseData<S2CTexasCowboyBetResp>(); //下注回复
    Data_S2CTexasCowboyBetNotify :  BaseData<S2CTexasCowboyBetNotify> = new BaseData<S2CTexasCowboyBetNotify>(); //有人下注消息
    Data_S2CTexasCowboyGameStartNotify :  BaseData<S2CTexasCowboyGameStartNotify> = new BaseData<S2CTexasCowboyGameStartNotify>(); //游戏开始
    Data_S2CTexasCowboyGameSettlementNotify:  BaseData<S2CTexasCowboyGameSettlementNotify> = new BaseData<S2CTexasCowboyGameSettlementNotify>(); //游戏结算
    Data_S2CTexasCowboyRecordResp : BaseData<S2CTexasCowboyRecordResp> = new BaseData<S2CTexasCowboyRecordResp>(); //我的游戏记录
    Data_S2CTexasCowboyTotalHistoryResp: BaseData<S2CTexasCowboyTotalHistoryResp> = new BaseData<S2CTexasCowboyTotalHistoryResp>(); //游戏总记录


    Data_S2CTexasCowboyBringInResp: BaseData<S2CTexasCowboyBringInResp> = new BaseData<S2CTexasCowboyBringInResp>(); //代入返回

    Data_HideUI : BaseData<boolean> = new BaseData<boolean>(true); //隐藏ui
    Data_Money  : BaseData<number> = new BaseData<number>(); //本地玩家的钱
    Data_SelectedChip : BaseData<number> = new BaseData<number>(); //本地玩家选中的下注筹码
    Data_BetConfig :  BaseData<cb_BetConfig> = new BaseData<cb_BetConfig>(); //下注数据 
    Data_CollectConfig :  BaseData<cb_BetConfig> = new BaseData<cb_BetConfig>(); //回收筹码数据
    Data_LocalPlayerPos :  BaseData<Vec3> = new BaseData<Vec3>();//本地玩家位置，记录下来，筹码从这里飞出来
    Data_OtherPlayerPos : BaseData<Vec3> = new BaseData<Vec3>();//其他玩家位置，记录下来，筹码从这里飞出来

    //筹码面额配置
    public ChipAmountConfig : Array<number> = new Array<number>(1,10,50,100,500);

    public ClearData()
    {
        this.Data_S2CTexasCowboyEnterGameResp.mData.cowboyAreaInfoList = new Array<CowboyAreaInfo>();
        this.Data_S2CTexasCowboyEnterGameResp.mData.myBetInfo = new Array<CowboySingleBet>();

        for(let i = CowboyAreaType.CowboyAreaType_0 ; i<= CowboyAreaType.CowboyAreaType_10 ; i++)
        {
            let tempAreaInfo = new CowboyAreaInfo();
            tempAreaInfo.cowboyAreaType = i;
            tempAreaInfo.totalBetNum = 0;
            this.Data_S2CTexasCowboyEnterGameResp.mData.cowboyAreaInfoList.push(tempAreaInfo);

            let selfBetInfo = new CowboySingleBet();
            selfBetInfo.actionId = LocalPlayerData.Instance.Data_Uid.mData;
            selfBetInfo.amount = 0;
            selfBetInfo.betArea = i;
            this.Data_S2CTexasCowboyEnterGameResp.mData.myBetInfo.push(selfBetInfo);
        }
    }

    public GetRatio(_areaType : CowboyAreaType) : number
    {
        let ratio = this.Data_S2CTexasCowboyEnterGameResp.mData.ratio[_areaType];   
        return Tool.ConvertMoney_S2C(ratio);
    }

    public GetGameId() : string
    {
        return this.Data_S2CTexasCowboyEnterGameResp.mData.gameId;
    }

    public SetOneCard(_card : CardInfo)
    {
        this.Data_S2CTexasCowboyEnterGameResp.mData.oneCard = _card;
    }

    public SetPhase(_phase : CowboyPhase)
    {
        this.Data_S2CTexasCowboyEnterGameResp.mData.phase = _phase;
    }

    public GetPhase() : CowboyPhase
    {
        return this.Data_S2CTexasCowboyEnterGameResp.mData.phase;
    }

    public GetDuration(_phase :CowboyPhase) : number
    {
        if(_phase == CowboyPhase.CowBoyPhase_Settlement)
        {
            return this.Data_S2CTexasCowboyEnterGameResp.mData.settlementTime;
        }
        else
        {
            return this.Data_S2CTexasCowboyEnterGameResp.mData.betTime;
        }
    }

    //把目标钱， 拆分成几个筹码的组合
    public SeparateChip(_amount : number) : Array<number>
    {
        let result = [0,0,0,0,0]; 
        for(let i = this.ChipAmountConfig.length -1 ; i >= 0 ; i--)
        {
            if(_amount <=0)
            {
                continue;
            }
            
            let targetAmout = this.ChipAmountConfig[i];
            let currentResult = Math.floor(_amount / targetAmout);
            result[i] = currentResult;
            _amount -= targetAmout * currentResult; 
        }
        return result;
    }

    public GetAreaBetInfoByAreaType(_areaType : CowboyAreaType) : CowboyAreaInfo
    {
        let areaInfoList = this.Data_S2CTexasCowboyEnterGameResp.mData.cowboyAreaInfoList;
        let index = areaInfoList.findIndex((_item) => _item.cowboyAreaType === _areaType);
        if(index < 0)
        {
            return null;
        }

        return areaInfoList[index];
    }

    public GetAreaHistoryByAreaType(_areaType : CowboyAreaType) : CowboyHistory
    {
        let historyList = this.Data_S2CTexasCowboyEnterGameResp.mData.history;
        let index = historyList.findIndex((_item) => _item.cowboyAreaType === _areaType);
        if(index < 0)
        {
            return null;
        }

        return historyList[index];
    }

    public GetSelfBetInfoByAreaTpye(_areaType : CowboyAreaType) : CowboySingleBet
    {
        let myBetList = this.Data_S2CTexasCowboyEnterGameResp.mData.myBetInfo;
        let index = myBetList.findIndex((_item) => _item.betArea === _areaType);
        if(index < 0)
        {
            return null;
        }

        return myBetList[index];
    }
}

