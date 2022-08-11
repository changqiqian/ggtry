import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Cash_Main')
export class Cash_Main extends BaseUI 
{
    @property(Node) 
    mTop: Node = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.AddSubView("hall","prefab/Hall_LunBo",true,null,this.mTop);
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

