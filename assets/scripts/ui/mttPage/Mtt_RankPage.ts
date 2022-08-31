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
        HallData.GetInstance().Data_MttRankSubPage = Mtt_RankSubPage.All;
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
            current.SetDataNotify(HallData.GetInstance(),"Data_MttRankSubPage",i);
        }

        this.AddSubView("mttPage","prefab/Mtt_SeasonRankPage" , null , this.mSubLayer);
        this.AddSubView("mttPage","prefab/Mtt_MonthRankPage" , null , this.mSubLayer);
        this.AddSubView("mttPage","prefab/Mtt_WeekRankPage" , null , this.mSubLayer);
        this.AddSubView("mttPage","prefab/Mtt_AllRankPage" , null , this.mSubLayer);
    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_MttRankData",(_current , _before)=>
        {

            if(_current.rankingConfig == null) 
            {
                this.mBottom.active = false;
                return 
            }
            let rewardUrl = _current.rankingConfig.rewardImg
            if(rewardUrl && rewardUrl != '') 
            {
                //rewardUrl
            }



            if(_current.mine == null || _current.mine.userId == '')
            {
                this.mBottom.active = false;
                return;
            } 
            this.mBottom.active = true;
            this.LoadLocalHead(parseInt(_current.mine.photo),(_spriteFrame)=>
            {
                this.mHead.spriteFrame = _spriteFrame;
            });
            
            let lastPlayerScore = 0;
            if(_current.rankingList && _current.rankingList.length > 0) 
            {
                lastPlayerScore = _current.rankingList[_current.rankingList.length - 1].score;
            }
            let willScore = lastPlayerScore - _current.mine.score;
            this.mWillScoreDescribe.active = willScore > 0;
            if(willScore > 0)
            {
                this.mWillScore.string = willScore + "";
            }
            else
            {
                this.mWillScore.string = "--";
            }

            this.mName.string = _current.mine.nickName;
            this.mPowerScore.string = _current.mine.score;
            if(_current.mine.rankingId == 0)
            {
                this.mRank.string = "--";
            }
            else
            {
                this.mRank.string = _current.mine.rankingId + "";
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
}

