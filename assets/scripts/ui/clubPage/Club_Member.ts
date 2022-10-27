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
    
    mMember : IClubMember = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mRemoveBtn.SetClickCallback(()=>
        {
            this.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.GetString("00118");
                tips = Localization.ReplaceString(tips,this.mMember.uid)
                tempScript.SetTips(tips);
                tempScript.SetCallback(()=>
                {
                    let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
                    let uids = new Array<string>();
                    uids.push(this.mMember.uid);
                    NetworkSend.Instance.RemoveClubMember(clubId,uids);
                })
            },HallData.ClubUiTag)
        });


        this.mManagerBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowToast("功能开发中");
        });
        
    }
    RegDataNotify()
    {
        HallData.Instance.Data_S2CRemoveMember.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
            if(clubId != _data.clubId)
            {
                return;
            }

            let index = _data.uids.findIndex((_item) => _item === this.mMember.uid);
            if(index >= 0)
            {
                this.DeleteSelf();
            }
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    public InitWithData(_member : IClubMember)
    {
        this.mMember = _member;
        this.mPlayerInfo.SetName(this.mMember.nickName);
        this.mPlayerInfo.SetLocalHead(Number(this.mMember.head));
        this.mID.string = this.mMember.uid;
        let selfIsClubOwner = LocalPlayerData.Instance.Data_Uid.mData == LocalPlayerData.Instance.Data_CurrentEnterClub.mData.ownerId;
        let isSelf = _member.uid == LocalPlayerData.Instance.Data_Uid.mData;

        if(selfIsClubOwner)
        {
            if(isSelf)
            {
                this.mRemoveBtn.node.active = false;
                this.mManagerBtn.node.active = false;
            }
            else
            {
                this.mRemoveBtn.node.active = true;
                this.mManagerBtn.node.active = true;
            }
        }
        else
        {
            this.mRemoveBtn.node.active = false;
            this.mManagerBtn.node.active = false;
        }
    }
}

