import { _decorator, Component, Node, Sprite, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import ListView from '../../UiTool/ListView';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { HallData, Mtt_RankSubPage } from '../hall/HallData';
import { Mtt_RankItem } from './Mtt_RankItem';
const { ccclass, property } = _decorator;

@ccclass('Mtt_WeekRankPage')
export class Mtt_WeekRankPage extends ListViewCtr<any> 
{
    @property(Label) 
    mTime: Label = null;
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
            this.Show(_data == Mtt_RankSubPage.Week);
        })
    }

    Refresh()
    {

    }

    RenderEvent(_item: Node , _index: number)
    {

    }
}

