import { _decorator, Component, Node, ScrollView, Label, Tween, Widget, Vec3, UITransform, easing } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_MatchInfoLayer')
export class Game_MatchInfoLayer extends BaseUI 
{
    @property(BaseButton) 
    mBGBtn: BaseButton = null;
    @property(MovingShow) 
    mMovingShow: MovingShow = null;
    @property(Label) 
    mMatchName: Label = null;
    @property(Label) 
    mClubName: Label = null;
    @property(Label) 
    mCountDown: Label = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    private mIndex : number = null;


    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
            this.mBGBtn.node.active = true;
            this.mMovingShow.ShowAnimation();
        }
        else
        {
            this.mBGBtn.node.active = false;
            this.mMovingShow.HideAnimation();
        }
    }
    InitParam()
    {
        this.OffsetTop();


    }
    BindUI()
    {
        this.mBGBtn.SetClickCallback(()=>
        {
            this.mMovingShow.HideAnimation();
        });

        this.mMovingShow.SetAnimationType(AnimationShowType.FromLeft);
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
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;

        this.mMatchName.string = gameData.GetStaticData().basicConfig.gameName;
        if(gameStruct.mIsClubGame)
        {
            let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(gameStruct.mClubId);
            if(enterClub != null)
            {
                this.mClubName.string = enterClub.clubInfo.name;
            }
        }
        else
        {
            this.mClubName.string = Localization.GetString("00267");
        }
    }
}

