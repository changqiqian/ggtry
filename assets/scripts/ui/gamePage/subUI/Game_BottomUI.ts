import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { ToggleBtn } from '../../common/ToggleBtn';
const { ccclass, property } = _decorator;

@ccclass('Game_BottomUI')
export class Game_BottomUI extends BaseUI 
{
    @property(BaseButton) 
    mInfoBtn: BaseButton = null;
    @property(BaseButton) 
    mHistoryBtn: BaseButton = null;
    @property(BaseButton) 
    mChatBtn: BaseButton = null;
    @property(ToggleBtn) 
    mMicToggle: ToggleBtn = null;
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
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }
}

