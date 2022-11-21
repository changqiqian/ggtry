import { Enum, js } from "cc";
import { Localization } from "../base/Localization";
import { LocalPlayerData } from "../base/LocalPlayerData";
import { Singleton } from "../base/Singleton";
import { SceneType, UIMgr } from "../base/UIMgr";
import { GameConfig } from "../GameConfig";
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
                LocalPlayerData.Instance.Data_SelfClubInfo.mData = msg.clubMember;
                LocalPlayerData.Instance.Data_CurrentEnterClub.mData = msg.clubInfo;
                LocalPlayerData.Instance.Data_UpdateCurrentClub.mData = true;
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
                if(HallData.Instance.Data_ClubEnter.mData)
                {
                    LocalPlayerData.Instance.Data_CurrentEnterClub.mData = msg.clubInfo;
                    LocalPlayerData.Instance.Data_UpdateCurrentClub.mData = true;
                }
                else
                {
                    LocalPlayerData.Instance.Data_ModifyClubInfo.mData = msg.clubInfo;
                }
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
                LocalPlayerData.Instance.Data_CurrentEnterClub.mData.totalClubPoint = msg.clubRestPoint;
                LocalPlayerData.Instance.Data_UpdateCurrentClub.mData = true;
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
                HallData.Instance.UpdateOneGame(msg.gameInfo);
                HallData.Instance.Data_UpdateClubGameList.mData = true;
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
                if(msg.gameInfos != null && msg.gameInfos.length > 0)
                {
                    HallData.Instance.UpdateGameList(msg.gameInfos);
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
        //
        //                              服务器推送
        //
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
            if(HallData.Instance.Data_ClubEnter.mData)
            {
                if(msg.clubId == LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id)
                {
                    LocalPlayerData.Instance.Data_SelfClubInfo.mData.clubPoint = msg.playerRestAmount;
                    HallData.Instance.Data_ClubUpdateSelfData.mData = true;
                }
            }
        },this);


        Network.Instance.AddMsgListenner(MessageId.S2C_ModifyMemberRoleNotify,(_data)=>
        {
            let msg = S2CModifyMemberRoleNotify.decode(_data);
            console.log("收到的内容 S2C_ModifyMemberRoleNotify  我的俱乐部权限被修改===" + JSON.stringify(msg));
            if(HallData.Instance.Data_ClubEnter.mData)
            {
                let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
                if(currentClubId == msg.clubId)
                {
                    LocalPlayerData.Instance.Data_SelfClubInfo.mData.memberType = msg.memberType;
                    HallData.Instance.Data_ClubUpdateSelfData.mData = true;
                }
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