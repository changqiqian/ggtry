import { _decorator, Component, Node, Widget } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { UIMgr } from '../../../base/UIMgr';
import { NetworkSend } from '../../../network/NetworkSend';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { GameData } from '../GameData';
import { Game_Player } from './Game_Player';
const { ccclass, property } = _decorator;

@ccclass('Game_SeatItem')
export class Game_SeatItem extends BaseUI 
{
    @property(BaseButton) 
    mSitBtn: BaseButton = null;
    @property(Game_Player) 
    mGame_Player: Game_Player = null;

    mSeatID : number = null; //座位编号
    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        let widget = this.node.getComponent(Widget);
        if(widget != null)
        {
            widget.updateAlignment();
            widget.enabled = false;
            widget.destroy();
        }
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

    public InitWithData(_index : number , _id : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.mSeatID = _id;
        this.mGame_Player.InitWithData(this.mIndex , _id);

        this.mSitBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
            if(selfPlayer == null)
            {
                let msgId = gameData.SitDownSendMsgId();
                let gameId = gameStruct.mGameId;
                NetworkSend.Instance.SitDown(msgId , gameId , this.mSeatID);
            }
            else
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00369"));
            }
        });
        this.mSitBtn.Show(true);

        this.BindData();
    }

    public InitWithReplayData(_id : number)
    {
        this.mSeatID = _id;
        this.mGame_Player.InitWithReplayData(_id);

        this.mSitBtn.SetClickCallback(()=>
        {

        });
        this.mSitBtn.Show(true);
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;

        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.UpdateSeats();
        });

        gameData.Data_S2CCommonSitDownNotify.AddListenner(this,(_data)=>
        {
            this.UpdateSeats();
        });


        gameData.Data_S2CCommonStandUpNotify.AddListenner(this,(_data)=>
        {
            this.UpdateSeats();
        });
        
    }

    UpdateSeats()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let playerInfo = gameData.GetPlayerInfoBySeatId(this.mSeatID);
        this.mSitBtn.Show(playerInfo == null);
    }

    UpdatePlayerUIDirection()
    {
        this.StartSecondsTimer(0.5,0.1,()=>
        {
            let restTime = this.GetRestMillSeconds();
            if(restTime == 0)
            {
                this.mGame_Player.UpdateUIDirection();
            }
        });
        
    }
}

