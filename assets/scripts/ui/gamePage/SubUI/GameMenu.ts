import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { ToggleBtn } from '../../common/ToggleBtn';
import { AudioManager } from '../../../base/AudioManager';
import { BottomUIEnum, GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('GameMenu')
export class GameMenu  extends BaseUI 
{
    public static PrefabPath : string = "prefab/GameMenu";
    public static Bunddle : string = "gamePage";

    mMovingShow : MovingShow = null;
    mTouchCloseBG : Node = null;
    mExitBtn : BaseButton = null;
    mMusicToggle : ToggleBtn = null;
    mHistoryBtn : BaseButton = null;
    mRuleBtn : BaseButton = null;
    mRewardBtn : BaseButton = null;
    mCloseBtn : BaseButton = null;
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
        this.mTouchCloseBG = this.node.getChildByPath("TouchCloseBG");
        this.mMovingShow = this.node.getChildByPath("MovingShow").getComponent(MovingShow);
        this.mExitBtn = this.node.getChildByPath("MovingShow/ExitBtn").getComponent(BaseButton);
        this.mMusicToggle = this.node.getChildByPath("MovingShow/MusicToggle").getComponent(ToggleBtn);
        this.mHistoryBtn = this.node.getChildByPath("MovingShow/HistoryBtn").getComponent(BaseButton);
        this.mRuleBtn = this.node.getChildByPath("MovingShow/RuleBtn").getComponent(BaseButton);
        this.mRewardBtn = this.node.getChildByPath("MovingShow/RewardBtn").getComponent(BaseButton);
        this.mCloseBtn = this.node.getChildByPath("MovingShow/CloseBtn").getComponent(BaseButton);

        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);

        this.mTouchCloseBG.on(Node.EventType.TOUCH_END,()=>
        {
            GameData.Instance.Data_BottomUIEnum.mData = BottomUIEnum.PlayingUI;
        },this);

        this.mExitBtn.SetClickCallback((_data)=>
        {

        });
        this.mHistoryBtn.SetClickCallback((_data)=>
        {

        });
        this.mRuleBtn.SetClickCallback((_data)=>
        {

        });
        this.mRewardBtn.SetClickCallback((_data)=>
        {

        });
        this.mCloseBtn.SetClickCallback((_data)=>
        {
            GameData.Instance.Data_BottomUIEnum.mData = BottomUIEnum.PlayingUI;
        });

        this.mMusicToggle.SetClickCallback((_data)=>
        {
            AudioManager.Instance.MuteAll(_data);
        });
        this.mMusicToggle.ShowUnselected();
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

