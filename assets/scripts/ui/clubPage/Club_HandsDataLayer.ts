import { _decorator, Component, Node, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import ListView from '../../UiTool/ListView';
const { ccclass, property } = _decorator;

@ccclass('Club_HandsDataLayer')
export class Club_HandsDataLayer extends BaseUI 
{
    @property(ListView) 
    mListView: ListView = null;

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
        this.mListView.SetRenderCallback(this.RenderEvent.bind(this));
        this.mListView.SetDragBottom(this.OnDragBottom.bind(this));
        this.mListView.SetDragTop(this.OnDragTop.bind(this));
    }
    RegDataNotify()
    {

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

