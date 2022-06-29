import { _decorator, Component, Node, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('CowboyUI')
export class CowboyUI extends BaseUI 
{
    InitParam() 
    {

    }
    BindUI() 
    {
        this.LoadPrefab("cowboy","prefab/subUI/TopMenu",(_prefab)=>
        {
            let tempNode =  instantiate(_prefab);
            this.node.addChild(tempNode);
        });

        this.LoadPrefab("cowboy","prefab/subUI/cb_BottomArea",(_prefab)=>
        {
            let tempNode =  instantiate(_prefab);
            this.node.addChild(tempNode);
        });
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

