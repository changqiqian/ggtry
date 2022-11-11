import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { PlayerInfo } from '../common/PlayerInfo';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_ApplyingMember')
export class Club_ApplyingMember extends BaseUI {
    @property(PlayerInfo) 
    mPlayerInfo: PlayerInfo = null;
    @property(Label) 
    mID: Label = null;
    @property(BaseButton) 
    mAgreeBtn: BaseButton = null;
    @property(BaseButton) 
    mRejectBtn: BaseButton = null;
    
    private mClubId : string  = null;
    private mUserInfo : ClubBasicJoinRequest = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mAgreeBtn.SetClickCallback(()=>
        {
            this.DealApplying(true);
        });
        this.mRejectBtn.SetClickCallback(()=>
        {
            this.DealApplying(false);
        });
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubApplyingSuccess.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            if(_data)
            {
                let users = HallData.Instance.GetApplyingUsers(this.mClubId);
                let index = users.findIndex((_item) => _item.uid === this.mUserInfo.uid);
                if(index < 0)
                {
                    this.DeleteSelf();
                }
            }
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    public InitWithData(_userInfo : ClubBasicJoinRequest , _clubId : string)
    {
        this.mUserInfo = _userInfo;
        this.mClubId = _clubId;
        this.mPlayerInfo.SetName(this.mUserInfo.nickName);
        this.mPlayerInfo.SetLocalHead(Number(this.mUserInfo.head));
        this.mID.string = this.mUserInfo.uid;
    }

    public DealApplying(_agree : boolean)
    {
        let uids = new Array<string>();
        uids.push(this.mUserInfo.uid);
        NetworkSend.Instance.AddClubMember(this.mClubId , _agree ,uids);
    }
}

