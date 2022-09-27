import { _decorator, Component, Node, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
import { BaseButton } from '../common/BaseButton';
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
                UIMgr.GetInstance().ShowToast(Localization.GetString("00002"));
                return
            }

            if(this.mAccountEditBox.string.indexOf(" ") != -1) 
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00015"));
                return
            }


            CommonNotify.GetInstance().Data_LastInputPhoneNum.mData = this.mAccountEditBox.string;
            let currentAreaCodeIndex = LocalPlayerData.GetInstance().Data_AreaCode.mData;
            let currentAreaCode = GameConfig.AreaCodeList[currentAreaCodeIndex].areaCode;
            let fullPhoneNumber = currentAreaCode + ' ' + this.mAccountEditBox.string;
   
            
        });
    }
    RegDataNotify() 
    {

        LocalPlayerData.GetInstance().Data_AreaCode.AddListenner(this,(_data)=>
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

