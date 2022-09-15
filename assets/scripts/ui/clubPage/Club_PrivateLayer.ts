import { _decorator, Component, Node, Label, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { ToggleBtn } from '../common/ToggleBtn';
const { ccclass, property } = _decorator;

@ccclass('Club_PrivateLayer')
export class Club_PrivateLayer extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(Label) 
    mClubName: Label = null;
    @property(Label) 
    mClubId: Label = null;
    @property(BaseButton) 
    mMessageBtn: BaseButton = null;
    @property(BaseButton) 
    mMenuBtn: BaseButton = null;
    @property(ToggleBtn) 
    mAssetsToggle: ToggleBtn = null;
    @property(Label) 
    mMoney: Label = null;
    @property(BaseButton) 
    mAseetsBtn: BaseButton = null;
    @property(BaseButton) 
    mRecordBtn: BaseButton = null;
    @property(BaseButton) 
    mDataBtn: BaseButton = null;
    @property(BaseButton) 
    mCreateBtn: BaseButton = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mAseetsBtn.SetClickCallback(()=>
        {
            this.ShowLayer("clubPage","prefab/Club_AssetsManage");
        });
        this.mRecordBtn.SetClickCallback(()=>
        {
            this.ShowLayer("clubPage","prefab/Club_RecordLayer");
        });
        this.mDataBtn.SetClickCallback(()=>
        {
            this.ShowLayer("clubPage","prefab/Club_DataLayer");
        });
        this.mCreateBtn.SetClickCallback(()=>
        {
            this.ShowLayer("clubPage","prefab/Club_CreateGameOption");
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

