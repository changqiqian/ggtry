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
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { Club_RecordLayer } from './Club_RecordLayer';
const { ccclass, property } = _decorator;

@ccclass('Club_PrivateLayer')
export class Club_PrivateLayer extends ListViewCtr<ClubTexasGameInfo>
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


    onEnable()
    {
        this.UpdateNotifyBtn();
        this.UpdateClubInfoUI();
        this.UpdateMoney();
        super.onEnable();
    }

    BindUI()
    {
        this.OffsetHallTop();

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
            UIMgr.Instance.ShowLayer("clubPage","prefab/Club_RecordLayer",true,(_script)=>
            {
                let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
                let temp = _script as Club_RecordLayer;
                temp.InitWitData(clubId);
            },HallData.ClubUiTag);  
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
        this.mAseetsBtn.Show(this.IsOwner());
    }

    RegDataNotify()
    {

        HallData.Instance.Data_ModifyClubInfo.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            let currentEnterClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            if(currentEnterClubId != _data.id)
            {
                return;
            }
            
            let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(currentEnterClubId);
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
            this.mCurrentData = HallData.Instance.Data_ClubGameInfos.mData;
            this.UpdateData(this.mCurrentData.length);
        });

        HallData.Instance.Data_S2CGetClubTexasGameInfoResp.AddListenner(this,(_data)=>
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

            this.mCurrentData = HallData.Instance.Data_ClubGameInfos.mData;
            this.UpdateData(this.mCurrentData.length);
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
            this.OnDragTop();
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
            this.OnDragTop();
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
                //this.mMoney.string = Tool.ConvertMoney_S2C(clubPoint) + "";
                //兼容winpoker
                this.mMoney.string = Tool.ConvertMoney_S2C(LocalPlayerData.Instance.Data_Coin.mData) + "";
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
        let isOwner = this.IsOwner();
        if(isOwner)
        {
        }
        else
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00099"));
        }
        return isOwner;
    }

    IsOwner():boolean
    {
        let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(currentClubId);
        let selfIsOwner = enterClub.clubMember.memberType == ClubMemberType.ClubAccountType_Owner;
        return selfIsOwner;
    }

    RenderEvent(_item: Node , _index: number)
    {
        let currentData = this.mCurrentData[_index];
        let gameItem = _item.getComponent(Club_GameItem);
        let gameId = currentData.gameId;
        gameItem.InitWithServerData(gameId , currentData);
    }

    Refresh()
    {
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        NetworkSend.Instance.GetClubGameList(clubId);
    }
}

