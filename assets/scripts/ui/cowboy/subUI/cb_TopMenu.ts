import { _decorator, Component, Node, Button } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('cb_TopMenu')
export class cb_TopMenu extends BaseUI {

    @property(BaseButton) 
    mSettingBtn: BaseButton = null;
    @property(Button) 
    mRuleBtn: BaseButton = null;
    @property(BaseButton) 
    mMoreBtn: BaseButton = null;
    @property(BaseButton) 
    mPlayerBtn: BaseButton = null;


    InitParam() 
    {

    }
    BindUI() 
    {
        this.mSettingBtn.SetClickCallback(()=>
        {

        })
        this.mRuleBtn.SetClickCallback(()=>
        {
            
        })
        this.mMoreBtn.SetClickCallback(()=>
        {
            
        })
        this.mPlayerBtn.SetClickCallback(()=>
        {
            
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

    OnSettingBtn()
    {

    }

    OnRuleBtn()
    {

    }

    OnMoreBtn()
    {

    }

    OnPlayerBtn()
    {

    }
}

