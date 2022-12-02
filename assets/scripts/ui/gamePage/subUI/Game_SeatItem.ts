import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
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
    @property(BaseButton) 
    mEmptyBtn: BaseButton = null;
    @property(Game_Player) 
    mGame_Player: Game_Player = null;
    mSeatID : number = null; //座位编号

    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mSitBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let msgId = gameData.SitDownSendMsgId();
            let gameId = gameStruct.mGameId;
            NetworkSend.Instance.SitDown(msgId , gameId , this.mSeatID);
        });

        this.mEmptyBtn.SetClickCallback(()=>
        {

        });


        this.mSitBtn.Show(true);
        this.mEmptyBtn.Show(false);

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
        this.mIndex = _index;
        this.mSeatID = _id;
        this.mGame_Player.InitWithData(this.mIndex , _id);
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
        let seatInfos = gameData.GetDynamicData().seatInfos;
        for(let i = 0 ; i < seatInfos.length ; i++)
        {
            let current = seatInfos[i];
            let occupaid = current.seat == this.mSeatID;
            this.mSitBtn.Show(!occupaid);
            this.mEmptyBtn.Show(!occupaid);
        }
    }
}

