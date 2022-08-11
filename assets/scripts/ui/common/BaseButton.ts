import { _decorator, Component, Node, Label, Color, SpriteFrame, Sprite } from 'cc';
import { Color3 } from '../../../../@types/packages/scene/@types/public';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('BaseButton')
export class BaseButton extends BaseUI {
    @property(Label) 
    mTitle: Label = null;
    mProtectDoubleClick : boolean = false;
    mClickProtected : boolean = false;
    mClickProtectedDuration : number = 0.2;
    private mCustomerData : any = null;
    private mCallback : Function = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.node.on(Node.EventType.TOUCH_END,this.OnClick.bind(this),this);
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
        this.mCustomerData = null;
        this.mCallback = null;
    }

    public SetSprite(_spriteFrame : SpriteFrame)
    {
        this.node.getComponent(Sprite).spriteFrame = _spriteFrame;
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

    public SetProtectDoubleClick(_enable:boolean , _duration:number = 0.2)
    {
        this.mProtectDoubleClick = _enable;
        this.mClickProtectedDuration = _duration;
    }

    private OnClick()
    {
        if(this.mProtectDoubleClick == true)
        {
            if(this.mClickProtected == true)
            {
                return;
            }
    
            this.mClickProtected = true;
            this.scheduleOnce(()=>
            {
                this.mClickProtected = false;
            },this.mClickProtectedDuration);
        }


        if(this.mCallback != null)
        {
            this.mCallback(this.mCustomerData);
        }
    }
}

