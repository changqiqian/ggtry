import { _decorator, Component, Node, PageView, instantiate, UITransform } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { Club_MainEnter } from './Club_MainEnter';
const { ccclass, property } = _decorator;

@ccclass('Club_Main')
export class Club_Main extends BaseUI 
{
    @property(BaseButton) 
    mJoinBtn: BaseButton = null;
    @property(BaseButton) 
    mSearchBtn: BaseButton = null;
    @property(PageView) 
    mPageView: PageView = null;
    @property(BaseButton) 
    mLuckyDrawBtn: BaseButton = null;
    @property(BaseButton) 
    mCreateBtn: BaseButton = null;


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
                tempScript.InitWithData(i , (_data)=>
                {
                    this.mPageView.scrollToPage(_data);
                });

                
            });
        }
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

