import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_CreateGameOption')
export class Club_CreateGameOption extends BaseUI 
{
    @property(BaseButton) 
    mNLHBtn: BaseButton = null;
    @property(BaseButton) 
    mShortBtn: BaseButton = null;
    @property(BaseButton) 
    mMttBtn: BaseButton = null;
    @property(BaseButton) 
    mModuleBtn: BaseButton = null;
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    InitParam()
    {
        this.AutoAdaptMultipleTableUI();
    }
    BindUI()
    {
        this.mNLHBtn.SetClickCallback(()=>
        {
            HallData.Instance.ResetCreateRoomParam(GameType.GameType_TexasCash);
            this.ShowLayer("clubPage","prefab/Club_CreateTexas");
        });
        this.mShortBtn.SetClickCallback(()=>
        {
            HallData.Instance.ResetCreateRoomParam(GameType.GameType_TexasCash);
            this.ShowLayer("clubPage","prefab/Club_CreateShort");
        });
        this.mMttBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowToast("功能开发中");
        });
        this.mModuleBtn.SetClickCallback(()=>
        {
            this.ShowLayer("clubPage","prefab/Club_CreateGameModuleLayer");
        });
        this.mCloseBtn.SetClickCallback(()=>
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

