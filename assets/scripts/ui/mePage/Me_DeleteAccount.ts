import { _decorator, Component, Node, Label, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { BaseButton } from '../common/BaseButton';
import { SceneType, UIMgr } from '../../base/UIMgr';

const { ccclass, property } = _decorator;

@ccclass('Me_DeleteAccount')
export class Me_DeleteAccount extends BaseUI {
    @property(BaseButton)
    mCloseBtn: BaseButton = null;
    @property(Label)
    mPhoneNumber: Label = null;
    @property(EditBox)
    mSmsEditBox: EditBox = null;
    @property(BaseButton)
    mReSendSmsBtn: BaseButton = null;
    @property(Label)
    mReSendText: Label = null;
    @property
    count: number = 10;
    @property(BaseButton)
    mDeleteBtn: BaseButton = null;

    InitParam() {}
    BindUI() {

        this.mCloseBtn.SetClickCallback(() => 
        {
            this.CloseAsWindow();
        });
        this.mReSendSmsBtn.SetClickCallback(() => {
            this.mReSendSmsBtn.node.active = false;
        });
        this.mDeleteBtn.SetClickCallback(() => 
        {
            if (this.mSmsEditBox.string.length !== 6) 
            {
                UIMgr.Instance.ShowToast(Localization.GetString('00006'));
                return;
            }

            if (this.mSmsEditBox.string.indexOf(' ') >= 0) 
            {
                UIMgr.Instance.ShowToast(Localization.GetString('00005'));
                return;
            }
        });
    }
    RegDataNotify() {


    }
    LateInit() {}

    CustmoerDestory() {}
    Reciprocal() {
        const _this = this;
        this.count = 60;
        startTimer();
        function startTimer() {
            if (_this.count !== 1) {
                _this.count = _this.count - 1;
                _this.mReSendText.string = '重新发送' + _this.count + 's';
                setTimeout(startTimer, 1000);
            } else {
                _this.mReSendText.string = '';
                _this.mReSendSmsBtn.node.active = true;
            }
        }
    }

    StartCountDown() {
        this.StartSecondsTimer(60);
        this.OnSecondTimer();
    }

    OnSecondTimer() {
        let seconds = this.GetRestSeconds();
        if (seconds == 0) {
            this.mReSendText.string = '';
            this.mReSendSmsBtn.node.active = true;
        } else {
            this.count = this.count - 1;
            this.mReSendText.string = '重新发送' + seconds + 's';
        }
    }
}
