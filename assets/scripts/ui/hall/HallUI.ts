import { _decorator, Component, Node, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Calculator, CardStruct, CardType } from '../../base/Calculator';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { Poker } from '../common/Poker';
const { ccclass, property } = _decorator;

@ccclass('HallUI')
export class HallUI extends BaseUI 
{
    public static GetUsingBundleFolder() : Array<string>
    {
        return ["hall","cowboy"];
    }
    

    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.AddSubView("hall","prefab/Hall_Bottom",true);
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

