import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import { LoginType, Network, SmsCodeType } from '../../network/Network';
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
            Network.GetInstance().SendGetSMSCode(this.mPhoneNum.string, CommonNotify.GetInstance().Data_SmsCodeType);
            this.StartCountDown();
        });

        this.mConfirmBtn.SetClickCallback(()=>
        {
            let currentInput = this.mInputCodeIndicator.GetCurrentContent();
            if(currentInput.length != 6)
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00005"));
                return;
            }

            let currentSmsType = CommonNotify.GetInstance().Data_SmsCodeType;
            switch(currentSmsType)
            {
                case SmsCodeType.USER_REGISTER:
                    {
                        Network.GetInstance().SendVerifyCode(this.mPhoneNum.string , currentInput);
                    }
                    break;
                case SmsCodeType.USER_Login:
                    {
                        Network.GetInstance().SendLogin( this.mPhoneNum.string , currentInput , LoginType.SmsCode);
                    }
                    break;
                case SmsCodeType.USER_RESET_PWD:
                    {
                        Network.GetInstance().SendVerifyCode(this.mPhoneNum.string , currentInput);
                    }
                    break;
            }
           
        });
    }
    RegDataNotify() 
    {
        CommonNotify.GetInstance().AddListener("Data_LastInputPhoneNum",(_current , _before)=>
        {
            let currentAreaCodeIndex = LocalPlayerData.GetInstance().Data_AreaCode;
            let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
            let fullPhoneNumber = currentAreaCode + ' ' + CommonNotify.GetInstance().Data_LastInputPhoneNum;
            this.mPhoneNum.string = fullPhoneNumber;
        },this);

        CommonNotify.GetInstance().AddListener("Data_SmsCodeVerifySuccess",(_current , _before)=>
        {
            if(this.node.active == false)
            {
                return;
            }

            let currentSmsType = CommonNotify.GetInstance().Data_SmsCodeType;
            switch(currentSmsType)
            {
                case SmsCodeType.USER_REGISTER:
                    {
                        this.ShowLayer("common" , "prefab/ResetPwdView");
                        this.Show(false);
                    }
                    break;
                case SmsCodeType.USER_Login:
                    {

                    }
                    break;
                case SmsCodeType.USER_RESET_PWD:
                    {
                        this.ShowLayer("common" , "prefab/ResetPwdView");
                        this.Show(false);
                    }
                    break;
            }
        },this);
        
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        CommonNotify.GetInstance().RemoveListenerByTarget(this);
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

