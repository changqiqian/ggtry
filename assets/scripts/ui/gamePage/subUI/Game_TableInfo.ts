import { _decorator, Component, Node, Label, Color } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Tool } from '../../../Tool';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { GameReplayData } from '../GameReplayData';
const { ccclass, property } = _decorator;

@ccclass('Game_TableInfo')
export class Game_TableInfo extends BaseUI 
{
    @property(Label) 
    mDuration: Label = null;
    @property(Label) 
    mRoomName: Label = null;
    @property(Label) 
    mRoomID: Label = null;
    @property(Label) 
    mBlindInfo: Label = null;
    @property(Label) 
    mOtherInfo: Label = null;

    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {

    }
    RegDataNotify() 
    {
        // LocalPlayerData.Instance.Data_BGSetting.AddListenner(this,(_data)=>
        // {
        //     if(_data == 0)
        //     {
        //         this.mDuration.color = new Color(108,117,126);
        //         this.mRoomName.color = new Color(91,90,100);
        //         this.mRoomID.color = new Color(91,90,100);
        //         this.mBlindInfo.color = new Color(91,90,100);
        //         this.mOtherInfo.color = new Color(91,90,100);
        //     }
        //     else
        //     {
        //         this.mDuration.color = new Color(122,130,142);
        //         this.mRoomName.color = new Color(122,130,142);
        //         this.mRoomID.color = new Color(122,130,142);
        //         this.mBlindInfo.color = new Color(122,130,142);
        //         this.mOtherInfo.color = new Color(122,130,142);
        //     }
        // });
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    public InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.UpdateUI();
        });
    }

    UpdateUI()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let staticData = gameData.GetStaticData();
        this.mRoomName.string = staticData.gameName;
        this.mRoomID.string = "ID:" + gameStruct.mGameId;
        this.mBlindInfo.string = Tool.GetBlindInfo(staticData.smallBlind,staticData.straddle , staticData.ante);
        let otherInfo = "";
        if(staticData.insurance)
        {
            otherInfo += Localization.GetString("00060");
        }

        if(staticData.gpsLimit)
        {
            otherInfo += "/" + "GPS";
        }

        if(staticData.ipLimit)
        {
            otherInfo += "/" + "IP";
        }
    }


    InitWithReplayData()
    {
        let replayData = GameReplayData.Instance.Data_ReplayData.mData;
        let staticData = replayData.texasConfig;


        this.mRoomName.string = staticData.gameName;
        this.mRoomID.string = "ID:" + replayData.gameId;

        let ante = staticData.ante
        let sb = staticData.smallBlind
        let bb = sb * 2;
        let straddle = staticData.straddle;
        let straddleAmount = bb * 2;
        let bindInfo = "";
        if(straddle)
        {
            bindInfo = Tool.ConvertMoneyTo_K(sb) + "/" + Tool.ConvertMoneyTo_K(bb) + "/" + Tool.ConvertMoneyTo_K(straddleAmount) 
        }
        else  
        {
            bindInfo = Tool.ConvertMoneyTo_K(sb) + "/" + Tool.ConvertMoneyTo_K(bb);
        }

        if(ante > 0)
        {
            bindInfo += "("+ Tool.ConvertMoneyTo_K(ante) +")";
        }
        this.mBlindInfo.string = bindInfo;

        
        let otherInfo = "";
        if(staticData.insurance)
        {
            otherInfo += Localization.GetString("00060");
        }

        if(staticData.gpsLimit)
        {
            otherInfo += "/" + "GPS";
        }

        if(staticData.ipLimit)
        {
            otherInfo += "/" + "IP";
        }
    }
    

}

