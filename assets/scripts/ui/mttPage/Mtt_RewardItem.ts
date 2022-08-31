import { _decorator, Component, Node, instantiate, UITransform, Size } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LadderRank } from '../common/LadderRank';
import { Mtt_RegisterFee } from './Mtt_RegisterFee';
import { Mtt_SingleReward } from './Mtt_SingleReward';
const { ccclass, property } = _decorator;

@ccclass('Mtt_RewardItem')
export class Mtt_RewardItem extends BaseUI 
{

    @property(LadderRank) 
    mLadderRank: LadderRank = null;
    @property(Node) 
    mLayout: Node = null;
    InitParam() 
    {

    }
    BindUI() 
    {

    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    public InitWithData(_data : any)
    {
        this.mLadderRank.ShowRank(_data.ranking);
        for(let i = 0 ; i < _data.reward.length ; i++)
        {
            this.LoadPrefab("mttPage","prefab/Mtt_SingleReward",(_prefab)=>
            {
                let currentSingleReward = _data.reward[i];
                let singleRewardItem = instantiate(_prefab);
                this.mLayout.addChild(singleRewardItem);
                let script = singleRewardItem.getComponent(Mtt_SingleReward);
                script.InitWithData(currentSingleReward.rewardType , currentSingleReward.describe , currentSingleReward.rewardCount);
                this.UpdateContentSize();
            });
        }
    }

    public UpdateContentSize()
    {
        let height = this.mLayout.getComponent(UITransform).contentSize.height;
        let nodeTransform = this.node.getComponent(UITransform);
        nodeTransform.setContentSize(new Size(nodeTransform.width , height));
    }
}

