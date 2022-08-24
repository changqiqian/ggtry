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
        this.mMttTableBtn.node.active = false;
    }
    BindUI() 
    {
        this.mMttTableBtn.SetClickCallback(()=>{})
        {

        }

        this.mInfoBtn.SetClickCallback(()=>{})
        {

        }

        this.mHistoryBtn.SetClickCallback(()=>{})
        {

        }
        this.mChatBtn.SetClickCallback(()=>{})
        {

        }
    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_MttGetRoomInfo",(_current , _before)=>
        {
            this.mMttTableBtn.node.active = _current.status >=  Mtt_MatchStatus.Started;
            if(this.mMttTableBtn.node.active )
            {
                var tableStr = (_current.deskConfig.tableId > 0) ? (Localization.GetString("00056") + _current.deskConfig.tableId) : Localization.GetString("00056");
                this.mMttTableBtn.SetTitle(tableStr);
            }
        },this);

        GameData.GetInstance().AddListener("Data_RefreshMttInfo",(_current , _before)=>
        {
            let matchConfig = _current.matchConfig;
            let statusInfo = _current.statusInfo;
            this.mMttTableBtn.node.active = statusInfo.status >=  Mtt_MatchStatus.Started;
            if(this.mMttTableBtn.node.active)
            {

            }

        },this);

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        GameData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }
}

