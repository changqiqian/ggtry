import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Me_RankDetailItem')
export class Me_RankDetailItem extends BaseUI {
    @property(Label)
    mPlayerNo: Label = null;
    @property(Sprite)
    mPlayerHead: Sprite = null;
    @property(Label)
    mPlayerName: Label = null;
    @property(Label)
    mPlayerPrize: Label = null;

    InitParam() {}
    BindUI() {}
    RegDataNotify() {}
    LateInit() {}
    CustmoerDestory() {}
}
