import { _decorator, Component, Node, Label, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('InputTipsWindow')
export class InputTipsWindow extends BaseUI {
    
    @property(Label) 
    mTitle: Label = null;
    @property(EditBox) 
    mEditBox: EditBox = null;
    @property(BaseButton) 
    mCancelBtn: BaseButton = null;
    @property(BaseButton) 
    mConfirm: BaseButton = null;

    mConfirmCallback : Function = null;
    mCancelCallback : Function = null;
    onEnable()
    {
        this.mConfirmCallback = null;
        this.mCancelCallback = null;
        this.mEditBox.string = "";
    }
    InitParam()
    {

    }
    BindUI()
    {
        this.mCancelBtn.SetClickCallback(()=>
        {
            if(this.mCancelCallback != null)
            {
                this.mCancelCallback(this.mEditBox.string);
            }
            this.CloseAsWindow();
            
        });

        this.mConfirm.SetClickCallback(()=>
        {
            if(this.mConfirmCallback != null)
            {
                this.mConfirmCallback(this.mEditBox.string);
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
    CustmoerDestory()
    {

    }

    public SetTitle(_title : string)
    {
        this.mTitle.string = _title;
    }

    public SetCallback(_confirm :Function , _cancel : Function = null)
    {
        this.mConfirmCallback = _confirm;
        this.mCancelCallback = _cancel;
    }

    public SetPlaceHolder(_placeholder : string)
    {
        this.mEditBox.placeholder = _placeholder;
    }
}

