import { _decorator, Component, Node, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
import { NetworkSend } from '../../network/NetworkSend';
import { Tool } from '../../Tool';
import { LoginData } from '../login/LoginData';
import { BaseButton } from './BaseButton';
import { ToggleBtn } from './ToggleBtn';
const { ccclass, property } = _decorator;

@ccclass('ResetPwdView')
export class ResetPwdView extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(EditBox) 
    mPwdEditbox: EditBox = null;
    @property(ToggleBtn) 
    mSeePwdToggle: ToggleBtn = null;
    @property(EditBox) 
    mRePwdEditbox: EditBox = null;
    @property(ToggleBtn) 
    mReSeePwdToggle: ToggleBtn = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    onEnable()
    {
        this.mSeePwdToggle.ShowUnselected();
        this.mPwdEditbox.inputFlag = EditBox.InputFlag.PASSWORD;
        this.mPwdEditbox.string = "";
        this.mReSeePwdToggle.ShowUnselected();
        this.mRePwdEditbox.inputFlag = EditBox.InputFlag.PASSWORD;
        this.mRePwdEditbox.string = "";
    }
    InitParam() 
    {
    }
    BindUI() 
    {
        this.mPwdEditbox.placeholder = Localization.GetString("00004");
        this.mRePwdEditbox.placeholder = Localization.GetString("00157");
        
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false)
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

        this.mReSeePwdToggle.SetClickCallback((_result)=>
        {
            if(_result)
            {
                this.mRePwdEditbox.inputFlag = EditBox.InputFlag.DEFAULT;
            }
            else
            {
                this.mRePwdEditbox.inputFlag = EditBox.InputFlag.PASSWORD;
            }
        });

 
        this.mConfirmBtn.SetClickCallback(()=>
        {
            if(Tool.PasswordTest(this.mPwdEditbox.string) == false)
            {
                return;
            }
        
            if(Tool.PasswordTest(this.mRePwdEditbox.string) == false)
            {
                return;
            }

            if(this.mRePwdEditbox.string != this.mPwdEditbox.string)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00007"));
                return;
            }
            
            LocalPlayerData.Instance.Data_LastInputPwd.mData = this.mPwdEditbox.string;
            let fullPhoneNumber = LocalPlayerData.Instance.GetFullPhoneNumber();


            if(LoginData.Instance.Data_InSignInProgress.mData)
            {
                NetworkSend.Instance.GetSmsCode(fullPhoneNumber , SmsCodeType.Register);
            }
            else
            {
                //发送重制密码
            }
        });
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

}

