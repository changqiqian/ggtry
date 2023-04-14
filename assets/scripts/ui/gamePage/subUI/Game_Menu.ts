import { _decorator, Component, Node, UITransform, Tween, Vec3, easing, Widget } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { UIMgr } from '../../../base/UIMgr';
import { GameConfig } from '../../../GameConfig';
import { NetworkSend } from '../../../network/NetworkSend';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { HallData } from '../../hall/HallData';
import { Game_BuyInWindow } from './Game_BuyInWindow';
import { Game_RuleLayer } from './Game_RuleLayer';
import { Game_FriendsShare } from './Game_FriendsShare';
const { ccclass, property } = _decorator;

@ccclass('Game_Menu')
export class Game_Menu extends BaseUI 
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
    mSettingBtn: BaseButton = null;
    @property(BaseButton) 
    mInviteBtn: BaseButton = null;
    @property(BaseButton) 
    mStandBtn: BaseButton = null;
    @property(BaseButton) 
    mSettlementBtn: BaseButton = null;
    @property(BaseButton) 
    mAddInsBtn: BaseButton = null;
    mIndex : number;

    onEnable()
    {
        this.UpdateStandBtn();
    }

    InitParam()
    {
        this.OffsetHallTop();
    }
    BindUI()
    {
        this.mMovingShow.SetAnimationType(AnimationShowType.FromLeft);
        this.mMovingShow.SetRoot(this.node);
        this.AddTouchCloseEvent(this.mBG);
        this.mRuleBtn.SetClickCallback(()=>
        {
            this.Show(false);
            UIMgr.Instance.ShowLayer("gamePage","prefab/Game_RuleLayer",true,(_script)=>
            {
                let temp = _script as Game_RuleLayer;
                temp.InitWithData(this.mIndex);
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());

        });
        this.mServiceBtn.SetClickCallback(()=>
        {
            this.Show(false);
        });
        this.mBringInBtn.SetClickCallback(()=>
        {
            this.Show(false);
            UIMgr.Instance.ShowWindow("gamePage","prefab/Game_BuyInWindow",true,(_script)=>
            {
                let temp = _script as Game_BuyInWindow;
                temp.InitWithData(this.mIndex);
                temp.StopCountDown();
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });
        this.mSettingBtn.SetClickCallback(()=>
        {
            this.Show(false);
            UIMgr.Instance.ShowWindow("gamePage","prefab/Game_Setting",true,(_script)=>
            {

            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });
        this.mInviteBtn.SetClickCallback(()=>
        {
            this.Show(false);
            UIMgr.Instance.ShowWindow("gamePage","prefab/Game_FriendsShare",true,(_script)=>
            {
                let temp = _script as Game_FriendsShare;
                temp.InitWithData(this.mIndex);
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });
        

        this.mStandBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let msgId = gameData.StandUpSendMsgId();
            let gameId = gameStruct.mGameId;
            let uid =LocalPlayerData.Instance.Data_Uid.mData;

            let selfPlayer = gameData.GetPlayerInfoByUid(uid);
            if(selfPlayer != null)
            {
                NetworkSend.Instance.StandUp(msgId,gameId);
            }
        });

        this.mSettlementBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let gameId = gameStruct.mGameId;
            NetworkSend.Instance.ExitGame(gameId,gameData.GetStaticData().gameType);
        });


        this.mAddInsBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("gamePage","prefab/Game_AddInsWindow",true,(_script)=>
            {

            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
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
        if(this.CheckInitFlag())
        {
            return;
        }
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
            this.UpdateSettlementBtn();
        });
        gameData.Data_S2CCommonSitDownNotify.AddListenner(this,(_data)=>
        {
            if(_data.seatPlayerInfo.uid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.UpdateStandBtn();
            this.UpdateSettlementBtn();
        });

        gameData.Data_S2CCommonStandUpNotify.AddListenner(this,(_data)=>
        {
            if(_data.actionUid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.UpdateStandBtn();
            this.UpdateSettlementBtn();
        });

        gameData.Data_BuyInsuranceTurn.AddListenner(this,(_data)=>
        {
            if(_data.actionUid == LocalPlayerData.Instance.Data_Uid.mData)
            {
                this.Show(false);
            }

        });

        // HallData.Instance.Data_S2CModifyMemberRoleNotify.AddListenner(this,(_data)=>
        // {
        //     if(gameStruct.mClubId != _data.clubId)
        //     {
        //         return;
        //     }
        // });
    }



    UpdateStandBtn()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        if(gameStruct == null)
        {
            return;
        }
        
        let gameData = gameStruct.mGameData;
        let uid = LocalPlayerData.Instance.Data_Uid.mData;
        let selfPlayer = gameData.GetPlayerInfoByUid(uid);
        this.mStandBtn.Show(selfPlayer != null);
        this.mBringInBtn.Show(selfPlayer != null);
    }

    UpdateSettlementBtn()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        if(gameStruct == null)
        {
            return;
        }
        //let gameData = gameStruct.mGameData;
        //let uid = LocalPlayerData.Instance.Data_Uid.mData;
        //let selfPlayer = gameData.GetPlayerInfoByUid(uid);
        //this.mSettlementBtn.Show(selfPlayer != null);
    }

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
}

