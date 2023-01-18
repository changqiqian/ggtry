import { _decorator, Component, Node, Button } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { BaseButton } from '../../common/BaseButton';
import { CowboyData } from '../CowboyData';
const { ccclass, property } = _decorator;

@ccclass('cb_TopMenu')
export class cb_TopMenu extends BaseUI {

    @property(BaseButton) 
    mSettingBtn: BaseButton = null;
    @property(BaseButton) 
    mRuleBtn: BaseButton = null;
    @property(BaseButton) 
    mMoreBtn: BaseButton = null;
    @property(BaseButton) 
    mPlayerBtn: BaseButton = null;


    InitParam() 
    {
        CowboyData.Instance.Data_OtherPlayerPos.mData = this.mPlayerBtn.node.worldPosition;
    }
    BindUI() 
    {
        this.mSettingBtn.SetClickCallback((_data)=>
        {
            UIMgr.Instance.ShowLayer("cowboy","prefab/subUI/cb_Menu",true);
        })
        this.mRuleBtn.SetClickCallback((_data)=>
        {
            
        })
        this.mMoreBtn.SetClickCallback((_data)=>
        {
            
        })
        this.mPlayerBtn.SetClickCallback((_data)=>
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

