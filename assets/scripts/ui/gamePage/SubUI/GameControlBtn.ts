import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { ToggleBtn } from '../../common/ToggleBtn';
import { BaseButton } from '../../common/BaseButton';
import { GameData } from '../GameData';
import { GameStartBtn } from './GameStartBtn';
import { AudioManager } from '../../../base/AudioManager';
import { UIMgr } from '../../../base/UIMgr';
import { GameMenu } from './GameMenu';
const { ccclass, property } = _decorator;

@ccclass('GameControlBtn')
export class GameControlBtn  extends BaseUI 
{
    public static PrefabPath : string = "prefab/GameControlBtn";
    public static Bunddle : string = "gamePage";

    mFastModeToggle : ToggleBtn = null;
    mMinusBtn : BaseButton = null;
    mAddBtn : BaseButton = null;
    mAutoToggle : ToggleBtn = null;
    mMenuBtn : BaseButton = null;
    InitParam()
    {
        
    }
    BindUI()
    {
        this.AddSubView("GameStartBtn" , GameStartBtn.Bunddle , GameStartBtn.PrefabPath);

        this.mFastModeToggle = this.node.getChildByPath("FastModeToggle").getComponent(ToggleBtn);
        this.mMinusBtn = this.node.getChildByPath("MinusBtn").getComponent(BaseButton);
        this.mAddBtn = this.node.getChildByPath("AddBtn").getComponent(BaseButton);
        this.mAutoToggle = this.node.getChildByPath("AutoToggle").getComponent(ToggleBtn);
        this.mMenuBtn = this.node.getChildByPath("MenuBtn").getComponent(BaseButton);

        this.mFastModeToggle.ShowUnselected();
        this.mFastModeToggle.SetClickCallback((_data)=>
        {
            GameData.Instance.Data_FastMode.mData = _data;
        });
        this.mAutoToggle.ShowUnselected();
        this.mAutoToggle.SetClickCallback((_data)=>
        {
            GameData.Instance.Data_AutoMode.mData = _data;
        });

        this.mMinusBtn.SetClickCallback(()=>
        {
            GameData.Instance.MinusSingleBetAmount();
        });
        this.mAddBtn.SetClickCallback(()=>
        {
            GameData.Instance.AddSingleBetAmount();
        });
        this.mMenuBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("GameMenu",GameMenu.Bunddle,GameMenu.PrefabPath);
        });
        GameData.Instance.Data_SingleBetIndex.mData = 0;

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

