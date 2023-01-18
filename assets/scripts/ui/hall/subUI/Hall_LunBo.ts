import { _decorator, Component, Node, PageView, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { HallData } from '../HallData';
import { Hall_LunBoItem } from './Hall_LunBoItem';
const { ccclass, property } = _decorator;

@ccclass('Hall_LunBo')
export class Hall_LunBo extends BaseUI 
{
    @property(PageView) 
    mPageView: PageView = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        for(let i = 0 ; i < 3 ; i++)
        {
            this.LoadPrefab("hall","prefab/Hall_LunBoItem",(_prefab)=>
            {
                let url = "";
                let picUrl = "";
                let tempNode =  instantiate(_prefab);
                tempNode.getComponent(Hall_LunBoItem).InitWithData(url,picUrl);
                this.mPageView.addPage(tempNode);
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

