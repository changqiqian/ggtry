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

    InitParam()
    {

    }
    BindUI()
    {
        for(let i = 0 ; i < this.node.children.length ; i++)
        {
            let currentChild = this.node.children[i];
            let currentBaseButton = currentChild.getComponent(BaseButton);
            currentBaseButton.SetClickCallback(this.RaiseBtnLogic.bind(this),i);
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
            let currentPool = GameData.GetInstance().Data_DeskInfo.basePool;
            let minRaise = _current.minRaise;
            this.UpdateUI(currentPool,minRaise);
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

            let currentPool = GameData.GetInstance().Data_DeskInfo.basePool;
            let minRaise = GameData.GetInstance().Data_DeskInfo.minRaise;
            this.UpdateUI(currentPool,minRaise);


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

    RaiseBtnLogic(_index : number)
    {
        let currentChild = this.node.children[_index];
        let currentBaseButton = currentChild.getComponent(BaseButton);
        let amount = Number(currentBaseButton.GetTitle());
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
        let amount = _ratio * _basePool;
        if(amount < _minRaise)
        {
            amount = _minRaise;
        }

        let fixed = amount.toFixed(0);
        return Number(fixed);
    }

    UpdateUI(_currentPool : number , _minRaise : number)
    {
        for(let i = 0 ; i < this.node.children.length ; i++)
        {
            let ratio = GameConfig.GetCustomerRaiseRatio(i);
            let title = GameConfig.GetCustomerRaiseTitle(i);
            let currentNode = this.node.children[i];
            let currentBaseButton = currentNode.getComponent(BaseButton);
            let amount = this.GetAmount(ratio,_currentPool , _minRaise);
            currentNode.getChildByName("Describe").getComponent(Label).string = title;
            currentBaseButton.SetTitle(amount + "");
        }
    }
}

