import { _decorator, Component, Node, PageView, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import { BaseButton } from '../common/BaseButton';
import { HallData, Mtt_MatchStatus } from '../hall/HallData';
import { Mtt_MatchItem } from './Mtt_MatchItem';



const { ccclass, property } = _decorator;

@ccclass('Mtt_Main')
export class Mtt_Main extends BaseUI 
{
    @property(Node) 
    mTop: Node = null;
    @property(BaseButton) 
    mRankBtn: BaseButton = null;
    @property(BaseButton) 
    mTicketBtn: BaseButton = null;
    @property(BaseButton) 
    mSearchBtn: BaseButton = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mRankBtn.SetClickCallback(()=>
        {
            this.ShowLayer("mttPage","prefab/Mtt_RankPage");
        });
        this.mTicketBtn.SetClickCallback(()=>
        {

        });
        this.mSearchBtn.SetClickCallback(()=>
        {

        });
        this.AddSubView("hall","prefab/Hall_LunBo",true,null,this.mTop);
    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_MttList",(_current , _before)=>
        {
            this.DestoryMatchItems();
            for(let i = 0; i < _current.length; i++) 
            {
                this.LoadPrefab("mttPage","prefab/Mtt_MatchItem",(_prefab)=>
                {
                    let currentData = _current[i];
                    let mttItem = instantiate(_prefab);
                    this.mScrollView.content.addChild(mttItem);
                    let script = mttItem.getComponent(Mtt_MatchItem);
                    script.InitWithData(currentData);
                });
            }
        },this);

        HallData.GetInstance().AddListener("Data_CurrentMttMatchID",(_current , _before)=>
        {
            this.ShowLayer("mttPage","prefab/Mtt_DetailPage");
        },this);

        HallData.GetInstance().AddListener("Data_MttMatchDetails",(_current , _before)=>
        {
            if(Mtt_MatchStatus.Rest == _current.statusInfo.status)
            {
                this.ShowLayer("mttPage","prefab/Mtt_DetailPage",false);
                Network.GetInstance().SendGetMttList();
            }
        },this);

        HallData.GetInstance().AddListener("Data_MttDismiss",(_current , _before)=>
        {
            Network.GetInstance().SendGetMttList();
        },this);

        HallData.GetInstance().AddListener("Data_MttReadyNotify",(_current , _before)=>
        {
            //跳转到游戏中
        },this);
        
    }
    LateInit() 
    {
        Network.GetInstance().SendGetMttList();
    }
    UnregDataNotify() 
    {
        HallData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {
        
    }
    DestoryMatchItems()
    {
        let startStep = 2;
        while(this.mScrollView.content.children.length > startStep)   
        {
            this.mScrollView.content.children[startStep].destroy();
        }
    }

}

