import { _decorator, Component, Node, Sprite, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { NetworkSend } from '../../../network/NetworkSend';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';

const { ccclass, property } = _decorator;

@ccclass('Game_ProfileLayer')
export class Game_ProfileLayer extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mThreeBet: Label = null;
    @property(Label) 
    mTotalHands: Label = null;
    @property(Label) 
    mVPIP: Label = null;
    @property(Label) 
    mRaiseRate: Label = null;


    @property(BaseButton) 
    mKickBtn: BaseButton = null;
    @property(BaseButton) 
    mAddFriendBtn: BaseButton = null;
    
    private mIndex : number = null;
    mTargetUid: string = null;

    InitParam()
    {

    }
    BindUI()
    {

        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        })

        this.mKickBtn.SetClickCallback(()=>
        {
           
        })

        this.mAddFriendBtn.SetClickCallback(()=>
        {
         
        })

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

    public InitWithData(_index : number , _targetUid : string)
    {
        this.ResetUI();
        this.mIndex = _index;
        this.mTargetUid = _targetUid;

        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let playerInfo = gameData.GetPlayerInfoByUid(_targetUid);

        this.LoadLocalHead(parseInt(playerInfo.head),(_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });

        this.mName.string = playerInfo.nickName;

        let msgId = gameData.PlayerStatisticMsgId();
        NetworkSend.Instance.GetPlaterStatistic(msgId , gameStruct.mGameId , _targetUid);
        gameData.Data_S2CCommonGetPlayerStatisticsResp.RemoveListennerByTarget(this);
        gameData.Data_S2CCommonGetPlayerStatisticsResp.AddListenner(this,(_data)=>
        {
            let record = _data.playerStatistic;
            this.mTotalHands.string = record.totalHands + "";

            if(record.totalHands == 0)
            {
                this.ResetUI();
            }
            else
            {
                this.mThreeBet.string = (100*record.totalPreFlopAgainRaiseCount/record.totalHands).toFixed(2) + "%";
                this.mRaiseRate.string = (100*record.totalPreFlopRaiseCount/record.totalHands).toFixed(2) + "%";
                this.mVPIP.string = (100*record.totalFlopHands / record.totalHands).toFixed(2) + "%";
            }
        });
    }

    ResetUI()
    {
        this.mThreeBet.string = "0%";
        this.mTotalHands.string = "0";
        this.mVPIP.string = "0%";
        this.mRaiseRate.string = "0%";
    }

}

