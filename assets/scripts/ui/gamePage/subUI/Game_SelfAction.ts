import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Network } from '../../../network/Network';
import { BaseButton } from '../../common/BaseButton';
import { CircleTimer } from '../../common/CircleTimer';
import { GameData, Game_ActionType } from '../GameData';
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
    onEnable()
    {

    }

    InitParam() 
    {
        this.node.active = false;
    }
    BindUI() 
    {
        this.mFoldBtn.SetClickCallback(()=>
        {
            let commandId = GameData.GetInstance().Data_DeskInfo.commandId;
            Network.GetInstance().SendPlayerAction(Game_ActionType.Fold , 0 , commandId);
        });

        this.mCheckBtn.SetClickCallback(()=>
        {
            let commandId = GameData.GetInstance().Data_DeskInfo.commandId;
            Network.GetInstance().SendPlayerAction(Game_ActionType.Check , 0 , commandId);
        });

        this.mCallBtn.SetClickCallback(()=>
        {
            let commandId = GameData.GetInstance().Data_DeskInfo.commandId;
            let callAmount = GameData.GetInstance().Data_DeskInfo.callCount;
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(callAmount >= currentPlayer.userInfo.score)
            {
                Network.GetInstance().SendPlayerAction(Game_ActionType.Allin , callAmount , commandId);

            }
            else
            {
                Network.GetInstance().SendPlayerAction(Game_ActionType.Call , callAmount , commandId);
            }
        });

        this.mSliderRaiseBtn.SetClickCallback(this.OnSliderRaiseBtn.bind(this));

        this.mGame_Slider.SetCallback((_amount)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(_amount == 0)
            {
                this.OnSliderRaiseBtn();
                return;
            }
            let commandId = GameData.GetInstance().Data_DeskInfo.commandId;
            if(_amount >= currentPlayer.userInfo.score)
            {
                Network.GetInstance().SendPlayerAction(Game_ActionType.Allin , _amount , commandId);
            }
            else
            {
                Network.GetInstance().SendPlayerAction(Game_ActionType.Raise , _amount , commandId);
            }
        });
    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_WhosTurn",(_current , _before)=>
        {
            this.node.active = false;
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                return;
            }

            if(currentPlayer.userInfo.userId != _current.userId)
            {
                return;
            }

            let time = GameData.GetInstance().Data_EnterGame.deskConfig.turnExpiredTime;
            this.node.active = true;
            this.HideAll();
            this.ShowBasicUI(_current.callCount , _current.minRaise , time);
            
        },this);

        GameData.GetInstance().AddListener("Data_GameStart",(_current , _before)=>
        {
            this.node.active = false;
        },this);


        GameData.GetInstance().AddListener("Data_EnterGame",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                this.node.active  = false;
                return;
            }

            let deskInfo = GameData.GetInstance().Data_DeskInfo;
            if(currentPlayer.userInfo.userId != deskInfo.curTurnUserId)
            {
                this.node.active  = false;
                return;
            }
            this.node.active  = true;
            this.HideAll();

            let time = GameData.GetInstance().Data_EnterGame.deskConfig.curTurnTime;
            this.ShowBasicUI(deskInfo.callCount , deskInfo.minRaise , time);

        },this);

        GameData.GetInstance().AddListener("Data_PlayerAction",(_current , _before)=>
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

            if(_current.gameOpType == Game_ActionType.Delay)
            {
                this.UpdateTimer(true , _current.leftTime);
            }
            else
            {
                this.node.active = false;
            }

        

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

    HideAll()
    {
        this.mFoldBtn.node.active = false;
        this.mCallBtn.node.active = false;
        this.mCheckBtn.node.active = false;
        this.mGame_CustomerRaise.node.active = false;
        this.mSliderRaiseBtn.node.active = false;
        this.mGame_Slider.node.active = false;
    }

    ShowBasicUI(_callAmount : number , _minRaise : number , _turnTime : number)
    {
        this.mCallAmount = _callAmount;
        this.mMinRaiseAmount = _minRaise;

        this.mGame_CustomerRaise.node.active = true;
        this.mSliderRaiseBtn.node.active = true;
        this.mFoldBtn.node.active = true;
        if(this.mCallAmount >0)
        {
            this.mCallBtn.node.active = true;
            this.mCallBtn.SetTitle(this.mCallAmount + "");
        }
        else
        {
            this.mCheckBtn.node.active = true;
        }

        this.UpdateTimer(true , _turnTime);
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
            let selfData = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            let minRaise = GameData.GetInstance().Data_DeskInfo.minRaise;
            this.mGame_Slider.SetTotalAmountAndMinRaise(selfData.userInfo.score , minRaise);
        }
    }

    UpdateTimer(_show : boolean , _leftTime : number)
    {
        this.mCircleTimer.node.active = _show;
        if(_show)
        {
            this.mCircleTimer.StartTimer(_leftTime);
        }
    }
}

