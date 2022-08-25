import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { HallData } from '../hall/HallData';
import { BaseButton } from '../common/BaseButton';
import { Network } from '../../network/Network';
const { ccclass, property } = _decorator;

@ccclass('Me_MessageItem')
export class Me_MessageItem extends BaseUI {
    @property(BaseButton)
    mMessageItemBtn: BaseButton = null;
    @property(Label)
    mTitle: Label = null;
    @property(Label)
    mSubTitle: Label = null;
    @property(Label)
    mDate: Label = null;
    @property(Node)
    mReadDot: Node = null;

    _data: any = null;

    InitParam() {}
    BindUI() {
        this.mMessageItemBtn.SetClickCallback(() => {
            this.ShowLayer('mePage', 'prefab/Me_MessageDetail');
            console.log('data:' + JSON.stringify(this._data));
            HallData.GetInstance().Data_MeMessagDetailId = this._data.mid;
            HallData.GetInstance().Data_MeMessagDetailData = this._data.content;
            Network.GetInstance().SendMessageIsRead(this._data.mode, this._data.mid);
        });
    }
    RegDataNotify() {}
    LateInit() {}
    UnregDataNotify() {}
    CustmoerDestory() {}
    public InitWithData(_data: any) {
        this.mTitle.string = _data.subject;
        this.mSubTitle.string = _data.summary;
        this.mDate.string = _data.pubTime;
        this.mReadDot.active = !_data.isRead;
        this._data = _data;
    }
}
