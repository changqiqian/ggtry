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
            LocalPlayerData.Instance.Data_SelfClubInfo.ResetData();
            LocalPlayerData.Instance.Data_CurrentEnterClub.ResetData();
            HallData.Instance.Data_ClubEnter.mData = false;
            this.Show(false);
        });

        this.mNotifyBtn.node.active = false;
        this.mNotifyBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("clubPage","prefab/Club_MemberNotifyWindow",true,(_script)=>
            {
                let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
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
        this.mClubName.string = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.name;
        this.mClubId.string = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
    }

    RegDataNotify()
    {

        LocalPlayerData.Instance.Data_UpdateCurrentClub.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            this.UpdateClubInfoUI();
        });

        LocalPlayerData.Instance.Data_SelfClubInfo.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            this.UpdateMoney();
        });

        LocalPlayerData.Instance.Data_UpdateCurrentClub.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            let currentClubData = LocalPlayerData.Instance.Data_CurrentEnterClub.mData;
            this.mClubName.string = currentClubData.name;
        });

        HallData.Instance.Data_ClubUpdateSelfData.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
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
            let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
            if(currentClubId == _data)
            {
                HallData.Instance.Data_ClubEnter.mData = false;
            }
        });


        HallData.Instance.Data_UpdateClubGameList.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;

            this.mGameList = HallData.Instance.FindGameListByClubId(currentClubId);
            this.mListView.numItems = this.mGameList.length;
        });
    }

    UpdateNotifyBtn()
    {
        if(LocalPlayerData.Instance.Data_SelfClubInfo.mData.memberType != 
            ClubMemberType.ClubAccountType_Owner)
        {
            return;
        }
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
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
            if(LocalPlayerData.Instance.Data_SelfClubInfo.mData != null)
            {
                let clubPoint = LocalPlayerData.Instance.Data_SelfClubInfo.mData.clubPoint;
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
        let selfIsOwner = LocalPlayerData.Instance.Data_SelfClubInfo.mData.memberType == 
            ClubMemberType.ClubAccountType_Owner
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
        gameItem.InitWithServerData(currentData);
    }

    DragTop()
    {
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
        NetworkSend.Instance.GetClubGameList(clubId);
    }
}

