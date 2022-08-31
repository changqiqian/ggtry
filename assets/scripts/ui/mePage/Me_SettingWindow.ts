import { _decorator, Component, Node, ToggleComponent } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
const { ccclass, property } = _decorator;

@ccclass('SettingWindow')
export class SettingWindow extends BaseUI {
    @property(BaseButton)
    mCloseBtn: BaseButton = null;
    @property(BaseButton)
    mSwitchAccountBtn: BaseButton = null;
    @property(ToggleComponent)
    mBBToggleBtn: ToggleComponent | null = null;
    @property(ToggleComponent)
    mMusicToggleBtn: ToggleComponent | null = null;
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
            Network.GetInstance().SendActionData('mine', 'change_account', []);
            Network.GetInstance().ClearWS(true);
            UIMgr.GetInstance().ChangeScene(SceneType.Login);
        });
        this.mEditPasswordBtn.SetClickCallback(() => {
            UIMgr.GetInstance().ShowWindow('mePage', 'prefab/Me_SettingWindow', false);
            this.ShowLayer('common', 'prefab/ForgetPwd');
        });
        this.mBBToggleBtn.isChecked = Boolean(GameConfig.ReadSimpleData('SHOWBB_LOACAL_D', false));
        this.mMusicToggleBtn.isChecked = GameConfig.ReadSimpleData('setting_background_sound', false) === '1' ? true : false;

        this.mBBToggleBtn.node.on('toggle', this.BBToggle, this);
        this.mMusicToggleBtn.node.on('toggle', this.musicToggle, this);
    }

    RegDataNotify() {}

    LateInit() {}

    CustmoerDestory() {}

    BBToggle(toggle: ToggleComponent) {
        GameConfig.SaveBBTroggle(toggle.isChecked);
    }
    musicToggle(toggle: ToggleComponent) {
        GameConfig.SavePlayBGMTroggle(toggle.isChecked ? 1 : 0);
        Network.GetInstance().SendActionData('mine', 'setting_background_sound', [toggle.isChecked]);
        if (toggle.isChecked) {
            //Todo 播音乐
        } else {
            // 停止播放
        }
    }
}
