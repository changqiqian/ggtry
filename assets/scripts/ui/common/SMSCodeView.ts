import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import { NetworkSend } from '../../network/NetworkSend';
import { HallData } from '../hall/HallData';
import { LoginData } from '../login/LoginData';

import { BaseButton } from './BaseButton';
import { InputCodeIndicator } from './InputCodeIndicator';
import { QuickInputNumView } from './QuickInputNumView';
const { ccclass, property } = _decorator;

@ccclass('SMSCodeView')
export class SMSCodeView extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(Label) 
    mPhoneNum: Label = null;
    @property(InputCodeIndicator) 
    mInputCodeIndicator: InputCodeIndicator = null;
    @property(Label) 
    mCountDown: Label = null;
    @property(BaseButton) 
    mResendBtn: BaseButton = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;

    onEnable()
    {
        this.StartCountDown();
    }

    InitParam() 
    {
        this.mPhoneNum.string = "";
    }

    BindUI() 
    {
        this.mInputCodeIndicator.SetClickCallback(()=>
        {
            this.AddSubView("common","prefab/QuickInputNumView", (_script)=>
            {
                let tempQuickInput = _script as QuickInputNumView;
                tempQuickInput.SetCallback(
                (_num)=>
                {
                   this.mInputCodeIndicator.InsertOneNum(_num);
                } , 
                ()=>
                {
                    this.mInputCodeIndicator.DeleteOneNumber();
                });
            });
        });

        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false)
        });

        this.mResendBtn.SetClickCallback(()=>
        {
            this.StartCountDown();
            NetworkSend.Instance.GetSmsCode(this.mPhoneNum.string , LoginData.Instance.Data_SmsCodeType.mData);
        });

        this.mConfirmBtn.SetClickCallback(()=>
        {
            let currentInput = this.mInputCodeIndicator.GetCurrentContent();
            if(currentInput.length != 6)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00005"));
                return;
            }
            
            let smsCodeType = LoginData.Instance.Data_SmsCodeType.mData;
            if(smsCodeType == SmsCodeType.Login)
            {
                NetworkSend.Instance.LoginWithSmsCode(this.mPhoneNum.string , currentInput);
            }
            else if(smsCodeType == SmsCodeType.Register)
            {
                let inviteCode = LocalPlayerData.Instance.Data_SupervisorInviteCode.mData;
                let nickName = LocalPlayerData.Instance.Data_NickName.mData;
                let psw = LocalPlayerData.Instance.Data_LastInputPwd.mData;
                let head = LocalPlayerData.Instance.Data_Head.mData;
                let currentAreaCodeIndex = LocalPlayerData.Instance.Data_AreaCode.mData;
                let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
                let fullPhoneNumber = currentAreaCode + ' ' + LocalPlayerData.Instance.Data_LastInputPhoneNum.mData;
                NetworkSend.Instance.Register(fullPhoneNumber , currentInput,nickName,psw,head,inviteCode);
            }
            else if(smsCodeType == SmsCodeType.ResetPassword)
            {

            }
        });
    }
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_LastInputPhoneNum.AddListenner(this,(_data)=>
        {
            let currentAreaCodeIndex = LocalPlayerData.Instance.Data_AreaCode.mData;
            let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
            let fullPhoneNumber = currentAreaCode + ' ' + LocalPlayerData.Instance.Data_LastInputPhoneNum.mData;
            this.mPhoneNum.string = fullPhoneNumber;
        });
    }
    LateInit() 
    {
        
    }

    CustmoerDestory() 
    {
        this.unscheduleAllCallbacks();
    }

    StartCountDown()
    {
        this.StartSecondsTimer(60);
        this.OnSecondTimer();
        this.mCountDown.node.active = true;
        this.mResendBtn.node.active = false;
    }

    OnSecondTimer()
    {
        let seconds = this.GetRestSeconds();
        this.mCountDown.string = seconds.toString() + "s";
        if(seconds == 0)
        {
            this.mCountDown.node.active = false;
            this.mResendBtn.node.active = true;
        }
    }


}

