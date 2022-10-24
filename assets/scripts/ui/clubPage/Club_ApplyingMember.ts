import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
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
    private mUserInfo : UserInfo = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mAgreeBtn.SetClickCallback(()=>
        {

        });
        this.mRejectBtn.SetClickCallback(()=>
        {
            
        });
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubApplyingNotify.AddListenner(this,(_data)=>
        {
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

    public InitWithData(_userInfo : UserInfo , _clubId : string)
    {
        this.mUserInfo = _userInfo;
        this.mClubId = _clubId;
        this.mPlayerInfo.SetName(this.mUserInfo.nickName);
        this.mPlayerInfo.SetLocalHead(Number(this.mUserInfo.head));
        this.mID.string = this.mUserInfo.uid;
    }
}

