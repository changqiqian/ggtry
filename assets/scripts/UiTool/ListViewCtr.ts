import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../base/BaseUI';
import ListView from './ListView';
const { ccclass, property } = _decorator;

@ccclass('ListViewCtr')
export abstract class ListViewCtr<T> extends BaseUI 
{
    @property(ListView) 
    mListView: ListView = null;


    mCurrentPage :number = 1;
    mPageSize : number = 20;
    mIsLastPage : boolean = false;
    mCurrentData : Array<T>;
    onEnable()
    {
        this.OnDragTop();
    }
    
    InitParam()
    {
        this.mListView.SetDragBottom(this.OnDragBottom.bind(this));
        this.mListView.SetDragTop(this.OnDragTop.bind(this));
        this.mListView.SetRenderCallback(this.RenderEvent.bind(this));
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
        this.mCurrentData = null;
    }
    abstract Refresh();
    abstract RenderEvent(_item: Node , _index: number);

    OnDragTop() 
    {
        this.ResetPage();
        this.Refresh();
    }
    OnDragBottom() 
    {
        if(this.mIsLastPage)
        {
            return;
        }
        this.Refresh();
    }

    ResetPage()
    {
        this.mIsLastPage = false;
        this.mCurrentData = new Array<T>();
        this.mCurrentPage = 1;
        this.mListView.numItems = 0;
    }

    public UpdateData(_maxDataLength : number)
    {
        if(this.mCurrentData == null)
        {
            return;
        }
        this.mListView.numItems = this.mCurrentData.length;
        if(this.mCurrentData.length >= _maxDataLength)
        {
            this.mIsLastPage = true;
        }
        else
        {
            this.mIsLastPage = false;
        }
        this.mCurrentPage++;
    }

    public RefreshData()
    {
        this.mListView.numItems = this.mCurrentData.length;
    }

    public InsertOneData(_data :T)
    {
        if(this.mCurrentData == null)
        {
            return;
        }
        this.mCurrentData.push(_data);
    }


}

