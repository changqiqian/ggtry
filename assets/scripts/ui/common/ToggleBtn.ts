import { _decorator, Component, Node, Button, Label, Sprite, SpriteFrame } from 'cc';
import { BaseData } from '../../base/BaseData';
import { BaseUI } from '../../base/BaseUI';
import { DataNotify } from '../../base/DataNotify';
const { ccclass, property } = _decorator;

@ccclass('ToggleBtn')
export class ToggleBtn extends BaseUI {

    @property(Button) 
    mSelected: Button = null;
    @property(Label) 
    mSelectedLabel: Label = null;
    @property(Button) 
    mDisabled: Button = null;
    @property(Label) 
    mDisableLabel: Label = null;

    mCustmoerData:number = 0;
    mDataNotify : BaseData<number> = null;
    mForbidden : boolean = false;

    mClickCallback : Function = null;
    InitParam() 
    {

    }
    BindUI() 
    {

    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {
        if(this.mDataNotify != null)
        {
            this.mDataNotify.RemoveListennerByTarget(this);
            this.mDataNotify = null;
        }
    }

    public SetDataNotify(_baseData : BaseData<number> , _custmoerData : number)
    {
        _baseData.RemoveListennerByTarget(this);
        this.mDataNotify = _baseData;
        this.mCustmoerData = _custmoerData;
        this.mDataNotify.AddListenner(this , this.NotifyCallback.bind(this));
        this.mSelected.node.on(Node.EventType.TOUCH_END,this.OnSelected.bind(this),this);
        this.mDisabled.node.on(Node.EventType.TOUCH_END,this.OnDisabled.bind(this),this);

        if(this.mDataNotify.mData == null)
        {
            this.ShowUnselected();
        }
    }

    public SetClickCallback(_callback : Function)
    {
        this.mClickCallback = _callback;
        if(this.mClickCallback != null)
        {
            this.mSelected.node.on(Node.EventType.TOUCH_END,()=>
            {
                this.ShowUnselected();
                this.mClickCallback(false);
            },this);
            this.mDisabled.node.on(Node.EventType.TOUCH_END,()=>
            {
                this.ShowSelected();
                this.mClickCallback(true);
            },this);
        }
    }

    public SetTitle(_title :string)
    {
        this.mSelectedLabel.string = _title;
        this.mDisableLabel.string = _title;
    }

    public GetTitle()
    {
        return this.mSelectedLabel.string;
    }

    public SetImage(_spriteFrame : SpriteFrame)
    {
        this.mSelected.getComponent(Sprite).spriteFrame = _spriteFrame;
        this.mDisabled.getComponent(Sprite).spriteFrame = _spriteFrame;
    }

    public SetForbidden(_val : boolean)
    {
        this.mForbidden = _val;
        this.mSelected.interactable = !this.mForbidden;
        this.mDisabled.interactable = !this.mForbidden;
    }

    public SetGray(_val : boolean)
    {
        this.mSelected.getComponent(Sprite).grayscale = _val;
        this.mDisabled.getComponent(Sprite).grayscale = _val;
    }

    OnSelected()
    {
        
    }

    OnDisabled()
    {
        if(this.mForbidden)
        {
            return;
        }

        if(this.mDataNotify == null)
        {
            return;
        }
        this.mDataNotify.mData = this.mCustmoerData;

    }

    NotifyCallback(_val , _bef)
    {
        if(_val == this.mCustmoerData)
        {
            this.ShowSelected();
        }
        else
        {
            this.ShowUnselected();
        }
    }

    ShowSelected()
    {
        this.mSelected.node.active = true;
        this.mDisabled.node.active = false;
    }

    ShowUnselected()
    {
        this.mSelected.node.active = false;
        this.mDisabled.node.active = true;
    }

    SetShowStauts(_value : boolean , _triggerCallback : boolean = false)
    {
        if(_value)
        {
            this.ShowSelected();
        }
        else
        {
            this.ShowUnselected();
        }

        if(_triggerCallback)
        {
            if(this.mClickCallback != null)
            {
                this.mClickCallback(_value);
            }
        }
    }

    public IsSelected() : boolean
    {
        return this.mSelected.node.active;
    }
}

