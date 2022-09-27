import { _decorator, Component, Node, ToggleComponent } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { ToggleBtn } from '../common/ToggleBtn';
const { ccclass, property } = _decorator;

@ccclass('SettingWindow')
export class SettingWindow extends BaseUI {
    @property(BaseButton)
    mCloseBtn: BaseButton = null;
    @property(BaseButton)
    mSwitchAccountBtn: BaseButton = null;
    @property(ToggleBtn)
    mBBModeToggle: ToggleBtn = null;
    @property(ToggleBtn)
    mBGMToggle: ToggleBtn = null;
    @property(BaseButton)
    mEditPasswordBtn: BaseButton = null;
    @property(BaseButton)
    mDeleteAccountBtn: BaseButton = null;

    InitParam() {}

    BindUI() {
        this.mCloseBtn.SetClickCallback(() => {
            this.CloseAsWindow();
        });
        this.mDeleteAccountBtn.SetClickCallback(() => {
            UIMgr.GetInstance().ShowWindow('mePage', 'prefab/Me_DeleteAccountDetect');
            this.CloseAsWindow();
        });
        this.mSwitchAccountBtn.SetClickCallback(() => {
            GameConfig.ClearToken();
            Network.GetInstance().ClearWS();
            UIMgr.GetInstance().ChangeScene(SceneType.Login);
        });
        this.mEditPasswordBtn.SetClickCallback(() => {
            UIMgr.GetInstance().ShowWindow('mePage', 'prefab/Me_SettingWindow', false);
            this.ShowLayer('common', 'prefab/ForgetPwd');
        });

        this.mBBModeToggle.SetClickCallback((_value)=>
        {
            LocalPlayerData.GetInstance().Data_BBModeSetting.mData = _value;
        })
        this.mBGMToggle.SetClickCallback((_value)=>
        {
            LocalPlayerData.GetInstance().Data_BGMSetting.mData = _value;
        })
    }

    RegDataNotify() 
    {

        LocalPlayerData.GetInstance().Data_BBModeSetting.AddListenner(this,(_data)=>
        {
            this.mBBModeToggle.SetShowStauts(_data);
            GameConfig.SaveBBToggle(_data);
        })

        LocalPlayerData.GetInstance().Data_BGMSetting.AddListenner(this,(_data)=>
        {
            this.mBGMToggle.SetShowStauts(_data);
            GameConfig.SaveBGMSetting(_data);
        })
    }

    LateInit() {}

    CustmoerDestory() {}

}
