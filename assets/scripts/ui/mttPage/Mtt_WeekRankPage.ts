import { _decorator, Component, Node, Sprite, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import { HallData, Mtt_RankSubPage } from '../hall/HallData';
import { Mtt_RankItem } from './Mtt_RankItem';
const { ccclass, property } = _decorator;

@ccclass('Mtt_WeekRankPage')
export class Mtt_WeekRankPage extends BaseUI 
{
    @property(Label) 
    mTime: Label = null;
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
        this.mNoData.active = false;
        this.mScrollView.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.OnDragBottom, this);
    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_MttRankSubPage",(_current , _before)=>
        {
            this.Show(_current == Mtt_RankSubPage.Week);
            if(_current == Mtt_RankSubPage.Week)
            {
                this.ResetPage();
                this.Refresh();
            }
        },this);

        HallData.GetInstance().AddListener("Data_MttRankData",(_current , _before)=>
        {
            if(this.node.active == false)
            {
                return;
            }

            this.mNoData.active = false;
            if(_current.code == 2)
            {
                this.mNoData.active = true;
                return;
            }

            if(_current.code != 0) 
            {
                return
            }

            if(_current.rankingConfig == null) 
            {
                return 
            }

            if(_current.rankingConfig.mode != Mtt_RankSubPage.Week) 
            {
                return 
            }

            this.mTime.string = _current.rankingConfig.title;
            let championInfo = _current.rankingConfig.lastTop;
            let haveChampion = championInfo.userId != "";
            this.mDetails.active = haveChampion;
            if(haveChampion)
            {
                this.mName.string = championInfo.nickName;
                this.mID.string = championInfo.userId;
                this.mPower.string = championInfo.score;
                this.LoadLocalHead(parseInt(championInfo.photo),(_spriteFrame)=>
                {
                    this.mHead.spriteFrame = _spriteFrame;
                });
            }

            let itemList = _current.rankingList;
            if(!itemList || itemList.length == 0)
            {
                this.mIsLastPage = true;
                return;
            }

            for(let i = 0 ; i <itemList.length ; i++)
            {
                let currentData =  itemList[i];
                let index = this.mCurrentData.findIndex((_item) => _item.userId === currentData.userId);
                if(index < 0) //去重
                {
                    this.mCurrentData.push(currentData);
                    this.LoadPrefab("mttPage","prefab/Mtt_RankItem",(_prefab)=>
                    {
                        let playerItem = instantiate(_prefab);
                        this.mScrollView.content.addChild(playerItem);
                        let script = playerItem.getComponent(Mtt_RankItem);
                        script.InitWithData(currentData);
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
    Refresh()
    {
        this.mCurrentPage++;
        Network.GetInstance().SendGetMttRank(Mtt_RankSubPage.Week,this.mCurrentPage , this.mPageCount);
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

