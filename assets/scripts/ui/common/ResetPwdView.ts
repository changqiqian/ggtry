import { _decorator, Component, Node, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
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
            if(this.mPwdEditbox.string == "")
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00004"));
                return;
            }

            if(this.mPwdEditbox.string.indexOf(" ") != -1)
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00015"));
                return;
            }

            if(this.mRePwdEditbox.string.indexOf(" ") != -1)
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00015"));
                return;
            }

            if(this.mRePwdEditbox.string != this.mPwdEditbox.string)
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00007"));
                return;
            }
            
            CommonNotify.GetInstance().Data_LastInputPwd.mData = this.mPwdEditbox.string;
            let currentAreaCodeIndex = LocalPlayerData.GetInstance().Data_AreaCode.mData;
            let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
            let fullPhoneNumber = currentAreaCode + ' ' + CommonNotify.GetInstance().Data_LastInputPhoneNum.mData;


            
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

