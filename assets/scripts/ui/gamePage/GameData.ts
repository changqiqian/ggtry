import { _decorator, Component, Node } from 'cc';
import { DataNotify } from '../../base/DataNotify';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { Msg_deskConfig, Msg_deskInfo, Msg_matchConfig, Msg_status, Msg_userFullInfo } from '../../network/MsgStruct';
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
    
    Data_UpdatePlayingPlayer : boolean = null;//立即更新正在玩牌的玩家数据
    
    
    Data_MatchConfig : Msg_matchConfig; //把服务器发过来的核心数据我自己定义了一份
    Data_StatusInfo : Msg_status; //把服务器发过来的核心数据我自己定义了一份
    Data_DeskConfig : Msg_deskConfig;//把服务器发过来的核心数据我自己定义了一份
    Data_DeskInfo : Msg_deskInfo;//把服务器发过来的核心数据我自己定义了一份
    Data_PlayingUserList : Array<Msg_userFullInfo>;//把服务器发过来的核心数据我自己定义了一份
    //mtt专有消息


    Data_MttGetRoomInfo : any = null; //Mtt房间内信息
    Data_RefreshMttInfo : any = null; //刷新mtt的最新状态数据
    Data_ErrorAndBackHall : any = null; //获取mtt房间内信息出错
    Data_MttSelfStatus : any = null; //更新自己的mtt比赛状态
    Data_MttStatusChange : any = null; //mtt比赛状态改变
    Data_GetSelfMttStatus : any = null;//获取自己在mtt桌子内的状态


    //打牌公有消息
    Data_EnterGame : any = null; //进入游戏
    Data_RecordDuringMatch : any = null; //获取比赛中实时数据
    Data_CheckPublicCards : any = null ; //发发看数据
    Data_SendPublicCards : any = null; //发公共牌
    Data_GameStart : any = null; //游戏开始消息
    Data_UpdatePlayerScore : any = null;//更新玩家分数
    Data_WhosTurn : any = null;// 该谁行动
    Data_PlayerAction : any = null; //玩家执行行动
    Data_PotChange:any = null; //底池变化
    Data_DecideConbination : any = null; //通知玩家当前牌型
    Data_GamePlayerStatusChange : any = null;//玩家状态改变
    Data_GameResult : any = null; //游戏结算
    RegisteMsg()
    {
        Network.GetInstance().AddMsgListenner(MsgID.MttGetRoomInfo ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS)
            {
                this.Data_DeskConfig = _msgBody.deskConfig as Msg_deskConfig;
                this.Data_DeskInfo = _msgBody.deskInfo as Msg_deskInfo;
                this.Data_StatusInfo = _msgBody.status as Msg_status;
                this.Data_PlayingUserList = this.Data_DeskInfo.userList;
                this.Data_UpdatePlayingPlayer = true;
                this.Data_MttGetRoomInfo = _msgBody;
            }
            else
            {
                this.Data_ErrorAndBackHall = _msgBody.reason;
            }
            
        },this);
        
        Network.GetInstance().AddMsgListenner(MsgID.RefreshMttInfo ,(_msgBody)=>
        {
            this.Data_MatchConfig = _msgBody.matchConfig as Msg_matchConfig;
            this.Data_StatusInfo = _msgBody.statusInfo as Msg_status;
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
            this.Data_GameStart = _msgBody;
        },this);
        Network.GetInstance().AddMsgListenner(MsgID.EnterGame ,(_msgBody)=>
        {
            if(_msgBody.code == MsgStatus.SUCCESS)
            {
                this.Data_DeskConfig = _msgBody.deskConfig as Msg_deskConfig;
                this.Data_DeskInfo = _msgBody.deskInfo as Msg_deskInfo;
                this.Data_PlayingUserList = this.Data_DeskInfo.userList;
                this.Data_UpdatePlayingPlayer = true;
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
        Network.GetInstance().AddMsgListenner(MsgID.GamePlayerStatusChange ,(_msgBody)=>
        {
            this.Data_GamePlayerStatusChange = _msgBody;
        },this);
        Network.GetInstance().AddMsgListenner(MsgID.GameResult ,(_msgBody)=>
        {
            this.Data_GameResult = _msgBody;
        },this);
        
        
    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }


    AddPlayingPlayer(_data : Msg_userFullInfo)
    {
        let currentPlayer =  this.FindPlayerByUserId(_data.userInfo.userId);
        if(currentPlayer == null)
        {
            this.Data_PlayingUserList.push(_data);
        }
        else
        {
            currentPlayer = _data;
        }
        this.Data_UpdatePlayingPlayer = true;
    }

    UpdatePlayerPlayingStatus(_Playinglist : Array<string>)
    {
        let step = 0 ;
        while(step < this.Data_PlayingUserList.length)
        {
            let currentPlayer = this.Data_PlayingUserList[step];
            let index = _Playinglist.findIndex((_item) => _item === currentPlayer.userInfo.userId);
            if(index < 0)
            {
                this.Data_PlayingUserList.splice(step , 1);
            }
            else
            {
                step++;
                currentPlayer.isPlaying = true;
                currentPlayer.isSendHandCard = true;
                currentPlayer.isGiveUp = false;
            }
        }
        this.Data_UpdatePlayingPlayer = true;
    }

    RemovePlayingPlayer(_userId : string)
    {
        let index = this.Data_PlayingUserList.findIndex((_item) => _item.userInfo.userId === _userId);
        if(index >= 0)
        {
            this.Data_PlayingUserList.splice(index , 1);
        }
        this.Data_UpdatePlayingPlayer = true;
    }

    FindPlayerByUserId(_userId : string) : Msg_userFullInfo
    {
        let index = this.Data_PlayingUserList.findIndex((_item) => _item.userInfo.userId === _userId);
        if(index >= 0)
        {
           return this.Data_PlayingUserList[index];
        }
        console.log("gamedata FindPlayerByUserId--没有找到玩家_userId==" + _userId);
        return null;
    }

    FindPlayerBySeatId(_seatId : number) : Msg_userFullInfo
    {
        let index = this.Data_PlayingUserList.findIndex((_item) => _item.pos === _seatId);
        if(index >= 0)
        {
           return this.Data_PlayingUserList[index];
        }
        console.log("gamedata FindPlayerBySeatId--没有找到玩家_userId==" + _seatId);
        return null;
    }

}


export enum Game_RoomType
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
}

export enum Game_PlayerStauts
{
    // 1，看客，2，等待，3，坐下,4,站起  
	LOOKER = 1, 
	WAIT = 2, 
	SITDOWN = 3,
	STANDUP = 4,
}

export enum Game_MttPlayerStauts
{
    //1 没有报名， 2 等待审核， 3 已经报名， 4 已经参加比赛, 5 已经被淘汰
    NotAttend = 1,
    Waiting = 2,
    Registed = 3,
    Attending = 4,
    Lose = 5,
}


export enum Game_RoomStatus
{
//房间状态, 1没开始，2开始，3暂停
	Waiting = 1, 
	Started = 2, 
	Paused = 3,
}


//          流程
//发送RefreshMttInfo  - 发送MttGetRoomInfo - 接收EnterGame -  发送请求声网 - 发送请求消息展示 
//      558                     344              207           364           960          

//- 接收MttSelfStatus - 发送修改mic状态  -- 发送 RecordDuringMatch -- 接收 得到的麦克风状态
//      356                375                    223                  376

// - MttStatusChange - RefreshMttInfo - UpdatePlayerScore
//         353             558                 222

//GameStart - whosturn - PlayerAction - PotChange - SendPublicCards - DecideConbination
//   216         217        218            238          219                 237

//GamePlayerStatusChange -  GameResult --更新比分等消息后-- GameStart
//          213                 221                         216


////////////////////////////////////////////////////////////////////////////////////
//          GameStart
//{"msgId":216,"msgBody":"{"dUserId":"131222","sUserId":"131222","bUserId":"132539","baseScore":10,"beforeScore":0,"basePool":30,"handCard":[27,2],"playingUserIds":["131222","132539"],"tableScores":[10,20],"beforeScores":[0,0],"straddleUsers":[]}","languageKey":""}


////////////////////////////////////////////////////////////////////////////////////
//                      RecordDuringMatch
//{"msgId":223,"msgBody":"{"players":[{"userId":"131222","nickname":"ggtry","take":200,"score":40,"isOnline":true,"takeOut":0,"plays":3,"inPot":1},{"userId":"210857","nickname":"cellatst1","take":200,"score":-40,"isOnline":false,"takeOut":0,"plays":3,"inPot":0}],"lookers":null,"leftTime":0,"gameId":9469791,"clubName":"","isStart":true,"isPause":false,"inSurePool":"0","isInsurance":false}","languageKey":""}


////////////////////////////////////////////////////////////////////////////////////
//                      MttSelfStatus
// {"msgId":356,"msgBody":"{"code":1,"isCanRebuy":false,"userStatus":4,"rank":1,"totalPlayer":2}","languageKey":""}

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
