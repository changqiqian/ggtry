import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { BaseButton } from '../../common/BaseButton';
import { ToggleBtn } from '../../common/ToggleBtn';
import { HallData, Hall_RankSubPage } from '../HallData';
const { ccclass, property } = _decorator;

@ccclass('Hall_RankPage')
export class Hall_RankPage extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(Node) 
    mLayout: Node = null;
    @property(Node) 
    mSubLayer: Node = null;
    
    onEnable()
    {
        this.scheduleOnce(()=>
        {
            HallData.GetInstance().Data_HallRankSubPage = Hall_RankSubPage.Season;
        },0);
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

        for(let i = 0 ; i < this.mLayout.children.length ; i++)
        {
            let current =  this.mLayout.children[i].getComponent(ToggleBtn);
            let title = "";
            switch(i)
            {
                case Hall_RankSubPage.Season:
                    title = Localization.GetString("00025")
                    break;
                case Hall_RankSubPage.Month:
                    title = Localization.GetString("00026")
                    break;
                case Hall_RankSubPage.Week:
                    title = Localization.GetString("00027")
                    break;
                case Hall_RankSubPage.All:
                    title = Localization.GetString("00028")
                    break;
            }
            current.SetTitle(title);
            current.SetDataNotify(HallData.GetInstance(),"Data_HallRankSubPage",i);
        }

        this.AddSubView("hall","prefab/Hall_SeasonRankPage",false , null , this.mSubLayer);

    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }
}

