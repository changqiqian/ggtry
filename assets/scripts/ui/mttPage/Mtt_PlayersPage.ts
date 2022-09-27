import { _decorator, Component, Node, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
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
    @property(ScrollView) 
    mScrollView: ScrollView = null;

    mCurrentPage : number = 0;
    mPageCount : number = 15;
    mTotalData : number = 0;
    mCurrentUserData : Array<any>;
    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.node.active = false;
        this.mScrollView.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.OnDragBottom, this);
    }
    RegDataNotify() 
    {

        HallData.GetInstance().Data_MttInfoSubPage.AddListenner(this , (_data)=>
        {
            this.Show(_data == Mtt_InfoSubPage.PlayerPage);
            if(_data == Mtt_InfoSubPage.PlayerPage)
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

    OnDragBottom() 
    {
        let currentDataCount = this.mCurrentPage * this.mPageCount;
        if(currentDataCount >= this.mTotalData)
        {
            return;
        }
        this.Refresh();
    }

    Refresh()
    {

    }

    ResetPage()
    {
        this.mTotalData = 0;
        this.mCurrentUserData = new Array<any>();
        this.mCurrentPage = 0;
        this.mScrollView.content.destroyAllChildren();
    }
}

