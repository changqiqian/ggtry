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

    InitParam() 
    {
        this.OffsetHallTop();
    }
    BindUI() 
    {

        this.mBackBtn.SetClickCallback(() => 
        {
            this.Show(false);
        });
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }
    CustmoerDestory() 
    {
        
    }
}
