import { BaseData } from "../../base/BaseData";
import { SingletonBaseNotify } from "../../base/Singleton";



export class GameData extends SingletonBaseNotify<GameData>()
{
    protected ResetInstance() 
    {
        GameData.ClearInstance();
    }
    Data_CurrentRewardRatioIndex : BaseData<number> = new BaseData<number>(); //游戏画面最顶部的基础奖励倍数选项
    Data_FastMode : BaseData<boolean> = new BaseData<boolean>(); //快速模式
    Data_AutoCountLeft : BaseData<number> = new BaseData<number>(); //自动模式剩余次数
    Data_SingleBetIndex : BaseData<number> = new BaseData<number>();//单次下注额选项
    Data_BottomUIEnum : BaseData<BottomUIEnum> = new BaseData<BottomUIEnum>();//底部ui显示哪一个
    Data_BonusMode : BaseData<boolean> = new BaseData<boolean>();//是否是奖励模式
    Data_BonusCount : BaseData<number> = new BaseData<number>(); //奖励模式剩余次数
    Data_CurrentBonusRewardRatioIndex : BaseData<number> = new BaseData<number>(); //奖励模式下当前倍数选项
    public AddSingleBetAmount()
    {
        let totalIndex = GameData.SingleBetConfig.length;
        let currentIndex = this.Data_SingleBetIndex.mData;
        currentIndex++;
        if(currentIndex >= totalIndex)
        {
            currentIndex = 0;
        }
        this.Data_SingleBetIndex.mData = currentIndex;
    }

    public MinusSingleBetAmount()
    {
        let totalIndex = GameData.SingleBetConfig.length;
        let currentIndex = this.Data_SingleBetIndex.mData;
        currentIndex--;
        if(currentIndex < 0)
        {
            currentIndex = totalIndex - 1;
        }
        this.Data_SingleBetIndex.mData = currentIndex;
    }

    public GetCurrentSingleBetAmount(_index : number) : number
    {
        return GameData.SingleBetConfig[_index];
    }

    public GetCurrentRewardRatio() : number
    {
        return GameData.RewardRatioConfig[this.Data_CurrentRewardRatioIndex.mData];
    }
    //游戏最顶部的基础奖励倍数
    public static RewardRatioConfig = [1 , 2 , 3 , 5];
    //单次下注额度配置
    public static SingleBetConfig = [10 , 20 , 30 , 50 , 100 , 500 , 1000];
    //奖励模式的倍数配置
    public static BonusRewardRatioConfig = [2 , 4 , 6 , 10];
}


export enum BottomUIEnum
{
    None,
    PlayingUI ,
    MenuUI ,
    AutoSettingUI,
}