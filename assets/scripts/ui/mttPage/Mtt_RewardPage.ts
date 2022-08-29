import { _decorator, Component, Node, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { Network } from '../../network/Network';
import { HallData, Mtt_InfoSubPage } from '../hall/HallData';
import { Mtt_RewardItem } from './Mtt_RewardItem';
const { ccclass, property } = _decorator;

@ccclass('Mtt_RewardPage')
export class Mtt_RewardPage extends BaseUI 
{
    @property(Label) 
    mTotalReward: Label = null;
    @property(Label) 
    mRewardTips: Label = null;
    @property(Label) 
    mRewardCircle: Label = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    
    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.node.active = false;
    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_MttInfoSubPage",(_current , _before)=>
        {
            this.Show(_current == Mtt_InfoSubPage.RewardPage);
        },this);


        HallData.GetInstance().AddListener("Data_MttMatchDetails",(_current , _before)=>
        {
            this.mScrollView.content.destroyAllChildren();
            let rewardTips = _current.rewardConfig.rewardDescribe;
            if(rewardTips != null && rewardTips != "")
            {
                this.mRewardTips.string = rewardTips;
            }
            

            this.mRewardCircle.string = Localization.GetString("00039") + ":" + _current.dynamicReward.dynamicPercent+"%";;

            for(let i = 0 ; i < _current.rewardConfig.rewards.length ; i++)
            {
                this.LoadPrefab("mttPage","prefab/Mtt_RewardItem",(_prefab)=>
                {
                    let currentReward = _current.rewardConfig.rewards[i];
                    let rewardItem = instantiate(_prefab);
                    this.mScrollView.content.addChild(rewardItem);
                    let script = rewardItem.getComponent(Mtt_RewardItem);
                    script.InitWithData(currentReward);
                });
            }
        },this);
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        HallData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }

}

