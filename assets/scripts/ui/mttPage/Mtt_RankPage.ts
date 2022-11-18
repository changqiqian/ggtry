import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { BaseButton } from '../common/BaseButton';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData, Mtt_RankSubPage } from '../hall/HallData';

const { ccclass, property } = _decorator;

@ccclass('Mtt_RankPage')
export class Mtt_RankPage extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(Node) 
    mLayout: Node = null;
    @property(Node) 
    mSubLayer: Node = null;

    //个人排名控制
    @property(Node) 
    mBottom: Node = null;
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mRank: Label = null;
    @property(Label) 
    mName: Label = null;
    @property(Node) 
    mWillScoreDescribe: Node = null;
    @property(Label) 
    mWillScore: Label = null;
    @property(Label) 
    mPowerScore: Label = null;

    
    onEnable()
    {
        HallData.Instance.Data_MttRankSubPage.mData = Mtt_RankSubPage.All;
    }

    InitParam() 
    {
    }
    BindUI() 
    {
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false);
        });

        for(let i = this.mLayout.children.length-1 ; i >=0 ; i--)
        {
            let current =  this.mLayout.children[i].getComponent(ToggleBtn);
            let title = "";
            switch(i)
            {
                case Mtt_RankSubPage.Season:
                    title = Localization.GetString("00048")
                    break;
                case Mtt_RankSubPage.Month:
                    title = Localization.GetString("00049")
                    break;
                case Mtt_RankSubPage.Week:
                    title = Localization.GetString("00050")
                    break;
                case Mtt_RankSubPage.All:
                    title = Localization.GetString("00051")
                    break;
            }
            current.SetTitle(title);
            current.SetDataNotify(HallData.Instance.Data_MttRankSubPage,i);
        }

        this.AddSubView("mttPage","prefab/Mtt_SeasonRankPage" , null , this.mSubLayer);
        this.AddSubView("mttPage","prefab/Mtt_MonthRankPage" , null , this.mSubLayer);
        this.AddSubView("mttPage","prefab/Mtt_WeekRankPage" , null , this.mSubLayer);
        this.AddSubView("mttPage","prefab/Mtt_AllRankPage" , null , this.mSubLayer);
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
}

