import { _decorator, Component, Node, Sprite, Label, SpriteFrame } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Me_PrizeItem')
export class Me_PrizeItem extends BaseUI {
    @property(Sprite)
    mPrizeIcon: Sprite = null;
    @property(Label)
    mPrizeName: Label = null;
    @property(SpriteFrame)
    mRewardSprites: Array<SpriteFrame> = [];

    _data: any = null;

    InitParam() {}
    BindUI() {}
    RegDataNotify() {}
    LateInit() {}
    CustmoerDestory() {}
    public InitWithData(_data: any) {
        this.mPrizeName.string = _data.describe;
        this.mPrizeIcon.spriteFrame = this.mRewardSprites[_data.rewardType - 1];
    }
}
