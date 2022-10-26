import { _decorator, Component, Node, Label, Sprite, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { Tool } from '../../Tool';
import { BaseButton } from '../common/BaseButton';
import { PlayerInfo } from '../common/PlayerInfo';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_AssetsManageWindow')
export class Club_AssetsManageWindow extends BaseUI 
{
    @property(Label) 
    mTitle: Label = null;   
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;   
    @property(EditBox) 
    mEditBox: EditBox = null;   
    @property(PlayerInfo) 
    mPlayerInfo: PlayerInfo = null;   
    @property(Label) 
    mID: Label = null;
    @property(Label) 
    mPlayerAmount: Label = null;
    @property(Label) 
    mClubAmount: Label = null;

    
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;   


    mGive : boolean = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });


        this.mConfirmBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowToast("功能开发中");
            if(this.mGive)
            {

            }
            else
            {
            }
        });
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubScoreManageUserInfo.AddListenner(this,(_data)=>
        {
            this.mPlayerInfo.SetName(_data.nickName);
            this.mPlayerInfo.SetLocalHead(Number(_data.head));
            this.mID.string = _data.uid;
            this.mPlayerAmount.string = Tool.ConvertMoney_S2C(_data.clubPoint) + "";
            let clubTotalPoint = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.totalClubPoint;
            this.mClubAmount.string = Tool.ConvertMoney_S2C(clubTotalPoint) + "";
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    public InitWithData(_give : boolean)
    {
        this.mGive = _give;
        this.UpdateUI();
    }

    UpdateUI()
    {
        if(this.mGive)
        {
            this.mTitle.string = Localization.GetString("00117");
        }
        else
        {
            this.mTitle.string = Localization.GetString("00116");
        }
    }
}

