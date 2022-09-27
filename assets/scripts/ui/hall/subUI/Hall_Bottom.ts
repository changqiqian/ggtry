import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
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
            current.SetDataNotify(HallData.GetInstance().Data_SubPage, i);
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


