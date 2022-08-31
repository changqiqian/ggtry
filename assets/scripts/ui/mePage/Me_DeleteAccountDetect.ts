import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { UIMgr } from '../../base/UIMgr';
import { Network } from '../../network/Network';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Me_DeleteAccountDetect')
export class Me_DeleteAccountDetect extends BaseUI {
    @property(BaseButton)
    mCloseBtn: BaseButton = null;
    @property(Node)
    mMatchOkIcon: Node = null;
    @property(Node)
    mMatchNotOkIcon: Node = null;
    @property(Node)
    mClubOkIcon: Node = null;
    @property(Node)
    mClubNotOkIcon: Node = null;
    @property(Node)
    mRegisterTimeOkIcon: Node = null;
    @property(Node)
    mRegisterTimeNotOkIcon: Node = null;
    @property(BaseButton)
    mDeleteBtn: BaseButton = null;
    @property(Label)
    RegisterDayText: Label = null;

    InitParam() {}

    BindUI() {
        this.mCloseBtn.SetClickCallback(() => {
            UIMgr.GetInstance().ShowWindow('mePage', 'prefab/Me_DeleteAccountDetect', false);
        });
        this.mDeleteBtn.SetClickCallback(() => {
            if (this.mMatchOkIcon.active && this.mClubOkIcon.active && this.mRegisterTimeOkIcon.active) {
                console.log('可以删帐号');
                UIMgr.GetInstance().ShowWindow('mePage', 'prefab/Me_DeleteAccount');
                UIMgr.GetInstance().ShowWindow('mePage', 'prefab/Me_DeleteAccountDetect', false);
            } else {
                console.log('不可以删帐号');
                UIMgr.GetInstance().ShowWindow('mePage', 'prefab/Me_DeleteAccount');
                UIMgr.GetInstance().ShowWindow('mePage', 'prefab/Me_DeleteAccountDetect', false);
            }
        });

        Network.GetInstance().SendCheckIsCanDeleteAccount();
    }

    RegDataNotify() {
        HallData.GetInstance().AddListener(
            'Data_DetectCanDeleteData',
            (_current, _before) => {
                this.RegisterDayText.string = '3.账号注册时长需超过' + _current.registerDays + '天';
                this.mMatchOkIcon.active = _current.hasMatchIsOk;
                this.mMatchNotOkIcon.active = !_current.hasMatchIsOk;
                this.mClubOkIcon.active = _current.hasClubSsOk;
                this.mClubNotOkIcon.active = !_current.hasClubSsOk;
                this.mRegisterTimeOkIcon.active = _current.registerTimeIsOk;
                this.mRegisterTimeNotOkIcon.active = !_current.registerTimeIsOk;
            },
            this
        );
    }

    LateInit() {}

    CustmoerDestory() {}
}
