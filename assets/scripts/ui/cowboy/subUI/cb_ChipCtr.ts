import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { DataNotify } from '../../../base/DataNotify';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
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
        CowboyData.GetInstance().Data_SelectedChip = 1;
        this.SetChipData(CowboyData.GetInstance(),"Data_SelectedChip" , 1 , 0);
        this.SetChipData(CowboyData.GetInstance(),"Data_SelectedChip" , 10 , 1);
        this.SetChipData(CowboyData.GetInstance(),"Data_SelectedChip" , 100 , 2);
        this.SetChipData(CowboyData.GetInstance(),"Data_SelectedChip" , 1000 , 3);
        this.SetChipData(CowboyData.GetInstance(),"Data_SelectedChip" , 5000 , 4);
    }

    SetChipData(_dataNotify : DataNotify , _param : string , _custmoerData : number , _index : number)
    {
        let currentChild = this.node.children[_index].getComponent(ToggleBtn);
        currentChild.SetDataNotify(_dataNotify,_param,_custmoerData);
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

