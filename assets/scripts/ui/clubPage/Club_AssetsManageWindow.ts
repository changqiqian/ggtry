import { _decorator, Component, Node, Label, Sprite, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { NetworkSend } from '../../network/NetworkSend';
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

    //兼容winpoker
    @property(Label) 
    mBalanceTtile: Label = null;

    mGive : boolean = null;

    onEnable()
    {
        this.mEditBox.string = "";
        this.UpdateClubTotalScore();
    }
    InitParam()
    {

    }
    BindUI()
    {
        this.mBalanceTtile.string = Localization.GetString("00168")

        this.mEditBox.placeholder = Localization.GetString("00124");
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });


        this.mConfirmBtn.SetClickCallback(()=>
        {
            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;

            if(Tool.NumberTest(this.mEditBox.string) == false)
            {
                return;
            }   

            // let amount = Number(this.mEditBox.string);
            // let currentUser = HallData.Instance.Data_ClubScoreManageUserInfo.mData;
            // if(this.mGive)
            // {   
            //     NetworkSend.Instance.ShareClubScore(clubId,currentUser.uid,amount);
            // }
            // else
            // {
            //     NetworkSend.Instance.ShareClubScore(clubId,currentUser.uid, -amount);
            // }


            //兼容winpoker
            let amount = Number(this.mEditBox.string);
            let currentUser = HallData.Instance.Data_ClubScoreManageUserInfo.mData;
            if(this.mGive)
            {   
                NetworkSend.Instance.GiveHallScore(currentUser.uid,GameCurrencyType.GameCurrencyType_Coin,amount);
            }
        });

        //兼容winpoker
        this.mPlayerAmount.node.active = false;
        this.mBalanceTtile.string = Localization.GetString("00258")
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubScoreManageUserInfo.AddListenner(this,(_data)=>
        {
            this.mPlayerInfo.SetName(_data.nickName);
            this.mPlayerInfo.SetLocalHead(Number(_data.head));
            this.mID.string = _data.uid;
            this.mPlayerAmount.string = Tool.ConvertMoney_S2C(_data.clubPoint) + "";
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            this.UpdateClubTotalScore();
        });


        HallData.Instance.Data_ModifyClubInfo.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            if(_data.id != LocalPlayerData.Instance.Data_CurrentEnterClubId.mData)
            {
                return;
            }
            
            this.UpdateClubTotalScore();
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

            this.UpdateClubTotalScore();

            if(_data.uid != HallData.Instance.Data_ClubScoreManageUserInfo.mData.uid)
            {
                return;
            }
            this.mPlayerAmount.string = Tool.ConvertMoney_S2C(_data.playerRestPoint) + "";
        });

        //兼容winpoker
        LocalPlayerData.Instance.Data_Coin.AddListenner(this,(_data)=>
        {
            this.mClubAmount.string = Tool.ConvertMoney_S2C(_data) + "";
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

    UpdateClubTotalScore()
    {
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(clubId);
        let clubTotalPoint = enterClub.clubInfo.totalClubPoint;
        //兼容winpoker
        //this.mClubAmount.string = Tool.ConvertMoney_S2C(clubTotalPoint) + "";
    }
}

