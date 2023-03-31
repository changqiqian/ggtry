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

    mClickCallback : Function;
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

    public InitWithData(_index :number , _clickCallback : Function)
    {
        this.mClickCallback = _clickCallback;
        this.mIndex = _index;
        this.Show(true);
        
        this.mRaiseByPot.active = false;
        this.mRaiseByBB.active = false;
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;

        let lastBetAct = gameData.FindBiggestBetAction();
        if(lastBetAct == null)
        {
            this.ShowRaiseByPot();
        }
        else
        {
            if(lastBetAct.roundAmount == 0)
            {
                this.ShowRaiseByPot();
            }
            else
            {
                this.ShowRaiseBB();
            }
        }
        if(this.CheckInitFlag())
        {
            return;
        }
        this.BindData();
    }

    BindData()
    {
        LocalPlayerData.Instance.Data_BBModeSetting.AddListenner(this,(_data)=>
        {
            if(this.mRaiseByPot.activeInHierarchy == false)
            {
                return;
            }
            this.ShowRaiseByPot();
            
        });
    }

    ShowRaiseBB()
    {
        this.mRaiseByBB.active = true;
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let lastBetAct = gameData.FindBiggestBetAction();
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        for(let i = 0 ; i < this.mRaiseByBB.children.length ; i++)
        {
            let bbRatio = i + 2;
            let amount = bbRatio * lastBetAct.roundAmount;
            amount = Tool.CeilServerMoney(amount);
            let clientAmount = Tool.ConvertMoney_S2C(amount);
            let currentBtn = this.mRaiseByBB.children[i].getComponent(BaseButton);
            currentBtn.SetTitle(clientAmount + "");
            currentBtn.SetClickCallback((_data)=>
            {
                let actionInfo = new ActionInfo();
                actionInfo.uid = LocalPlayerData.Instance.Data_Uid.mData;
                let selfBetAction = gameData.FindLastActionByUid(LocalPlayerData.Instance.Data_Uid.mData);
                let realMoney = amount;

                if(realMoney < selfPlayer.currencyNum)
                {
                    if(selfBetAction != null)
                    {
                        realMoney -= selfBetAction.roundAmount;
                    }
                }
                if(realMoney >= selfPlayer.currencyNum)
                {
                    actionInfo.amount = selfPlayer.currencyNum;
                    actionInfo.actionType = ActionType.ActionType_AllIn;
                }
                else
                {
                    if(lastBetAct == null || lastBetAct.roundAmount == 0)
                    {
                        actionInfo.amount = realMoney;
                        actionInfo.actionType = ActionType.ActionType_Bet;
                    }
                    else
                    {
                        actionInfo.amount = realMoney;
                        actionInfo.actionType = ActionType.ActionType_Raise;
                    }
                }
                NetworkSend.Instance.SendGameAction(gameData.ActionSendMsgId() , gameStruct.mGameId ,actionInfo );
                if(this.mClickCallback!=null)
                {
                    this.mClickCallback();
                }
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
        let lastBetAct = gameData.FindBiggestBetAction();
        let bb = gameData.GetStaticData().smallBlind * 2;

        let buttonCount = LocalPlayerData.Instance.CustomerRaiseSetting.length;
        

        for(let i = 0 ; i < this.mRaiseByPot.children.length ; i++)
        {
            let currentBtn = this.mRaiseByPot.children[i].getComponent(BaseButton);
            if(i < buttonCount)
            {
                currentBtn.Show(true);
            }
            else
            {
                currentBtn.Show(false);
                continue;
            }

            let raiseIndex = LocalPlayerData.Instance.CustomerRaiseSetting[i];

            let ratio = GameConfig.GetDefaultCustomerRaiseRatio(raiseIndex);
            let title = GameConfig.GetDefaultCustomerRaiseTitle(raiseIndex);
            let amount = ratio *  totalPot; 	
            amount = Tool.CeilServerMoney(amount);
            if(amount <  bb)
            {
                amount = bb;
            }
            
            currentBtn.node.getChildByName("Describe").getComponent(Label).string = title;
            if(LocalPlayerData.Instance.Data_BBModeSetting.mData)
            {
                
                let showBB = Tool.ConvertToBB(amount , bb);
                currentBtn.SetTitle(showBB + "");
            }
            else
            {
                let clientAmount = Tool.ConvertMoney_S2C(amount);
                currentBtn.SetTitle(clientAmount + "");
            }

            currentBtn.SetClickCallback((_data)=>
            {
                let actionInfo = new ActionInfo();
                actionInfo.uid = LocalPlayerData.Instance.Data_Uid.mData;
                let selfBetAction = gameData.FindLastActionByUid(LocalPlayerData.Instance.Data_Uid.mData);
                let realMoney = amount;
                if(realMoney < selfPlayer.currencyNum)
                {
                    if(selfBetAction != null)
                    {
                        realMoney -= selfBetAction.roundAmount;
                    }
                }
                if(realMoney >= selfPlayer.currencyNum)
                {
                    actionInfo.amount = selfPlayer.currencyNum;
                    actionInfo.actionType = ActionType.ActionType_AllIn;
                }
                else
                {
                    if(lastBetAct == null || lastBetAct.roundAmount == 0)
                    {
                        actionInfo.amount = realMoney;
                        actionInfo.actionType = ActionType.ActionType_Bet;
                    }
                    else
                    {
                        actionInfo.amount = realMoney;
                        actionInfo.actionType = ActionType.ActionType_Raise;
                    }
                }
                
                NetworkSend.Instance.SendGameAction(gameData.ActionSendMsgId() , gameStruct.mGameId ,actionInfo );
                {
                    this.mClickCallback();
                }
            },i)
        }
    }
}

