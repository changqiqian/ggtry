import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Me_RankDetail')
export class Me_RankDetail extends BaseUI {
    @property(BaseButton)
    mCloseBtn: BaseButton = null;
    @property(Label)
    mGameName: Label = null;
    @property(Label)
    mCreatorName: Label = null;
    @property(Label)
    mGameDate: Label = null;
    @property(Node)
    mIconCoin: Node = null;
    @property(Node)
    mDiamondCoin: Node = null;
    @property(Label)
    mPoolAmount: Label = null;
    @property(Label)
    mRankNum: Label = null;
    @property(Label)
    mGameTime: Label = null;
    @property(Node)
    mRegisterFee: Node = null;
    @property(Label)
    mGamePerson: Label = null;
    @property(Sprite)
    mHeadNo1: Sprite = null;
    @property(Sprite)
    mHeadNo2: Sprite = null;
    @property(Sprite)
    mHeadNo3: Sprite = null;

    InitParam() 
    {
        this.AutoAdaptMultipleTableUI();
    }
    BindUI() 
    {
        this.mCloseBtn.SetClickCallback(() => 
        {
            this.Show(false);
        });
    }
    RegDataNotify() {}
    LateInit() {}
    CustmoerDestory() {}
}
