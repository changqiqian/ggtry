import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { HallData } from '../hall/HallData';
import { BaseButton } from '../common/BaseButton';
import { Network } from '../../network/Network';
import { UIMgr } from '../../base/UIMgr';
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

    mdata: any = null;

    InitParam() {}
    BindUI() {
        this.mMessageItemBtn.SetClickCallback(() => {
            UIMgr.Instance.ShowLayer('mePage', 'prefab/Me_MessageDetail');
        });
    }
    RegDataNotify() {}
    LateInit() {}
    CustmoerDestory() {}
    public InitWithData(_data: any) {
        this.mTitle.string = _data.subject;
        this.mSubTitle.string = _data.summary;
        this.mDate.string = _data.pubTime;
        this.mReadDot.active = !_data.isRead;
        this.mdata = _data;
    }
}
