import { _decorator, Component, Node, Sprite, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import { Network } from '../../network/Network';
import ListView from '../../UiTool/ListView';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { BaseButton } from '../common/BaseButton';
import { HallData, Mtt_RankSubPage } from '../hall/HallData';
import { Mtt_RankItem } from './Mtt_RankItem';
const { ccclass, property } = _decorator;

@ccclass('Mtt_SeasonRankPage')
export class Mtt_SeasonRankPage extends ListViewCtr<any> 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Node) 
    mDetails: Node = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mID: Label = null;
    @property(Label) 
    mPower: Label = null;
    @property(Node) 
    mNoData: Node = null;

    BindUI() 
    {
        this.node.active = false;
        this.mNoData.active = false;
    }
    RegDataNotify() 
    {
        HallData.Instance.Data_MttRankSubPage.AddListenner(this,(_data)=>
        {
            this.Show(_data == Mtt_RankSubPage.Season);
        })

    }

    Refresh()
    {

    }

    RenderEvent(_item: Node , _index: number)
    {

    }

}

