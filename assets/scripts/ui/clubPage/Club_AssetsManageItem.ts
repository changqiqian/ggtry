import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { Tool } from '../../Tool';
import { PlayerInfo } from '../common/PlayerInfo';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_AssetsManageItem')
export class Club_AssetsManageItem extends BaseUI 
{
    @property(PlayerInfo) 
    mPlayerInfo: PlayerInfo = null;
    @property(Label) 
    mID: Label = null;
    @property(Sprite) 
    mIcon: Sprite = null;
    @property(Label) 
    mAmount: Label = null;
    @property(ToggleBtn) 
    mToggleBtn: ToggleBtn = null;

    mData : ClubMember = null;
    InitParam()
    {

    }
    BindUI()
    {
        
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubScoreManageUid.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            if(_data == Number(this.mData.uid))
            {
                HallData.Instance.Data_ClubScoreManageUserInfo.mData = this.mData;
            }
        });

        HallData.Instance.Data_ShareClubScore.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            if(_data.clubId != LocalPlayerData.Instance.Data_CurrentEnterClubId.mData)
            {
                return;
            }

            if(_data.uid != this.mData.uid)
            {
                return;
            }
            this.mAmount.string = Tool.ConvertMoney_S2C(_data.playerRestPoint) + "";
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
            if(this.mData.uid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.mAmount.string = Tool.ConvertMoney_S2C(_data.playerRestAmount) + "";
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    public InitWithData(_member : ClubMember)
    {
        this.mData = _member;
        this.mPlayerInfo.SetName(_member.nickName);
        this.mPlayerInfo.SetLocalHead(Number(_member.head));
        this.mID.string = _member.uid;
        this.mAmount.string = Tool.ConvertMoney_S2C(_member.clubPoint) + "";
        this.mToggleBtn.SetDataNotify(HallData.Instance.Data_ClubScoreManageUid,Number(this.mData.uid));
    }
}

