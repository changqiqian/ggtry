import { _decorator, Component, Node, Button, Label, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
import { NetworkSend } from '../../network/NetworkSend';
import { Tool } from '../../Tool';
import { BaseButton } from '../common/BaseButton';
import { LoginData } from './LoginData';
const { ccclass, property } = _decorator;

@ccclass('Login_LoginView')
export class Login_LoginView extends BaseUI {

    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(BaseButton) 
    mAreaCodeBtn: BaseButton = null;
    @property(EditBox) 
    mAccountEditBox: EditBox = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    @property(BaseButton) 
    mPasswordLoginBtn: BaseButton = null;
    
    onEnable()
    {
        this.mAccountEditBox.string = "";
    }


    InitParam() 
    {

    }
    BindUI() 
    {
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false)
        });

        this.mAreaCodeBtn.SetClickCallback(()=>
        {
            this.ShowLayer("common","prefab/AreaCodeView");
        });

        this.mConfirmBtn.SetClickCallback(()=>
        {
            if(Tool.AccountTest(this.mAccountEditBox.string) == false)
            {
                return;
            }


            LoginData.Instance.Data_SmsCodeType
            LocalPlayerData.Instance.Data_LastInputPhoneNum.mData = this.mAccountEditBox.string;
            let currentAreaCodeIndex = LocalPlayerData.Instance.Data_AreaCode.mData;
            let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
            let fullPhoneNumber = currentAreaCode + ' ' + this.mAccountEditBox.string;
            NetworkSend.Instance.GetSmsCode(fullPhoneNumber , SmsCodeType.Login);
        });

        this.mPasswordLoginBtn.SetClickCallback(()=>
        {
            this.ShowLayer("login","prefab/Login_LoginViewPwd");
            this.Show(false)
        });
    }
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_AreaCode.AddListenner(this,(_data)=>
        {
            this.mAreaCodeBtn.SetTitle(GameConfig.AreaCodeList[_data].areaCode);
        })

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

}

