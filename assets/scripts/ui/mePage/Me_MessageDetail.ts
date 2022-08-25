import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { HallData } from '../hall/HallData';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Me_MessageDetail')
export class Me_MessageDetail extends BaseUI {
    @property(BaseButton)
    mBackBtn: BaseButton = null;
    @property(Label)
    mDetail: Label = null;

    InitParam() {}
    BindUI() {
        console.log('data:' + HallData.GetInstance().Data_MeMessagDetailData);
        this.mDetail.string = HallData.GetInstance().Data_MeMessagDetailData;

        this.mBackBtn.SetClickCallback(() => {
            this.Show(false);
        });
    }
    RegDataNotify() {
        HallData.GetInstance().AddListener(
            'Data_MeMessagDetailData',
            (_current, _before) => {
                this.mDetail.string = _current;
            },
            this
        );
    }
    LateInit() {}
    UnregDataNotify() {}
    CustmoerDestory() {}
}
