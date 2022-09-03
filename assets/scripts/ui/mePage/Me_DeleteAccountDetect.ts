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

    }

    LateInit() {}

    CustmoerDestory() {}
}
