import { _decorator, Component, Node, Label, Color } from 'cc';
import { Color3 } from '../../../../@types/packages/scene/@types/public';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('BaseButton')
export class BaseButton extends BaseUI {
    @property(Label) 
    mTitle: Label = null;

    private mCustomerData : any = null;
    private mCallback : Function = null;
    InitParam() {

    }
    BindUI() {
        this.node.on(Node.EventType.TOUCH_END,this.OnClick.bind(this),this);
    }
    RegDataNotify() {

    }
    LateInit() {

    }
    UnregDataNotify() {

    }
    CustmoerDestory() {
        this.mCustomerData = null;
        this.mCallback = null;
    }

    public SetTitle(_title : string) 
    {
        if(this.mTitle)
        {
            this.mTitle.string = _title;
        }
    }

    public SetTitleColor(_color : Color)
    {
        if(this.mTitle)
        {
            this.mTitle.color = _color;
        }
    }

    public SetClickCallback(_callback : Function , _customerData : any = null)
    {
        this.mCallback = _callback;
        this.mCustomerData = _customerData;
    }

    public GetCustomerData() : any
    {
        return this.mCustomerData;
    }

    public GetTitle()  : string
    {
        if(this.mTitle)
        {
            return this.mTitle.string;
        }

        return "";
    }

    private OnClick()
    {
        if(this.mCallback != null)
        {
            this.mCallback(this.mCustomerData);
        }
    }
}

