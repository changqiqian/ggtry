import { _decorator, Component, Node, Sprite, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import { Network } from '../../network/Network';
import { BaseButton } from '../common/BaseButton';
import { HallData, Mtt_RankSubPage } from '../hall/HallData';
import { Mtt_RankItem } from './Mtt_RankItem';
const { ccclass, property } = _decorator;

@ccclass('Mtt_SeasonRankPage')
export class Mtt_SeasonRankPage extends BaseUI 
{
    @property(BaseButton) 
    mRomoteSprBtn: BaseButton = null;
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
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    @property(Node) 
    mNoData: Node = null;

    mCurrentPage :number = 0;
    mPageCount : number = 20;
    mIsLastPage : boolean = false;
    mCurrentData : Array<any>;

    InitParam() 
    {

    }
    BindUI() 
    {
        this.node.active = false;
        this.mNoData.active = false;
        this.mScrollView.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.OnDragBottom, this);

        this.mRomoteSprBtn.SetClickCallback(()=>
        {

        });
    }
    RegDataNotify() 
    {


        HallData.Instance.Data_MttRankSubPage.AddListenner(this,(_data)=>
        {
            this.Show(_data == Mtt_RankSubPage.Season);
            if(_data == Mtt_RankSubPage.Season)
            {
                this.ResetPage();
                this.Refresh();
            }
        })

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }
    Refresh()
    {
        this.mCurrentPage++;
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
        this.mCurrentData = new Array<any>();
        this.mCurrentPage = 0;
        this.mScrollView.content.destroyAllChildren();
    }

}

