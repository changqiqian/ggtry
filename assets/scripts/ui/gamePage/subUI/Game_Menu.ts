import { _decorator, Component, Node, UITransform, Tween, Vec3, easing, Widget } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { UIMgr } from '../../../base/UIMgr';
import { GameConfig } from '../../../GameConfig';
import { NetworkSend } from '../../../network/NetworkSend';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { HallData } from '../../hall/HallData';
import { Game_BuyInWindow } from './Game_BuyInWindow';
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
    mSettingBtn: BaseButton = null;
    @property(BaseButton) 
    mStandBtn: BaseButton = null;
    @property(BaseButton) 
    mExitBtn: BaseButton = null;
    @property(BaseButton) 
    mDismiss: BaseButton = null;
    mIndex : number;

    mInited : boolean = false;
    InitParam()
    {
        this.OffsetHallTop();
    }
    BindUI()
    {
        this.mMovingShow.SetAnimationType(AnimationShowType.FromLeft);
        this.mMovingShow.SetRoot(this.node);

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
            UIMgr.Instance.ShowWindow("gamePage","prefab/Game_BuyInWindow",true,(_script)=>
            {
                let temp = _script as Game_BuyInWindow;
                temp.InitWithData(this.mIndex);
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });
        this.mSettingBtn.SetClickCallback(()=>
        {

        });
        this.mStandBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let msgId = gameData.StandUpSendMsgId();
            let gameId = gameStruct.mGameId;
            let seatId = gameData.GetSeatByUid(LocalPlayerData.Instance.Data_Uid.mData);
            if(seatId != null)
            {
                NetworkSend.Instance.StandUp(msgId,gameId);
            }

        });
        this.mExitBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let gameId = gameStruct.mGameId;
            NetworkSend.Instance.ExitGame(gameId,gameData.GetStaticData().basicConfig.gameType);
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
        if(this.mInited)
        {
            return;
        }
        this.mInited = false;
        this.mIndex = _index;    
        this.BindData();

    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.UpdateStandBtn();
            this.UpdateDismissBtn();
        });
        gameData.Data_S2CCommonSitDownNotify.AddListenner(this,(_data)=>
        {
            if(_data.seatPlayerInfo.uid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.UpdateStandBtn();
        });

        gameData.Data_S2CCommonStandUpNotify.AddListenner(this,(_data)=>
        {
            if(_data.actionUid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.UpdateStandBtn();
        });

        


        HallData.Instance.Data_S2CModifyMemberRoleNotify.AddListenner(this,(_data)=>
        {
            if(gameStruct.mClubId != _data.clubId)
            {
                return;
            }
            this.UpdateDismissBtn();
        });
    }

    UpdateDismissBtn()
    {
        this.mDismiss.Show(false);
        // let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        // let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(gameStruct.mClubId)

        // if(gameStruct.mClubId != "")
        // {
        //     this.mDismiss.Show(enterClub.clubMember.memberType != ClubMemberType.ClubAccountType_Normal);
        // }
        // else
        // {
        //     this.mDismiss.Show(false);
        // }
    }

    UpdateStandBtn()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        this.mStandBtn.Show(selfPlayer != null);
    }



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
}

