import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { BaseButton } from '../../common/BaseButton';
import { GameData } from '../GameData';
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
    @property(Node) 
    mRaiseNode: Node = null;
    @property(BaseButton) 
    mSliderRaiseBtn: BaseButton = null;
    @property(Game_Slider) 
    mGame_Slider: Game_Slider = null;
    

    mCallAmount : number = null;
    mMinRaiseAmount : number = null;
    onEnable()
    {

    }

    InitParam() 
    {

    }
    BindUI() 
    {
        
    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_WhosTurn",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                this.node.active = false;
                return;
            }
            this.node.active = true;
            this.HideAll();
            this.ShowBasicUI(_current.callCount , _current.minRaise);
            
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
            this.ShowBasicUI(deskInfo.callCount , deskInfo.minRaise);

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
            this.node.active = false;

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
        this.mRaiseNode.active = false;
        this.mSliderRaiseBtn.node.active = false;
        this.mGame_Slider.node.active = false;
    }

    ShowBasicUI(_callAmount : number , _minRaise : number)
    {
        this.mCallAmount = _callAmount;
        this.mMinRaiseAmount = _minRaise;

        this.mRaiseNode.active = true;
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
    }

    CalculateToShowRaiseNode()
    {
        
    }
}

