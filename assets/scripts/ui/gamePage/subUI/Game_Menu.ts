import { _decorator, Component, Node, UITransform, Tween, Vec3, easing, Widget } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { UIMgr } from '../../../base/UIMgr';
import { GameConfig } from '../../../GameConfig';
import { NetworkSend } from '../../../network/NetworkSend';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { GameData } from '../GameData';
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
            UIMgr.Instance.ShowWindow("gamePage","prefab/Game_BuyInWindow",true,(_script)=>
            {
                let temp = _script as Game_BuyInWindow;
                temp.InitWithData(this.mIndex);
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });
        this.mBringOutBtn.SetClickCallback(()=>
        {

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
                NetworkSend.Instance.StandUp(msgId,gameId,seatId);
            }

        });
        this.mExitBtn.SetClickCallback(()=>
        {
            let gameData = MultipleTableCtr.GetGameDataByIndex(this.mIndex);
            let gameId = gameData.Data_S2CCommonEnterGameResp.mData.gameId;
            NetworkSend.Instance.ExitGame(gameId,gameData.Data_S2CCommonEnterGameResp.mData.gameStatic.basicConfig.gameType);
        });
        this.mDismiss.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            NetworkSend.Instance.DismissClubGame(gameStruct.mGameId , gameStruct.mClubDetailsInfo.id);
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
        let gameStruct = MultipleTableCtr.FindGameStruct(_index);
        if(gameStruct.mIsClubGame)
        {
            let selfClubInfo = gameStruct.mSelfClubInfo;
            this.mDismiss.Show(selfClubInfo.memberType != ClubMemberType.ClubAccountType_Normal);
        }
        else
        {
            this.mDismiss.Show(false);
        }

        this.BindData();

        // switch(gameType)
        // {
        //     case GameType.GameType_TexasCash:
        //     {

        //     }
        //     break;
        //     case GameType.GameType_ShortCash:
        //     {
                
        //     }
        //     break;
        //     case GameType.GameType_OmhCash:
        //     {
                
        //     }
        //     break;
        //     case GameType.GameType_TexasMtt:
        //     {
                
        //     }
        //     break;
        //     case GameType.GameType_ShortMtt:
        //     {
                
        //     }
        //     break;
        //     case GameType.GameType_OmhMtt:
        //     {
                
        //     }
        //     break;
        // }
    }

    BindData()
    {
        let gameData:GameData = MultipleTableCtr.GetGameDataByIndex(this.mIndex);
        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.UpdateStandBtn();
        });
        gameData.Data_S2CCommonSitDownNotify.AddListenner(this,(_data)=>
        {
            this.UpdateStandBtn();
        });

        gameData.Data_S2CCommonStandUpNotify.AddListenner(this,(_data)=>
        {
            this.UpdateStandBtn();
        });
    }

    UpdateStandBtn()
    {
        let gameData:GameData = MultipleTableCtr.GetGameDataByIndex(this.mIndex);
        let seatId = gameData.GetSeatByUid(LocalPlayerData.Instance.Data_Uid.mData);
        this.mStandBtn.Show(seatId != null);
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

