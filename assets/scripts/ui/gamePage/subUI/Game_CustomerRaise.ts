import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { GameConfig } from '../../../GameConfig';
import { Network } from '../../../network/Network';
import { BaseButton } from '../../common/BaseButton';
import { GameData, Game_ActionType } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_CustomerRaise')
export class Game_CustomerRaise extends BaseUI 
{
    @property([BaseButton]) 
    mBtns: [BaseButton];
    InitParam()
    {

    }
    BindUI()
    {
        for(let i = 0 ; i < this.mBtns.length ; i++)
        {
            this.mBtns[i].SetClickCallback(this.RaiseBtnLogic.bind(this),i);
        }
    }
    RegDataNotify()
    {
        GameData.GetInstance().AddListener("Data_WhosTurn",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                return;
            }

            if(currentPlayer.userInfo.userId != _current.userId)
            {
                return;
            }
            this.ShowRaiseUI(_current.minRaise);

        },this);


        GameData.GetInstance().AddListener("Data_EnterGame",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                return;
            }

            let deskInfo = GameData.GetInstance().Data_DeskInfo;
            if(currentPlayer.userInfo.userId != deskInfo.curTurnUserId)
            {
                return;
            }

            let minRaise = GameData.GetInstance().Data_DeskInfo.minRaise;
            this.ShowRaiseUI(minRaise);
        },this);
    }
    LateInit()
    {

    }

    CustmoerDestory()
    {

    }

    RaiseBtnLogic(_index : number)
    {
        let amount = Number(this.mBtns[_index].GetTitle());
        let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);

        let commandId = GameData.GetInstance().Data_DeskInfo.commandId;
        if(amount >= currentPlayer.userInfo.score)
        {
            Network.GetInstance().SendPlayerAction(Game_ActionType.Allin , amount , commandId);
        }
        else
        {
            Network.GetInstance().SendPlayerAction(Game_ActionType.Raise , amount , commandId);
        }
    }

    GetAmount(_ratio : number , _basePool : number , _minRaise : number) : number
    {
        let amount = _ratio * _basePool + _minRaise;
        let fixed = amount.toFixed(0);
        return Number(fixed);
    }

    ShowRaiseUI(_minRaise : number)
    {
        let currentPool = GameData.GetInstance().Data_DeskInfo.basePool;
        this.UpdateUIWithRatioMode(currentPool,_minRaise);
    }

    UpdateUIWithRatioMode(_currentPool : number , _minRaise : number)
    {
        for(let i = 0 ; i < this.mBtns.length ; i++)
        {
            let ratio = GameConfig.GetCustomerRaiseRatio(i);
            let title = GameConfig.GetCustomerRaiseTitle(i);
            let amount = this.GetAmount(ratio,_currentPool , _minRaise);
            this.mBtns[i].node.getChildByName("Describe").getComponent(Label).string = title;
            this.mBtns[i].SetTitle(amount + "");
        }
    }
}

