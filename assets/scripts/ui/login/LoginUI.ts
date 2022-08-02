import { _decorator, Component, Node, Label, Button } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LoadingData } from '../loading/LoadingData';
const { ccclass, property } = _decorator;

@ccclass('LoginUI')
export class LoginUI extends BaseUI {

    public static GetUsingBundleFolder() : Array<string>
    {
        return ["login"];
    }
    

    @property(Label) 
    mVersion: Label = null;
    @property(Button) 
    mLoginBtn: Button = null;
    @property(Button) 
    mSignBtn: Button = null;
    @property(Button) 
    mAgreementBtn: Button = null;
    @property(Button) 
    mPrivacyBtn: Button = null;
    @property(Button) 
    mBroadcastBtn: Button = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mVersion.string = LoadingData.Version;
        this.mLoginBtn.node.on(Node.EventType.TOUCH_END,this.OnLoginBtn.bind(this),this);
        this.mSignBtn.node.on(Node.EventType.TOUCH_END,this.OnSignBtn.bind(this),this);
        this.mAgreementBtn.node.on(Node.EventType.TOUCH_END,this.OnAgreementBtn.bind(this),this);
        this.mPrivacyBtn.node.on(Node.EventType.TOUCH_END,this.OnPrivacyBtn.bind(this),this);
        this.mBroadcastBtn.node.on(Node.EventType.TOUCH_END,this.OnBroadcastBtn.bind(this),this);
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

    private OnLoginBtn()
    {
        
    }

    private OnSignBtn()
    {
        
    }
    private OnAgreementBtn()
    {
        
    }
    private OnPrivacyBtn()
    {
        
    }
    private OnBroadcastBtn()
    {
        
    }
}

