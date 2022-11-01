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
    mLayout: Node = null;

    InitParam() 
    {

    }
    BindUI() 
    {
        for(let i = 0 ; i < this.mLayout.children.length ; i++)
        {
            let current = this.mLayout.children[i].getComponent(ToggleBtn);
            current.SetDataNotify(HallData.Instance.Data_SubPage, i);
            if(i == Hall_SubPage.MTT)
            {
                current.SetTitle(Localization.GetString("00146"));
            }
            else if(i == Hall_SubPage.Cash)
            {
                current.SetTitle(Localization.GetString("00147"));
            }
            else if(i == Hall_SubPage.Club)
            {
                current.SetTitle(Localization.GetString("00148"));
            }
            else if(i == Hall_SubPage.Activity)
            {
                current.SetTitle(Localization.GetString("00149"));
            }
            else if(i == Hall_SubPage.Me)
            {
                current.SetTitle(Localization.GetString("00150"));
            }
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


