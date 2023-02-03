import { _decorator, Component, Node, Label, Color, SpriteFrame, Sprite, Button, UITransform } from 'cc';
import { Color3 } from '../../../../@types/packages/scene/@types/public';
import { AudioManager } from '../../base/AudioManager';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('BaseButton')
export class BaseButton extends BaseUI {
    @property(Label) 
    mTitle: Label = null;
    mProtectDoubleClick : boolean = false;
    mClickProtected : boolean = false;
    mClickProtectedDuration : number = 0.1;
    private mCustomerData : any = null;
    private mCallback : Function = null;
    private mProtectCallback : Function = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.node.on(Node.EventType.TOUCH_END,this.OnClick.bind(this),this);
        this.SetProtectDoubleClick(true );
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {
        this.node.off(Node.EventType.TOUCH_END,this.OnClick.bind(this),this);
        this.mCustomerData = null;
        this.mCallback = null;
    }

    public SetSprite(_spriteFrame : SpriteFrame)
    {
        let Icon = this.node.getChildByName("Icon");
        let transform = Icon.getComponent(UITransform);
        let size = transform.contentSize;
        Icon.getComponent(Sprite).spriteFrame = _spriteFrame;
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

    public SetProtectDoubleClick(_enable:boolean , _duration:number = 0.1 , _protectCallback : Function = null)
    {
        this.mProtectDoubleClick = _enable;
        this.mClickProtectedDuration = _duration;
        this.mProtectCallback = _protectCallback;
    }

    public SetGray(_value : boolean)
    {
        if(this.node.getChildByName("Icon").getComponent(Sprite))
        {
            this.node.getChildByName("Icon").getComponent(Sprite).grayscale = _value;
        }
    }

    public SetInteractableWithGray(_value : boolean)
    {
        if(this.node.getComponent(Button))
        {
            this.node.getComponent(Button).interactable = _value;
        }

        this.SetGray(!_value);
    }

    public SetInteractable(_value : boolean)
    {
        if(this.node.getComponent(Button))
        {
            this.node.getComponent(Button).interactable = _value;
        }
    }

    public SetFontSize(_value : number)
    {
        if(this.mTitle)
        {
            this.mTitle.fontSize = _value;
        }
    }    

    private OnClick()
    {
        if(this.node.getComponent(Button).interactable == false)
        {
            return;
        }
        if(this.mProtectDoubleClick == true)
        {
            if(this.mClickProtected == true)
            {
                if(this.mProtectCallback != null)
                {
                    this.mProtectCallback();
                }
                return;
            }
            this.mClickProtected = true;
            this.StartSecondsTimer(this.mClickProtectedDuration,0.05)
        }
        AudioManager.Instance.PlayMusicOneShot("Btn");
        if(this.mCallback != null)
        {
            this.mCallback(this.mCustomerData);
        }
    }

    OnSecondTimer()
    {
        let restTime = this.GetRestMillSeconds();
        if(restTime == 0)
        {
            this.mClickProtected = false;
        }
    }


}

