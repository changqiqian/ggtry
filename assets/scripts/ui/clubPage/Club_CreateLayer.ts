import { _decorator, Component, Node, EditBox, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Club_CreateLayer')
export class Club_CreateLayer extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(BaseButton) 
    mLogoBtn: BaseButton = null;
    @property(BaseButton) 
    mStampBtn: BaseButton = null;
    @property(EditBox) 
    mNameEditBox: EditBox = null;
    @property(Label) 
    mNameLimit: Label = null;
    @property(EditBox) 
    mProfileEditBox: EditBox = null;
    @property(Label) 
    mProfileLimit: Label = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    @property(Label) 
    mClubLimit: Label = null;
    InitParam()
    {

    }
    BindUI()
    {

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

