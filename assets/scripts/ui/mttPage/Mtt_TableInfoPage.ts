import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import { HallData, Mtt_InfoSubPage } from '../hall/HallData';
import { Mtt_TableInfoItem } from './Mtt_TableInfoItem';
const { ccclass, property } = _decorator;

@ccclass('Mtt_TableInfoPage')
export class Mtt_TableInfoPage extends BaseUI 
{
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
        this.mScrollView.node.on(ScrollView.EventType.BOUNCE_BOTTOM, this.OnDragBottom, this);
    }
    RegDataNotify() 
    {

        HallData.Instance.Data_MttInfoSubPage.AddListenner(this,(_data)=>
        {
            this.Show(_data == Mtt_InfoSubPage.TablePage);
            if(_data == Mtt_InfoSubPage.TablePage)
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
        this.mCurrentPage = 0;
        this.mCurrentUserData = new Array<any>();
        this.mScrollView.content.destroyAllChildren();
    }
}

