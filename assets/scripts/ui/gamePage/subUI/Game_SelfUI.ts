import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { GameData, Game_ActionType } from '../GameData';
import { Game_ActionTag } from './Game_ActionTag';
import { Game_AddTime } from './Game_AddTime';
import { Game_BetAmount } from './Game_BetAmount';
const { ccclass, property } = _decorator;

@ccclass('Game_SelfUI')
export class Game_SelfUI extends BaseUI 
{
    @property(Node) 
    mCards: Node = null;
    @property(Game_AddTime) 
    mGame_AddTime: Game_AddTime = null;
    @property(Game_BetAmount) 
    mGame_BetAmount: Game_BetAmount = null;
    @property(Game_ActionTag) 
    mGame_ActionTag: Game_ActionTag = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mGame_AddTime.SetCallback(()=>
        {

        });
    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_UpdatePlayingPlayer",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            this.node.active = currentPlayer != null;
        },this);
        GameData.GetInstance().AddListener("Data_GameStart",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                return;
            }

            if(currentPlayer.userInfo.userId == _current.sUserId)
            {
                let sb = _current.baseScore;
                this.SetActionTag(Game_ActionType.SB);
            }
            else if(currentPlayer.userInfo.userId == _current.bUserId)
            {
                let bb = _current.baseScore * 2;
                this.SetActionTag(Game_ActionType.BB);
            }
            else
            {
                this.SetActionTag(Game_ActionType.None);
            }

            this.CreateHands(_current.handCard);
        },this);
        GameData.GetInstance().AddListener("Data_WhosTurn",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                return;
            }
            this.mGame_AddTime.node.active = _current.userId == LocalPlayerData.GetInstance().Data_Uid;
        },this);
        
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }

    CreateHands(_cards : Array<number>)
    {
        this.mCards.active = true;
    }

    SetActionTag(_actionType : Game_ActionType)
    {
        this.mGame_ActionTag.SetType(_actionType);
    }
}

