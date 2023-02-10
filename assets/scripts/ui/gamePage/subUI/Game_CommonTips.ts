import { _decorator, Component, Node, Label, Tween } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { Tool } from '../../../Tool';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_CommonTips')
export class Game_CommonTips extends BaseUI 
{
    @property(Label) 
    mTips: Label = null;

    mDuration : number;
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

    ShowTips(_tips : string , _duration:number = 3)
    {
        this.mTips.string = _tips;
        this.Show(true);
        this.StartAnm();
        this.mDuration = _duration;
    }

    StartAnm()
    {
        this.StopAllTween();
        let tempTween = new Tween(this.node); 
        tempTween.delay( this.mDuration);
        tempTween.call(()=>
        {
            this.Show(false);
        });
        tempTween.start();   
    }

    public InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.BindData()
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonBuyInsuranceTurnRespNotify.AddListenner(this,(_data)=>
        {
            let player = gameData.GetPlayerInfoByUid(_data.actionUid);
            if(player == null)
            {
                return;
            }
            let amount = Tool.ConvertMoney_S2C(_data.amount) + "";
            let tips = player.nickName + " " + Localization.GetString("00337") + amount;
            this.ShowTips(tips);
        });

        gameData.Data_S2CCommonInsuranceLotteryNotify.AddListenner(this,(_data)=>
        {
            let player = gameData.GetPlayerInfoByUid(_data.actionUid);
            if(player == null)
            {
                return;
            }
            let amount = Tool.ConvertMoney_S2C(_data.amount) + "";
            let tips = player.nickName + " " + Localization.GetString("00338") + amount;
            this.ShowTips(tips);
        })
    }
}

