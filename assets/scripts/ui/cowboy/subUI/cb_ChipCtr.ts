import { _decorator, Component, Node } from 'cc';
import { BaseData } from '../../../base/BaseData';
import { BaseUI } from '../../../base/BaseUI';

import { ToggleBtn } from '../../common/ToggleBtn';
import { CowboyData } from '../CowboyData';

const { ccclass, property } = _decorator;

@ccclass('cb_ChipCtr')
export class cb_ChipCtr extends BaseUI 
{
    InitParam() {

    }
    BindUI() {

    }
    RegDataNotify() 
    {
    }
    LateInit() {

    }

    CustmoerDestory() 
    {

    }

    public InitWithData()
    {
        CowboyData.Instance.Data_SelectedChip.mData = 1;
        this.SetChipData(CowboyData.Instance.Data_SelectedChip , 1 , 0);
        this.SetChipData(CowboyData.Instance.Data_SelectedChip , 10 , 1);
        this.SetChipData(CowboyData.Instance.Data_SelectedChip , 100 , 2);
        this.SetChipData(CowboyData.Instance.Data_SelectedChip , 1000 , 3);
        this.SetChipData(CowboyData.Instance.Data_SelectedChip , 5000 , 4);
    }

    SetChipData(_baseData : BaseData<number> , _custmoerData : number , _index : number)
    {
        let currentChild = this.node.children[_index].getComponent(ToggleBtn);
        currentChild.SetDataNotify(_baseData,_custmoerData);
        currentChild.SetTitle(this.ConvertNumber(_custmoerData));
    }

    ConvertNumber(_amount : number) : string
    {
        if(_amount < 1000)
        {
            return _amount.toString();
        }

        let tempAmount = _amount/1000;
        let tempStr = tempAmount.toString() + "k";
        return tempStr;
    }



}

