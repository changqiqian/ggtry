import { _decorator, Component, Node, color, Color } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { NetworkSend } from '../../../network/NetworkSend';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
import { CircleTimer } from '../../common/CircleTimer';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_PreCheckOrFold } from '../GameData';
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
        this.mCircleTimer.SetColor(new Color(251,160,2));
        this.mFoldBtn.SetClickCallback(()=>
        {
            this.ExcutiveFold();
        });

        this.mCheckBtn.SetClickCallback(()=>
        {
            this.ExcutiveCheck();
        });

        this.mCallBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
            let biggestBetAction = gameData.FindBiggestBetAction();
            let selfBetAction = gameData.FindLastActionByUid(LocalPlayerData.Instance.Data_Uid.mData);

            let actionInfo = new ActionInfo();
            actionInfo.uid = LocalPlayerData.Instance.Data_Uid.mData;

            let callAmount = biggestBetAction.roundAmount;
            if(callAmount < selfPlayer.currencyNum)
            {
                if(selfBetAction != null)
                {
                    callAmount -= selfBetAction.roundAmount;
                }
            }
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
            
            this.SendGameAction(actionInfo);
        });

        this.mSliderRaiseBtn.SetClickCallback(this.OnSliderRaiseBtn.bind(this));

        this.mGame_Slider.SetCallback((_amount)=>
        {
            if(_amount == 0)
            {
                this.OnSliderRaiseBtn();
                return;
            }

            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
            let selfBetAction = gameData.FindLastActionByUid(LocalPlayerData.Instance.Data_Uid.mData);
            let biggestBetAction = gameData.FindBiggestBetAction();
            let actionInfo = new ActionInfo();
            actionInfo.uid = LocalPlayerData.Instance.Data_Uid.mData;

            if(_amount < selfPlayer.currencyNum)
            {
                if(selfBetAction != null)
                {
                    _amount = _amount - selfBetAction.roundAmount;
                }
            }
            if(_amount >= selfPlayer.currencyNum)
            {
                actionInfo.amount = selfPlayer.currencyNum;
                actionInfo.actionType = ActionType.ActionType_AllIn;
            }
            else
            {
                if(biggestBetAction == null || biggestBetAction.roundAmount == 0)
                {
                    actionInfo.amount = _amount;
                    actionInfo.actionType = ActionType.ActionType_Bet;
                }
                else
                {
                    actionInfo.amount = _amount;
                    actionInfo.actionType = ActionType.ActionType_Raise;
                }
            }

            this.SendGameAction(actionInfo);

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
        if(this.CheckInitFlag())
        {
            return;
        }
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
            if(_data.actionUid  == LocalPlayerData.Instance.Data_Uid.mData)
            {
                this.UpdateUI();
            }
            else
            {
                this.HideAll();
            }
        })

        gameData.Data_S2CCommonSettlementNotify.AddListenner(this,(_data)=>
        {
            this.HideAll();
        })

        gameData.Data_S2CCommonStandUpNotify.AddListenner(this,(_data)=>
        {
            if(_data.actionUid  == LocalPlayerData.Instance.Data_Uid.mData)
            {
                this.HideAll();
            }
        })

        gameData.Data_S2CCommonSitDownNotify.AddListenner(this,(_data)=>
        {
            if(_data.seatPlayerInfo.uid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.UpdateUI();
        })

        gameData.Data_S2CCommonActionNotify.AddListenner(this,(_data)=>
        {
            if(_data.actionInfo.uid == LocalPlayerData.Instance.Data_Uid.mData)
            {
                gameData.Data_PreCheckOrFold.mData = Game_PreCheckOrFold.UnSelected;
                this.HideAll();
            }
        })

        gameData.Data_S2CCommonExtraThinkNotify.AddListenner(this,(_data)=>
        {
            let playerInfo = gameData.GetPlayerInfoByUid(_data.actionUid);
            if(playerInfo == null)
            {
                return;
            }

            if(playerInfo.uid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.mCircleTimer.StartTimer(_data.totalTime);
        })

        gameData.Data_S2CCommonInsuranceTurnNotify.AddListenner(this,(_data)=>
        {
            if(_data.actionUid == LocalPlayerData.Instance.Data_Uid.mData)
            {
                this.HideAll();
            }
        });
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
        let gameState = gameData.GetGameState();

        if(gameData.IsGamePlayingNow() == false)
        {
            return;
        }

        let actUid = gameData.GetDynamicData().actionUid;
        let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            return;
        }
        if(gameState == TexasCashState.TexasCashState_RoundStart)
        {
            return;
        }
        
        if(actUid != selfPlayer.uid)
        {
            return;
        }

        if(gameData.Data_PreCheckOrFold.mData == Game_PreCheckOrFold.Selected)
        {
            let selfLastAct = gameData.FindLastActionByUid(LocalPlayerData.Instance.Data_Uid.mData);
            let biggestAct = gameData.FindBiggestBetAction();

            if(biggestAct == null)
            {
                this.ExcutiveCheck();
                return;
            }

            if(selfLastAct == null)
            {
                this.ExcutiveFold();
                return;
            }

            if(selfLastAct.roundAmount < biggestAct.roundAmount)
            {
                this.ExcutiveFold();
                return;
            }

            if(selfLastAct.roundAmount >= biggestAct.roundAmount)
            {
                this.ExcutiveCheck();
                return;
            }
        }
        this.ShowActionUI();
    }

    ShowActionUI()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let lastBigBetAction = gameData.FindBiggestBetAction();
        let selfLastAction = gameData.FindLastActionByUid(LocalPlayerData.Instance.Data_Uid.mData);
        this.mCircleTimer.StopTimer();
        if(lastBigBetAction == null)
        {
            this.ShowCheckUI();
        }
        else 
        {
            if(selfLastAction == null)
            {
                if(lastBigBetAction.roundAmount > 0)
                {
                    this.ShowBetUI(lastBigBetAction);
                }
                else
                {
                    this.ShowCheckUI();
                }
            }
            else
            {
                if(selfLastAction.roundAmount == lastBigBetAction.roundAmount)
                {
                    this.ShowCheckUI();
                }
                else
                {
                    this.ShowBetUI(lastBigBetAction);
                }
            }
            
        }
        let actionTime = gameData.GetDynamicData().actionLeftTime;
        this.mCircleTimer.StartTimer(actionTime);
    }

    ShowBetUI(_lastBetAction : ActionInfo)
    {
        this.mFoldBtn.node.active = true;
        this.mCallBtn.node.active = true;
        let clientCallAmount = Tool.ConvertMoney_S2C(_lastBetAction.roundAmount);
        this.mCallBtn.SetTitle(clientCallAmount + "");
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
            let biggestBetAction = gameData.FindBiggestBetAction();
            let sb = gameData.GetStaticData().smallBlind;
            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);

            let minBet = 0;
            if(biggestBetAction == null)
            {
                minBet = sb * 2;
            }
            else
            {
                minBet = biggestBetAction.roundAmount * 2;
            }
            this.mGame_Slider.SetTotalAmountAndMinRaise(selfPlayer.currencyNum , minBet , sb);
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

    ExcutiveFold()
    {
        let actionInfo = new ActionInfo();
        actionInfo.uid = LocalPlayerData.Instance.Data_Uid.mData;
        actionInfo.amount = 0;
        actionInfo.actionType = ActionType.ActionType_Fold;
        this.SendGameAction(actionInfo);
    }

    ExcutiveCheck()
    {
        let actionInfo = new ActionInfo();
        actionInfo.uid = LocalPlayerData.Instance.Data_Uid.mData;
        actionInfo.amount = 0;
        actionInfo.actionType = ActionType.ActionType_Check;
        this.SendGameAction(actionInfo);
    }

    SendGameAction(_action : ActionInfo)
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_PreCheckOrFold.mData = Game_PreCheckOrFold.UnSelected;
        NetworkSend.Instance.SendGameAction(gameData.ActionSendMsgId(),gameStruct.mGameId,_action);
        this.HideAll();
    }
}

