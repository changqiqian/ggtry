import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { GameConfig } from '../../../GameConfig';
import { Network } from '../../../network/Network';
import { NetworkSend } from '../../../network/NetworkSend';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_CustomerRaise')
export class Game_CustomerRaise extends BaseUI 
{
    @property(Node) 
    mRaiseByPot: Node;
    @property(Node) 
    mRaiseByBB: Node;

    mIndex : number;
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

    public InitWithData(_index :number)
    {
        this.mIndex = _index;
        this.Show(true);
        

        this.mRaiseByPot.active = false;
        this.mRaiseByBB.active = false;
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let totalPot = gameData.GetTotalPotAmount();
        let sb = gameData.GetStaticData().texasConfig.smallBlind;

        if(totalPot/4 < sb * 2)
        {
            this.ShowRaiseBB();
        }
        else
        {
            this.ShowRaiseByPot();
        }
    }

    ShowRaiseBB()
    {
        this.mRaiseByBB.active = true;
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let sb = gameData.GetStaticData().texasConfig.smallBlind;
        let bb = sb * 2;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        for(let i = 0 ; i < this.mRaiseByBB.children.length ; i++)
        {
            let bbRatio = i + 3;
            let amount = bbRatio * bb;
            let selfBetAction = gameData.FindLastActionByUid(LocalPlayerData.Instance.Data_Uid.mData);
            let clientAmount = Tool.ConvertMoney_S2C(amount);
            let currentBtn = this.mRaiseByBB.children[i].getComponent(BaseButton);
            currentBtn.SetTitle(clientAmount + "");
            currentBtn.SetClickCallback((_data)=>
            {
                let actionInfo = new ActionInfo();
                actionInfo.uid = LocalPlayerData.Instance.Data_Uid.mData;
                let realMoney = amount - selfBetAction.amount;

                if(realMoney >= selfPlayer.currencyNum)
                {
                    actionInfo.amount = selfPlayer.currencyNum;
                    actionInfo.actionType = ActionType.ActionType_AllIn;
                }
                else
                {
                    actionInfo.amount = realMoney;
                    actionInfo.actionType = ActionType.ActionType_Raise;
                }
                NetworkSend.Instance.SendGameAction(gameData.ActionSendMsgId() , gameStruct.mGameId ,actionInfo );
            },i);
        }
    }

    ShowRaiseByPot()
    {
        this.mRaiseByPot.active = true;
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let totalPot = gameData.GetTotalPotAmount();
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);

        for(let i = 0 ; i < this.mRaiseByPot.children.length ; i++)
        {
            let ratio = GameConfig.GetCustomerRaiseRatio(i);
            let title = GameConfig.GetCustomerRaiseTitle(i);
            let amount = ratio *  totalPot;
            let selfBetAction = gameData.FindLastActionByUid(LocalPlayerData.Instance.Data_Uid.mData);

            let clientAmount = Tool.ConvertMoney_S2C(amount);

            let currentBtn = this.mRaiseByPot.children[i].getComponent(BaseButton);
            currentBtn.node.getChildByName("Describe").getComponent(Label).string = title;
            currentBtn.SetTitle(clientAmount + "");
            currentBtn.SetClickCallback((_data)=>
            {
                let actionInfo = new ActionInfo();
                actionInfo.uid = LocalPlayerData.Instance.Data_Uid.mData;
                let realMoney = amount - selfBetAction.amount;

                if(realMoney >= selfPlayer.currencyNum)
                {
                    actionInfo.amount = selfPlayer.currencyNum;
                    actionInfo.actionType = ActionType.ActionType_AllIn;
                }
                else
                {
                    actionInfo.amount = realMoney;
                    actionInfo.actionType = ActionType.ActionType_Raise;
                }
                NetworkSend.Instance.SendGameAction(gameData.ActionSendMsgId() , gameStruct.mGameId ,actionInfo );
            },i)
        }
    }




}

