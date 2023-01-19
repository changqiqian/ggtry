import { Enum, js } from "cc";
import { Localization } from "../base/Localization";
import { LocalPlayerData } from "../base/LocalPlayerData";
import { Singleton } from "../base/Singleton";
import { SceneType, UIMgr } from "../base/UIMgr";
import { GameConfig } from "../GameConfig";
import { Tool } from "../Tool";
import { MultipleTableCtr } from "../ui/common/MultipleTableCtr";
import { CowboyData } from "../ui/cowboy/CowboyData";
import { GameData } from "../ui/gamePage/GameData";
import { HallData } from "../ui/hall/HallData";
import { LoginData } from "../ui/login/LoginData";
import { Network } from "./Network";
import { NetworkSend } from "./NetworkSend";

export class NetworkReceive extends Singleton<NetworkReceive>()
{
    public RegisterMsg()
    {

        Network.Instance.AddMsgListenner(MessageId.S2C_RefreshUserInfoResp,(_data)=>
        {
            let msg = S2CRefreshUserInfoResp.decode(_data);
            console.log("收到的内容 S2C_RefreshUserInfoResp  刷新大厅资产==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LocalPlayerData.Instance.UpdateUserInfo(msg.userInfo);
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        
        Network.Instance.AddMsgListenner(MessageId.S2C_GetHallSubGameInfoResp,(_data)=>
        {
            let msg = S2CGetHallSubGameInfoResp.decode(_data);
            console.log("收到的内容 S2C_GetHallSubGameInfoResp  大厅小游戏列表==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.Data_S2CGetHallSubGameInfoResp.mData = msg;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_GetHallTexasGameInfoResp,(_data)=>
        {
            let msg = S2CHallTexasGameInfoResp.decode(_data);
            console.log("收到的内容 S2C_GetHallTexasGameInfoResp  大厅德州列表==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.Data_S2CHallTexasGameInfoResp.mData = msg;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_VerifyPhoneNumber,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CVerifyPhoneNumber.decode(_data);
            console.log("收到的内容 S2C_VerifyPhoneNumber 验证手机号是否注册===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LoginData.Instance.Data_VerifyPhoneNumber.mData = true;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

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

        Network.Instance.AddMsgListenner(MessageId.S2C_Login,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CLogin.decode(_data);
            console.log("收到的内容 S2C_Login 登录===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                GameConfig.SaveToken(msg.token);
                NetworkSend.Instance.GetUserInfo();
            }
            else
            {
                GameConfig.ClearToken();
                UIMgr.Instance.ShowToast(msg.result.resMessage);
                UIMgr.Instance.ChangeScene(SceneType.Login);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_GetSmsCode,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CGetSmsCode.decode(_data);
            console.log("收到的内容 S2C_GetSmsCode 获取验证码===" + JSON.stringify(msg));
            UIMgr.Instance.ShowToast("验证码===" + msg.code);
            LoginData.Instance.Data_SmsCodeType.mData = msg.type;
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_Register,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CRegister.decode(_data);
            console.log("收到的内容 S2C_Register 注册===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LoginData.Instance.Data_RegisterSuccessData.mData = true;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_GetUserInfo,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CGetUserInfo.decode(_data);
            console.log("收到的内容 S2C_GetUserInfo 获取用户信息===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LocalPlayerData.Instance.UpdateUserInfo(msg.userInfo);
                LoginData.Instance.Data_LoginSuccessData.mData = true;
            }
            else
            {
                GameConfig.ClearToken();
                UIMgr.Instance.ShowToast(msg.result.resMessage);
                UIMgr.Instance.ChangeScene(SceneType.Login);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CreateClub,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCreateClub.decode(_data);
            console.log("收到的内容 S2C_CreateClub 创建俱乐部===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LocalPlayerData.Instance.CreateEnterClubWithClubInfo( msg.clubInfo);
                HallData.Instance.Data_ClubCreateData.mData = msg.clubInfo;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);
        
        Network.Instance.AddMsgListenner(MessageId.S2C_GetClubInfos,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CGetClubInfos.decode(_data);
            console.log("收到的内容 S2C_GetClubInfos 我的俱乐部列表===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.Data_ClubEnter.mData = false;
                LocalPlayerData.Instance.ReUpdateClubInfo(msg.clubInfos);
                HallData.Instance.Data_UpdateAllClub.mData = true;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_EnterClub,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CEnterClub.decode(_data);
            console.log("收到的内容 S2C_EnterClub 进入俱乐部===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LocalPlayerData.Instance.Data_CurrentEnterClubId.mData = msg.clubInfo.id;
                LocalPlayerData.Instance.UpdateClubInfo(msg);
                HallData.Instance.Data_ClubEnter.mData = true;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_DismissClub,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CDismissClub.decode(_data);
            console.log("收到的内容 S2C_DismissClub 解散俱乐部===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LocalPlayerData.Instance.RemoveEnterClub( msg.clubId);
                HallData.Instance.Data_ClubEnter.mData = false;
                HallData.Instance.Data_ClubDismiss.mData = msg.clubId;
                UIMgr.Instance.ShowToast(Localization.GetString("00101"));
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_QuitClub,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CQuitClub.decode(_data);
            console.log("收到的内容 S2C_QuitClub 退出俱乐部===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LocalPlayerData.Instance.RemoveEnterClub( msg.clubId);
                HallData.Instance.Data_ClubEnter.mData = false;
                HallData.Instance.Data_ClubDismiss.mData = msg.clubId;
                UIMgr.Instance.ShowToast(Localization.GetString("00104"));
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);
        Network.Instance.AddMsgListenner(MessageId.S2C_SearchClub,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CSearchClub.decode(_data);
            console.log("收到的内容 S2C_SearchClub 搜索俱乐部===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.Data_ClubSearchResult.mData = msg.clubInfo;
                HallData.Instance.Data_ClubSearchSuccess.mData = true;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);
        Network.Instance.AddMsgListenner(MessageId.S2C_JoinClub,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CJoinClub.decode(_data);
            console.log("收到的内容 S2C_JoinClub 申请加入俱乐部===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00105"));
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);
        
        Network.Instance.AddMsgListenner(MessageId.S2C_AddClubMember,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CAddClubMember.decode(_data);
            console.log("收到的内容 S2C_AddClubMember  处理俱乐部申请===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                if(msg.agree)
                {
                    UIMgr.Instance.ShowToast(Localization.GetString("00107"));
                }
                else
                {
                    UIMgr.Instance.ShowToast(Localization.GetString("00108"));
                }

                for(let i = 0 ; i < msg.uids.length ; i++)
                {
                    HallData.Instance.RemoveApplyingMembers(msg.clubId,msg.uids[i]);
                }
                HallData.Instance.Data_ClubApplyingNotify.mData = true;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_GetClubMember,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CGetClubMember.decode(_data);
            console.log("收到的内容 S2C_GetClubMember  获取俱乐部成员列表===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.Data_S2CGetClubMember.mData = msg;

            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_RemoveMember,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CRemoveMember.decode(_data);
            console.log("收到的内容 S2C_RemoveMember  移除俱乐部成员===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.Data_S2CRemoveMember.mData = msg;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_ModifyClubInfo,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CModifyClubInfo.decode(_data);
            console.log("收到的内容 S2C_ModifyClubInfo  修改俱乐部信息===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00119"));

                let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(msg.clubInfo.id);
                if(enterClub != null)
                {
                    enterClub.clubInfo = msg.clubInfo;
                }
                HallData.Instance.Data_ModifyClubInfo.mData = msg.clubInfo;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_ShareClubScore,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CShareClubScore.decode(_data);
            console.log("收到的内容 S2C_ShareClubScore  修改玩家俱乐部积分===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(msg.clubId);
                if(enterClub != null)
                {
                    enterClub.clubInfo.totalClubPoint = msg.clubRestPoint;
                }
                HallData.Instance.Data_ShareClubScore.mData = msg;
                UIMgr.Instance.ShowToast(Localization.GetString("00120"));
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_ModifyMemberRole,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CModifyMemberRole.decode(_data);
            console.log("收到的内容 S2C_ModifyMemberRole  修改俱乐部玩家权限===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.Data_S2CModifyMemberRole.mData = msg;
                UIMgr.Instance.ShowToast(Localization.GetString("00120"));
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_ChangeUserInfo,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CChangeUserInfo.decode(_data);
            console.log("收到的内容 S2C_ChangeUserInfo  修改玩家头像或昵称==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LocalPlayerData.Instance.UpdateUserInfo(msg.userInfo);
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CreateClubGame,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCreateClubGame.decode(_data);
            console.log("收到的内容 S2C_CreateClubGame  创建俱乐部德州游戏==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00237"));
                HallData.Instance.AddOneGame(msg.gameInfo);
                HallData.Instance.Data_S2CCreateClubGame.mData = msg;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_GetClubTexasGameInfoResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CGetClubTexasGameInfoResp.decode(_data);
            console.log("收到的内容 S2C_GetClubTexasGameInfoResp  获取俱乐部游戏列表==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.UpdateGameList(msg.gameInfo);
                HallData.Instance.Data_S2CGetClubTexasGameInfoResp.mData = msg;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_DismissClubGame,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CDismissClubGame.decode(_data);
            console.log("收到的内容 S2C_DismissClubGame  解散俱乐部游戏==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.Data_S2CDismissClubGame.mData = msg;
                let tips = Localization.ReplaceString("00240",msg.gameId);
                UIMgr.Instance.ShowToast(tips);
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
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
                    
                    if(gameStruct.mIsClubGame)
                    {
                        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(gameStruct.mClubId);
                        if(enterClub != null)
                        {
                            enterClub.clubMember.clubPoint -= msg.bringInNum;
                            let pointNotify = new S2CClubPlayerPointNotify();
                            pointNotify.amount = msg.bringInNum;
                            pointNotify.clubId = enterClub.clubInfo.id;
                            pointNotify.playerRestAmount = enterClub.clubMember.clubPoint;
                            HallData.Instance.Data_S2CClubPlayerPointNotify.mData = pointNotify;
                        }
                    }
                    else
                    {
                        LocalPlayerData.Instance.Data_Coin.mData -= msg.bringInNum;
                    }
                    

                    if(selfPlayer!=null)
                    {
                        selfPlayer.bringInNum = msg.totalBringInNum;
                    }
                    gameData.Data_S2CCommonBringInResp.mData = msg;
                    UIMgr.Instance.ShowToast(Localization.GetString("00245"));
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
        Network.Instance.AddMsgListenner(MessageId.S2C_CommonGetBringInListResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonGetBringInListResp.decode(_data);
            console.log("收到的内容 S2C_CommonGetBringInListResp  买入列表==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let gameData = gameStruct.mGameData;
                    gameData.Data_S2CCommonGetBringInListResp.mData = msg;
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


        Network.Instance.AddMsgListenner(MessageId.S2C_TexasCowboyEnterGameResp,(_data)=>
        {
            let msg = S2CTexasCowboyEnterGameResp.decode(_data);
            console.log("收到的内容 S2C_TexasCowboyEnterGameResp  进入德州牛仔==" + JSON.stringify(msg));
            UIMgr.Instance.ShowLoading(false);
            if(msg.result.resId == MsgResult.Success)
            {
                CowboyData.Instance.Data_Money.mData = msg.money;
                CowboyData.Instance.Data_S2CTexasCowboyEnterGameResp.mData = msg;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_TexasCowboyExitGameResp,(_data)=>
        {
            let msg = S2CTexasCowboyExitGameResp.decode(_data);
            console.log("收到的内容 S2C_TexasCowboyExitGameResp  退出 德州牛仔==" + JSON.stringify(msg));
            UIMgr.Instance.ShowLoading(false);
            if(msg.result.resId == MsgResult.Success)
            {
                CowboyData.Instance.Data_S2CTexasCowboyExitGameResp.mData = msg;
                NetworkSend.Instance.RefreshHallMoney();
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_TexasCowboyBetResp,(_data)=>
        {
            let msg = S2CTexasCowboyBetResp.decode(_data);
            console.log("收到的内容 S2C_TexasCowboyBetResp  下注 德州牛仔==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                CowboyData.Instance.Data_S2CTexasCowboyBetResp.mData = msg;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_TexasCowboyRecordResp,(_data)=>
        {
            let msg = S2CTexasCowboyRecordResp.decode(_data);
            console.log("收到的内容 S2C_TexasCowboyRecordResp  获取我的记录 德州牛仔==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                CowboyData.Instance.Data_S2CTexasCowboyRecordResp.mData = msg;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        
        Network.Instance.AddMsgListenner(MessageId.S2C_TexasCowboyBringInResp,(_data)=>
        {
            let msg = S2CTexasCowboyBringInResp.decode(_data);
            console.log("收到的内容 S2C_TexasCowboyBringInResp  带入 德州牛仔==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                CowboyData.Instance.Data_Money.mData = msg.totalAmount;
                CowboyData.Instance.Data_S2CTexasCowboyBringInResp.mData = msg;
                NetworkSend.Instance.RefreshHallMoney();
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_TexasCowboyBringOutResp,(_data)=>
        {
            let msg = S2CTexasCowboyBringOutResp.decode(_data);
            console.log("收到的内容 S2C_TexasCowboyBringOutResp  带出 德州牛仔==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                CowboyData.Instance.Data_Money.mData = msg.totalAmount;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_TexasCowboyTotalHistoryResp,(_data)=>
        {
            let msg = S2CTexasCowboyTotalHistoryResp.decode(_data);
            console.log("收到的内容 S2C_TexasCowboyTotalHistoryResp  游戏总记录 德州牛仔==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                CowboyData.Instance.Data_S2CTexasCowboyTotalHistoryResp.mData = msg;
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

        Network.Instance.AddMsgListenner(MessageId.S2C_DismissClubNotify,(_data)=>
        {
            let msg = S2CDismissClubNotify.decode(_data);
            console.log("收到的内容 S2C_DismissClubNotify 创建者解散俱乐部推送===" + JSON.stringify(msg));
            LocalPlayerData.Instance.RemoveEnterClub( msg.clubId);
            HallData.Instance.Data_ClubEnter.mData = false;
            HallData.Instance.Data_ClubDismiss.mData = msg.clubId;
        },this);
        Network.Instance.AddMsgListenner(MessageId.S2C_RemoveNotify,(_data)=>
        {
            let msg = S2CRemoveNotify.decode(_data);
            console.log("收到的内容 S2C_RemoveNotify  自己被移除俱乐部通知===" + JSON.stringify(msg));
            LocalPlayerData.Instance.RemoveEnterClub( msg.clubId);
            HallData.Instance.Data_ClubRemoveNotify.mData = msg.clubId;
        },this);
        Network.Instance.AddMsgListenner(MessageId.S2C_JoinClubNotify,(_data)=>
        {
            let msg = S2CJoinClubNotify.decode(_data);
            console.log("收到的内容 S2C_JoinClubNotify 我的加入俱乐部的申请结果===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LocalPlayerData.Instance.CreateEnterClubWithClubInfo( msg.clubInfo);
                HallData.Instance.Data_ClubJoinNotify.mData = msg.clubInfo;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);
        Network.Instance.AddMsgListenner(MessageId.S2C_ClubJoinNotify,(_data)=>
        {
            let msg = S2CClubJoinNotify.decode(_data);
            console.log("收到的内容 S2C_ClubJoinNotify  我的俱乐部申请推送===" + JSON.stringify(msg));
            if(msg.request.length <= 0)
            {
                return;
            }
            for(let i = 0 ; i < msg.request.length ; i++)
            {
                HallData.Instance.RecieveNewClubApply(msg.request[i]);
            }
            HallData.Instance.Data_ClubApplyingNotify.mData = true;
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_ClubPlayerPointNotify,(_data)=>
        {
            let msg = S2CClubPlayerPointNotify.decode(_data);
            console.log("收到的内容 S2C_ClubPlayerPointNotify  我的俱乐部积分修改===" + JSON.stringify(msg));
            let clubInfo = LocalPlayerData.Instance.GetClubInfoByClubId(msg.clubId);
            if(clubInfo != null)
            {
                clubInfo.clubMember.clubPoint = msg.playerRestAmount;
            }

            HallData.Instance.Data_S2CClubPlayerPointNotify.mData = msg;

        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_ModifyMemberRoleNotify,(_data)=>
        {
            let msg = S2CModifyMemberRoleNotify.decode(_data);
            console.log("收到的内容 S2C_ModifyMemberRoleNotify  我的俱乐部权限被修改===" + JSON.stringify(msg));
            let clubInfo = LocalPlayerData.Instance.GetClubInfoByClubId(msg.clubId);
            if(clubInfo != null)
            {
                clubInfo.clubMember.memberType = msg.memberType;
            }

            HallData.Instance.Data_S2CModifyMemberRoleNotify.mData = msg;
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_DismissClubGameNotify,(_data)=>
        {
            let msg = S2CDismissClubGameNotify.decode(_data);
            console.log("收到的内容 S2C_DismissClubGameNotify  俱乐部游戏被解散===" + JSON.stringify(msg));
            HallData.Instance.Data_S2CDismissClubGameNotify.mData = msg;
            let tips = Localization.ReplaceString("00240",msg.gameId);
            UIMgr.Instance.ShowToast(tips);
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonBringInTimerNotify,(_data)=>
        {
            let msg = S2CCommonBringInTimerNotify.decode(_data);
            console.log("收到的内容 S2C_CommonBringInTimerNotify  买入倒计时推送===" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                let playerInfo = gameData.GetPlayerInfoByUid(msg.actionUid);
                if(playerInfo!=null)
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
                if(gameData.IsPlayerPlaying(currentStandPlayer.uid) == true)
                {
                    currentStandPlayer.gameRole = GameRole.GameRole_Observer;
                    gameData.AddDelayStandUpNotify(msg);
                    if(currentStandPlayer.uid == LocalPlayerData.Instance.Data_Uid.mData)
                    {
                        UIMgr.Instance.ShowToast(Localization.GetString("00278"));
                    }
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
                gameData.UpdatePots(msg.potInfo);
                gameData.SetActions(msg.actionInfo);
                gameData.Data_S2CCommonRoundStartNotify.mData = msg;
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
                gameData.UpdatePots(msg.potInfo);
                gameData.InsertAction(msg.actionInfo);
                let playerInfo = gameData.GetPlayerInfoByUid(msg.actionInfo.uid);
                playerInfo.fold = msg.actionInfo.actionType == ActionType.ActionType_Fold;
                gameData.Data_S2CCommonActionNotify.mData = msg;
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
                gameData.Data_S2CCommonSettlementNotify.mData = msg;
            }
        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_TexasCowboyBetNotify,(_data)=>
        {
            let msg = S2CTexasCowboyBetNotify.decode(_data);
            console.log("收到的内容 S2C_TexasCowboyBetNotify  牛仔下注推送==" + JSON.stringify(msg));


            for(let i = 0 ; i < msg.betInfo.length  ; i++)
            {
                let current = msg.betInfo[i];
                let betAreaInfo = CowboyData.Instance.GetAreaBetInfoByAreaType(current.betArea);
                betAreaInfo.totalBetNum += current.amount;

                if(current.actionId == LocalPlayerData.Instance.Data_Uid.mData)
                {
                    let myBetInfo = CowboyData.Instance.GetSelfBetInfoByAreaTpye(current.betArea);
                    myBetInfo.amount += current.amount;
                }
            }

            CowboyData.Instance.Data_S2CTexasCowboyBetNotify.mData = msg;

        },this);  
        

        Network.Instance.AddMsgListenner(MessageId.S2C_TexasCowboyGameStartNotify,(_data)=>
        {
            let msg = S2CTexasCowboyGameStartNotify.decode(_data);
            console.log("收到的内容 S2C_TexasCowboyGameStartNotify  牛仔 游戏开始 推送==" + JSON.stringify(msg));
            CowboyData.Instance.ClearData();
            CowboyData.Instance.SetPhase(CowboyPhase.CowBoyPhase_Start);
            CowboyData.Instance.SetOneCard(msg.oneCard);
            CowboyData.Instance.Data_S2CTexasCowboyGameStartNotify.mData = msg;

        },this);  

        Network.Instance.AddMsgListenner(MessageId.S2C_TexasCowboyGameSettlementNotify,(_data)=>
        {
            let msg = S2CTexasCowboyGameSettlementNotify.decode(_data);
            console.log("收到的内容 S2C_TexasCowboyGameSettlementNotify  牛仔 结算 推送==" + JSON.stringify(msg));
            CowboyData.Instance.SetPhase(CowboyPhase.CowBoyPhase_Settlement);

            for(let i = 0 ; i < msg.result.length ; i++)
            {
                let current = msg.result[i];
                if(current.uid == LocalPlayerData.Instance.Data_Uid.mData)
                {
                    CowboyData.Instance.Data_Money.mData = current.restAmount;
                    break;
                }
            }
            CowboyData.Instance.Data_S2CTexasCowboyGameSettlementNotify.mData = msg;

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