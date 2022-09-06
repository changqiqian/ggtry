import { _decorator, Component, Node, EditBox, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Club_AssetsManage')
export class Club_AssetsManage extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(EditBox) 
    mEditBox: EditBox = null;
    @property(BaseButton) 
    mSearchBtn: BaseButton = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    @property(BaseButton) 
    mTakeBackBtn: BaseButton = null;
    @property(BaseButton) 
    mGiveBtn: BaseButton = null;
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

