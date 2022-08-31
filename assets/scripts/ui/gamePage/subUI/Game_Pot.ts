import { _decorator, Component, Node, Label, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { GameData } from '../GameData';
import { Game_MovingChip } from './Game_MovingChip';
const { ccclass, property } = _decorator;

@ccclass('Game_Pot')
export class Game_Pot extends BaseUI 
{
    @property(Node) 
    mCurrentPotBG: Node = null;
    @property(Node) 
    mTotalPotBG: Node = null;
    @property(Label) 
    mCurrent: Label = null;
    @property(Label) 
    mTotal: Label = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.ShowUI(false);
    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_GameStart",(_current , _before)=>
        {
            this.ShowUI(true);
            this.SetTotalPot(_current.basePool);
            this.SetCurrentTurnPot(_current.basePool);
        },this);

        GameData.GetInstance().AddListener("Data_PlayerAction",(_current , _before)=>
        {
            let deskInfo = GameData.GetInstance().Data_DeskInfo;
            let totalTableScore = GameData.GetInstance().GetTotalTableScore();
            this.SetCurrentTurnPot(totalTableScore);
            this.SetTotalPot(deskInfo.basePool);
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
        },this);

        GameData.GetInstance().AddListener("Data_MttGetRoomInfo",(_current , _before)=>
        {
            let deskInfo = GameData.GetInstance().Data_DeskInfo;
            this.SetTotalPot(deskInfo.basePool);
        },this);

        GameData.GetInstance().AddListener("Data_EnterGame",(_current , _before)=>
        {
            let deskInfo = GameData.GetInstance().Data_DeskInfo;
            let totalTableScore = GameData.GetInstance().GetTotalTableScore();
            if(totalTableScore == 0)
            {
                this.ShowUI(false);
                return;
            }
            this.ShowUI(true);
            this.SetTotalPot(deskInfo.basePool);
            this.SetCurrentTurnPot(totalTableScore);
        },this);
        GameData.GetInstance().AddListener("Data_GameResult",(_current , _before)=>
        {
            
        },this);

        GameData.GetInstance().AddListener("Data_SendChipToWinner",(_current , _before)=>
        {
            this.SetTotalPot(0);
            this.SetCurrentTurnPot(0);
            this.ShowUI(false);
            this.LoadPrefab("gamePage" , "prefab/Game_MovingChip" , (_prefab)=>
            {
                let tempNode = instantiate(_prefab);
                this.node.addChild(tempNode);
                let tempScript = tempNode.getComponent(Game_MovingChip);
                let startWolrdPos = this.mTotal.node.worldPosition;
                let endWolrdPos = _current ;
                tempScript.FlyToCollect(startWolrdPos , endWolrdPos);
            });
        },this);

        GameData.GetInstance().AddListener("Data_CollectChipFromPlayer",(_current , _before)=>
        {
            this.SetCurrentTurnPot(0);
            this.LoadPrefab("gamePage" , "prefab/Game_MovingChip" , (_prefab)=>
            {
                let tempNode = instantiate(_prefab);
                this.node.addChild(tempNode);
                let tempScript = tempNode.getComponent(Game_MovingChip);
                let startWolrdPos = _current;
                let endWolrdPos = this.mTotal.node.worldPosition;
                tempScript.FlyToCollect(startWolrdPos , endWolrdPos);
            });
        },this);
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    SetTotalPot(_amount : number)
    {
        this.mTotal.string = Localization.GetString("00064")+":" + _amount;
    }
    SetCurrentTurnPot(_amount : number)
    {
        this.mCurrent.string = "" + _amount;
    }



    ShowUI(_value : boolean)
    {
        this.mCurrentPotBG.active = _value;
        this.mTotalPotBG.active = _value;
    }
}

