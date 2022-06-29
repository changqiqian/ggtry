import { _decorator, Component, Node, Button, Label } from 'cc';
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

    mTargetParam : string;
    mCustmoerData:number = 0;
    mDataNotify : DataNotify = null;

    InitParam() 
    {

    }
    BindUI() 
    {
        this.mSelected.node.on(Node.EventType.TOUCH_END,this.OnSelected.bind(this),this);
        this.mDisabled.node.on(Node.EventType.TOUCH_END,this.OnDisabled.bind(this),this);
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
        if(this.mDataNotify != null)
        {
            this.mDataNotify.RemoveListenerByTarget(this);
        }
    }

    public SetDataNotify(_dataNotify : DataNotify ,_targetParam : string , _custmoerData : number)
    {
        this.mDataNotify = _dataNotify;
        this.mCustmoerData = _custmoerData;
        this.mTargetParam = _targetParam;
        this.mDataNotify.AddListener(this.mTargetParam , this.NotifyCallback.bind(this), this);
    }

    public SetTitle(_title :string)
    {
        this.mSelectedLabel.string = _title;
        this.mDisableLabel.string = _title;
    }

    OnSelected()
    {
        console.log("OnSelected");
    }

    OnDisabled()
    {
        if(this.mDataNotify == null)
        {
            return;
        }
        console.log("OnDisabled");
        this.mDataNotify.SetValueByParamName(this.mTargetParam , this.mCustmoerData);
    }

    NotifyCallback(_val , _bef)
    {
        if(_val == this.mCustmoerData)
        {
            this.mSelected.node.active = true;
            this.mDisabled.node.active = false;
        }
        else
        {
            this.mSelected.node.active = false;
            this.mDisabled.node.active = true;
        }
    }

}

