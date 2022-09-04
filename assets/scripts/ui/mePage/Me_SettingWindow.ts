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
            LocalPlayerData.GetInstance().Data_BBModeSetting = _value;
        })
        this.mBGMToggle.SetClickCallback((_value)=>
        {
            LocalPlayerData.GetInstance().Data_BGMSetting = _value;
        })
    }

    RegDataNotify() 
    {
        LocalPlayerData.GetInstance().AddListener("Data_BBModeSetting",(_current , _before)=>
        {
            this.mBBModeToggle.SetShowStauts(_current);
            GameConfig.SaveBBToggle(_current);
        },this);
        LocalPlayerData.GetInstance().AddListener("Data_BGMSetting",(_current , _before)=>
        {
            this.mBGMToggle.SetShowStauts(_current);
            GameConfig.SaveBGMSetting(_current);
        },this);
    }

    LateInit() {}

    CustmoerDestory() {}

}
