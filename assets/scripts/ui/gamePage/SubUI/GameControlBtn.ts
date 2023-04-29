import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { ToggleBtn } from '../../common/ToggleBtn';
import { BaseButton } from '../../common/BaseButton';
import { BottomUIEnum, GameData } from '../GameData';
import { GameStartBtn } from './GameStartBtn';
import { AudioManager } from '../../../base/AudioManager';
import { UIMgr } from '../../../base/UIMgr';
import { GameMenu } from './GameMenu';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
const { ccclass, property } = _decorator;

@ccclass('GameControlBtn')
export class GameControlBtn  extends BaseUI 
{
    public static PrefabPath : string = "prefab/GameControlBtn";
    public static Bunddle : string = "gamePage";

    mMovingShow : MovingShow = null;
    mFastModeToggle : ToggleBtn = null;
    mMinusBtn : BaseButton = null;
    mAddBtn : BaseButton = null;
    mAutoBtn : BaseButton = null;
    mMenuBtn : BaseButton = null;
    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }
    InitParam()
    {
        
    }
    BindUI()
    {
        this.mMovingShow = this.node.getChildByPath("MovingShow").getComponent(MovingShow);
        this.mFastModeToggle = this.node.getChildByPath("MovingShow/FastModeToggle").getComponent(ToggleBtn);
        this.mMinusBtn = this.node.getChildByPath("MovingShow/MinusBtn").getComponent(BaseButton);
        this.mAddBtn = this.node.getChildByPath("MovingShow/AddBtn").getComponent(BaseButton);
        this.mAutoBtn = this.node.getChildByPath("MovingShow/AutoBtn").getComponent(BaseButton);
        this.mMenuBtn = this.node.getChildByPath("MovingShow/MenuBtn").getComponent(BaseButton);

        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);
        this.AddSubView("GameStartBtn" , GameStartBtn.Bunddle , GameStartBtn.PrefabPath,null,this.mMovingShow.node);

        this.mFastModeToggle.ShowUnselected();
        this.mFastModeToggle.SetClickCallback((_data)=>
        {
            GameData.Instance.Data_FastMode.mData = _data;
        });


        this.mMinusBtn.SetClickCallback(()=>
        {
            GameData.Instance.MinusSingleBetAmount();
        });
        this.mAddBtn.SetClickCallback(()=>
        {
            GameData.Instance.AddSingleBetAmount();
        });
        this.mAutoBtn.SetClickCallback(()=>
        {
            GameData.Instance.Data_BottomUIEnum.mData = BottomUIEnum.AutoSettingUI;
        });
        this.mMenuBtn.SetClickCallback(()=>
        {
            GameData.Instance.Data_BottomUIEnum.mData = BottomUIEnum.MenuUI;
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

