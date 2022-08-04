import { _decorator, Component, Node, Label, Button, sys } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { JsbScript } from '../../base/JsbScript';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import { MsgID, MsgStatus, Network } from '../../network/Network';
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
        JsbScript.getDevicesImei();
        JsbScript.getDevicesInfo();
        GameConfig.LoadToken();

    }
    BindUI() 
    {
        this.mVersion.string = GameConfig.Version;
        this.mLoginBtn.node.on(Node.EventType.TOUCH_END,this.OnLoginBtn.bind(this),this);
        this.mSignBtn.node.on(Node.EventType.TOUCH_END,this.OnSignBtn.bind(this),this);
        this.mAgreementBtn.node.on(Node.EventType.TOUCH_END,this.OnAgreementBtn.bind(this),this);
        this.mPrivacyBtn.node.on(Node.EventType.TOUCH_END,this.OnPrivacyBtn.bind(this),this);
        this.mBroadcastBtn.node.on(Node.EventType.TOUCH_END,this.OnBroadcastBtn.bind(this),this);
    }
    RegDataNotify() 
    {
        CommonNotify.GetInstance().AddListener("Data_SocketOpen",(_current , _before)=>
        {
            if(!_before && _current)
            {
                Network.GetInstance().SendVisitorLogin();
            }
        },this);

        CommonNotify.GetInstance().AddListener("Data_LoginSuccessData",(_current , _before)=>
        {
            if(_current == null)
            {
                return;
            }
            if(_current.isComplete)
            {
                UIMgr.GetInstance().ChangeScene(SceneType.Hall);
            }
            else
            {
                this.ShowLayer("login","prefab/Login_SetUserInfo");
            }
        },this);
        CommonNotify.GetInstance().AddListener("Data_SetUserInfoSuccess",(_current , _before)=>
        {
            if(_current)
            {
                UIMgr.GetInstance().ChangeScene(SceneType.Hall);
            }
        },this);
    }
    LateInit() 
    {
        Network.GetInstance().CreateWS();
    }
    UnregDataNotify() 
    {
        CommonNotify.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {
        CommonNotify.GetInstance().ClearData();
    }

    private OnLoginBtn()
    {
        this.ShowLayer("login","prefab/Login_LoginView");
    }

    private OnSignBtn()
    {
        this.ShowLayer("login","prefab/Login_SignView");
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

