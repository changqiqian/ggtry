import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { PlayerInfo } from '../common/PlayerInfo';
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
    
    mMember : IClubMember = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mRemoveBtn.SetClickCallback(()=>
        {
            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
            let uids = new Array<string>();
            uids.push(this.mMember.uid);
            NetworkSend.Instance.RemoveClubMember(clubId,uids);
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
        let isClubOwner = LocalPlayerData.Instance.Data_Uid.mData == LocalPlayerData.Instance.Data_CurrentEnterClub.mData.ownerId;
        this.mRemoveBtn.node.active = isClubOwner
    }
}

