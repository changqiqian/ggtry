import { _decorator, Component, Node, Label, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import {  Network } from '../../network/Network';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { ToggleBtn } from '../common/ToggleBtn';
import { LoginData } from './LoginData';
const { ccclass, property } = _decorator;

@ccclass('Login_LoginViewPwd')
export class Login_LoginViewPwd extends BaseUI {
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(BaseButton) 
    mAreaCodeBtn: BaseButton = null;
    @property(EditBox) 
    mAccountEditBox: EditBox = null;
    @property(BaseButton) 
    mForgetBtn: BaseButton = null;
    @property(EditBox) 
    mPwdEditbox: EditBox = null;
    @property(ToggleBtn) 
    mSeePwdToggle: ToggleBtn = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    @property(BaseButton) 
    mSMSLoginBtn: BaseButton = null;

    onEnable()
    {
        this.mAccountEditBox.string = "";
        this.mSeePwdToggle.ShowUnselected();
        this.mPwdEditbox.inputFlag = EditBox.InputFlag.PASSWORD;
        this.mPwdEditbox.string = "";
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

        this.mForgetBtn.SetClickCallback(()=>
        {
            this.ShowLayer("common","prefab/ForgetPwd");
        });

        this.mSeePwdToggle.SetClickCallback((_result)=>
        {
            if(_result)
            {
                this.mPwdEditbox.inputFlag = EditBox.InputFlag.DEFAULT;
            }
            else
            {
                this.mPwdEditbox.inputFlag = EditBox.InputFlag.PASSWORD;
            }
        });
 
        this.mConfirmBtn.SetClickCallback(()=>
        {
            if(this.mAccountEditBox.string.length < 7) 
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00002"));
                return
            }

            if(this.mAccountEditBox.string.indexOf(" ") != -1) 
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00015"));
                return
            }

            let password = this.mPwdEditbox.string;
            if(password === "")
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00004"));
                return
            }

            if(password.indexOf(" ") != -1) 
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00015"));
                return
            }


            LocalPlayerData.Instance.Data_LastInputPhoneNum.mData = this.mAccountEditBox.string;
            LocalPlayerData.Instance.Data_LastInputPwd.mData = password;
            let currentAreaCodeIndex = LocalPlayerData.Instance.Data_AreaCode.mData;
            let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
            let fullPhoneNumber = currentAreaCode + ' ' + this.mAccountEditBox.string;
            NetworkSend.Instance.LoginWithPwd(fullPhoneNumber,password);
        });
 
        this.mSMSLoginBtn.SetClickCallback(()=>
        {
            this.ShowLayer("login","prefab/Login_LoginView");
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

