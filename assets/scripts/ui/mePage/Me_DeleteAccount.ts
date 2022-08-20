import { _decorator, Component, Node, Label, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { BaseButton } from '../common/BaseButton';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { Network, MsgID } from '../../network/Network';
import { GameConfig } from '../../GameConfig';
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
        Network.GetInstance().SendGetLogOffCode();

        Network.GetInstance().AddMsgListenner(
            MsgID.GetLogOffCode,
            (_msgBody) => {
                if (_msgBody != null) {
                    this.Reciprocal();
                }
            },
            this
        );
        Network.GetInstance().AddMsgListenner(
            MsgID.deleteAccount,
            (_msgBody) => {
                if (_msgBody != null && _msgBody.code === 1) {
                    GameConfig.ClearToken();
                    Network.GetInstance().SendActionData('mine', 'change_account', []);
                    Network.GetInstance().ClearWS();
                    UIMgr.GetInstance().ChangeScene(SceneType.Login);
                }
            },
            this
        );
        this.mCloseBtn.SetClickCallback(() => {
            UIMgr.GetInstance().ShowWindow('mePage', 'prefab/Me_DeleteAccount', false);
        });
        this.mReSendSmsBtn.SetClickCallback(() => {
            this.mReSendSmsBtn.node.active = false;
            Network.GetInstance().SendGetLogOffCode();
        });
        this.mDeleteBtn.SetClickCallback(() => {
            if (this.mSmsEditBox.string.length !== 6) {
                UIMgr.GetInstance().ShowToast(Localization.GetString('00006'));
                return;
            }

            if (this.mSmsEditBox.string.indexOf(' ') != -1) {
                UIMgr.GetInstance().ShowToast(Localization.GetString('00005'));
                return;
            }
            Network.GetInstance().SendLogOff(this.mSmsEditBox.string);
        });
    }
    RegDataNotify() {
        LocalPlayerData.GetInstance().AddListener(
            'Data_UserName',
            (_current, _before) => {
                let index = _current.indexOf(' ');
                let phoneNo = _current;
                let phoneNoLen = phoneNo.length;
                let phoneNoLast4 = phoneNo.substr(phoneNoLen - 4, 4);
                let phoneNoFirst6 = phoneNo.substr(0, index);
                this.mPhoneNumber.string = phoneNoFirst6 + ' **** ' + phoneNoLast4;
            },
            this
        );
    }
    LateInit() {}
    UnregDataNotify() {
        LocalPlayerData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() {}
    Reciprocal() {
        const _this = this;
        this.count = 60;
        startTimer();
        function startTimer() {
            if (_this.count !== 1) {
                _this.count = _this.count - 1;
                _this.mReSendText.string = '重新发送' + _this.count + 's';
                console.log('time:' + _this.count);
                setTimeout(startTimer, 1000);
            } else {
                _this.mReSendText.string = '';
                _this.mReSendSmsBtn.node.active = true;
            }
        }
    }
}
