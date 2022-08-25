import { _decorator, Component, Node } from 'cc';
import { DataNotify } from '../../base/DataNotify';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { MsgID, MsgStatus, Network } from '../../network/Network';
const { ccclass, property } = _decorator;

@ccclass('GameData')
export class GameData extends DataNotify 
{
    private static Instance:GameData = null;

    public static GetInstance() : GameData
    {
        if(GameData.Instance == null)
        {
            GameData.Instance = new GameData();
            GameData.Instance.CreateNotify();
        }

        return GameData.Instance;
    }

    Data_PlayingPlayers : Array<any> = new Array<any>(); // 坐下玩牌的玩家
    Data_UpdatePlayingPlayer : boolean = null;//立即更新正在玩牌的玩家数据
    
    Data_MttGetRoomInfo : any = null; //Mtt房间内信息
    Data_RefreshMttInfo : any = null; //刷新mtt的最新状态数据
    Data_ErrorAndBackHall : any = null; //获取mtt房间内信息出错
    Data_MttSelfStatus : any = null; //更新自己的mtt比赛状态
    Data_EnterGame : any = null; //进入游戏
    Data_RecordDuringMatch : any = null; //获取比赛中实时数据
    Data_CheckPublicCards : any = null ; //发发看数据
    Data_SendPublicCards : any = null; //发公共牌
    Data_GameStart : any = null; //游戏开始消息
    Data_MttStatusChange : any = null; //mtt比赛状态改变
    Data_UpdatePlayerScore : any = null;//更新玩家分数
    Data_WhosTurn : any = null;// 该谁行动
    Data_PlayerAction : any = null; //玩家执行行动
    Data_PotChange:any = null; //底池变化
    Data_DecideConbination : any = null; //通知玩家当前排行
    Data_GetSelfMttStatus : any = null;//获取自己在mtt桌子内的状态
    RegisteMsg()
    {
        Network.GetInstance().AddMsgListenner(MsgID.MttGetRoomInfo ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS)
            {
                this.Data_MttGetRoomInfo = _msgBody;
            }
            else
            {
                this.Data_ErrorAndBackHall = _msgBody.reason;
            }
            
        },this);
        
        Network.GetInstance().AddMsgListenner(MsgID.RefreshMttInfo ,(_msgBody)=>
        {
            this.Data_RefreshMttInfo = _msgBody;
        },this);

        Network.GetInstance().AddMsgListenner(MsgID.CheckPublicCards ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS)
            {
                this.Data_CheckPublicCards = _msgBody;
            }
            else
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00057"));
            }
            
        },this);


        Network.GetInstance().AddMsgListenner(MsgID.SendPublicCards ,(_msgBody)=>
        {
            this.Data_SendPublicCards = _msgBody;
        },this);
        
        Network.GetInstance().AddMsgListenner(MsgID.GameStart ,(_msgBody)=>
        {
            this.UpdatePlayerPlayingStatus(_msgBody.playingUserIds);
            this.Data_UpdatePlayingPlayer = true;
            this.Data_GameStart = _msgBody;
        },this);
        Network.GetInstance().AddMsgListenner(MsgID.EnterGame ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS)
            {
                this.Data_EnterGame = _msgBody;
            }
            else
            {
                this.Data_ErrorAndBackHall = _msgBody.reason;
            }
        },this);
        Network.GetInstance().AddMsgListenner(MsgID.RecordDuringMatch ,(_msgBody)=>
        {
            this.Data_RecordDuringMatch = _msgBody;

        },this);
        Network.GetInstance().AddMsgListenner(MsgID.MttSelfStatus ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS)
            {
                this.Data_MttSelfStatus = _msgBody;
            }

        },this);

        Network.GetInstance().AddMsgListenner(MsgID.MttStatusChange ,(_msgBody)=>
        {
            this.Data_MttStatusChange = _msgBody;
        },this);
        
        
        Network.GetInstance().AddMsgListenner(MsgID.UpdatePlayerScore ,(_msgBody)=>
        {
            let currentPlayer = this.FindPlayerByUserId(_msgBody.userId);
            if(currentPlayer != null)
            {
                currentPlayer.userInfo.score = _msgBody.score;
            }
            this.Data_UpdatePlayerScore = _msgBody;
        },this);
        
        Network.GetInstance().AddMsgListenner(MsgID.WhosTurn ,(_msgBody)=>
        {
            this.Data_WhosTurn = _msgBody;
        },this);
        Network.GetInstance().AddMsgListenner(MsgID.PlayerAction ,(_msgBody)=>
        {
            this.Data_PlayerAction = _msgBody;
        },this);
        Network.GetInstance().AddMsgListenner(MsgID.PotChange ,(_msgBody)=>
        {
            this.Data_PotChange = _msgBody;
        },this);
        Network.GetInstance().AddMsgListenner(MsgID.DecideConbination ,(_msgBody)=>
        {
            this.Data_DecideConbination = _msgBody;
        },this);
        Network.GetInstance().AddMsgListenner(MsgID.GetSelfMttStatus ,(_msgBody)=>
        {
            this.Data_GetSelfMttStatus = _msgBody;
        },this);

        
        
        
    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }


    OverridePlayingPlayer(_data : any)
    {
        let currentPlayer =  this.FindPlayerByUserId(_data.userInfo.userId);
        if(currentPlayer == null)
        {
            this.Data_PlayingPlayers.push(_data);
        }
        else
        {
            currentPlayer = _data;
        }
    }

    UpdatePlayerPlayingStatus(_Playinglist : Array<number>)
    {
        let step = 0 ;
        while(step < this.Data_PlayingPlayers.length)
        {
            let currentPlayer = this.Data_PlayingPlayers[step];
            let index = _Playinglist.findIndex((_item) => _item === currentPlayer.userInfo.userId);
            if(index < 0)
            {
                this.Data_PlayingPlayers.splice(step , 1);
            }
            else
            {
                step++;
                currentPlayer.isPlaying = true;
            }
        }
    }

    RemovePlayingPlayer(_userId : number)
    {
        let index = this.Data_PlayingPlayers.findIndex((_item) => _item.userInfo.userId === _userId);
        if(index >= 0)
        {
            this.Data_PlayingPlayers.splice(index , 1);
        }
    }

    FindPlayerByUserId(_userId : number) : any
    {
        let index = this.Data_PlayingPlayers.findIndex((_item) => _item.userInfo.userId === _userId);
        if(index >= 0)
        {
           return this.Data_PlayingPlayers[index];
        }
        console.log("gamedata FindPlayerByUserId--没有找到玩家_userId==" + _userId);
        return null;
    }

    FindPlayerBySeatId(_seatId : number) : any
    {
        let index = this.Data_PlayingPlayers.findIndex((_item) => _item.pos === _seatId);
        if(index >= 0)
        {
           return this.Data_PlayingPlayers[index];
        }
        console.log("gamedata FindPlayerBySeatId--没有找到玩家_userId==" + _seatId);
        return null;
    }

    

}


export enum GameType
{
    //1是密码局，2是俱乐部，3是直播局
    Password = 1,
    Club = 2,
    Live = 3,
}

export enum Game_ActionType
{
      // 1 弃牌  2 看牌  3 跟注  4 加注  5 全下 6 延时, 7 强抓
    None,
    Fold = 1,
    Check = 2,
    Call,
    Raise,
    Allin,
    Delay,
    Straddle,
    SB, 
    BB,
}

export enum Game_PlayerStauts
{
    // 1，看客，2，等待，3，坐下,4,站起  
	LOOKER = 1, 
	WAIT = 2, 
	SITDOWN = 3,
	STANDUP = 4,
}

////////////////////////////////////////////////////////////////////////////////////
//                      GetSelfMttStatus
//{"msgId":555,"msgBody":"{\"liveGameID\":0,\"lookGameID\":9113543,\"playGameID\":9113543}","languageKey":""}

////////////////////////////////////////////////////////////////////////////////////
//                      DecideConbination
//{"msgId":237,"msgBody":"{\"cardType\":1,\"maxCards\":[45,60,27,53,35]}","languageKey":""}

////////////////////////////////////////////////////////////////////////////////////
//                      SendPublicCards
//{"msgId":219,"msgBody":"{\"centerCard\":[35,60,27],\"isSlow\":false}","languageKey":""}

////////////////////////////////////////////////////////////////////////////////////
//                          PotChange
//{"msgId":238,"msgBody":"{\"poolInfos\":[{\"poolId\":0,\"score\":400}]}","languageKey":""}


////////////////////////////////////////////////////////////////////////////////////
//                          UpdatePlayerScore
//{"msgId":222,"msgBody":"{\"userId\":\"210857\",\"score\":19800}","languageKey":""}


////////////////////////////////////////////////////////////////////////////////////
// {                                PlayerAction
//     "msgId":218,
//     "msgBody":{
//         "userId":"210857",
//         "gameOpType":3,
//         "score":100,
//         "basePool":400,
//         "tableScore":200,
//         "commandId":1,
//         "isNeedEnter":false,
//         "leftTime":0,
//         "isCanDelay":false,
//         "delaySpend":"",
//         "isInSureDelay":false,
//         "delayTimes":0,
//         "leftDelayCount":0
//     },
//     "languageKey":""
// }
////////////////////////////////////////////////////////////////////////////////////
// {                                 whosturn
//     "msgId":217,    
//     "msgBody":{
//         "userId":"210857",
//         "turnTime":1661334905,
//         "callCount":100,
//         "isAllIn":false,
//         "commandId":1,
//         "isCanDelay":true,
//         "delaySpend":"key10141",
//         "leftDelayCount":3,
//         "raisCount":400,
//         "minCall":200,
//         "minRaise":400,
//         "isInvalidRaise":false,
//         "preElection":null
//     },
//     "languageKey":""
// }

////////////////////////////////////////////////////////////////////////////////////
// {                                MttGetRoomInfo
//     "msgId":344,
//     "msgBody":{
//         "code":1,
//         "reason":"success",
//         "deskConfig":{
//             "gameId":9113543,
//             "gameName":"20220824cellatest",
//             "matchType":900,
//             "matchID":9308947,
//             "baseScore":100,
//             "beforeScore":0,
//             "playTimes":0,
//             "playerCount":2,
//             "minTake":20000,
//             "maxTake":30000,
//             "hostId":"1000",
//             "ownerControl":false,
//             "isGameStart":false,
//             "roomStatus":1,
//             "isStraddle":false,
//             "isInsurance":false,
//             "ipNotify":false,
//             "gpsNotify":false,
//             "isShortCard":false,
//             "shortType":0,
//             "isCanOutScore":false,
//             "isDUserDouble":false,
//             "minHoldScore":0,
//             "minOutScore":0,
//             "minTakeD":0,
//             "maxTakeD":0,
//             "maxTotalTakeD":0,
//             "currencyType":2,
//             "tableId":1,
//             "isLive":true,
//             "roomType":3,
//             "delayCount":0,
//             "pauseCount":0,
//             "pauseTimeCut":0,
//             "isReplay":false,
//             "replayState":false,
//             "replayTimeCut":0,
//             "tableMicroIsOpen":false,
//             "posRandom":false,
//             "isSelectOuts":false,
//             "isOpenEqOuts":false,
//             "turnExpiredTime":15,
//             "liveAuthSwitch":false,
//             "delayHandCard":false,
//             "channelMode":0
//         },
//         "deskInfo":{
//             "userList":[
//                 {
//                     "userInfo":{
//                         "userId":"131222",
//                         "nickname":"ggtry",
//                         "gender":1,
//                         "signiture":"",
//                         "photoUrl":"15",
//                         "ip":"112.211.183.208",
//                         "jingDu":0,
//                         "weiDu":0,
//                         "score":20000,
//                         "idType":0,
//                         "adminRole":0,
//                         "isOpenMic":false,
//                         "matchInfo":{
//                             "gameTimes":0,
//                             "playTimes":0,
//                             "vPIP":0,
//                             "winRate":0
//                         },
//                         "decoration":{
//                             "pos1":0,
//                             "pos2":0,
//                             "pos3":0,
//                             "pos4":0,
//                             "pos5":0
//                         }
//                     },
//                     "tableScore":0,
//                     "totalScore":0,
//                     "isPlaying":false,
//                     "isGiveUp":false,
//                     "isAllIn":false,
//                     "pos":1,
//                     "posLeftTime":0,
//                     "take":20000,
//                     "status":3,
//                     "cards":null,
//                     "cardType":0,
//                     "operateCard":0,
//                     "maxCards":null,
//                     "isHaveCards":false,
//                     "showCards":[
//                         0,
//                         0
//                     ],
//                     "delayTimes":0,
//                     "straddleNextCnt":0,
//                     "isLeave":false,
//                     "isOpenMic":false,
//                     "insureDelayTimes":0,
//                     "preElection":{
//                         "gameOpType":0,
//                         "score":0,
//                         "commandId":0
//                     },
//                     "mttBet":"",
//                     "liveAuthAsk":false,
//                     "isSendHandCard":false
//                 },
//                 {
//                     "userInfo":{
//                         "userId":"210857",
//                         "nickname":"cellatst1",
//                         "gender":1,
//                         "signiture":"",
//                         "photoUrl":"29",
//                         "ip":"155.137.110.24",
//                         "jingDu":0,
//                         "weiDu":0,
//                         "score":20000,
//                         "idType":0,
//                         "adminRole":0,
//                         "isOpenMic":false,
//                         "matchInfo":{
//                             "gameTimes":0,
//                             "playTimes":47,
//                             "vPIP":0,
//                             "winRate":46
//                         },
//                         "decoration":{
//                             "pos1":0,
//                             "pos2":0,
//                             "pos3":0,
//                             "pos4":0,
//                             "pos5":0
//                         }
//                     },
//                     "tableScore":0,
//                     "totalScore":0,
//                     "isPlaying":false,
//                     "isGiveUp":false,
//                     "isAllIn":false,
//                     "pos":0,
//                     "posLeftTime":0,
//                     "take":20000,
//                     "status":3,
//                     "cards":[

//                     ],
//                     "cardType":0,
//                     "operateCard":0,
//                     "maxCards":[

//                     ],
//                     "isHaveCards":false,
//                     "showCards":[

//                     ],
//                     "delayTimes":0,
//                     "straddleNextCnt":0,
//                     "isLeave":false,
//                     "isOpenMic":false,
//                     "insureDelayTimes":0,
//                     "preElection":{
//                         "gameOpType":0,
//                         "score":0,
//                         "commandId":0
//                     },
//                     "mttBet":"",
//                     "liveAuthAsk":false,
//                     "isSendHandCard":false
//                 }
//             ],
//             "basePool":0,
//             "poolInfos":null,
//             "curTurnUserId":"",
//             "curTurnTime":-62135596800,
//             "lastEndTime":-62135596800,
//             "leftTime":-9223372021,
//             "centerCards":null,
//             "dUserId":"",
//             "sUserId":"",
//             "bUserId":"",
//             "callCount":0,
//             "isAllIn":false,
//             "isGameResult":false,
//             "commandId":0,
//             "isCanDelay":false,
//             "leftDelayCount":0,
//             "delaySpend":"",
//             "raiseCount":200,
//             "minRaise":200,
//             "totalTime":0,
//             "straddleUsers":[

//             ],
//             "inSureUsers":null,
//             "inSurePools":null,
//             "turnInSure":null,
//             "winRates":null,
//             "livingUserId":"",
//             "anchorPhotoUrl":"",
//             "anchorNickName":"",
//             "delayTimes":0,
//             "isInvalidRaise":false,
//             "lookerNumber":0,
//             "posHistory":{

//             },
//             "channelMode":0,
//             "deviceDenyMode":0
//         },
//         "status":{
//             "status":3,
//             "leftTime":4,
//             "curLevel":1,
//             "nextLevel":2,
//             "totalUser":2,
//             "totalReBuy":0,
//             "playerUser":2,
//             "restLeftTime":0,
//             "curBlind":100,
//             "beforeScore":0,
//             "nextBlind":200,
//             "nextBeforeScore":0,
//             "delayCount":0,
//             "reason":3,
//             "playTotalTime":0,
//             "ticketEnter":0,
//             "ticketReBuy":0,
//             "valueCut":0
//         }
//     },
//     "languageKey":"success"
// }


////////////////////////////////////////////////////////////////////////////////////
// {                        EnterGame
//     "msgId":207,
//     "msgBody":{
//         "code":1,
//         "reason":"success",
//         "deskConfig":{
//             "gameId":9113543,
//             "gameName":"20220824cellatest",
//             "matchType":900,
//             "matchID":9308947,
//             "baseScore":100,
//             "beforeScore":0,
//             "playTimes":0,
//             "playerCount":2,
//             "minTake":20000,
//             "maxTake":30000,
//             "hostId":"1000",
//             "ownerControl":false,
//             "isGameStart":false,
//             "roomStatus":1,
//             "isStraddle":false,
//             "isInsurance":false,
//             "ipNotify":false,
//             "gpsNotify":false,
//             "isShortCard":false,
//             "shortType":0,
//             "isCanOutScore":false,
//             "isDUserDouble":false,
//             "minHoldScore":0,
//             "minOutScore":0,
//             "minTakeD":0,
//             "maxTakeD":0,
//             "maxTotalTakeD":0,
//             "currencyType":2,
//             "tableId":1,
//             "isLive":true,
//             "roomType":3,
//             "delayCount":0,
//             "pauseCount":0,
//             "pauseTimeCut":0,
//             "isReplay":false,
//             "replayState":false,
//             "replayTimeCut":0,
//             "tableMicroIsOpen":false,
//             "posRandom":false,
//             "isSelectOuts":false,
//             "isOpenEqOuts":false,
//             "turnExpiredTime":15,
//             "liveAuthSwitch":false,
//             "delayHandCard":false,
//             "channelMode":0
//         },
//         "deskInfo":{
//             "userList":[
//                 {
//                     "userInfo":{
//                         "userId":"210857",
//                         "nickname":"cellatst1",
//                         "gender":1,
//                         "signiture":"",
//                         "photoUrl":"29",
//                         "ip":"155.137.110.24",
//                         "jingDu":0,
//                         "weiDu":0,
//                         "score":20000,
//                         "idType":0,
//                         "adminRole":0,
//                         "isOpenMic":false,
//                         "matchInfo":{
//                             "gameTimes":0,
//                             "playTimes":47,
//                             "vPIP":0,
//                             "winRate":46
//                         },
//                         "decoration":{
//                             "pos1":0,
//                             "pos2":0,
//                             "pos3":0,
//                             "pos4":0,
//                             "pos5":0
//                         }
//                     },
//                     "tableScore":0,
//                     "totalScore":0,
//                     "isPlaying":false,
//                     "isGiveUp":false,
//                     "isAllIn":false,
//                     "pos":0,
//                     "posLeftTime":0,
//                     "take":20000,
//                     "status":3,
//                     "cards":[

//                     ],
//                     "cardType":0,
//                     "operateCard":0,
//                     "maxCards":[

//                     ],
//                     "isHaveCards":false,
//                     "showCards":[

//                     ],
//                     "delayTimes":0,
//                     "straddleNextCnt":0,
//                     "isLeave":false,
//                     "isOpenMic":false,
//                     "insureDelayTimes":0,
//                     "preElection":{
//                         "gameOpType":0,
//                         "score":0,
//                         "commandId":0
//                     },
//                     "mttBet":"",
//                     "liveAuthAsk":false,
//                     "isSendHandCard":false
//                 },
//                 {
//                     "userInfo":{
//                         "userId":"131222",
//                         "nickname":"ggtry",
//                         "gender":1,
//                         "signiture":"",
//                         "photoUrl":"15",
//                         "ip":"112.211.183.208",
//                         "jingDu":0,
//                         "weiDu":0,
//                         "score":20000,
//                         "idType":0,
//                         "adminRole":0,
//                         "isOpenMic":false,
//                         "matchInfo":{
//                             "gameTimes":0,
//                             "playTimes":0,
//                             "vPIP":0,
//                             "winRate":0
//                         },
//                         "decoration":{
//                             "pos1":0,
//                             "pos2":0,
//                             "pos3":0,
//                             "pos4":0,
//                             "pos5":0
//                         }
//                     },
//                     "tableScore":0,
//                     "totalScore":0,
//                     "isPlaying":false,
//                     "isGiveUp":false,
//                     "isAllIn":false,
//                     "pos":1,
//                     "posLeftTime":0,
//                     "take":20000,
//                     "status":3,
//                     "cards":null,
//                     "cardType":0,
//                     "operateCard":0,
//                     "maxCards":null,
//                     "isHaveCards":false,
//                     "showCards":[
//                         0,
//                         0
//                     ],
//                     "delayTimes":0,
//                     "straddleNextCnt":0,
//                     "isLeave":false,
//                     "isOpenMic":false,
//                     "insureDelayTimes":0,
//                     "preElection":{
//                         "gameOpType":0,
//                         "score":0,
//                         "commandId":0
//                     },
//                     "mttBet":"",
//                     "liveAuthAsk":false,
//                     "isSendHandCard":false
//                 }
//             ],
//             "basePool":0,
//             "poolInfos":null,
//             "curTurnUserId":"",
//             "curTurnTime":-62135596800,
//             "lastEndTime":-62135596800,
//             "leftTime":-9223372021,
//             "centerCards":null,
//             "dUserId":"",
//             "sUserId":"",
//             "bUserId":"",
//             "callCount":0,
//             "isAllIn":false,
//             "isGameResult":false,
//             "commandId":0,
//             "isCanDelay":false,
//             "leftDelayCount":0,
//             "delaySpend":"",
//             "raiseCount":200,
//             "minRaise":200,
//             "totalTime":0,
//             "straddleUsers":[

//             ],
//             "inSureUsers":null,
//             "inSurePools":null,
//             "turnInSure":null,
//             "winRates":null,
//             "livingUserId":"",
//             "anchorPhotoUrl":"",
//             "anchorNickName":"",
//             "delayTimes":0,
//             "isInvalidRaise":false,
//             "lookerNumber":0,
//             "posHistory":{

//             },
//             "channelMode":0,
//             "deviceDenyMode":0
//         },
//         "giftInfo":null,
//         "roomType":3,
//         "anchorSettingValue":{

//         },
//         "disableMicphoneUsers":null,
//         "closeMicphoneUsers":[
//             "131222",
//             "210857"
//         ],
//         "disableAllDefaultUsers":[
//             "210857",
//             "131222"
//         ],
//         "liverId":"",
//         "liverNickName":"",
//         "liverPhotoUrl":"",
//         "isAnchorInRoom":false,
//         "clubId":0,
//         "clubRole":0,
//         "ownerIsStart":false,
//         "isOnceLived":false,
//         "raisCount":0,
//         "dismissLeftTime":0,
//         "userId":"131222"
//     },
//     "languageKey":"success"
// }


// {
//     "msgId":558,
//     "msgBody":{
//         "matchConfig":{
//             "gameType":900,
//             "matchId":9308947,
//             "matchName":"20220824cellatest",
//             "enterFee":1000,
//             "enterFeeType":1,
//             "enterFeeTicket":{
//                 "tpId":0,
//                 "name":"",
//                 "desc":"",
//                 "img":"",
//                 "typeExpired":0,
//                 "nums":1
//             },
//             "serviceFee":10,
//             "riseBlindTime":3,
//             "isRest":true,
//             "beginScore":20000,
//             "beginBlind":100,
//             "seatCount":2,
//             "beginTime":1661334900,
//             "minPlayer":2,
//             "maxPlayer":10,
//             "delayLevel":0,
//             "isAddBuy":false,
//             "reBuyCount":0,
//             "reBuyFee":100,
//             "reBuyFeeType":1,
//             "reBuyFeeTicket":{
//                 "tpId":0,
//                 "name":"",
//                 "desc":"",
//                 "img":"",
//                 "typeExpired":0,
//                 "nums":1
//             },
//             "rewardPlayerCount":0,
//             "isIpLimit":false,
//             "isGpsLimit":false,
//             "creatorNickname":"Admin",
//             "creatorUserId":"1000",
//             "clubId":14674,
//             "clubName":"20220824cellatest",
//             "allianceId":0,
//             "allianceName":"",
//             "gameTime":1661334900,
//             "ownerId":"0",
//             "roomType":3,
//             "liverId":"",
//             "isLive":true,
//             "tableMicroIsOpen":false,
//             "releaseTime":3600,
//             "beginMode":0,
//             "matchMode":0,
//             "allowPlayer":null,
//             "is_reload":false,
//             "strapConfig":{
//                 "tag":"豪客赛",
//                 "isTop":true,
//                 "rewardDesc":"10金币",
//                 "titleImg":"",
//                 "titleColor":[
//                     15,
//                     6,
//                     232
//                 ],
//                 "backgroundImg":"",
//                 "coverImg":""
//             },
//             "satelliteId":0
//         },
//         "statusInfo":{
//             "status":3,
//             "leftTime":4,
//             "curLevel":1,
//             "nextLevel":2,
//             "totalUser":2,
//             "totalReBuy":0,
//             "playerUser":2,
//             "restLeftTime":0,
//             "curBlind":100,
//             "beforeScore":0,
//             "nextBlind":200,
//             "nextBeforeScore":0,
//             "delayCount":0,
//             "reason":3,
//             "playTotalTime":0,
//             "ticketEnter":0,
//             "ticketReBuy":0,
//             "valueCut":0
//         },
//         "rewardConfig":{
//             "rewardType":1,
//             "totalReward":0,
//             "protectReward":1000,
//             "rewardDynamicId":1,
//             "slReward":false,
//             "dynamicData":{
//                 "describe":"",
//                 "photoUrl":"",
//                 "rewardCount":1,
//                 "rewardTicket":{
//                     "tpId":0,
//                     "name":"",
//                     "desc":"",
//                     "img":"",
//                     "typeExpired":0,
//                     "nums":0
//                 },
//                 "rewardType":0
//             },
//             "dynamicTicketValue":0,
//             "rewards":[

//             ],
//             "rewardDescribe":"",
//             "TotalRewardUser":0,
//             "TotalRewardEnd":0
//         },
//         "dynamicReward":{
//             "rewardId":0,
//             "rewardName":"",
//             "dynamicPercent":""
//         },
//         "nowTime":1661334901,
//         "rank":2,
//         "user":{
//             "ranking":2,
//             "userId":"131222",
//             "nickname":"ggtry",
//             "tableId":1,
//             "score":20000,
//             "userStatus":4,
//             "photoUrl":"15",
//             "reBuy":0,
//             "decorations":{
//                 "pos1":0,
//                 "pos2":0,
//                 "pos3":0,
//                 "pos4":0,
//                 "pos5":0
//             }
//         }
//     },
//     "languageKey":""
// }


////////////////////////////////////////////////////////////////////////////////////
// {                    RecordDuringMatch
//     "msgId":223,
//     "msgBody":{
//         "players":[
//             {
//                 "userId":"210857",
//                 "nickname":"cellatst1",
//                 "take":20000,
//                 "score":0,
//                 "isOnline":true,
//                 "takeOut":0,
//                 "plays":0,
//                 "inPot":0
//             },
//             {
//                 "userId":"131222",
//                 "nickname":"ggtry",
//                 "take":20000,
//                 "score":0,
//                 "isOnline":true,
//                 "takeOut":0,
//                 "plays":0,
//                 "inPot":0
//             }
//         ],
//         "lookers":null,
//         "leftTime":0,
//         "gameId":9113543,
//         "clubName":"",
//         "isStart":false,
//         "isPause":true,
//         "inSurePool":"0",
//         "isInsurance":false
//     },
//     "languageKey":""
// }