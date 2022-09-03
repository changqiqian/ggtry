import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { BaseButton } from '../../common/BaseButton';
import { ToggleBtn } from '../../common/ToggleBtn';
import { GameData } from '../GameData';
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
    @property(BaseButton) 
    mMttTableBtn: BaseButton = null;
    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.mMttTableBtn.node.active = false;
        this.mMttTableBtn.SetClickCallback(()=>
        {

        });


        this.mInfoBtn.SetClickCallback(()=>
        {

        });

        this.mHistoryBtn.SetClickCallback(()=>
        {

        });

        this.mChatBtn.SetClickCallback(()=>
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

