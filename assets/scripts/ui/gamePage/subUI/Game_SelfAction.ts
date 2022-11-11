import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { CircleTimer } from '../../common/CircleTimer';
import { Game_CustomerRaise } from './Game_CustomerRaise';
import { Game_Slider } from './Game_Slider';
const { ccclass, property } = _decorator;

@ccclass('Game_SelfAction')
export class Game_SelfAction extends BaseUI 
{
    @property(BaseButton) 
    mFoldBtn: BaseButton = null;
    @property(BaseButton) 
    mCallBtn: BaseButton = null;
    @property(BaseButton) 
    mCheckBtn: BaseButton = null;
    @property(Game_CustomerRaise) 
    mGame_CustomerRaise: Game_CustomerRaise = null;
    @property(BaseButton) 
    mSliderRaiseBtn: BaseButton = null;
    @property(Game_Slider) 
    mGame_Slider: Game_Slider = null;
    @property(CircleTimer) 
    mCircleTimer: CircleTimer = null;

    mCallAmount : number = null;
    mMinRaiseAmount : number = null;

    private mIndex : number = null;
    onEnable()
    {

    }

    InitParam() 
    {
        this.node.active = false;
    }
    BindUI() 
    {
        this.mFoldBtn.SetClickCallback(()=>
        {

        });

        this.mCheckBtn.SetClickCallback(()=>
        {

        });

        this.mCallBtn.SetClickCallback(()=>
        {

        });

        this.mSliderRaiseBtn.SetClickCallback(this.OnSliderRaiseBtn.bind(this));

        this.mGame_Slider.SetCallback((_amount)=>
        {

        });
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

    public InitWithData(_index : number)
    {
        this.mIndex = _index;
    }

    HideAll()
    {
        this.mFoldBtn.node.active = false;
        this.mCallBtn.node.active = false;
        this.mCheckBtn.node.active = false;
        this.mGame_CustomerRaise.node.active = false;
        this.mSliderRaiseBtn.node.active = false;
        this.mGame_Slider.node.active = false;
    }


    CalculateToShowRaiseNode()
    {
        
    }

    OnSliderRaiseBtn()
    {
        this.mGame_CustomerRaise.node.active = !this.mGame_CustomerRaise.node.active;
        this.mGame_Slider.node.active = !this.mGame_Slider.node.active;
        if(this.mGame_Slider.node.active)
        {

            //this.mGame_Slider.SetTotalAmountAndMinRaise();
        }
    }

    UpdateTimer(_show : boolean , _leftTime : number)
    {
        this.mCircleTimer.node.active = _show;
        if(_show)
        {
            this.mCircleTimer.StartTimer(_leftTime);
        }
    }
}

