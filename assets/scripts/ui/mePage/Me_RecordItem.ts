import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Me_RecordItem')
export class Me_RecordItem extends BaseUI {
    @property(Label)
    mMoneyType: Label = null;
    @property(Label)
    mGameType: Label = null;
    @property(Label)
    mAmount: Label = null;
    @property(Node)
    mAmountIcon: Node = null;
    @property(Label)
    mDate: Label = null;

    InitParam() {}
    BindUI() {}
    RegDataNotify() {}
    LateInit() {}
    CustmoerDestory() {}
}
