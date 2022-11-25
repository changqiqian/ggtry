import { _decorator, Component, Node, UITransform, Tween, Vec3, easing, Widget } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { NetworkSend } from '../../../network/NetworkSend';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_Menu')
export class Game_Menu extends BaseUI 
{
    @property(BaseButton) 
    mBGBtn: BaseButton = null;
    @property(MovingShow) 
    mMovingShow: MovingShow = null;
    
    @property(BaseButton) 
    mRuleBtn: BaseButton = null;
    @property(BaseButton) 
    mServiceBtn: BaseButton = null;
    @property(BaseButton) 
    mShopBtn: BaseButton = null;
    @property(BaseButton) 
    mBringInBtn: BaseButton = null;
    @property(BaseButton) 
    mBringOutBtn: BaseButton = null;
    @property(BaseButton) 
    mSettingBtn: BaseButton = null;
    @property(BaseButton) 
    mStandBtn: BaseButton = null;
    @property(BaseButton) 
    mExitBtn: BaseButton = null;
    @property(BaseButton) 
    mDismiss: BaseButton = null;
    mIndex : number;

    onEnable()
    {
        this.mMovingShow.ShowAnimation();
    }

    InitParam()
    {
        this.OffsetHallTop();
    }
    BindUI()
    {
        this.mMovingShow.SetAnimationType(AnimationShowType.FromLeft);
        this.mMovingShow.SetAnimationCallback(()=>
        {
            this.node.active = false;
        })

        this.mBGBtn.SetClickCallback(()=>
        {
            this.mMovingShow.HideAnimation();
        });
        this.mRuleBtn.SetClickCallback(()=>
        {

        });
        this.mServiceBtn.SetClickCallback(()=>
        {

        });
        this.mShopBtn.SetClickCallback(()=>
        {

        });
        this.mBringInBtn.SetClickCallback(()=>
        {

        });
        this.mBringOutBtn.SetClickCallback(()=>
        {

        });
        this.mSettingBtn.SetClickCallback(()=>
        {

        });
        this.mStandBtn.SetClickCallback(()=>
        {

        });
        this.mExitBtn.SetClickCallback(()=>
        {
            let gameData = MultipleTableCtr.GetGameDataByIndex(this.mIndex);
            let gameId = gameData.Data_GameStaticData.mData.gameId;
            NetworkSend.Instance.ExitGame(gameId,gameData.Data_GameStaticData.mData.basicConfig.gameType);
        });
        this.mDismiss.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            NetworkSend.Instance.DismissClubGame(gameStruct.mGameId , gameStruct.mClubId);
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

    public InitWithData(_index : number)
    {
        this.mIndex = _index;        
    }

    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
            this.mBGBtn.node.active = true;
        }
        else
        {
            this.mBGBtn.node.active = false;
            this.mMovingShow.HideAnimation();
        }
    }
}

