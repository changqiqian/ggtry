import { _decorator, Component, Node, ScrollView, instantiate, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import ListView from '../../UiTool/ListView';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { HallData, Mtt_RankSubPage } from '../hall/HallData';
import { Mtt_RankItem } from './Mtt_RankItem';
const { ccclass, property } = _decorator;

@ccclass('Mtt_AllRankPage')
export class Mtt_AllRankPage extends ListViewCtr<any> 
{
    @property(Label) 
    mTime: Label = null;
    @property(Node) 
    mNoData: Node = null;


    BindUI() 
    {
        this.node.active = false;
        this.mNoData.active = false;
    }
    RegDataNotify() 
    {
        HallData.Instance.Data_MttRankSubPage.AddListenner(this , (_data)=>
        {
            this.Show(_data == Mtt_RankSubPage.All);
        })
    }


    Refresh()
    {

    }

    RenderEvent(_item: Node , _index: number)
    {

    }
}

