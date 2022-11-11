import { _decorator, Component, Node, Sprite, Label, instantiate, AudioSource, Vec3, view } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { BaseButton } from '../../common/BaseButton';
import { CircleTimer } from '../../common/CircleTimer';
import { Poker } from '../../common/Poker';
import { Game_ActionTag } from './Game_ActionTag';
import { Game_AddMoneyLabel } from './Game_AddMoneyLabel';
import { Game_BetAmount } from './Game_BetAmount';
import { Game_MovingCards } from './Game_MovingCards';
import { Game_MovingChip } from './Game_MovingChip';
const { ccclass, property } = _decorator;

@ccclass('Game_Player')
export class Game_Player extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mAmount: Label = null;
    @property(Node) 
    mMiniCard: Node = null;
    @property(CircleTimer) 
    mCircleTimer: CircleTimer = null;
    @property(Node) 
    mDealer: Node = null;
    @property(Game_ActionTag) 
    mGame_ActionTag: Game_ActionTag = null;
    @property(Game_BetAmount) 
    mGame_BetAmount: Game_BetAmount = null;
    @property(Node) 
    mFold: Node = null;
    @property(Node) 
    mCards: Node = null;
    @property(Node) 
    mLeaveStatus: Node = null;
    @property(BaseButton) 
    mSelfBtn: BaseButton = null;

    mSeatID : number = null; //座位编号
    InitParam() 
    {
    }
    BindUI() 
    {
        this.node.active = false;
        this.mSelfBtn.SetClickCallback(()=>
        {

        });

        this.HideAllUI();
    }


    HideAllUI()
    {
        this.mMiniCard.active = false;
        this.mCircleTimer.node.active = false;
        this.mDealer.active = false;
        this.mGame_ActionTag.node.active = false;
        this.mGame_BetAmount.node.active = false;
        this.mCards.active = false;

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

    SetSeatID(_id : number)
    {
        this.mSeatID = _id;
    }


    SetActionTag()
    {

        this.mGame_ActionTag.SetType();
    }
    UpdateTimer(_show : boolean , _leftTime : number)
    {


        this.mCircleTimer.node.active = _show;
        if(_show)
        {
            this.mCircleTimer.StartTimer(_leftTime);
        }
    }

    UpdateDealer(_dealerId : string)
    {
        
    }
    
    Bet(_amount : number)
    {
        this.mGame_BetAmount.node.active = false;
        if(_amount == -1)
        {
            return;
        }
        if(_amount > 0)
        {
            this.mGame_BetAmount.node.active = true;
            this.mGame_BetAmount.Bet(_amount);
        } 
    }

    //发牌后，显示头像上的小扑克牌
    ShowMiniCards(_show : boolean)
    {
        this.mFold.active = !_show;
        this.mMiniCard.active = _show;
    }



    ShowWin(_winScore:number , _totalScore : number)
    {
        this.LoadPrefab("gamePage" , "prefab/Game_AddMoneyLabel" , (_prefab)=>
        {
            let tempNode = instantiate(_prefab);
            this.node.addChild(tempNode);
            let tempScript = tempNode.getComponent(Game_AddMoneyLabel);
            tempScript.InitWithData(_winScore);
        });

        this.LoadPrefab("gamePage" , "prefab/Game_WinEffect" , (_prefab)=>
        {
            let tempNode = instantiate(_prefab);
            this.node.addChild(tempNode);
        });
    }



    HideActionUI()
    {
        this.mMiniCard.active = false;
        this.mCircleTimer.node.active = false;
        this.mDealer.active = false;
        this.mGame_ActionTag.node.active = false;
        this.mGame_BetAmount.node.active = false;
        this.mCards.active = false;
    }

}

