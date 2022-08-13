import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { BaseButton } from '../common/BaseButton';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData, Mtt_InfoSubPage } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Mtt_DetailPage')
export class Mtt_DetailPage extends BaseUI 
{
    @property(Sprite) 
    mBG: Sprite = null;
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Label) 
    mMatchName: Label = null;
    @property(Node) 
    mGiftTag: Node = null;
    @property(Label) 
    mGiftDescribe: Label = null;
    @property(Node) 
    mToggleGroup: Node = null;
    @property(Node) 
    mSubLayer: Node = null;


    InitParam() 
    {

    }
    BindUI() 
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.Show(false);
        });


        for(let i = 0 ; i < this.mToggleGroup.children.length ; i++)
        {
            let current =  this.mToggleGroup.children[i].getComponent(ToggleBtn);
            let title = "";
            switch(i)
            {
                case Mtt_InfoSubPage.InfoPage:
                    title = Localization.GetString("00025")
                    break;
                case Mtt_InfoSubPage.PlayerPage:
                    title = Localization.GetString("00026")
                    break;
                case Mtt_InfoSubPage.PrizePage:
                    title = Localization.GetString("00027")
                    break;
                case Mtt_InfoSubPage.TablePage:
                    title = Localization.GetString("00028")
                    break;
            }
            current.SetTitle(title);
            current.SetDataNotify(HallData.GetInstance(),"Data_MttInfoSubPage",i);
        }

        this.AddSubView("mttPage","prefab/Mtt_InfoPage",false , null , this.mSubLayer);
    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_MttMatchDetails",(_current , _before)=>
        {
            this.LoadRemoteSprite(_current.matchConfig.strapConfig.backgroundImg,(_spriteFrame)=>
            {
                this.mBG.spriteFrame = _spriteFrame;
                this.mMatchName = _current.matchConfig.matchName;

                if(_current.matchConfig.strapConfig.rewardDesc.length>=0)
                {
                    this.mGiftTag.active = true;
                    this.mGiftDescribe.string = _current.matchConfig.strapConfig.rewardDesc;
                }
                else
                {
                    this.mGiftTag.active = false;
                }
            });

        },this);
    }
    LateInit() 
    {
        HallData.GetInstance().Data_MttInfoSubPage = Mtt_InfoSubPage.InfoPage;
    }
    UnregDataNotify() 
    {
        HallData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {
    }

}

