import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('TipsWindow')
export class TipsWindow extends BaseUI 
{
    @property(BaseButton) 
    mCancelBtn: BaseButton = null;
    @property(BaseButton) 
    mConfirm: BaseButton = null;
    @property(Label) 
    mTips: Label = null;
    mConfirmCallback : Function = null;
    mCancelCallback : Function = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mCancelBtn.SetClickCallback(()=>
        {
            if(this.mCancelCallback != null)
            {
                this.mCancelCallback();
            }
            this.CloseAsWindow();
            
        });

        this.mConfirm.SetClickCallback(()=>
        {
            if(this.mConfirmCallback != null)
            {
                this.mConfirmCallback();
            }
            this.CloseAsWindow();
        });
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }

    onEnable()
    {
        this.mConfirmCallback = null;
        this.mCancelCallback = null;
    }

    public SetTips(_tips : string)
    {
        this.mTips.string = _tips;
    }

    public SetCallback(_confirm :Function , _cancel : Function = null)
    {
        this.mConfirmCallback = _confirm;
        this.mCancelCallback = _cancel;
    }

}

