import { _decorator, Component, Node, Label, Button, sys, SafeArea, setDisplayStats, EditBox, Vec2, Vec3 } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import {  Network } from '../../network/Network';
import { BaseButton } from '../common/BaseButton';
import { MultipleTableCtr } from '../common/MultipleTableCtr';
import { LoginData } from './LoginData';
import { Tool } from '../../Tool';
import { Game_WinEffect } from '../gamePage/subUI/Game_WinEffect';
const { ccclass, property } = _decorator;

@ccclass('LoginUI')
export class LoginUI extends BaseUI 
{
    @property(Label) 
    mVersion: Label = null;

    @property(Label) 
    mUid: Label = null;
    @property(Label) 
    mGameID: Label = null;

    @property(BaseButton) 
    mEnterBtn: BaseButton = null;

    @property(BaseButton) 
    mLocalBtn: BaseButton = null;

    @property(EditBox) 
    mEditBox: EditBox = null;

    InitParam() 
    {
        GameConfig.CreateUID();
        
    }
    BindUI() 
    {
        UIMgr.Instance.ShowMultipleTable(true);
        this.mVersion.string = GameConfig.Version;

        this.mEnterBtn.SetClickCallback(()=>
        {
            Network.Instance.CreateWS();
        });

        this.mLocalBtn.SetClickCallback(()=>
        {
            GameConfig.NetConfig.WEBSOCKET_ADDR = "ws://127.0.0.1:9001/pokerlife";
            Network.Instance.CreateWS();
        });


        this.mEditBox.node.on(EditBox.EventType.EDITING_RETURN,this.OnEditBoxReturn.bind(this) ) 
        this.mEditBox.node.on(EditBox.EventType.EDITING_DID_ENDED,this.OnEditBoxReturn.bind(this) ) 
        let userData = new UserInfo();
        userData.accountLevel = AccountLevel.AccountLevel_Normal;
        userData.uid = GameConfig.GetTopUid();
        userData.accountStatus = AccountStatus.AccountStatus_Normal;
        userData.coin = 100000;
        userData.diamond = 10000;
        userData.head = "1";
        userData.nickName = "ggtry";
        LocalPlayerData.Instance.UpdateUserInfo(userData);
        this.mUid.string = "Uid=====" + GameConfig.GetTopUid()
        this.mGameID.string = "GameID====" + GameConfig.GetTopGameId();

        if(!GameConfig.DebugMode)
        {
            this.mVersion.node.active = false;
            this.mUid.node.active = false;
            this.mGameID.node.active = false;
            this.mEnterBtn.node.active = false;
            this.mLocalBtn.node.active = false;
            this.mEditBox.node.active = false;
        }
    }

    OnEditBoxReturn()
    {
        let content = this.mEditBox.string;
        if(content == "")
        {
            return;
        }
        GameConfig.uid = content;
        LocalPlayerData.Instance.Data_Uid.mData = content;
        this.mUid.string = "Uid=====" + content;
    }
    RegDataNotify() 
    {
        CommonNotify.Instance.Data_SocketOpen.AddListenner(this,(_data)=>
        {
            if(_data == false)
            {
                return;
            }
            MultipleTableCtr.TryToEnterGame(GameConfig.GetTopGameId() , GameType.GameType_TexasCash,"",GameConfig.GetTopUid());
        });

    }
    LateInit() 
    {
        if(!GameConfig.DebugMode)
        {
            Network.Instance.CreateWS();
        }

    }

    CustmoerDestory() 
    {
        LoginData.Instance.Clear();
    }
}

