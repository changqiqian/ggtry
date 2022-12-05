import { _decorator, Component, Node, Label, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { ToggleBtn } from '../common/ToggleBtn';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { Tool } from '../../Tool';
import { HallData } from '../hall/HallData';
import { Club_MemberNotifyWindow } from './Club_MemberNotifyWindow';
import { UIMgr } from '../../base/UIMgr';
import { Localization } from '../../base/Localization';
import ListView from '../../UiTool/ListView';
import { Club_GameItem } from './Club_GameItem';
import { NetworkSend } from '../../network/NetworkSend';
const { ccclass, property } = _decorator;

@ccclass('Club_PrivateLayer')
export class Club_PrivateLayer extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(Label) 
    mClubName: Label = null;
    @property(Label) 
    mClubId: Label = null;
    @property(BaseButton) 
    mNotifyBtn: BaseButton = null;
    @property(BaseButton) 
    mMenuBtn: BaseButton = null;
    @property(ToggleBtn) 
    mAssetsToggle: ToggleBtn = null;
    @property(Label) 
    mMoney: Label = null;
    @property(BaseButton) 
    mAseetsBtn: BaseButton = null;
    @property(BaseButton) 
    mRecordBtn: BaseButton = null;
    @property(BaseButton) 
    mDataBtn: BaseButton = null;
    @property(BaseButton) 
    mCreateBtn: BaseButton = null;
    @property(ListView) 
    mListView: ListView = null;

    mGameList : Array<ClubGameInfo>;
    onEnable()
    {
        this.mListView.numItems = 0;
        this.UpdateNotifyBtn();
        this.UpdateClubInfoUI();
        this.UpdateMoney();
        this.DragTop();
    }

    InitParam()
    {
        this.OffsetHallTop();
    }
    BindUI()
    {
        this.mListView.SetRenderCallback(this.RenderEvent.bind(this));
        this.mListView.SetDragTop(this.DragTop.bind(this));
        this.mBackBtn.SetClickCallback(()=>
        {
            HallData.Instance.Data_ClubEnter.mData = false;
            this.Show(false);
        });

        this.mNotifyBtn.node.active = false;
        this.mNotifyBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("clubPage","prefab/Club_MemberNotifyWindow",true,(_script)=>
            {
                let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
                let tempScript = _script as Club_MemberNotifyWindow;
                tempScript.InitWithData(clubId);
            },HallData.ClubUiTag);
        });
        this.mMenuBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("clubPage","prefab/Club_Setting",true,null,HallData.ClubUiTag);
        });

        this.mAssetsToggle.SetClickCallback((_data)=>
        {
            this.UpdateMoney()
        });
        this.mAssetsToggle.SetShowStauts(false);
    
        this.mAseetsBtn.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {
                UIMgr.Instance.ShowWindow("clubPage","prefab/Club_AssetsManage",true,null,HallData.ClubUiTag);
            }
        });
        this.mRecordBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("clubPage","prefab/Club_RecordLayer",true,null,HallData.ClubUiTag);
        });
        this.mDataBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("clubPage","prefab/Club_DataLayer",true,null,HallData.ClubUiTag);
        });
        this.mCreateBtn.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {
                UIMgr.Instance.ShowLayer("clubPage","prefab/Club_CreateGameOption",true,null,HallData.ClubUiTag);
            }
        });
    }
    UpdateClubInfoUI()
    {
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(clubId);
        this.mClubName.string = enterClub.clubInfo.name;
        this.mClubId.string = clubId;
    }

    RegDataNotify()
    {

        HallData.Instance.Data_ModifyClubInfo.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(clubId);

            if(enterClub.clubInfo.id != _data.id)
            {
                return;
            }
            
            this.mClubName.string = enterClub.clubInfo.name;
        });

        HallData.Instance.Data_S2CClubPlayerPointNotify.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            if(currentClubId != _data.clubId)
            {
                return;
            }
            this.UpdateMoney();
        });

        HallData.Instance.Data_ClubApplyingNotify.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            if(_data)
            {
                this.UpdateNotifyBtn();
            }
        });

        HallData.Instance.Data_ClubRemoveNotify.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            if(currentClubId == _data)
            {
                HallData.Instance.Data_ClubEnter.mData = false;
            }
        });


        HallData.Instance.Data_S2CCreateClubGame.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            if(currentClubId != _data.clubId)
            {
                return;
            }
            this.mGameList = HallData.Instance.Data_ClubGameInfos.mData;
            this.mListView.numItems = this.mGameList.length;
        });

        HallData.Instance.Data_S2CGetClubGameList.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            if(currentClubId != _data.clubId)
            {
                return;
            }

            this.mGameList = HallData.Instance.Data_ClubGameInfos.mData;
            this.mListView.numItems = this.mGameList.length;
        });

        HallData.Instance.Data_S2CDismissClubGame.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            if(currentClubId != _data.clubId)
            {
                return;
            }
            this.DragTop();
        });

        HallData.Instance.Data_S2CDismissClubGameNotify.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            if(currentClubId != _data.clubId)
            {
                return;
            }
            this.DragTop();
        });

        
    }

    UpdateNotifyBtn()
    {
        let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(currentClubId);
        if(enterClub.clubMember.memberType != ClubMemberType.ClubAccountType_Owner)
        {
            return;
        }
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        this.mNotifyBtn.node.active = HallData.Instance.ApplyingNotifyContain(clubId)
    }

    LateInit()
    {

    }
    CustmoerDestory()
    {
        this.mGameList = null;
    }

    UpdateMoney()
    {
        let show = this.mAssetsToggle.IsSelected();
        if(show)
        {
            let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(currentClubId);

            if(enterClub != null)
            {
                let clubPoint = enterClub.clubMember.clubPoint;
                this.mMoney.string = Tool.ConvertMoney_S2C(clubPoint) + "";
            }
            else
            {
                this.mMoney.string = "***";
            }
        }
        else
        {
            this.mMoney.string = "***";
        }
    }

    HaveRights() :boolean
    {
        let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(currentClubId);
        let selfIsOwner = enterClub.clubMember.memberType == ClubMemberType.ClubAccountType_Owner;
        if(selfIsOwner)
        {
        }
        else
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00099"));
        }
        return selfIsOwner;
    }

    RenderEvent(_item: Node , _index: number)
    {
        let currentData = this.mGameList[_index];
        let gameItem = _item.getComponent(Club_GameItem);
        let gameId = currentData.gameId;
        gameItem.InitWithServerData(gameId , currentData);
    }

    DragTop()
    {
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        NetworkSend.Instance.GetClubGameList(clubId);
    }
}

