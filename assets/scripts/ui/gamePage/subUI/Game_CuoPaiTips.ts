import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { NetworkSend } from '../../../network/NetworkSend';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_CuoPaiTips')
export class Game_CuoPaiTips extends BaseUI {

    @property(Label) 
    mTips: Label = null;
    @property(Label) 
    mCountDown: Label = null;
    @property(Label) 
    mCost: Label = null;
    @property(BaseButton) 
    mDealBtn: BaseButton = null;
    @property(BaseButton) 
    mCuoBtn: BaseButton = null;

    private mIndex : number = null;
    InitParam()
    {
        this.mDealBtn.SetClickCallback(()=>
        {
            this.SendCuoPaiEnd();
            this.Show(false);
        });
        this.mCuoBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let msgId = gameData.StartCuoPaiMsgId();
            let gameId = gameStruct.mGameId;
            NetworkSend.Instance.SendCuoPaiStart(msgId , gameId)
            this.Show(false);
        });
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

    public InitWithData(_leftTime : number , _index : number)
    {
        this.mIndex = _index;
        this.mCountDown.string = _leftTime + "";
        this.StartSecondsTimer(_leftTime,1,()=>
        {
            let restTime = this.GetRestMillSeconds();
            let seconds = this.GetRestSeconds();
            this.mCountDown.string = seconds + "";
            if(restTime == 0)
            {
                this.SendCuoPaiEnd();
                this.Show(false);
            }
        })
        if(this.CheckInitFlag())
        {
            return;
        }

        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonSqueezeFinishResp.AddListenner(this,(_data)=>
        {
            this.Show(false);
        })
        
    }

    SendCuoPaiEnd()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let msgId = gameData.EndCuoPaiMsgId();
        let gameId = gameStruct.mGameId;
        NetworkSend.Instance.SendCuoPaiEnd(msgId , gameId)
    }

}

