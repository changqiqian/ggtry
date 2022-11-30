import { Enum, js } from "cc";
import { Localization } from "../base/Localization";
import { LocalPlayerData } from "../base/LocalPlayerData";
import { Singleton } from "../base/Singleton";
import { SceneType, UIMgr } from "../base/UIMgr";
import { GameConfig } from "../GameConfig";
import { Tool } from "../Tool";
import { MultipleTableCtr } from "../ui/common/MultipleTableCtr";
import { HallData } from "../ui/hall/HallData";
import { LoginData } from "../ui/login/LoginData";
import { Network } from "./Network";
import { NetworkSend } from "./NetworkSend";

export class NetworkReceive extends Singleton<NetworkReceive>()
{
    public RegisterMsg()
    {
        
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
            UIMgr.Instance.ShowToast("验证码===" + msg.code , 5);
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
                UIMgr.Instance.ShowToast(msg.result.resMessage);
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
                for(let i = 0 ; i < msg.clubInfos.length ; i++)
                {
                    HallData.Instance.Data_ClubCreateData.mData = msg.clubInfos[i];
                }
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

        Network.Instance.AddMsgListenner(MessageId.S2C_GetClubGameList,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CGetClubGameList.decode(_data);
            console.log("收到的内容 S2C_GetClubGameList  获取俱乐部游戏列表==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.UpdateGameList(msg.gameInfo);
                HallData.Instance.Data_S2CGetClubGameList.mData = msg;
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
                    gameStruct.mGameData.Data_S2CCommonStandUpResp.mData = msg;
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
                    let selfPlayer = gameStruct.mGameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
                    let currencyType = gameStruct.mGameData.Data_S2CCommonEnterGameResp.mData.gameStatic.basicConfig.currencyType;
                    selfPlayer.buyIn = true;
                    if(currencyType == GameCurrencyType.GameCurrencyType_Coin)
                    {
                        LocalPlayerData.Instance.Data_Coin.mData = msg.leftAmount;
                    }
                    else if(currencyType == GameCurrencyType.GameCurrencyType_Point)
                    {
                        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(gameStruct.mClubId)
                        enterClub.clubMember.clubPoint = msg.leftAmount;
                    }
                    selfPlayer.currency = msg.amount;
                    gameStruct.mGameData.Data_S2CCommonBringInResp.mData = msg;
                    UIMgr.Instance.ShowToast(Localization.GetString("00245"));
                }
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);
        
        Network.Instance.AddMsgListenner(MessageId.S2C_CommonBringOutResp,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CCommonBringOutResp.decode(_data);
            console.log("收到的内容 S2C_CommonBringOutResp  带出==" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
                if(gameStruct != null)
                {
                    let selfPlayer = gameStruct.mGameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
                    let currencyType = gameStruct.mGameData.Data_S2CCommonEnterGameResp.mData.gameStatic.basicConfig.currencyType;
                    if(currencyType == GameCurrencyType.GameCurrencyType_Coin)
                    {
                        LocalPlayerData.Instance.Data_Coin.mData = msg.leftAmount;
                    }
                    else if(currencyType == GameCurrencyType.GameCurrencyType_Point)
                    {
                        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(gameStruct.mClubId)
                        enterClub.clubMember.clubPoint = msg.leftAmount;
                    }
                    selfPlayer.currency = msg.amount;
                    gameStruct.mGameData.Data_S2CCommonBringOutResp.mData = msg;
                    UIMgr.Instance.ShowToast(Localization.GetString("00251"));
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
        //
        //
        //
        //                              服务器推送
        //
        //
        //
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
            HallData.Instance.Data_ClubEnter.mData = false;
            HallData.Instance.Data_ClubDismiss.mData = msg.clubId;
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_RemoveNotify,(_data)=>
        {
            let msg = S2CRemoveNotify.decode(_data);
            console.log("收到的内容 S2C_RemoveNotifiy  自己被移除俱乐部通知===" + JSON.stringify(msg));
            HallData.Instance.Data_ClubRemoveNotify.mData = msg.clubId;
        },this);
        Network.Instance.AddMsgListenner(MessageId.S2C_JoinClubNotify,(_data)=>
        {
            let msg = S2CJoinClubNotify.decode(_data);
            console.log("收到的内容S2C_JoinClubResult 我的加入俱乐部的申请结果===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
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
        
        Network.Instance.AddMsgListenner(MessageId.S2C_CommonSitDownNotify,(_data)=>
        {
            let msg = S2CCommonSitDownNotify.decode(_data);
            console.log("收到的内容 S2CCommonSitDownNotify  坐下推送===" + JSON.stringify(msg));
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                gameStruct.mGameData.PlayerSit(msg.seatInfo);
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
                gameStruct.mGameData.PlayerStand(msg.actionUid);
                gameStruct.mGameData.Data_S2CCommonStandUpNotify.mData = msg;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonBringInNotify,(_data)=>
        {
            let msg = S2CCommonBringInNotify.decode(_data);
            console.log("收到的内容 S2C_CommonBringInNotify  带入推送==" + JSON.stringify(msg));

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let player = gameStruct.mGameData.GetPlayerInfoByUid(msg.actionUid);
                player.buyIn = true;
                player.currency = msg.amount;
                gameStruct.mGameData.Data_S2CCommonBringInNotify.mData = msg;
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_CommonBringOutNotify,(_data)=>
        {
            let msg = S2CCommonBringOutNotify.decode(_data);
            console.log("收到的内容 S2C_CommonBringOutNotify  带出推送==" + JSON.stringify(msg));

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(msg.gameId);
            if(gameStruct != null)
            {
                let player = gameStruct.mGameData.GetPlayerInfoByUid(msg.actionUid);
                player.currency = msg.amount;
                gameStruct.mGameData.Data_S2CCommonBringOutNotify.mData = msg;
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