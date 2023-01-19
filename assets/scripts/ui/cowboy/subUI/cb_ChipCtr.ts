import { _decorator, Component, Node } from 'cc';
import { BaseData } from '../../../base/BaseData';
import { BaseUI } from '../../../base/BaseUI';
import { Tool } from '../../../Tool';

import { ToggleBtn } from '../../common/ToggleBtn';
import { CowboyData } from '../CowboyData';

const { ccclass, property } = _decorator;

@ccclass('cb_ChipCtr')
export class cb_ChipCtr extends BaseUI 
{

    mLastTimeChosenAmount : number;
    InitParam() 
    {

    }

    BindUI() 
    {

    }

    RegDataNotify() 
    {
        CowboyData.Instance.Data_Money.AddListenner(this,(_data)=>
        {
            this.CalculateAviliableChip();
        });

        CowboyData.Instance.Data_SelectedChip.AddListenner(this,(_data)=>
        {
        })

        CowboyData.Instance.Data_S2CTexasCowboyEnterGameResp.AddListenner(this,(_data)=>
        {
            this.CalculateAviliableChip(); 
        });

        CowboyData.Instance.Data_S2CTexasCowboyGameStartNotify.AddListenner(this,(_data)=>
        {
            this.CalculateAviliableChip(); 
        })

        CowboyData.Instance.Data_S2CTexasCowboyGameSettlementNotify.AddListenner(this,(_data)=>
        {
            this.CalculateAviliableChip(); 
        });
    }

    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    public InitWithData()
    {
        this.mLastTimeChosenAmount = CowboyData.Instance.ChipAmountConfig[0];
        CowboyData.Instance.Data_SelectedChip.mData = this.mLastTimeChosenAmount;
        for(let i = 0 ; i < CowboyData.Instance.ChipAmountConfig.length ; i++)
        {
            let currentAmount = CowboyData.Instance.ChipAmountConfig[i];
            this.SetChipData(CowboyData.Instance.Data_SelectedChip , currentAmount , i);
        }
    }

    SetChipData(_baseData : BaseData<number> , _custmoerData : number , _index : number)
    {
        let currentChild = this.node.children[_index].getComponent(ToggleBtn);
        currentChild.SetDataNotify(_baseData,_custmoerData);
        currentChild.SetTitle(this.ConvertNumberToK(_custmoerData));
    }

    ConvertNumberToK(_amount : number) : string
    {
        if(_amount < 1000)
        {
            return _amount.toString();
        }

        let tempAmount = _amount/1000;
        let tempStr = tempAmount.toString() + "k";
        return tempStr;
    }

    CalculateAviliableChip()
    {
        if(CowboyData.Instance.GetPhase() == CowboyPhase.CowBoyPhase_Settlement)
        {
            this.DisableAllChip();
            return;
        }

        let minAviliableAmount = this.GetMinAviliableAmount();
        for(let i = CowboyData.Instance.ChipAmountConfig.length - 1 ; i >= 0 ; i--)
        {
            let currentAmount = CowboyData.Instance.ChipAmountConfig[i];
            this.DisableChip(i , currentAmount > minAviliableAmount);
        }

        if(this.mLastTimeChosenAmount > minAviliableAmount)
        {
            CowboyData.Instance.Data_SelectedChip.mData =  minAviliableAmount;
        }
        else
        {
            CowboyData.Instance.Data_SelectedChip.mData  = this.mLastTimeChosenAmount;
        }
    }

    GetMinAviliableAmount() : number
    {
        let totalMoney = Tool.ConvertMoney_S2C(CowboyData.Instance.Data_Money.mData);
        let minAviliableAmount = 0;

        for(let i = CowboyData.Instance.ChipAmountConfig.length - 1 ; i >= 0 ; i--)
        {
            let currentAmount = CowboyData.Instance.ChipAmountConfig[i];
            if(totalMoney >= currentAmount)
            {
                minAviliableAmount = currentAmount;
                break;
            }
        }

        return minAviliableAmount;

    }

    DisableAllChip()
    {
        this.mLastTimeChosenAmount = CowboyData.Instance.Data_SelectedChip.mData;
        CowboyData.Instance.Data_SelectedChip.mData = 0;
        for(let i = CowboyData.Instance.ChipAmountConfig.length - 1 ; i >= 0 ; i--)
        {
            this.DisableChip(i , true);
        }
    }

    DisableChip(_index : number , _forbidden : boolean )
    {
        let currentChild = this.node.children[_index].getComponent(ToggleBtn);
        currentChild.SetForbidden(_forbidden);
    }
}

