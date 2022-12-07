import { _decorator, Component, Node, Slider, Sprite, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_Slider')
export class Game_Slider extends BaseUI 
{
    @property(Slider) 
    mSlider: Slider = null;
    @property(Node) 
    mHadnle: Node = null;
    @property(Sprite) 
    mProgress: Sprite = null;
    @property(Label) 
    mAmount: Label = null;
    @property(Label) 
    mTotalAmount: Label = null;
    @property(Node) 
    mTotalBG: Node = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    
    mCallback :Function = null;

    mTotalNum : number;
    mMinRaiseNum : number;
    onEnable()
    {
        this.ResetSlider();
    }

    InitParam() 
    {

    }
    BindUI() 
    {

        this.mConfirmBtn.SetClickCallback(()=>
        {
            if(LocalPlayerData.Instance.Data_CustomerSliderSetting.mData == false)
            {
                return;
            }
            let amount = this.DragLogic();
            if(this.mCallback)
            {
                this.mCallback(amount);
            }
        })

        this.mHadnle.on(Node.EventType.TOUCH_END,()=>
        {
            this.DragEnd();
        });

        this.mHadnle.on(Node.EventType.TOUCH_CANCEL,()=>
        {
            this.DragEnd();
        });

        this.mSlider.node.on("slide",()=>
        {
            this.DragLogic();
        });
    }
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_CustomerSliderSetting.AddListenner(this,(_data)=>
        {
            this.mConfirmBtn.Show(_data);
        })
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    SetCallback(_callback : Function)
    {
        this.mCallback = _callback;
    }

    SetTotalAmountAndMinRaise(_totalAmount : number , _minRaise : number)
    {
        this.mTotalNum = _totalAmount;
        this.mMinRaiseNum = _minRaise;
        this.mTotalAmount.string = Tool.ConvertMoney_S2C(_totalAmount) + "";
    }

    ResetSlider()
    {
        this.mAmount.string = "0";
        this.mProgress.fillRange = 0;
        this.mSlider.progress = 0;
        this.mTotalBG.active = true;
    }

    DragLogic(): number
    {
        this.mProgress.fillRange = this.mSlider.progress;
        this.mTotalBG.active = this.mProgress.fillRange < 1;
        let currentAmount = this.CalculateCurrentAmount(this.mProgress.fillRange);
        this.mAmount.string = Tool.ConvertMoney_S2C(currentAmount) + "";
        return currentAmount;
    }

    DragEnd()
    {
        let amount = this.DragLogic();
        if(LocalPlayerData.Instance.Data_CustomerSliderSetting.mData)
        {
            if(amount == 0)
            {
                this.node.active = false;
            }
            return;
        }
        if(this.mCallback)
        {
            this.mCallback(amount);
        }
    }

    CalculateCurrentAmount(_ratio : number) : number
    {
        if(_ratio <= 0)
        {
            return  0;
        }
        else if(_ratio >= 1)
        {
            return this.mTotalNum;
        }
        else
        {
            let tempAmount = this.mTotalNum - this.mMinRaiseNum;
            let finalAmount = _ratio * tempAmount + this.mMinRaiseNum;
            return finalAmount;
        }
    }
}

