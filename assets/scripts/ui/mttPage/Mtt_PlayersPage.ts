import { _decorator, Component, Node, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import { Network } from '../../network/Network';
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
        this.mScrollView.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.OnDragBottom, this);
    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_MttInfoSubPage",(_current , _before)=>
        {
            this.Show(_current == Mtt_InfoSubPage.PlayerPage);
            if(_current == Mtt_InfoSubPage.PlayerPage)
            {
                UIMgr.GetInstance().ShowLoading(true);
                this.ResetPage();
                Network.GetInstance().SendGetMttPlayerList(900, HallData.GetInstance().Data_CurrentMttMatchID, 
                this.mCurrentPage , this.mPageCount);
            }
        },this);

        HallData.GetInstance().AddListener("Data_MttMatchDetails",(_current , _before)=>
        {
            this.mPlayerAmount.string = _current.statusInfo.totalUser.toString();
            this.mPrizeLevel.string = _current.dynamicReward.dynamicPercent+"%";
        },this);

        HallData.GetInstance().AddListener("Data_MttPlayerList",(_current , _before)=>
        {
            this.mCurrentPage = _current.Index;
            this.mTotalData = _current.total;

            if(_current.users == null)
            {
                return;
            }
            
            for(let i = 0 ; i < _current.users.length ; i++)
            {
                let currentData =  _current.users[i];
                let index = this.mCurrentUserData.findIndex((_item) => _item.userId === currentData.userId);
                if(index < 0) //去重
                {
                    this.mCurrentUserData.push(currentData);
                    this.LoadPrefab("mttPage","prefab/Mtt_PlayerRankItem",(_prefab)=>
                    {
                        let playerItem = instantiate(_prefab);
                        this.mScrollView.content.addChild(playerItem);
                        let script = playerItem.getComponent(Mtt_PlayerRankItem);
                        let bigBlind = HallData.GetInstance().Data_MttMatchDetails.statusInfo.curBlind * 2;
                        script.InitWithData(currentData.userId , currentData.photoUrl , currentData.nickname ,
                            currentData.tableId , currentData.score , bigBlind , i );
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
        Network.GetInstance().SendGetMttPlayerList(900, HallData.GetInstance().Data_CurrentMttMatchID, 
                this.mCurrentPage , this.mPageCount);
    }

    ResetPage()
    {
        this.mTotalData = 0;
        this.mCurrentPage = 0;
        this.mScrollView.content.destroyAllChildren();
    }
}

