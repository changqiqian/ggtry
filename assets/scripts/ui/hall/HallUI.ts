import { _decorator, Component, Node, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Calculator, CardStruct, CardType } from '../../base/Calculator';
import { LocalPlayerData } from '../../base/LocalPlayerData';
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
        LocalPlayerData.GetInstance().TestData();
        this.AddSubView("cowboy","prefab/CowboyUI_X");
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

