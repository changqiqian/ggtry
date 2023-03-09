import { _decorator, Component, Node, Label, Button, sys, SafeArea, setDisplayStats } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import {  Network } from '../../network/Network';
import { NetworkHttp } from '../../network/NetworkHttp';
import { NetworkSend } from '../../network/NetworkSend';
import { Tool } from '../../Tool';
import { Club_RecordLayer } from '../clubPage/Club_RecordLayer';
import { BaseButton } from '../common/BaseButton';
import { MultipleTableCtr } from '../common/MultipleTableCtr';

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
    @property(Node) 
    DebugFunction: Node = null;
    @property(BaseButton) 
    DevIpBtn: BaseButton = null;
    @property(BaseButton) 
    JackIpBtn: BaseButton = null;
    @property(BaseButton) 
    TurnOff: BaseButton = null;

    @property(Label) 
    mUid: Label = null;
    @property(Label) 
    mGameID: Label = null;

    InitParam() 
    {

        GameConfig.CreateUID();
    }
    BindUI() 
    {
        LocalPlayerData.Instance.Data_AreaCode.mData = 1;
        this.MaxScreen(this.mBG);
        UIMgr.Instance.ShowMultipleTable(true);
        this.mVersion.string = GameConfig.Version;
        this.mLoginBtn.SetClickCallback(()=>
        {
            //UIMgr.Instance.ShowLayer("login","prefab/Login_LoginView");  
            // UIMgr.Instance.ShowLayer("clubPage","prefab/Club_RecordLayer",true,(_script)=>
            // {
            //     let temp = _script as Club_RecordLayer;
            //     temp.InitWitData("");
            // });  

        });

        this.TurnOff.SetClickCallback(()=>
        {
            setDisplayStats(false);            
        });

        this.mSignBtn.SetClickCallback(()=>
        {
            //UIMgr.Instance.ShowLayer("login","prefab/Login_SignView");
        });
   

        //debug mode
        this.DebugFunction.active = GameConfig.DebugMode;
        this.DevIpBtn.SetTitle("Lucky:" + GameConfig.DevelopIP);
        this.DevIpBtn.SetClickCallback(()=>
        {
            GameConfig.SetSeverUrl(GameConfig.DevelopIP);
            Network.Instance.CreateWS();
            this.DebugFunction.active = false;
        });

        this.JackIpBtn.SetTitle("测试 :" + GameConfig.JackIP);
        this.JackIpBtn.SetClickCallback(()=>
        {
            GameConfig.SetSeverUrl(GameConfig.JackIP);
            Network.Instance.CreateWS();
            this.DebugFunction.active = false;
        });


        let userData = new UserInfo();
        userData.accountLevel = AccountLevel.AccountLevel_Normal;
        userData.uid = GameConfig.GetTopUid();
        userData.accountStatus = AccountStatus.AccountStatus_Normal;
        userData.coin = 100000;
        userData.diamond = 10000;
        userData.head = "1";
        userData.nickName = "ggtry";
        LocalPlayerData.Instance.UpdateUserInfo(userData);

        this.mUid.string = "Uid=====" + GameConfig.GetTopUid()
        this.mGameID.string = "GameID====" + GameConfig.GetTopGameId();
    }
    RegDataNotify() 
    {
        // LoginData.Instance.Data_LoginSuccessData.AddListenner(this,(_data)=>
        // {
        //     if(_data == true)
        //     {
        //         UIMgr.Instance.ChangeScene(SceneType.Hall);
        //     }
        // });

        // LoginData.Instance.Data_RegisterSuccessData.AddListenner(this,(_data)=>
        // {
        //     if(_data == true)
        //     {
        //         let pwd = LocalPlayerData.Instance.Data_LastInputPwd.mData
        //         let fullPhoneNumber = LocalPlayerData.Instance.GetFullPhoneNumber();
        //         NetworkSend.Instance.LoginWithPwd(fullPhoneNumber,pwd);
        //     }
        // });
        
        CommonNotify.Instance.Data_SocketOpen.AddListenner(this,(_data)=>
        {
            MultipleTableCtr.TryToEnterGame(GameConfig.GetTopGameId() , GameType.GameType_TexasCash,"",GameConfig.GetTopUid());

            // if(GameConfig.DebugMode)
            // {
            //     return;
            // }

            // if(GameConfig.LOGIN_TOKEN != null)
            // {
            //     console.log("Token 自动登录")
            //     NetworkSend.Instance.GetUserInfo();       
            // }
        });

        // LoginData.Instance.Data_SmsCodeType.AddListenner(this,(_data)=>
        // {
        //     UIMgr.Instance.ShowLayer("common","prefab/SMSCodeView");
        // });
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

