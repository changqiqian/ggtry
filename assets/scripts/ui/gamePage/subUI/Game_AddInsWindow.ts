import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_AddInsWindow')
export class Game_AddInsWindow extends BaseUI {

    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Label) 
    mInsAmount: Label = null;
    @property(Label) 
    mRatio: Label = null;
    @property(Label) 
    mBalance: Label = null;

    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    
    
    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });

        this.mConfirmBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowToast("没有功能");
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

