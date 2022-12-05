import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { BaseButton } from '../common/BaseButton';
import { HallData, Me_ReocordSubPage } from '../hall/HallData';
import { ToggleBtn } from '../common/ToggleBtn';
const { ccclass, property } = _decorator;

@ccclass('Me_Record')
export class Me_Record extends BaseUI {
    @property(BaseButton)
    mBackBtn: BaseButton = null;
    @property(Node)
    mLayout: Node = null;

    onEnable() {
        HallData.Instance.Data_MeRecodeSubPage.mData = Me_ReocordSubPage.CyberRecord;
    }

    InitParam() 
    {
        this.OffsetHallTop();
    }
    BindUI() {
        this.mBackBtn.SetClickCallback(() => {
            this.Show(false);
        });

        for (let i = this.mLayout.children.length - 1; i >= 0; i--) {
            let current = this.mLayout.children[i].getComponent(ToggleBtn);
            let title = '';
            switch (i) {
                case Me_ReocordSubPage.CyberRecord:
                    title = Localization.GetString('01002');
                    break;
                case Me_ReocordSubPage.DiamondReocd:
                    title = Localization.GetString('01003');
                    break;
            }
            current.SetTitle(title);
            current.SetDataNotify(HallData.Instance.Data_MeRecodeSubPage, i);
        }
    }
    RegDataNotify() {


        HallData.Instance.Data_MeRecodeSubPage.AddListenner(this , (_data)=>
        {
            console.log('点击:' + _data);
        })
    }
    LateInit() {}
    CustmoerDestory() {}
}
