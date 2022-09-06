import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Club_Setting')
export class Club_Setting extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(BaseButton) 
    mAssetsBtn: BaseButton = null;
    @property(BaseButton) 
    mAssetsRecordBtn: BaseButton = null;
    @property(BaseButton) 
    mMoreMemberBtn: BaseButton = null;
    @property(Node) 
    mUserContainer: Node = null;
    @property(Label) 
    mMemberCount: Label = null;
    @property(BaseButton) 
    mLogoBtn: BaseButton = null;
    @property(BaseButton) 
    mStampBtn: BaseButton = null;
    @property(BaseButton) 
    mClubNameBtn: BaseButton = null;
    @property(BaseButton) 
    mClubId: BaseButton = null;
    @property(BaseButton) 
    mClubNotifyBtn: BaseButton = null;
    @property(BaseButton) 
    mClubDescribe: BaseButton = null;
    @property(BaseButton) 
    mUnionBtn: BaseButton = null;
    @property(BaseButton) 
    mExitBtn: BaseButton = null;
    @property(BaseButton) 
    mDismissBtn: BaseButton = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mBackBtn.SetClickCallback(()=>
        {

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

