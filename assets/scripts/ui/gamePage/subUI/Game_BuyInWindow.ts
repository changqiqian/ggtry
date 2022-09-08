import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { ProgressSlider } from '../../common/ProgressSlider';
const { ccclass, property } = _decorator;

@ccclass('Game_BuyInWindow')
export class Game_BuyInWindow extends BaseUI 
{
    @property(Label) 
    mCountDown: Label = null;
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;

    @property(Sprite) 
    mCurrentIcon: Sprite = null;
    @property(Label) 
    mCurrentAmount: Label = null;

    @property(ProgressSlider) 
    mProgressSlider: ProgressSlider = null;
    
    @property(Label) 
    mBlindInfo: Label = null;
    
    @property(Sprite) 
    mTotalIcon: Sprite = null;
    @property(Label) 
    mTotalAmount: Label = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    @property(Node) 
    mBottom: Node = null;

    @property(Label) 
    mTipsTitle: Label = null;
    @property(Label) 
    mTips: Label = null;
    
    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });

        this.mConfirmBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });


        this.mProgressSlider.SetEndCallback((_ratio)=>
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

    StartCountDown(_totalTime : number)
    {
        this.StartSecondsTimer(_totalTime);
    }
    
    OnSecondTimer()
    {
        let seconds = this.GetRestSeconds();
        this.mCountDown.string = seconds + "";
        if(seconds == 0)
        {

        }
    }
}

