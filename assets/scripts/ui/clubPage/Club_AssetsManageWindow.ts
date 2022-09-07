import { _decorator, Component, Node, Label, Sprite, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Club_AssetsManageWindow')
export class Club_AssetsManageWindow extends BaseUI 
{
    @property(Label) 
    mTitle: Label = null;   
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;   
    @property(Sprite) 
    mLogo: Sprite = null;   
    @property(EditBox) 
    mEditBox: EditBox = null;   
    @property(Label) 
    mClubName: Label = null;   
    @property(Label) 
    mClubId: Label = null;
    @property(Label) 
    mTotalAmount: Label = null;
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
        })
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

