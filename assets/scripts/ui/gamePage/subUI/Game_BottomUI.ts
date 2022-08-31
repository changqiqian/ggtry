import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { BaseButton } from '../../common/BaseButton';
import { ToggleBtn } from '../../common/ToggleBtn';
import { Mtt_MatchStatus } from '../../hall/HallData';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_BottomUI')
export class Game_BottomUI extends BaseUI 
{
    @property(BaseButton) 
    mInfoBtn: BaseButton = null;
    @property(BaseButton) 
    mHistoryBtn: BaseButton = null;
    @property(BaseButton) 
    mChatBtn: BaseButton = null;
    @property(ToggleBtn) 
    mMicToggle: ToggleBtn = null;
    @property(BaseButton) 
    mMttTableBtn: BaseButton = null;
    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.mMttTableBtn.node.active = false;
        this.mMttTableBtn.SetClickCallback(()=>
        {

        });


        this.mInfoBtn.SetClickCallback(()=>
        {

        });

        this.mHistoryBtn.SetClickCallback(()=>
        {

        });

        this.mChatBtn.SetClickCallback(()=>
        {

        });

    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_MttGetRoomInfo",(_current , _before)=>
        {
            let statusInfo = GameData.GetInstance().Data_StatusInfo;
            let deskConfig = GameData.GetInstance().Data_DeskConfig;
            this.mMttTableBtn.node.active = statusInfo.status >=  Mtt_MatchStatus.Started;
            if(this.mMttTableBtn.node.active )
            {
                var tableStr = (deskConfig.tableId > 0) ? (Localization.GetString("00056") + deskConfig.tableId) : Localization.GetString("00056");
                this.mMttTableBtn.SetTitle(tableStr);
            }
        },this);
        

        GameData.GetInstance().AddListener("Data_RefreshMttInfo",(_current , _before)=>
        {
            let statusInfo = GameData.GetInstance().Data_StatusInfo;
            this.mMttTableBtn.node.active = statusInfo.status >=  Mtt_MatchStatus.Started;
            if(this.mMttTableBtn.node.active)
            {
                var tableStr = Localization.GetString("00056") + _current.user.tableId;
                this.mMttTableBtn.SetTitle(tableStr);
            }
        },this);

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }
}

