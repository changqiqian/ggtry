import { _decorator, Component, Node, Tween, Vec3, UITransform, easing, Widget, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { ToggleBtn } from '../../common/ToggleBtn';
import { Game_ObItem } from './Game_ObItem';
const { ccclass, property } = _decorator;

@ccclass('Game_ObLayer')
export class Game_ObLayer extends BaseUI 
{
    @property(Node) 
    mBG: Node = null;
    @property(MovingShow) 
    mMovingShow: MovingShow = null;

    @property(Label) 
    mObNum: Label = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    @property(ToggleBtn) 
    mVoiceToggle: ToggleBtn = null;
    @property(ToggleBtn) 
    mChatToggle: ToggleBtn = null;


    private mIndex : number = null;


    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
            this.mMovingShow.ShowAnimation();
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }
    InitParam()
    {
        this.OffsetTop();
    }
    BindUI()
    {
        this.AddTouchCloseEvent(this.mBG);
        this.mMovingShow.SetAnimationType(AnimationShowType.FromRight);
        this.mMovingShow.SetRoot(this.node);
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

   
    public InitWithData(_index : number)
    {
        this.mIndex = _index;
        this.BindData();
    }

    BindData()
    {

    }
}

