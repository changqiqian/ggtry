import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { NetworkSend } from '../../../network/NetworkSend';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { CowboyData } from '../CowboyData';
const { ccclass, property } = _decorator;

@ccclass('cb_Menu')
export class cb_Menu extends BaseUI 
{
    @property(Node) 
    mBG: Node = null;
    @property(MovingShow) 
    mMovingShow: MovingShow = null;
    @property(BaseButton) 
    mRuleBtn: BaseButton = null;
    @property(BaseButton) 
    mServiceBtn: BaseButton = null;
    @property(BaseButton) 
    mBringInBtn: BaseButton = null;
    @property(BaseButton) 
    mExitBtn: BaseButton = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mMovingShow.SetAnimationType(AnimationShowType.FromLeft);
        this.mMovingShow.SetRoot(this.node);
        this.AddTouchCloseEvent(this.mBG);
        this.mRuleBtn.SetClickCallback(()=>
        {

        });
        this.mServiceBtn.SetClickCallback(()=>
        {

        });
        this.mBringInBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("cowboy","prefab/subUI/cb_BuyInWindow",true,null,CowboyData.UITag)
        });
        this.mExitBtn.SetClickCallback(()=>
        {
            let gameId = CowboyData.Instance.GetGameId();
            NetworkSend.Instance.ExitCowboy(gameId);
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
}

