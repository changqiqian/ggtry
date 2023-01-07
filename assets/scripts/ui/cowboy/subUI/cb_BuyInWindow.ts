import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { UIMgr } from '../../../base/UIMgr';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
import { ProgressSlider } from '../../common/ProgressSlider';
const { ccclass, property } = _decorator;

@ccclass('cb_BuyInWindow')
export class cb_BuyInWindow extends BaseUI 
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
            this.UpdateBringInAmount(_ratio);
        });

        this.mProgressSlider.SetDragCallback((_ratio)=>
        {
            this.UpdateBringInAmount(_ratio);
        });

        this.mConfirmBtn.SetClickCallback(()=>
        {
            let bringInMoney = this.CalculateControlMoney(this.mProgressSlider.GetPercent());
            if(bringInMoney == 0)
            {
                return;
            }

            if(bringInMoney > LocalPlayerData.Instance.Data_Coin.mData)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00295"));
                return;
            }
        });
    }
    RegDataNotify()
    {
        LocalPlayerData.Instance.Data_Coin.AddListenner(this,(_data)=>
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
        let max = LocalPlayerData.Instance.Data_Coin.mData * _ratio;
        let step = 1;
        let roundMax = Math.floor( max/step);
        max = roundMax * step;
        let currentAmount = min + max;
        return currentAmount;
    }

    UpdateBringInAmount(_ratio : number)
    {
        let amount = this.CalculateControlMoney(_ratio);
        this.mCurrentAmount.string = Tool.ConvertMoney_S2C(amount) + "";
    }
}

