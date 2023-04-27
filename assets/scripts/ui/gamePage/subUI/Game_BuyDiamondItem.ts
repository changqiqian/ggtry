import { _decorator, Component, Label, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { ToggleBtn } from '../../common/ToggleBtn';
import { BaseData } from '../../../base/BaseData';
import { DiamondData } from './Game_BuyDiamond';
import { Tool } from '../../../Tool';
const { ccclass, property } = _decorator;

@ccclass('Game_BuyDiamondItem')
export class Game_BuyDiamondItem extends BaseUI 
{
    @property(ToggleBtn) 
    mToggleBtn: ToggleBtn = null;
    @property(Label) 
    mPrice: Label = null;
    @property(Node) 
    mDiscountBG: Node = null;
    @property(Label) 
    mDiscount: Label = null;
    InitParam()
    {

    }
    BindUI()
    {

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

    public InitWithData(_index : number , _dataNotify : BaseData<number> , _diamondData : DiamondData)
    {
        this.mToggleBtn.SetDataNotify(_dataNotify , _index);
        this.mPrice.string = Tool.ConvertMoneyTo_K(_diamondData.mPrice)
        this.mToggleBtn.SetTitle(Tool.ConvertMoneyTo_K(_diamondData.mDiamondAmount));
        if(_diamondData.mDiscount == 0)
        {
            this.mDiscountBG.active = false;
        }
        else
        {
            this.mDiscountBG.active = true;
            this.mDiscount.string = _diamondData.mDiscount*100 + "%";
        }

    }
}

