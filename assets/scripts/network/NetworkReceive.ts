import { Enum, js } from "cc";
import { Localization } from "../base/Localization";
import { LocalPlayerData } from "../base/LocalPlayerData";
import { Singleton } from "../base/Singleton";
import { UIMgr } from "../base/UIMgr";
import { HallData } from "../ui/hall/HallData";
import { LoginData } from "../ui/login/LoginData";
import { Network } from "./Network";
import { NetworkSend } from "./NetworkSend";

export class NetworkReceive extends Singleton<NetworkReceive>()
{
    private static GetClassName(_msgId : number) : string
    {
        for(let i = 0 ; i < Object.keys(MessageId).length  ; i++)
        {
            let currentKey = Object.keys(MessageId)[i];
            if(MessageId[currentKey] == 1003)
            {
                let className = currentKey.replace("_" , "");
                console.log("className==" + className);
                return className;
            }
        }

        //js.setClassName("S2CLogin",S2CLogin);
        //js.getClassByName(NetworkReceive.GetClassName(MessageId.S2C_Login))["decode"](_data);
        return "";
    }

    public RegisterMsg()
    {
        
        Network.Instance.AddMsgListenner(MessageId.S2C_VerifyPhoneNumber,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CVerifyPhoneNumber.decode(_data);
            console.log("收到的内容 S2C_VerifyPhoneNumber 验证手机号是否注册===" + JSON.stringify(msg));
            console.log("msg.result.resId===" + msg.result.resId);
            if(msg.result.resId == MsgResult.Success)
            {
                LoginData.Instance.Data_VerifyPhoneNumber.mData = true;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_Login,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CLogin.decode(_data);
            console.log("收到的内容 S2C_Login 登录===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                LocalPlayerData.Instance.Data_Token.mData = msg.token;
                LoginData.Instance.Data_LoginSuccessData.mData = true;
                NetworkSend.Instance.GetUserInfo();
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
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
                LocalPlayerData.Instance.Data_Uid.mData = msg.userInfo.uid;
                LocalPlayerData.Instance.Data_NickName.mData = msg.userInfo.nickName;
                LocalPlayerData.Instance.Data_Head.mData = msg.userInfo.head;
                LocalPlayerData.Instance.Data_Coin.mData = msg.userInfo.coin;
                LocalPlayerData.Instance.Data_Diamond.mData = msg.userInfo.diamond;
                LocalPlayerData.Instance.Data_AccountLevel.mData = msg.userInfo.accountLevel;
                LocalPlayerData.Instance.Data_AccountStatus.mData = msg.userInfo.accountStatus;

            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
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

        Network.Instance.AddMsgListenner(MessageId.S2C_JoinClubResult,(_data)=>
        {
            UIMgr.Instance.ShowLoading(false);
            let msg = S2CJoinClubResult.decode(_data);
            console.log("收到的内容S2C_JoinClubResult 加入俱乐部的申请结果===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                HallData.Instance.Data_ClubJoinResult.mData = msg.clubInfo;
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);

        Network.Instance.AddMsgListenner(MessageId.S2C_ClubJoinNotify,(_data)=>
        {
            let msg = S2CClubJoinNotify.decode(_data);
            console.log("收到的内容 S2C_ClubJoinNotify  俱乐部申请推送===" + JSON.stringify(msg));
            for(let i = 0 ; i < msg.request.length ; i++)
            {
                HallData.Instance.Data_ClubApplyingInfo.mData.push(msg.request[i]);
            }
            HallData.Instance.Data_ClubApplyingNotify.mData = true;
        },this);
        
        Network.Instance.AddMsgListenner(MessageId.S2C_AddClubMember,(_data)=>
        {
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