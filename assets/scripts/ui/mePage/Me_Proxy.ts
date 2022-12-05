import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Me_Proxy')
export class Me_Proxy extends BaseUI {
    @property(BaseButton)
    mBackBtn: BaseButton = null;

    InitParam() 
    {
        this.OffsetHallTop();
    }
    BindUI() {
        this.mBackBtn.SetClickCallback(() => {
            this.Show(false);
        });
    }
    RegDataNotify() {}
    LateInit() {}
    CustmoerDestory() {}
}
