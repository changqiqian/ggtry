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

    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_LunBoTu",(_current , _before)=>
        {
            for(let i = 0 ; i < _current.adverts.length ; i++)
            {
                this.LoadPrefab("hall","prefab/Hall_LunBoItem",(_prefab)=>
                {
                    let currentLunBoData = _current.adverts[i];
                    let url = currentLunBoData.url;
                    let picUrl = currentLunBoData.thumb;
                    let tempNode =  instantiate(_prefab);
                    tempNode.getComponent(Hall_LunBoItem).InitWithData(url,picUrl);
                    this.mPageView.addPage(tempNode);
                });
            }
        },this);
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

}

