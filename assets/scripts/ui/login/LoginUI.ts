import { _decorator, Component, Node, Label, Button, sys, SafeArea } from 'cc';
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
import { Game_CashReplay } from '../gamePage/subUI/Game_CashReplay';
import { Game_RecipeLayer } from '../gamePage/subUI/Game_RecipeLayer';
import { LoginData } from './LoginData';
const { ccclass, property } = _decorator;

@ccclass('LoginUI')
export class LoginUI extends BaseUI 
{
    @property(Node) 
    mBG: Node = null;
    @property(Label) 
    mVersion: Label = null;
    @property(BaseButton) 
    mLoginBtn: BaseButton = null;
    @property(BaseButton) 
    mSignBtn: BaseButton = null;
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
    }
    BindUI() 
    {

        this.MaxScreen(this.mBG);
        this.mVersion.string = GameConfig.Version;
        this.mLoginBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("login","prefab/Login_LoginView");   
            //UIMgr.Instance.ShowLayer("cowboy","prefab/CowboyUI_Tall");  

            
            // UIMgr.Instance.ShowLayer("gamePage","prefab/Game_CashReplay",true,(_script)=>
            // {
            //     let tempScript = _script as Game_CashReplay;
            //     tempScript.InitWithData();
            // }); 



        });

        this.mSignBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("login","prefab/Login_SignView");
        });
   
        this.mCyberBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.GetString("00016");
                tempScript.SetTips(tips);
                tempScript.SetCallback(()=>
                {
                    UIMgr.Instance.ShowToast("功能开发中");
                })
            })
        });

        //debug mode
        this.DebugFunction.active = GameConfig.DebugMode;
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
                let pwd = LocalPlayerData.Instance.Data_LastInputPwd.mData
                let fullPhoneNumber = LocalPlayerData.Instance.GetFullPhoneNumber();
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
                NetworkSend.Instance.GetUserInfo();       
            }
        });

        LoginData.Instance.Data_SmsCodeType.AddListenner(this,(_data)=>
        {
            UIMgr.Instance.ShowLayer("common","prefab/SMSCodeView");
        });
    }
    LateInit() 
    {
        if(!GameConfig.DebugMode)
        {
            GameConfig.SetSeverUrl(GameConfig.DevelopIP);
            Network.Instance.CreateWS();
        }
    }

    CustmoerDestory() 
    {
        LoginData.Instance.Clear();
    }
}

