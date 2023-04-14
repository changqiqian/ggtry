import { Enum, js } from "cc";
import { Localization } from "../base/Localization";
import { LocalPlayerData } from "../base/LocalPlayerData";
import { Singleton } from "../base/Singleton";
import { SceneType, UIMgr } from "../base/UIMgr";
import { GameConfig } from "../GameConfig";
import { Tool } from "../Tool";
import { MultipleTableCtr } from "../ui/common/MultipleTableCtr";
import { GameData } from "../ui/gamePage/GameData";
import { HallData } from "../ui/hall/HallData";
import { LoginData } from "../ui/login/LoginData";
import { Network } from "./Network";
import { NetworkSend } from "./NetworkSend";

export class NetworkReceive extends Singleton<NetworkReceive>()
{
    public RegisterMsg()
    {

        Network.Instance.AddMsgListenner(MessageId.S2C_Kick,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CKick.decode(_data);
            console.log("收到的内容 S2C_Kick 服务器踢人===" + JSON.stringify(msg));
            UIMgr.Instance.ShowToast(msg.result.resMessage);
            GameConfig.ClearToken();
            Network.Instance.ClearWS();
            UIMgr.Instance.ChangeScene(SceneType.Login);
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonEnterGameResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonEnterGameResp.decode(_data);
            console.log("收到的内容 S2C_CommonEnterGameResp  进入游戏==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.Data_S2CEnterGame.mData = msg;
            }
            else if(msg.result.resId == 113) //代表已经在游戏中，直接切换进入游戏画面
            {
                let struct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                let index = struct.mIndex;
                MultipleTableCtr.ShowGameUI(index);
            }
            else
            {
                MultipleTableCtr.RemoveGameStructByGameId(msg.gameId);
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonExitGameResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonSitDownResp.decode(_data);
            console.log("收到的内容 S2C_CommonExitGameResp  退出游戏==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.Data_S2CExitGame.mData = msg;
                //NetworkSend.Instance.RefreshHallMoney();
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonSitDownResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonSitDownResp.decode(_data);
            console.log("收到的内容 S2C_CommonSitDownResp  坐下==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    gameStruct.mGameData.Data_S2CCommonSitDownResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonStandUpResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonStandUpResp.decode(_data);
            console.log("收到的内容 S2C_CommonStandUpResp  站起==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    gameData.Data_S2CCommonStandUpResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonBuyInsuranceResp,(_data)=>
        {
            let msg = S2CCommonBuyInsuranceResp.decode(_data);
            console.log("收到的内容 S2C_CommonBuyInsuranceResp  自己购买保险==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {

            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);


        Network.Instance.AddMsgListenner(MessageId.S2C_CommonStartResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonStartResp.decode(_data);
            console.log("收到的内容 S2C_CommonStartResp  游戏正式开始回复==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    // UIMgr.Instance.ShowToast();
                    // gameData.SetGameState(TexasCashState.TexasCashState_Waiting);
                    gameData.Data_S2CCommonStartResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonActionResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonActionResp.decode(_data);
            console.log("收到的内容 S2C_CommonActionResp  自己行动回复==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                // let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                // if(gameStruct != null)
                // {
                //     let gameData = gameStruct.mGameData;
                //     // UIMgr.Instance.ShowToast();
                //     // gameData.SetGameState(TexasCashState.TexasCashState_Waiting);
                //     gameData.Data_S2CCommonStartResp.mData = msg;
                // }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonSqueezeStartResp,(_data)=>
        {
            let msg = S2CCommonSqueezeStartResp.decode(_data);
            console.log("收到的内容 S2C_CommonSqueezeStartResp  请求搓牌回复==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    gameData.Data_S2CCommonSqueezeStartResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonSqueezeFinishResp,(_data)=>
        {
            let msg = S2CCommonSqueezeFinishResp.decode(_data);
            console.log("收到的内容 S2C_CommonSqueezeFinishResp  搓牌结束==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    gameData.Data_S2CCommonSqueezeFinishResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonCancelAutoOperatorResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonCancelAutoOperatorResp.decode(_data);
            console.log("收到的内容 S2C_CommonCancelAutoOperatorResp  取消托管回复==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {

                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);



        Network.Instance.AddMsgListenner(MessageId.S2C_CommonBringInResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonBringInResp.decode(_data);
            console.log("收到的内容 S2C_CommonBringInResp  带入==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
                    
                    // if(gameStruct.mIsClubGame)
                    // {
                    //     let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(gameStruct.mClubId);
                    //     if(enterClub != null)
                    //     {
                    //         enterClub.clubMember.clubPoint -= msg.bringInNum;
                    //         let pointNotify = new S2CClubPlayerPointNotify();
                    //         pointNotify.amount = msg.bringInNum;
                    //         pointNotify.clubId = enterClub.clubInfo.id;
                    //         pointNotify.playerRestAmount = enterClub.clubMember.clubPoint;
                    //         HallData.Instance.Data_S2CClubPlayerPointNotify.mData = pointNotify;
                    //     }
                    // }
                    // else
                    // {
                    //     LocalPlayerData.Instance.Data_Coin.mData -= msg.bringInNum;
                    // }

                    if(msg.approvalStatus == ApprovalStatus.ApprovalStatus_Fail)
                    {
                        UIMgr.Instance.ShowToast(Localization.GetString("00405"));
                    }
                    else if(msg.approvalStatus == ApprovalStatus.ApprovalStatus_Success)
                    {
                        UIMgr.Instance.ShowToast(Localization.GetString("00404"));
                    }
                    else if(msg.approvalStatus == ApprovalStatus.ApprovalStatus_Wait)
                    {
                        UIMgr.Instance.ShowToast(Localization.GetString("00404"));
                    }

                    // if(selfPlayer!=null)
                    // {
                    //     selfPlayer.bringInNum = msg.totalBringInNum;
                    // }
                    // gameData.Data_S2CCommonBringInResp.mData = msg;
                    // UIMgr.Instance.ShowToast(Localization.GetString("00245"));
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);
        Network.Instance.AddMsgListenner(MessageId.S2C_CommonGetObListResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonGetObListResp.decode(_data);
            console.log("收到的内容 S2C_CommonGetObListResp  观看者列表==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    gameData.Data_S2CCommonGetObListResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);
        Network.Instance.AddMsgListenner(MessageId.S2C_CommonGetStatisticsResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonGetStatisticsResp.decode(_data);
            console.log("收到的内容 S2C_CommonPlayerRecordResp  买入列表==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    gameData.Data_S2CCommonGetStatisticsResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonSimpleReplayResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonSimpleReplayResp.decode(_data);
            console.log("收到的内容 S2C_CommonSimpleReplayResp  实时牌普列表==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    gameData.Data_S2CCommonSimpleReplayResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);


        Network.Instance.AddMsgListenner(MessageId.S2C_CommonDetailReplayResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonDetailReplayResp.decode(_data);
            console.log("收到的内容 S2C_CommonDetailReplayResp  实时牌普回放数据==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    gameData.Data_S2CCommonDetailReplayResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonExtraThinkResp,(_data)=>
        {

            let msg = S2CCommonExtraThinkResp.decode(_data);
            console.log("收到的内容 S2C_CommonExtraThinkResp  申请思考时间==" + JSON.stringify(msg));

            if(msg.result.resId == MsgResult.Success)
            {

            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  
        
        Network.Instance.AddMsgListenner(MessageId.S2C_CommonGetPlayerStatisticsResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonGetPlayerStatisticsResp.decode(_data);
            console.log("收到的内容 S2C_CommonGetPlayerStatisticsResp  获取玩家静态数据==" + JSON.stringify(msg));

            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    gameData.Data_S2CCommonGetPlayerStatisticsResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonRefreshResp,(_data)=>
        {
            let msg = S2CCommonRefreshResp.decode(_data);
            console.log("收到的内容 S2C_CommonRefreshResp  刷新游戏场景==" + JSON.stringify(msg));

            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    let enterGameResp = new S2CCommonEnterGameResp();
                    enterGameResp.gameDynamic = msg.gameDynamic;
                    enterGameResp.gameId = msg.gameId;
                    enterGameResp.texasConfig = gameData.GetStaticData();
                    enterGameResp.result = msg.result;
                    gameData.SetGameInfo(enterGameResp);
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonChatResp,(_data)=>
        {
            let msg = S2CCommonChatResp.decode(_data);
            console.log("收到的内容 S2C_CommonChatResp  聊天反回==" + JSON.stringify(msg));

            if(msg.result.resId == MsgResult.Success)
            {

            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonExaminePublicCardResp,(_data)=>
        {
            let msg = S2CCommonExaminePublicCardResp.decode(_data);
            console.log("收到的内容 S2C_CommonExaminePublicCardResp  看公共牌==" + JSON.stringify(msg));

            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    gameData.Data_S2CCommonExaminePublicCardResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonGetObSizeResp,(_data)=>
        {
            let msg = S2CCommonGetObSizeResp.decode(_data);
            console.log("收到的内容 S2C_CommonGetObSizeResp  观看者数量==" + JSON.stringify(msg));

            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    gameData.Data_S2CCommonGetObSizeResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonShowSelfCardResp,(_data)=>
        {
            let msg = S2CCommonShowSelfCardResp.decode(_data);
            console.log("收到的内容 S2C_CommonShowSelfCardResp  自己亮手牌回复==" + JSON.stringify(msg));

            if(msg.result.resId == MsgResult.Success)
            {
                // let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                // if(gameStruct != null)
                // {

                // }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        
        Network.Instance.AddMsgListenner(MessageId.S2C_CommonExaminePrivateCardResp,(_data)=>
        {
            let msg = S2CCommonExaminePrivateCardResp.decode(_data);
            console.log("收到的内容 S2C_CommonExaminePrivateCardResp  看手牌==" + JSON.stringify(msg));

            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    gameData.Data_S2CCommonExaminePrivateCardResp.mData = msg;
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

      
        
       
        
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        //
        //
        //
        //
        //
        //
        //                              服务器推送
        //
        //
        //
        //
        //
        //
        //
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////


        Network.Instance.AddMsgListenner(MessageId.S2C_CommonBringInTimerNotify,(_data)=>
        {
            let msg = S2CCommonBringInTimerNotify.decode(_data);
            console.log("收到的内容 S2C_CommonBringInTimerNotify  买入倒计时推送===" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                let playerInfo = gameData.GetPlayerInfoByUid(msg.actionUid);
                if(playerInfo != null)
                {
                    playerInfo.buyInLeftTime = msg.leftTime;
                }
                gameData.Data_S2CCommonBringInTimerNotify.mData = msg;
            }
        },this);


        Network.Instance.AddMsgListenner(MessageId.S2C_CommonBringInNotify,(_data)=>
        {
            let msg = S2CCommonBringInNotify.decode(_data);
            console.log("收到的内容 S2C_CommonBringInNotify  买入推送===" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                let playerInfo = gameData.GetPlayerInfoByUid(msg.uid);
                if(playerInfo!=null)
                {
                    playerInfo.bringInNum = msg.totalBringInNum;
                    playerInfo.currencyNum = msg.currencyNum;
                }
                gameData.Data_S2CCommonBringInNotify.mData = msg;
            }
        },this);
        
        
        Network.Instance.AddMsgListenner(MessageId.S2C_CommonSitDownNotify,(_data)=>
        {
            let msg = S2CCommonSitDownNotify.decode(_data);
            console.log("收到的内容 S2C_CommonSitDownNotify  坐下推送===" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                gameStruct.mGameData.PlayerSit(msg.seatPlayerInfo);
                gameStruct.mGameData.Data_S2CCommonSitDownNotify.mData = msg;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonStandUpNotify,(_data)=>
        {
            let msg = S2CCommonStandUpNotify.decode(_data);
            console.log("收到的内容 S2C_CommonStandUpNotify  站起推送===" + JSON.stringify(msg));

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                let currentStandPlayer = gameData.GetPlayerInfoByUid(msg.actionUid)
                if(currentStandPlayer == null)
                {
                    return;
                }

                gameData.PlayerStand(msg.actionUid);
                gameData.Data_S2CCommonStandUpNotify.mData = msg;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonOpenNotify,(_data)=>
        {
            let msg = S2CCommonOpenNotify.decode(_data);
            console.log("收到的内容 S2C_CommonOpenNotify  游戏开始推送==" + JSON.stringify(msg));

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.SetGameState(TexasCashState.TexasCashState_WaitStart);
                gameData.Data_S2CCommonOpenNotify.mData = msg;
            }
        },this);


        Network.Instance.AddMsgListenner(MessageId.S2C_CommonRoundStartNotify,(_data)=>
        {
            let msg = S2CCommonRoundStartNotify.decode(_data);
            console.log("收到的内容 S2C_CommonRoundStartNotify  新一轮游戏开始推送==" + JSON.stringify(msg));

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.ResetGameInfo();
                gameData.SetGameState(TexasCashState.TexasCashState_RoundStart);
                gameData.UpdatePlayer(msg.players);
                gameData.SetDealer(msg.dealerUid);
                gameData.UpdateTotalPot(msg.totalPot);
                gameData.SetActions(msg.actionInfo);
                gameData.Data_S2CCommonRoundStartNotify.mData = msg;
            }
        },this);
        
        Network.Instance.AddMsgListenner(MessageId.S2C_CommonWaitStartNotify,(_data)=>
        {
            let msg = S2CCommonWaitStartNotify.decode(_data);
            console.log("收到的内容 S2C_CommonWaitStartNotify  游戏闲置阶段==" + JSON.stringify(msg));

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.SetGameState(TexasCashState.TexasCashState_WaitStart);
                gameData.Data_S2CCommonWaitStartNotify.mData = msg;
                gameData.Data_S2CCommonOpenCardNotify.mData = null;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonOpenCardNotify,(_data)=>
        {
            let msg = S2CCommonOpenCardNotify.decode(_data);
            console.log("收到的内容 S2C_CommonOpenCardNotify  所有玩家亮牌==" + JSON.stringify(msg));

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.Data_S2CCommonOpenCardNotify.mData = msg;
            }
        },this);
        
        Network.Instance.AddMsgListenner(MessageId.S2C_CommonJackpotLotteryNotify,(_data)=>
        {
            let msg = S2CCommonJackpotLotteryNotify.decode(_data);
            console.log("收到的内容 S2C_CommonJackpotLotteryNotify  jackpot中奖了==" + JSON.stringify(msg));

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.UpdatePlayerMoney(msg.uid , msg.currencyNum);
                gameData.Data_S2CCommonJackpotLotteryNotify.mData = msg;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonSqueezeRoundNotify,(_data)=>
        {
            let msg = S2CCommonSqueezeRoundNotify.decode(_data);
            console.log("收到的内容 S2C_CommonSqueezeRoundNotify  搓牌通知==" + JSON.stringify(msg));

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.Data_S2CCommonSqueezeRoundNotify.mData = msg;
            }
        },this);
        

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonPreFlopRoundNotify,(_data)=>
        {
            let msg = S2CCommonPreFlopRoundNotify.decode(_data);
            console.log("收到的内容 S2C_CommonPreFlopRoundNotify  翻前发牌推送==" + JSON.stringify(msg));

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.SetGameState(TexasCashState.TexasCashState_PreFlopRound);
                gameData.UpdatePlayerCards(LocalPlayerData.Instance.Data_Uid.mData , msg.cards);
                gameData.Data_S2CCommonPreFlopRoundNotify.mData = msg;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonPotsNotify,(_data)=>
        {
            let msg = S2CCommonPotsNotify.decode(_data);
            console.log("收到的内容 S2C_CommonPotsNotify  分池信息==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.UpdatePots(msg.potInfo);
                gameData.Data_S2CCommonPotsNotify.mData = msg;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonShowSelfCardNotify,(_data)=>
        {
            let msg = S2CCommonShowSelfCardNotify.decode(_data);
            console.log("收到的内容 S2C_CommonShowSelfCardNotify  亮手牌推送==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.Data_S2CCommonShowSelfCardNotify.mData = msg;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonFlopRoundNotify,(_data)=>
        {
            let msg = S2CCommonFlopRoundNotify.decode(_data);
            console.log("收到的内容 S2C_CommonFlopRoundNotify  发flop==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.ClearActions();
                gameData.SetGameState(TexasCashState.TexasCashState_FlopRound);
                gameData.GetDynamicData().publicCards = msg.cards;
                gameData.Data_S2CCommonFlopRoundNotify.mData = msg;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonTurnRoundNotify,(_data)=>
        {
            let msg = S2CCommonTurnRoundNotify.decode(_data);
            console.log("收到的内容 S2C_CommonTurnRoundNotify  发turn==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.ClearActions();
                gameData.SetGameState(TexasCashState.TexasCashState_TurnRound);
                gameData.GetDynamicData().publicCards.push(msg.card);
                gameData.Data_S2CCommonTurnRoundNotify.mData = msg;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonRiverRoundNotify,(_data)=>
        {
            let msg = S2CCommonRiverRoundNotify.decode(_data);
            console.log("收到的内容 S2C_CommonRiverRoundNotify  发river==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.ClearActions();
                gameData.SetGameState(TexasCashState.TexasCashState_RiverRound);
                gameData.GetDynamicData().publicCards.push(msg.card);
                gameData.Data_S2CCommonRiverRoundNotify.mData = msg;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonIntervalTimeNotify,(_data)=>
        {
            let msg = S2CCommonIntervalTimeNotify.decode(_data);
            console.log("收到的内容 S2C_CommonIntervalTimeNotify  游戏准备进入下一个阶段==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.Data_S2CCommonIntervalTimeNotify.mData = msg;
            }
        },this);

        

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonCurrentActionNotify,(_data)=>
        {
            let msg = S2CCommonCurrentActionNotify.decode(_data);
            console.log("收到的内容 S2C_CommonCurrentActionNotify  轮到谁行动推送==" + JSON.stringify(msg));

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.UpdateWhosTurn(msg.actionUid , msg.letTime);
                gameData.Data_S2CCommonCurrentActionNotify.mData = msg;
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonActionNotify,(_data)=>
        {
            let msg = S2CCommonActionNotify.decode(_data);
            console.log("收到的内容 S2CCommonActionNotify  行动推送==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.PlayerBet(msg.actionInfo.uid , msg.actionInfo.amount );
                gameData.UpdateTotalPot(msg.totalPot);
                gameData.InsertAction(msg.actionInfo);
                let playerInfo = gameData.GetPlayerInfoByUid(msg.actionInfo.uid);
                playerInfo.fold = msg.actionInfo.actionType == ActionType.ActionType_Fold;
                gameData.Data_S2CCommonActionNotify.mData = msg;
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonAutoOperatorNotify,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonAutoOperatorNotify.decode(_data);
            console.log("收到的内容 S2C_CommonAutoOperatorNotify  托管推送==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.PlayerAuto(msg.uid , msg.leftTime , msg.auto);
                gameData.Data_S2CCommonAutoOperatorNotify.mData = msg;
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonChatNotify,(_data)=>
        {
            let msg = S2CCommonChatNotify.decode(_data);
            console.log("收到的内容 S2C_CommonChatNotify  游戏内聊天==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.InsertChatHistroy(msg);
                gameData.Data_S2CCommonChatNotify.mData = msg;
            }
        },this);
        

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonBuyInsuranceTurnNotify,(_data)=>
        {
            let msg = S2CCommonBuyInsuranceTurnNotify.decode(_data);
            console.log("收到的内容 S2C_CommonBuyInsuranceTurnNotify  轮到谁买保险==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.buyInsuranceTurn.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.Data_BuyInsuranceTurn.mData = msg.buyInsuranceTurn;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonBuyInsuranceTurnRespNotify,(_data)=>
        {
            let msg = S2CCommonBuyInsuranceTurnRespNotify.decode(_data);
            console.log("收到的内容 S2C_CommonBuyInsuranceTurnRespNotify  谁买了多少保险==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.Data_S2CCommonBuyInsuranceTurnRespNotify.mData = msg;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonInsuranceLotteryNotify,(_data)=>
        {
            let msg = S2CCommonInsuranceLotteryNotify.decode(_data);
            console.log("收到的内容 S2C_CommonInsuranceLotteryNotify  谁中了保险==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.UpdatePlayerMoney(msg.actionUid , msg.restAmount);
                gameData.Data_S2CCommonInsuranceLotteryNotify.mData = msg;
            }
        },this);
        
        Network.Instance.AddMsgListenner(MessageId.S2C_CommonSettlementNotify,(_data)=>
        {
            let msg = S2CCommonSettlementNotify.decode(_data);
            console.log("收到的内容 S2C_CommonSettlementNotify  游戏结算==" + JSON.stringify(msg));

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                for(let i = 0 ; i < msg.result.length ; i++)
                {
                    let currentResult = msg.result[i];
                    gameData.UpdatePlayerMoney(currentResult.uid , currentResult.amount);
                }
                gameData.SetGameState(TexasCashState.TexasCashState_Settlement);
                gameData.Data_S2CCommonSettlementNotify.mData = msg;
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonExtraThinkNotify,(_data)=>
        {
            let msg = S2CCommonExtraThinkNotify.decode(_data);
            console.log("收到的内容 S2C_CommonExtraThinkNotify  申请思考时间推送==" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.Data_S2CCommonExtraThinkNotify.mData = msg;
            }

        },this);  
    }

    public UnregisterMsg()
    {
        Network.Instance.RemoveListenner(this);
    }
}


enum MsgResult { 
    Success = 0,
    Failed = 1,
}