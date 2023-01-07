import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
import { ProgressSlider } from '../../common/ProgressSlider';
import { CowboyData } from '../CowboyData';
const { ccclass, property } = _decorator;

@ccclass('cb_BuyOutWindow')
export class cb_BuyOutWindow extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Label) 
    mCurrentAmount: Label = null;
    @property(ProgressSlider) 
    mProgressSlider: ProgressSlider = null;
    @property(Label) 
    mTotalAmount: Label = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;

    onEnable()
    {
        this.mProgressSlider.SetPercent(0);
    }

    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });

        this.mProgressSlider.SetEndCallback((_ratio)=>
        {
            this.UpdateBringOutAmount(_ratio);
        });

        this.mProgressSlider.SetDragCallback((_ratio)=>
        {
            this.UpdateBringOutAmount(_ratio);
        });

        this.mConfirmBtn.SetClickCallback(()=>
        {
            let bringOutMoney = this.CalculateControlMoney(this.mProgressSlider.GetPercent());
            if(bringOutMoney == 0)
            {
                return;
            }

 
        });
    }
    RegDataNotify()
    {
    
        CowboyData.Instance.Data_Money.AddListenner(this,(_data)=>
        {
            this.mTotalAmount.string = Tool.ConvertMoney_S2C(_data) + "";
        });
        
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    CalculateControlMoney(_ratio : number) : number
    {
        let min = 0;
        let max = CowboyData.Instance.Data_Money.mData * _ratio;
        let step = 1;
        let roundMax = Math.floor( max/step);
        max = roundMax * step;
        let currentAmount = min + max;
        return currentAmount;
    }

    UpdateBringOutAmount(_ratio : number)
    {
        let amount = this.CalculateControlMoney(_ratio);
        this.mCurrentAmount.string = Tool.ConvertMoney_S2C(amount) + "";
    }
}

