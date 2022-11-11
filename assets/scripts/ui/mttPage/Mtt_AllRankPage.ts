import { _decorator, Component, Node, ScrollView, instantiate, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import ListView from '../../UiTool/ListView';
import { HallData, Mtt_RankSubPage } from '../hall/HallData';
import { Mtt_RankItem } from './Mtt_RankItem';
const { ccclass, property } = _decorator;

@ccclass('Mtt_AllRankPage')
export class Mtt_AllRankPage extends BaseUI 
{
    @property(Label) 
    mTime: Label = null;
    @property(ListView) 
    mListView: ListView = null;
    @property(Node) 
    mNoData: Node = null;

    mCurrentPage :number = 1;
    mPageSize : number = 20;
    mIsLastPage : boolean = false;
    mCurrentData : Array<ClubMember>;
    onEnable()
    {
        this.OnDragTop();
    }
    InitParam() 
    {

    }
    BindUI() 
    {
        this.node.active = false;
        this.mNoData.active = false;
        this.mListView.SetRenderCallback(this.RenderEvent.bind(this));
        this.mListView.SetDragBottom(this.OnDragBottom.bind(this));
        this.mListView.SetDragTop(this.OnDragTop.bind(this));    
    }
    RegDataNotify() 
    {
        HallData.Instance.Data_MttRankSubPage.AddListenner(this , (_data)=>
        {
            this.Show(_data == Mtt_RankSubPage.All);
        })
    }
    LateInit() 
    {

    }

    CustmoerDestory()
    {
        this.mCurrentData = null;
    }

    Refresh()
    {

    }

    OnDragBottom() 
    {
        if(this.mIsLastPage)
        {
            return;
        }
        this.Refresh();
    }

    OnDragTop() 
    {
        this.ResetPage();
        this.Refresh();
    }

    ResetPage()
    {
        this.mIsLastPage = false;
        this.mCurrentData = new Array<ClubMember>();
        this.mCurrentPage = 1;
        this.mListView.numItems = 0;
    }

    RenderEvent(_item: Node , _index: number)
    {

    }
}

