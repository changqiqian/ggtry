import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BottomUIEnum, GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('GameAutoSetting')
export class GameAutoSetting  extends BaseUI 
{
    public static PrefabPath : string = "prefab/GameAutoSetting";
    public static Bunddle : string = "gamePage";

    mMovingShow : MovingShow = null;
    mTouchCloseBG : Node = null;

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

        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);

        this.mTouchCloseBG.on(Node.EventType.TOUCH_END,()=>
        {
            GameData.Instance.Data_BottomUIEnum.mData = BottomUIEnum.PlayingUI;
        },this);
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

