import { _decorator, Component, Node, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Calculator, CardStruct, CardType } from '../../base/Calculator';
import { Poker } from '../common/Poker';
const { ccclass, property } = _decorator;

@ccclass('HallUI')
export class HallUI extends BaseUI 
{
    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.LoadPrefab("cowboy","prefab/CowboyUI",(_prefab)=>
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

