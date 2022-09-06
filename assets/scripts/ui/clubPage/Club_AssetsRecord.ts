import { _decorator, Component, Node, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Club_AssetsRecord')
export class Club_AssetsRecord extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    
    InitParam()
    {

    }
    BindUI()
    {
        this.mBackBtn.SetClickCallback(()=>
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

