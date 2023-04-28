import { _decorator, Component, Label, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('GameMoneyInfoUI')
export class GameMoneyInfoUI extends BaseUI 
{
    public static PrefabPath : string = "prefab/GameMoneyInfoUI";
    public static Bunddle : string = "gamePage";

    mWalletAmount : Label = null;
    mMoneyAmount : Label = null;
    mRewardAmount : Label = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mWalletAmount = this.node.getChildByPath("Layout/WalletBG/WalletAmount").getComponent(Label);
        this.mMoneyAmount = this.node.getChildByPath("Layout/MoneyBG/MoneyAmount").getComponent(Label);
        this.mRewardAmount = this.node.getChildByPath("Layout/RewardBG/RewardAmount").getComponent(Label);
    }
    RegDataNotify()
    {
        GameData.Instance.Data_SingleBetIndex.AddListenner(this, (_data)=>
        {
            this.mMoneyAmount.string = GameData.Instance.GetCurrentSingleBetAmount(_data) + "";
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

