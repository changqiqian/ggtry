import { _decorator, Component, Node, Label, Button, sys } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import {  Network } from '../../network/Network';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { TipsWindow } from '../common/TipsWindow';
import { LoginData } from './LoginData';
const { ccclass, property } = _decorator;

@ccclass('LoginUI')
export class LoginUI extends BaseUI 
{

    public static GetUsingBundleFolder() : Array<string>
    {
        return [];
        //return ["login","clubPage"];
    }
    
    @property(Label) 
    mVersion: Label = null;
    @property(Button) 
    mLoginBtn: Button = null;
    @property(Button) 
    mSignBtn: Button = null;
    @property(BaseButton) 
    mCyberBtn: BaseButton = null;

    @property(Node) 
    DebugFunction: Node = null;
    @property(BaseButton) 
    PrivateIP: BaseButton = null;
    @property(BaseButton) 
    DevIpBtn: BaseButton = null;
    @property(BaseButton) 
    TestIpBtn: BaseButton = null;
    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.mVersion.string = GameConfig.Version;
        this.mLoginBtn.node.on(Node.EventType.TOUCH_END,this.OnLoginBtn.bind(this),this);
        this.mSignBtn.node.on(Node.EventType.TOUCH_END,this.OnSignBtn.bind(this),this);
        this.mCyberBtn.SetClickCallback(()=>
        {
            this.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.GetString("00016");
                tempScript.SetTips(tips);
                tempScript.SetCallback(()=>
                {
                    UIMgr.Instance.ShowToast("摄像头功能还没做");
                })
            })
        });

        //debug mode
        this.DebugFunction.active = GameConfig.DebugMode;
        this.PrivateIP.SetTitle("私人电脑" + GameConfig.PrivateIP);
        this.PrivateIP.SetClickCallback(()=>
        {
            GameConfig.SetSeverUrl(GameConfig.PrivateIP);
            Network.Instance.CreateWS();
            this.DebugFunction.active = false;
        });

        this.DevIpBtn.SetTitle("开发环境：" + GameConfig.DevelopIP);
        this.DevIpBtn.SetClickCallback(()=>
        {
            GameConfig.SetSeverUrl(GameConfig.DevelopIP);
            Network.Instance.CreateWS();
            this.DebugFunction.active = false;
        });

        this.TestIpBtn.SetTitle("测试环境：" + GameConfig.TestIP);
        this.TestIpBtn.SetClickCallback(()=>
        {
            GameConfig.SetSeverUrl(GameConfig.TestIP);
            Network.Instance.CreateWS();
            this.DebugFunction.active = false;
        });
    }
    RegDataNotify() 
    {
        LoginData.Instance.Data_LoginSuccessData.AddListenner(this,(_data)=>
        {
            if(_data == true)
            {
                UIMgr.Instance.ChangeScene(SceneType.Hall);
            }
        });

        LoginData.Instance.Data_RegisterSuccessData.AddListenner(this,(_data)=>
        {
            if(_data == true)
            {
                let currentAreaCodeIndex = LocalPlayerData.Instance.Data_AreaCode.mData;
                let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
                let fullPhoneNumber = currentAreaCode + ' ' + LocalPlayerData.Instance.Data_LastInputPhoneNum.mData;
                let pwd = LocalPlayerData.Instance.Data_LastInputPwd.mData
                NetworkSend.Instance.LoginWithPwd(fullPhoneNumber,pwd);
            }
        });
        
        CommonNotify.Instance.Data_SocketOpen.AddListenner(this,(_data)=>
        {
            if(GameConfig.DebugMode)
            {
                return;
            }

            if(GameConfig.LOGIN_TOKEN != null)
            {
                console.log("Token 自动登录")
                NetworkSend.Instance.LoginWithToken(GameConfig.LOGIN_PHONE,GameConfig.LOGIN_TOKEN);
            }
        });

        LoginData.Instance.Data_SmsCodeType.AddListenner(this,(_data)=>
        {
            this.ShowLayer("common","prefab/SMSCodeView");
        });
    }
    LateInit() 
    {
        if(GameConfig.DebugMode == false)
        {
            GameConfig.SetSeverUrl(GameConfig.DevelopIP);
            Network.Instance.CreateWS();
        }
    }

    CustmoerDestory() 
    {
        LoginData.Instance.Clear();
    }

    private OnLoginBtn()
    {
        this.ShowLayer("login","prefab/Login_LoginView");
    }

    private OnSignBtn()
    {
        this.ShowLayer("login","prefab/Login_SignView");
    }
}

