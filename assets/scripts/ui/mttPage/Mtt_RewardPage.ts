import { _decorator, Component, Node, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { Network } from '../../network/Network';
import ListView from '../../UiTool/ListView';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { HallData, Mtt_InfoSubPage } from '../hall/HallData';
import { Mtt_RewardItem } from './Mtt_RewardItem';
const { ccclass, property } = _decorator;

@ccclass('Mtt_RewardPage')
export class Mtt_RewardPage extends ListViewCtr<any> 
{
    @property(Label) 
    mTotalReward: Label = null;
    @property(Label) 
    mRewardTips: Label = null;
    @property(Label) 
    mRewardCircle: Label = null;

    BindUI() 
    {
        this.node.active = false;
    }
    RegDataNotify() 
    {
        HallData.Instance.Data_MttInfoSubPage.AddListenner(this , (_data)=>
        {
            this.Show(_data == Mtt_InfoSubPage.RewardPage);
        })
    }

    Refresh()
    {

    }

    RenderEvent(_item: Node , _index: number)
    {

    }

}

