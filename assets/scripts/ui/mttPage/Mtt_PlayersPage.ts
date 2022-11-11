import { _decorator, Component, Node, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import ListView from '../../UiTool/ListView';
import { HallData, Mtt_InfoSubPage } from '../hall/HallData';
import { Mtt_PlayerRankItem } from './Mtt_PlayerRankItem';
const { ccclass, property } = _decorator;

@ccclass('Mtt_PlayersPage')
export class Mtt_PlayersPage extends BaseUI 
{
    @property(Label) 
    mPlayerAmount: Label = null;
    @property(Label) 
    mPrizeLevel: Label = null;
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
        this.node.active = false;
        this.mListView.SetRenderCallback(this.RenderEvent.bind(this));
        this.mListView.SetDragBottom(this.OnDragBottom.bind(this));
        this.mListView.SetDragTop(this.OnDragBottom.bind(this));    
    }
    RegDataNotify() 
    {

        HallData.Instance.Data_MttInfoSubPage.AddListenner(this , (_data)=>
        {
            this.Show(_data == Mtt_InfoSubPage.PlayerPage);
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

