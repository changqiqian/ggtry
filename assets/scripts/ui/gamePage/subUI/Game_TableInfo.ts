import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { Tool } from '../../../Tool';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { GameReplayData } from '../GameReplayData';
const { ccclass, property } = _decorator;

@ccclass('Game_TableInfo')
export class Game_TableInfo extends BaseUI 
{
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
       
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    public InitWithData(_index : number)
    {
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


        this.mRoomName.string = staticData.basicConfig.gameName;
        this.mRoomID.string = "ID:" + gameStruct.mGameId;

        let ante = Tool.ConvertMoney_S2C(staticData.texasConfig.ante);
        let sb = Tool.ConvertMoney_S2C(staticData.texasConfig.smallBlind);
        let bb = sb * 2;
        let straddle = staticData.texasConfig.straddle;

        let bindInfo = "";
        if(straddle)
        {
            bindInfo = sb + "/" + bb + "/" + bb*2;
        }
        else
        {
            bindInfo = sb + "/" + bb;
        }

        if(ante > 0)
        {
            bindInfo += "("+ ante +")";
        }
        this.mBlindInfo.string = bindInfo;

        
        let otherInfo = "";
        if(staticData.texasConfig.insurance)
        {
            otherInfo += Localization.GetString("00060");
        }

        if(staticData.texasConfig.gpsLimit)
        {
            otherInfo += "/" + "GPS";
        }

        if(staticData.texasConfig.ipLimit)
        {
            otherInfo += "/" + "IP";
        }
    }


    InitWithReplayData()
    {
        let replayData = GameReplayData.Instance.Data_ReplayData.mData;
        let staticData = replayData.gameStatic;


        this.mRoomName.string = staticData.basicConfig.gameName;
        this.mRoomID.string = "ID:" + replayData.gameId;

        let ante = Tool.ConvertMoney_S2C(staticData.texasConfig.ante);
        let sb = Tool.ConvertMoney_S2C(staticData.texasConfig.smallBlind);
        let bb = sb * 2;
        let straddle = staticData.texasConfig.straddle;

        let bindInfo = "";
        if(straddle)
        {
            bindInfo = sb + "/" + bb + "/" + bb*2;
        }
        else
        {
            bindInfo = sb + "/" + bb;
        }

        if(ante > 0)
        {
            bindInfo += "("+ ante +")";
        }
        this.mBlindInfo.string = bindInfo;

        
        let otherInfo = "";
        if(staticData.texasConfig.insurance)
        {
            otherInfo += Localization.GetString("00060");
        }

        if(staticData.texasConfig.gpsLimit)
        {
            otherInfo += "/" + "GPS";
        }

        if(staticData.texasConfig.ipLimit)
        {
            otherInfo += "/" + "IP";
        }
    }
    

}

