import { _decorator, Component, Node, PageView, instantiate, UITransform } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { BaseButton } from '../common/BaseButton';
import { Club_MainEnter } from './Club_MainEnter';
const { ccclass, property } = _decorator;

@ccclass('Club_Main')
export class Club_Main extends BaseUI 
{
    @property(BaseButton) 
    mCreateBtn: BaseButton = null;
    @property(BaseButton) 
    mSearchBtn: BaseButton = null;
    @property(PageView) 
    mPageView: PageView = null;
    @property(BaseButton) 
    mLuckyDrawBtn: BaseButton = null;



    InitParam() 
    {

    }
    BindUI() 
    {
        for(let i = 0 ; i < 5 ; i++)
        {
            this.LoadPrefab("clubPage" , "prefab/Club_MainEnter" , (_prefab)=>
            {
                let tempNode = instantiate(_prefab);
                this.mPageView.addPage(tempNode);
                let tempScript = tempNode.getComponent(Club_MainEnter);
                tempScript.InitWithData(i , (_data , _enter)=>
                {
                    if(_enter)
                    {
                        //enter club 
                    }
                    else
                    {
                        this.mPageView.scrollToPage(_data);
                    }
                    
                });
            });
        }

        this.mCreateBtn.SetClickCallback(()=>
        {
            this.ShowLayer("clubPage","prefab/Club_CreateLayer");
        })
        this.mSearchBtn.SetClickCallback(()=>
        {
            this.ShowLayer("clubPage","prefab/Club_SearchLayer");
        })
    }
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_AccountLevel.AddListenner(this,(_data)=>
        {
            this.mCreateBtn.node.active = !(_data == AccountLevel.AccountLevel_Normal);
        });

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

}

