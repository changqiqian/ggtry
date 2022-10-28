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
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    InitParam()
    {
        
    }
    BindUI()
    {
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
            this.ShowWindow("clubPage","prefab/Club_MemberNotifyWindow",true,(_script)=>
            {
                let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
                let tempScript = _script as Club_MemberNotifyWindow;
                tempScript.InitWithData(clubId);
            },HallData.ClubUiTag);
        });
        this.mMenuBtn.SetClickCallback(()=>
        {
            this.ShowLayer("clubPage","prefab/Club_Setting",true,null,HallData.ClubUiTag);
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
                this.ShowWindow("clubPage","prefab/Club_AssetsManage",true,null,HallData.ClubUiTag);
            }
        });
        this.mRecordBtn.SetClickCallback(()=>
        {
            this.ShowLayer("clubPage","prefab/Club_RecordLayer",true,null,HallData.ClubUiTag);
        });
        this.mDataBtn.SetClickCallback(()=>
        {
            this.ShowLayer("clubPage","prefab/Club_DataLayer",true,null,HallData.ClubUiTag);
        });
        this.mCreateBtn.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {
                this.ShowLayer("clubPage","prefab/Club_CreateGameOption",true,null,HallData.ClubUiTag);
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
        LocalPlayerData.Instance.Data_CurrentEnterClub.AddListenner(this,(_data)=>
        {
            this.UpdateClubInfoUI();
        });

        LocalPlayerData.Instance.Data_UpdateCurrentClub.AddListenner(this,(_data)=>
        {
            this.UpdateClubInfoUI();
        });

        LocalPlayerData.Instance.Data_SelfClubInfo.AddListenner(this,(_data)=>
        {
            this.UpdateMoney();
        });

        LocalPlayerData.Instance.Data_UpdateCurrentClub.AddListenner(this,(_data)=>
        {
            let currentClubData = LocalPlayerData.Instance.Data_CurrentEnterClub.mData;
            this.mClubName.string = currentClubData.name;
        });

        HallData.Instance.Data_ClubPlayerPointNotify.AddListenner(this,(_data)=>
        {
            this.UpdateMoney();
        });

        HallData.Instance.Data_ClubApplyingNotify.AddListenner(this,(_data)=>
        {
            if(LocalPlayerData.Instance.Data_SelfClubInfo.mData.memberType != 
                ClubMemberType.ClubAccountType_Owner)
            {
                return;
            }
            if(_data)
            {
                let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
                this.mNotifyBtn.node.active = HallData.Instance.ApplyingNotifyContain(clubId)
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
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

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
}

