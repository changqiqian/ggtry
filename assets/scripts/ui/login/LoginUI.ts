import { _decorator, Component, Node, Label, Button, sys } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import {  Network } from '../../network/Network';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { TipsWindow } from '../common/TipsWindow';
const { ccclass, property } = _decorator;

@ccclass('LoginUI')
export class LoginUI extends BaseUI 
{

    public static GetUsingBundleFolder() : Array<string>
    {
        return ["login","clubPage"];
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
    DevIpBtn: BaseButton = null;
    @property(BaseButton) 
    TestIpBtn: BaseButton = null;
    InitParam() 
    {
        GameConfig.LoadToken();
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
                    UIMgr.GetInstance().ShowToast("摄像头功能还没做");
                })
            })
        });

        //debug mode
        this.DebugFunction.active = GameConfig.DebugMode;
        this.DevIpBtn.SetTitle("开发环境：" + GameConfig.DevelopIP);
        this.DevIpBtn.SetClickCallback(()=>
        {
            GameConfig.SetSeverUrl(GameConfig.DevelopIP);
            Network.GetInstance().CreateWS();
            this.DebugFunction.active = false;
        });

        this.TestIpBtn.SetTitle("测试环境：" + GameConfig.TestIP);
        this.TestIpBtn.SetClickCallback(()=>
        {
            GameConfig.SetSeverUrl(GameConfig.TestIP);
            Network.GetInstance().CreateWS();
            this.DebugFunction.active = false;
        });
    }
    RegDataNotify() 
    {
        CommonNotify.GetInstance().Data_LoginSuccessData.AddListenner(this,(_data)=>
        {
            UIMgr.GetInstance().ChangeScene(SceneType.Hall);
        });
        
        CommonNotify.GetInstance().Data_SocketOpen.AddListenner(this,(_data)=>
        {
            NetworkSend.SendLogin();
        });
    }
    LateInit() 
    {
        if(GameConfig.DebugMode == false)
        {
            Network.GetInstance().CreateWS();
        }
    }

    CustmoerDestory() 
    {
        
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

