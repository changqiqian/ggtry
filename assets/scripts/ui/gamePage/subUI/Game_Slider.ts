import { _decorator, Component, Node, Slider, Sprite, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_Slider')
export class Game_Slider extends BaseUI 
{
    @property(Node) 
    mDark: Node = null;
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
    @property(Node) 
    mAllInTips: Node = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    
    mCallback :Function = null;

    mTotalNum : number;
    mMinRaiseNum : number;
    mSmallBlind : number;
    onEnable()
    {
        this.ResetSlider();
    }

    InitParam() 
    {
    }
    BindUI() 
    {
        this.AddTouchCloseEvent(this.mDark);
        this.mConfirmBtn.SetClickCallback(()=>
        {            
            this.TryToBet();
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

    SetTotalAmountAndMinRaise(_totalAmount : number , _minRaise : number , _smallBlind : number)
    {
        this.mSmallBlind = _smallBlind;
        this.mTotalNum = _totalAmount;
        this.mMinRaiseNum = _minRaise;
        this.mTotalAmount.string = Tool.ConvertMoneyTo_K(_totalAmount) 
    }

    ResetSlider()
    {
        this.mAllInTips.active = false;
        this.mAmount.string = "0";
        this.mProgress.fillRange = 0;
        this.mSlider.progress = 0;
        this.mTotalBG.active = true;
    }

    DragLogic(): number
    {
        this.mProgress.fillRange = this.mSlider.progress;
        this.mTotalBG.active = this.mProgress.fillRange < 1;
        this.mAllInTips.active = this.mProgress.fillRange >= 1;
        let currentAmount = this.CalculateCurrentAmount(this.mProgress.fillRange);
        this.mAmount.string = Tool.ConvertMoneyTo_K(currentAmount) 
        return currentAmount;
    }

    DragEnd()
    {
        if(LocalPlayerData.Instance.Data_CustomerSliderSetting.mData)
        {
            return;
        }
        this.TryToBet();
    }

    TryToBet()
    {
        let amount = this.DragLogic();

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
            if(this.mTotalNum <= this.mMinRaiseNum)
            {
                return this.mTotalNum;
            }

            let changeAmount = this.mTotalNum - this.mMinRaiseNum;
            changeAmount = _ratio * changeAmount;
            changeAmount = Math.floor(changeAmount/this.mSmallBlind) * this.mSmallBlind;
            let finalAmount = changeAmount + this.mMinRaiseNum;
            return finalAmount;
        }
    }
}

