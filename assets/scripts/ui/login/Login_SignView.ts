import { _decorator, Component, Node, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { LoginData } from './LoginData';
const { ccclass, property } = _decorator;

@ccclass('Login_SignView')
export class Login_SignView extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(BaseButton) 
    mAreaCodeBtn: BaseButton = null;
    @property(EditBox) 
    mAccountEditBox: EditBox = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    onEnable()
    {
        this.mAccountEditBox.string = "";
        LoginData.Instance.Data_InSignInProgress.mData = true;
    }

    onDisable()
    {
        LoginData.Instance.Data_InSignInProgress.mData = false;
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

            LocalPlayerData.Instance.Data_LastInputPhoneNum.mData = this.mAccountEditBox.string;
            let currentAreaCodeIndex = LocalPlayerData.Instance.Data_AreaCode.mData;
            let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
            let fullPhoneNumber = currentAreaCode + ' ' + LocalPlayerData.Instance.Data_LastInputPhoneNum.mData;
            NetworkSend.Instance.VerifyPhoneNumber(fullPhoneNumber);
        });
    }
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_AreaCode.AddListenner(this,(_data)=>
        {
            this.mAreaCodeBtn.SetTitle(GameConfig.AreaCodeList[_data].areaCode);
        })

        LoginData.Instance.Data_VerifyPhoneNumber.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                this.ShowLayer("login","prefab/Login_SetUserInfo");
            }
        })
   
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }
}

