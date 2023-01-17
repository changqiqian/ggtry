import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { ToggleBtn } from '../../common/ToggleBtn';
import { HallData, Hall_SubPage } from '../HallData';
const { ccclass, property } = _decorator;

@ccclass('Hall_Bottom')
export class Hall_Bottom extends BaseUI 
{
    @property(Node) 
    mToggles: Node = null;

    InitParam() 
    {

    }
    BindUI() 
    {
        for(let i = 0 ; i < this.mToggles.children.length ; i++)
        {
            let current = this.mToggles.children[i].getComponent(ToggleBtn);
            current.SetDataNotify(HallData.Instance.Data_SubPage, i);
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


