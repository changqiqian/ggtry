import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_Pot')
export class Game_Pot extends BaseUI 
{
    @property(Label) 
    mCurrent: Label = null;
    @property(Label) 
    mTotal: Label = null;
    InitParam() 
    {

    }
    BindUI() 
    {

    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_GameStart",(_current , _before)=>
        {
            this.SetTotalPot(_current.basePool);
        },this);
        GameData.GetInstance().AddListener("Data_PotChange",(_current , _before)=>
        {
            let totalPot = 0;
            for(let i = 0 ; i < _current.poolInfos.length ; i++)
            {
                let currentPoolId = _current.poolInfos[i].poolId;
                let currentscore = _current.poolInfos[i].score;
                totalPot += currentscore;
            }

            this.SetTotalPot(totalPot);
            this.CollectChip();
        },this);

        GameData.GetInstance().AddListener("Data_MttGetRoomInfo",(_current , _before)=>
        {
            let deskInfo = GameData.GetInstance().Data_DeskInfo;
            this.SetTotalPot(deskInfo.basePool);
        },this);

        GameData.GetInstance().AddListener("Data_EnterGame",(_current , _before)=>
        {
            let deskInfo = GameData.GetInstance().Data_DeskInfo;
            this.SetTotalPot(deskInfo.basePool);
        },this);
        GameData.GetInstance().AddListener("Data_GameResult",(_current , _before)=>
        {
            this.SendChip();
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

    ClearPot()
    {
        this.SetTotalPot(0);
        this.SetCurrentTurnPot(0);
    }

    SetTotalPot(_amount : number)
    {
        this.mTotal.string = Localization.GetString("00064")+":" + _amount;
    }
    SetCurrentTurnPot(_amount : number)
    {
        this.mCurrent.string = "" + _amount;
    }

    CollectChip()
    {

    }

    SendChip()
    {

    }
}

