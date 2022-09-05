import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { Club_MainEnter } from './Club_MainEnter';
const { ccclass, property } = _decorator;

@ccclass('Club_SearchResult')
export class Club_SearchResult extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Club_MainEnter) 
    mClub_MainEnter: Club_MainEnter = null;
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

