import { _decorator, Component, Node, PageView, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
import { Hall_LunBoItem } from '../hall/subUI/Hall_LunBoItem';



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
        this.AddSubView("hall","prefab/Hall_LunBo",true,null,this.mTop);
    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_MttList",(_current , _before)=>
        {

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

}

