import { _decorator, Component, Node } from 'cc';
import { DataNotify } from '../../base/DataNotify';
const { ccclass, property } = _decorator;

@ccclass('CowboyData')
export class CowboyData extends DataNotify {
    public static Instance:CowboyData = null;

    public static GetInstance() : CowboyData
    {
        if(CowboyData.Instance == null)
        {
            CowboyData.Instance = new CowboyData();
            CowboyData.Instance.CreateNotify();
        }

        return CowboyData.Instance;
    }

    Data_SelectedChip : number = null; //本地玩家选中的下注筹码

}

