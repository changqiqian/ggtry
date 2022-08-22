import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import { Network } from '../../network/Network';
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
        this.mScrollView.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.OnDragBottom, this);
    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_MttInfoSubPage",(_current , _before)=>
        {
            this.Show(_current == Mtt_InfoSubPage.TablePage);
            if(_current == Mtt_InfoSubPage.TablePage)
            {
                this.ResetPage();
                this.Refresh();
            }
        },this);


        HallData.GetInstance().AddListener("Data_MttTableList",(_current , _before)=>
        {
            this.mCurrentPage = _current.Index;
            this.mTotalData = _current.total;

            if(_current.tablesInfo == null)
            {
                return;
            }
            
            for(let i = 0 ; i < _current.tablesInfo.length ; i++)
            {
                let currentData =  _current.tablesInfo[i];
                let index = this.mCurrentUserData.findIndex((_item) => _item.tableId === currentData.tableId);
                if(index < 0) //去重
                {
                    this.mCurrentUserData.push(currentData);
                    this.LoadPrefab("mttPage","prefab/Mtt_TableInfoItem",(_prefab)=>
                    {
                        let tableItem = instantiate(_prefab);
                        this.mScrollView.content.addChild(tableItem);
                        let script = tableItem.getComponent(Mtt_TableInfoItem);
                        script.InitWithData(currentData.tableId , currentData.userCount , currentData.maxScore,
                            currentData.minScore , currentData.averageScore);
                    });
                }
            }
        },this);
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        HallData.GetInstance().RemoveListenerByTarget(this);
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
        Network.GetInstance().SendGetMttTableInfo(900, HallData.GetInstance().Data_CurrentMttMatchID, 
        this.mCurrentPage , this.mPageCount);
    }

    ResetPage()
    {
        this.mTotalData = 0;
        this.mCurrentPage = 0;
        this.mCurrentUserData = new Array<any>();
        this.mScrollView.content.destroyAllChildren();
    }
}

