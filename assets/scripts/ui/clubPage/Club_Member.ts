import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { PlayerInfo } from '../common/PlayerInfo';
import { TipsWindow } from '../common/TipsWindow';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_Member')
export class Club_Member extends BaseUI {

    @property(PlayerInfo) 
    mPlayerInfo: PlayerInfo = null;
    @property(Label) 
    mID: Label = null;
    @property(BaseButton) 
    mRemoveBtn: BaseButton = null;
    @property(BaseButton) 
    mManagerBtn: BaseButton = null;
    @property(BaseButton) 
    mCancelManagerBtn: BaseButton = null;
    @property(Label) 
    mRole: Label = null;
    mMember : ClubMember = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mRemoveBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.ReplaceString("00118",this.mMember.uid)
                tempScript.SetTips(tips);
                tempScript.SetCallback(()=>
                {
                    let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
                    let uids = new Array<string>();
                    uids.push(this.mMember.uid);
                    NetworkSend.Instance.RemoveClubMember(clubId,uids);
                })
            },HallData.ClubUiTag)
        });


        this.mManagerBtn.SetClickCallback(()=>
        {
            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            if(this.mMember.memberType == ClubMemberType.ClubAccountType_Normal)
            {
                NetworkSend.Instance.ModifyMemberRole(clubId,this.mMember.uid,ClubMemberType.ClubAccountType_Manager);
            }
        });

        this.mCancelManagerBtn.SetClickCallback(()=>
        {
            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            if(this.mMember.memberType == ClubMemberType.ClubAccountType_Manager)
            {  
                NetworkSend.Instance.ModifyMemberRole(clubId,this.mMember.uid,ClubMemberType.ClubAccountType_Normal);
            }
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

    public InitWithData(_member : ClubMember)
    {
        this.mMember = _member;
        this.mPlayerInfo.SetName(this.mMember.nickName);
        this.mPlayerInfo.SetLocalHead(Number(this.mMember.head));
        this.mID.string = this.mMember.uid;
        this.UpdateManagerBtn();
    }

    UpdateManagerBtn()
    {
        let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(currentClubId);
        let selfIsClubOwner = enterClub.clubMember.memberType == ClubMemberType.ClubAccountType_Owner;
        let isSelf = this.mMember.uid == LocalPlayerData.Instance.Data_Uid.mData;

        if(selfIsClubOwner && isSelf == false)
        {
            this.mRemoveBtn.node.active = true;
            this.mManagerBtn.node.active = false;
            this.mCancelManagerBtn.node.active = false;
            this.mRole.node.active = false;
            if(this.mMember.memberType == ClubMemberType.ClubAccountType_Normal)
            {
                this.mManagerBtn.node.active = true;
            }
            else if(this.mMember.memberType == ClubMemberType.ClubAccountType_Manager)
            {  
                this.mCancelManagerBtn.node.active = true;
            }
        }
        else
        {
            this.mRemoveBtn.node.active = false;
            this.mManagerBtn.node.active = false;
            this.mCancelManagerBtn.node.active = false;
            this.mRole.node.active = true;
            if(this.mMember.memberType == ClubMemberType.ClubAccountType_Normal)
            {
                this.mRole.string = "";
            }
            else if(this.mMember.memberType == ClubMemberType.ClubAccountType_Manager)
            {  
                this.mRole.string = Localization.GetString("00128");
            }
            else if(this.mMember.memberType == ClubMemberType.ClubAccountType_Owner)
            {  
                this.mRole.string = Localization.GetString("00129");
            }
        }
    }
}

