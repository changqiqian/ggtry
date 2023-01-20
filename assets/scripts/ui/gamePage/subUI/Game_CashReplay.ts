import { _decorator, Component, Node, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { GameReplayData } from '../GameReplayData';
import { Game_Pot } from './Game_Pot';
import { Game_PublicCards } from './Game_PublicCards';
import { Game_ReplayCtr } from './Game_ReplayCtr';
import { Game_SeatUI } from './Game_SeatUI';
import { Game_TableInfo } from './Game_TableInfo';
const { ccclass, property } = _decorator;

@ccclass('Game_CashReplay')
export class Game_CashReplay extends BaseUI {
    public static readonly PrefabName :string = "Game_CashReplay";

    @property(Sprite) 
    mBG: Sprite = null;
    @property(MovingShow) 
    mMovingShow: MovingShow = null;

    onDisable()
    {
        UIMgr.Instance.DeleteUIByTarget(this);
    }

    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }
    InitParam() 
    {
        this.OffsetTop();
    }
    BindUI() 
    {
        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);

        this.mMovingShow.SetShowAnimationCallback(()=>
        {
            this.InitSubView();
        })
    }

    RegDataNotify() 
    {

    }
    LateInit() 
    {
        
    }

    CustmoerDestory() 
    {
        GameReplayData.Instance.Clear();
    }

    public InitWithData()
    {

        let testData = new ReplayData();

        testData.gameId = "123";

        testData.texasConfig = new BasicTexasConfig();

        testData.texasConfig.gameType = GameType.GameType_TexasCash;
        testData.texasConfig.gameName = "TestReplay";
        testData.texasConfig.currencyType = GameCurrencyType.GameCurrencyType_Point;
        testData.texasConfig.taxType = GameTaxType.GameTaxType_WholeGameEnd;
        testData.texasConfig.taxRatio = 0.1;

        testData.texasConfig.smallBlind = 1000;
        testData.texasConfig.straddle = false;
        testData.texasConfig.ante = 0 ;
        testData.texasConfig.seatNum = 5;
        testData.texasConfig.insurance = true;
        testData.texasConfig.gpsLimit = true;
        testData.texasConfig.ipLimit = true;

        testData.players = new Array<PlayerInfo>();
        let player1 = new PlayerInfo();
        player1.uid = "selfUid";
        player1.nickName = "player1";
        player1.head = "1";
        player1.currencyNum = 100000;
        player1.bringInNum = 0;
        player1.cards = new Array<CardInfo>();
        let player1Cards1 = new CardInfo();
        player1Cards1.number = 3;
        player1Cards1.type = 3;
        let player1Cards2 = new CardInfo();
        player1Cards2.number = 4;
        player1Cards2.type = 3;
        player1.cards.push(player1Cards1);
        player1.cards.push(player1Cards2);
        player1.seat = 2;
        player1.fold = false;

        let player2 = new PlayerInfo();
        player2.uid = "uuid2";
        player2.nickName = "player2";
        player2.head = "2";
        player2.currencyNum = 100000;
        player2.bringInNum = 0;
        player2.cards = new Array<CardInfo>();
        let player2Cards1 = new CardInfo();
        player2Cards1.number = 7;
        player2Cards1.type = 3;
        let player2Cards2 = new CardInfo();
        player2Cards2.number = 8;
        player2Cards2.type = 3;
        player2.cards.push(player2Cards1);
        player2.cards.push(player2Cards2);
        player2.seat = 1;
        player2.fold = false;
        testData.players.push(player1);
        testData.players.push(player2);

        testData.dealerUid = "selfUid";
        testData.antes = 0;

        testData.roundStartActions = new Array<ActionResult>();
        let rsAct1 = new ActionResult();
        rsAct1.actionInfo = new ActionInfo();
        rsAct1.actionInfo.uid = "uuid2";
        rsAct1.actionInfo.actionType = ActionType.ActionType_SB;
        rsAct1.actionInfo.roundAmount = 1000;
        let rsAct2 = new ActionResult();
        rsAct2.actionInfo = new ActionInfo();
        rsAct2.actionInfo.uid = "selfUid";
        rsAct2.actionInfo.actionType = ActionType.ActionType_BB;
        rsAct2.actionInfo.roundAmount = 2000;
        testData.roundStartActions.push(rsAct1);
        testData.roundStartActions.push(rsAct2);



        testData.publicCards = new Array<CardInfo>();
        let pubCard1 = new CardInfo();
        pubCard1.number = 4;
        pubCard1.type = 1;
        let pubCard2 = new CardInfo();
        pubCard2.number = 5;
        pubCard2.type = 1;
        let pubCard3 = new CardInfo();
        pubCard3.number = 6;
        pubCard3.type = 1;
        let pubCard4 = new CardInfo();
        pubCard4.number = 7;
        pubCard4.type = 1;
        testData.publicCards.push(pubCard1);
        testData.publicCards.push(pubCard2);
        testData.publicCards.push(pubCard3);
        testData.publicCards.push(pubCard4);

        testData.preFlopActions = new Array<ActionResult>();
        let preAct1 = new ActionResult();
        preAct1.actionInfo = new ActionInfo();
        preAct1.actionInfo.uid = "uuid2";
        preAct1.actionInfo.actionType = ActionType.ActionType_Call;
        preAct1.actionInfo.roundAmount = 2000;
        let preAct2 = new ActionResult();
        preAct2.actionInfo = new ActionInfo();
        preAct2.actionInfo.uid = "selfUid";
        preAct2.actionInfo.actionType = ActionType.ActionType_Check;
        preAct2.actionInfo.roundAmount = 0;
        testData.preFlopActions.push(preAct1);
        testData.preFlopActions.push(preAct2);

        testData.flopActions = new Array<ActionResult>();
        let flopAct1 = new ActionResult();
        flopAct1.actionInfo = new ActionInfo();
        flopAct1.actionInfo.uid = "uuid2";
        flopAct1.actionInfo.actionType = ActionType.ActionType_Bet;
        flopAct1.actionInfo.roundAmount = 2000;
        let flopAct2 = new ActionResult();
        flopAct2.actionInfo = new ActionInfo();
        flopAct2.actionInfo.uid = "selfUid";
        flopAct2.actionInfo.actionType = ActionType.ActionType_Call;
        flopAct2.actionInfo.roundAmount = 2000;
        testData.flopActions.push(flopAct1);
        testData.flopActions.push(flopAct2);

        testData.turnActions = new Array<ActionResult>();
        let turnAct1 = new ActionResult();
        turnAct1.actionInfo = new ActionInfo();
        turnAct1.actionInfo.uid = "uuid2";
        turnAct1.actionInfo.actionType = ActionType.ActionType_Fold;
        turnAct1.actionInfo.roundAmount = 0;
        let turnAct2 = new ActionResult();
        turnAct2.actionInfo = new ActionInfo();
        turnAct2.actionInfo.uid = "selfUid";
        turnAct2.actionInfo.actionType = ActionType.ActionType_Fold;
        turnAct2.actionInfo.roundAmount = 0;
        testData.turnActions.push(turnAct1);
        testData.turnActions.push(turnAct2);

        testData.result = new Array<PlayerWinLose>();
        let winlose1 = new PlayerWinLose();
        winlose1.uid = "uuid2";
        winlose1.combinationResult = new CombinationResult();
        winlose1.combinationResult.Combination = 2;
        winlose1.winLose = 50000;
        winlose1.cardInfo = new Array<CardInfo>(); 
        winlose1.cardInfo.push(player2Cards1);
        winlose1.cardInfo.push(player2Cards1);

        let winlose2 = new PlayerWinLose();
        winlose2.uid = "selfUid";
        winlose2.combinationResult = new CombinationResult();
        winlose2.combinationResult.Combination = 3;
        winlose2.winLose = -50000;
        // winlose2.cardInfo = new Array<CardInfo>(); 
        // winlose2.cardInfo.push(player1Cards1);
        // winlose2.cardInfo.push(player1Cards1);

        testData.result.push(winlose1);
        testData.result.push(winlose2);

        GameReplayData.Instance.InitData(testData);
    }
    

    InitSubView()
    {
        this.AddSubView("gamePage","prefab/Game_ReplayCtr" , (_script)=>
        {
            let tempScript = _script as Game_ReplayCtr;
            tempScript.SetExitCallback(()=>
            {
                this.Show(false);
            })
        },this.mMovingShow.node);
        this.AddSubView("gamePage","prefab/Game_Pot", (_script)=>
        {
            let tempScript = _script as Game_Pot;

        },this.mBG.node);
        this.AddSubView("gamePage","prefab/Game_PublicCards", (_script)=>
        {
            let tempScript = _script as Game_PublicCards;
            tempScript.InitWithReplayData();
  
        },this.mBG.node);

        this.AddSubView("gamePage","prefab/Game_TableInfo", (_script)=>
        {
            let tempScript = _script as Game_TableInfo;
            tempScript.InitWithReplayData();

        },this.mBG.node);
        
        let testData = GameReplayData.Instance.Data_ReplayData.mData;
        let seatNum = testData.texasConfig.seatNum

        let prefabName = "prefab/Game_SeatUI" + seatNum;
        this.AddSubView("gamePage",  prefabName  , (_script) =>
        {
            let tempScript = _script as Game_SeatUI;
            tempScript.InitWithReplayData();
        },this.mBG.node);
    }
}

