import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
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

    }
    BindUI()
    {
        this.mNLHBtn.SetClickCallback(()=>
        {

        });
        this.mShortBtn.SetClickCallback(()=>
        {

        });
        this.mMttBtn.SetClickCallback(()=>
        {

        });
        this.mModuleBtn.SetClickCallback(()=>
        {

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

