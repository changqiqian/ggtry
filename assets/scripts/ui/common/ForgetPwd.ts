import { _decorator, Component, Node, Label, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
import { BaseButton } from '../common/BaseButton';

const { ccclass, property } = _decorator;

@ccclass('ForgetPwd')
export class ForgetPwd extends BaseUI {
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
                UIMgr.Instance.ShowToast(Localization.GetString("00002"));
                return
            }

            if(this.mAccountEditBox.string.indexOf(" ") != -1) 
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00015"));
                return
            }

            CommonNotify.Instance.Data_LastInputPhoneNum.mData = this.mAccountEditBox.string;
            let currentAreaCodeIndex = LocalPlayerData.Instance.Data_AreaCode.mData;
            let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
            let fullPhoneNumber = currentAreaCode + ' ' + this.mAccountEditBox.string;

            
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

    onEnable()
    {
        this.mAccountEditBox.string = "";
    }
}

