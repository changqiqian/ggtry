import { _decorator, Component, Node, PageView, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import { BaseButton } from '../common/BaseButton';



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

    onEnable()
    {
        Network.GetInstance().SendGetMttList();
    }

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
            this.ShowLayer("gamePage","prefab/Game_Menu");
        });
        this.AddSubView("hall","prefab/Hall_LunBo",null,this.mTop);
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {
        
    }

    CustmoerDestory() 
    {
        
    }
    DestoryMatchItems()
    {
        let startStep = 2;
        while(this.mScrollView.content.children.length > startStep)   
        {
            let currentNode = this.mScrollView.content.children[startStep];
            currentNode.removeFromParent();
            currentNode.destroy();
        }
    }

}

