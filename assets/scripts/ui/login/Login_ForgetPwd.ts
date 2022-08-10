import { _decorator, Component, Node, Label, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import { Network, SmsCodeType } from '../../network/Network';
import { BaseButton } from '../common/BaseButton';
import { LoginData } from './LoginData';
const { ccclass, property } = _decorator;

@ccclass('Login_ForgetPwd')
export class Login_ForgetPwd extends BaseUI {
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(BaseButton) 
    mAreaCodeBtn: BaseButton = null;
    @property(EditBox) 
    mAccountEditBox: EditBox = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
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
            if(this.mAccountEditBox.string.length < 7) 
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00002"));
                return
            }

            if(this.mAccountEditBox.string.indexOf(" ") != -1) 
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00015"));
                return
            }

            CommonNotify.GetInstance().Data_LastInputPhoneNum = this.mAccountEditBox.string;
            let currentAreaCodeIndex = LocalPlayerData.GetInstance().Data_AreaCode;
            let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
            let fullPhoneNumber = currentAreaCode + ' ' + this.mAccountEditBox.string;
            CommonNotify.GetInstance().Data_SmsCodeType = SmsCodeType.USER_RESET_PWD;
            Network.GetInstance().SendGetSMSCode(fullPhoneNumber, SmsCodeType.USER_RESET_PWD);
            
        });
    }

    RegDataNotify() 
    {
        LocalPlayerData.GetInstance().AddListener("Data_AreaCode",(_current , _before)=>
        {
            this.mAreaCodeBtn.SetTitle(GameConfig.AreaCodeList[_current].areaCode);
        },this);

        CommonNotify.GetInstance().AddListener("Data_SmsCodeSuccess",(_current , _before)=>
        {
            if(_current)
            {
                if(CommonNotify.GetInstance().Data_SmsCodeType == SmsCodeType.USER_RESET_PWD)
                {
                    this.ShowLayer("common","prefab/SMSCodeView");
                }
            }
        },this);
    }
    LateInit() 
    {

    }

    UnregDataNotify() 
    {
        LocalPlayerData.GetInstance().RemoveListenerByTarget(this);
        CommonNotify.GetInstance().RemoveListenerByTarget(this);
    }

    CustmoerDestory() 
    {

    }

    onEnable()
    {
        this.mAccountEditBox.string = "";
    }
}

