import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { NetworkSend } from '../../../network/NetworkSend';
import { BaseButton } from '../../common/BaseButton';
import { CircleTimer } from '../../common/CircleTimer';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_CustomerRaise } from './Game_CustomerRaise';
import { Game_Slider } from './Game_Slider';
const { ccclass, property } = _decorator;

@ccclass('Game_SelfAction')
export class Game_SelfAction extends BaseUI 
{
    @property(BaseButton) 
    mFoldBtn: BaseButton = null;
    @property(BaseButton) 
    mCallBtn: BaseButton = null;
    @property(BaseButton) 
    mCheckBtn: BaseButton = null;
    @property(Game_CustomerRaise) 
    mGame_CustomerRaise: Game_CustomerRaise = null;
    @property(BaseButton) 
    mSliderRaiseBtn: BaseButton = null;
    @property(Game_Slider) 
    mGame_Slider: Game_Slider = null;
    @property(CircleTimer) 
    mCircleTimer: CircleTimer = null;

    mCallAmount : number = null;
    mMinRaiseAmount : number = null;
    private mIndex : number = null;
    onEnable()
    {

    }

    InitParam() 
    {
      
    }
    BindUI() 
    {
        this.HideAll();
        this.mFoldBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let actionInfo = new ActionInfo();
            actionInfo.uid = LocalPlayerData.Instance.Data_Uid.mData;
            actionInfo.amount = 0;
            actionInfo.actionType = ActionType.ActionType_Fold;
            NetworkSend.Instance.SendGameAction(gameData.ActionSendMsgId(),gameStruct.mGameId,actionInfo);
        });

        this.mCheckBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let actionInfo = new ActionInfo();
            actionInfo.uid = LocalPlayerData.Instance.Data_Uid.mData;
            actionInfo.amount = 0;
            actionInfo.actionType = ActionType.ActionType_Check;
            NetworkSend.Instance.SendGameAction(gameData.ActionSendMsgId(),gameStruct.mGameId,actionInfo);
        });

        this.mCallBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
            let lastBetAction = gameData.FindLastBetAction();
            let actionInfo = new ActionInfo();
            actionInfo.uid = LocalPlayerData.Instance.Data_Uid.mData;
            let callAmount = lastBetAction.amount;
            if(callAmount >= selfPlayer.currencyNum)
            {
                actionInfo.amount = selfPlayer.currencyNum;
                actionInfo.actionType = ActionType.ActionType_AllIn;
            }
            else
            {
                actionInfo.amount = callAmount;
                actionInfo.actionType = ActionType.ActionType_Call;
            }
            NetworkSend.Instance.SendGameAction(gameData.ActionSendMsgId(),gameStruct.mGameId,actionInfo);
        });

        this.mSliderRaiseBtn.SetClickCallback(this.OnSliderRaiseBtn.bind(this));

        this.mGame_Slider.SetCallback((_amount)=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
            let actionInfo = new ActionInfo();
            actionInfo.uid = LocalPlayerData.Instance.Data_Uid.mData;

            if(_amount >= selfPlayer.currencyNum)
            {
                actionInfo.amount = selfPlayer.currencyNum;
                actionInfo.actionType = ActionType.ActionType_AllIn;
            }
            else
            {
                actionInfo.amount = _amount;
                actionInfo.actionType = ActionType.ActionType_Call;
            }
            NetworkSend.Instance.SendGameAction(gameData.ActionSendMsgId(),gameStruct.mGameId,actionInfo);
            
        });
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
        })

        gameData.Data_S2CCommonCurrentActionNotify.AddListenner(this,(_data)=>
        {
            this.UpdateUI();
        })
    }

    HideAll()
    {
        this.mFoldBtn.node.active = false;
        this.mCallBtn.node.active = false;
        this.mCheckBtn.node.active = false;
        this.mGame_CustomerRaise.node.active = false;
        this.mSliderRaiseBtn.node.active = false;
        this.mGame_Slider.node.active = false;
        this.mCircleTimer.StopTimer();
    }


    UpdateUI()
    {
        this.HideAll();
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let actUid = gameData.GetDynamicData().actionUid;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        let myTurn = actUid == LocalPlayerData.Instance.Data_Uid.mData;
        if(selfPlayer == null)
        {
            myTurn = false;
        }

        if(myTurn == false)
        {
            return;
        }
    }

    ShowActionUI()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let lastBetAction = gameData.FindLastBetAction();
        this.mCircleTimer.StopTimer();
        if(lastBetAction ==null)
        {
            this.ShowCheckUI();
        }
        else
        {
            this.ShowBetUI(lastBetAction);
        }

        let actionTime = gameData.GetDynamicData().actionLeftTime;
        this.mCircleTimer.StartTimer(actionTime);
    }

    ShowBetUI(_lastBetAction : ActionInfo)
    {
        this.mFoldBtn.node.active = true;
        this.mCallBtn.node.active = true;
        this.mCheckBtn.node.active = false;
        this.mGame_CustomerRaise.InitWithData(this.mIndex);
        this.mSliderRaiseBtn.node.active = true;
        this.mGame_Slider.node.active = false;
    }

    ShowCheckUI()
    {
        this.mFoldBtn.node.active = true;
        this.mCallBtn.node.active = false;
        this.mCheckBtn.node.active = true;
        this.mGame_CustomerRaise.InitWithData(this.mIndex);
        this.mSliderRaiseBtn.node.active = true;
        this.mGame_Slider.node.active = false;
    }


    CalculateToShowRaiseNode()
    {
        
    }

    OnSliderRaiseBtn()
    {
        this.mGame_CustomerRaise.node.active = !this.mGame_CustomerRaise.node.active;
        this.mGame_Slider.node.active = !this.mGame_Slider.node.active;
        if(this.mGame_Slider.node.active)
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let lastBetAction = gameData.FindLastBetAction();
            let sb = gameData.GetStaticData().texasConfig.smallBlind;
            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);

            let minBet = 0;
            if(lastBetAction == null)
            {
                minBet = sb * 2;
            }
            else
            {
                minBet = lastBetAction.amount;
            }
            this.mGame_Slider.SetTotalAmountAndMinRaise(selfPlayer.currencyNum , minBet);
        }
    }

    UpdateTimer(_show : boolean , _leftTime : number)
    {
        this.mCircleTimer.StopTimer();
        if(_show)
        {
            this.mCircleTimer.StartTimer(_leftTime);
        }
    }
}

