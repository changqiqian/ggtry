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

