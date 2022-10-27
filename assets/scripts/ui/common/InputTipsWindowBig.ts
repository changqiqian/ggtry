import { _decorator, Component, Node, EditBox, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('InputTipsWindowBig')
export class InputTipsWindowBig extends BaseUI {
    @property(Label) 
    mTitle: Label = null;
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(EditBox) 
    mEditBox: EditBox = null;
    @property(BaseButton) 
    mConfirm: BaseButton = null;
    @property(Label) 
    mMaxInput: Label = null;

    mConfirmCallback : Function = null;

    onEnable()
    {
        this.mConfirmCallback = null;
        this.mEditBox.string = "";
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
        this.mConfirm.SetClickCallback(()=>
        {
            if(this.mConfirmCallback != null)
            {
                this.mConfirmCallback(this.mEditBox.string);
            }
            this.CloseAsWindow();
        });

        this.mEditBox.node.on('text-changed', (_param)=>
        {
            this.UpdateMaxInput();
        }, this);
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

    public SetCallback(_confirm :Function)
    {
        this.mConfirmCallback = _confirm;
    }

    public SetPlaceHolder(_placeholder : string)
    {
        this.mEditBox.placeholder = _placeholder;
    }

    public SetMaxInput(_maxInput : number)
    {
        this.mEditBox.maxLength = _maxInput;
        this.UpdateMaxInput();
    }

    public UpdateMaxInput()
    {
        this.mMaxInput.string = this.mEditBox.string.length + "/" + this.mEditBox.maxLength;
    }
}

