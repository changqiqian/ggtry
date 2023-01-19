import { _decorator, Component, Node, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
import { NetworkSend } from '../../network/NetworkSend';
import { AdaptTop } from '../../UiTool/AdaptTop';
import { TipsWindow } from '../common/TipsWindow';
import { CowboyData } from '../cowboy/CowboyData';
import { LoginData } from '../login/LoginData';
import { HallData, Hall_SubPage } from './HallData';
const { ccclass, property } = _decorator;

@ccclass('HallUI')
export class HallUI extends BaseUI 
{
    
    @property(Node) 
    mBG: Node = null;
    InitParam() 
    {
      
    }
    BindUI() 
    {
        this.MaxScreen(this.mBG);
        UIMgr.Instance.ShowMultipleTable(true);
        this.AddSubView("cashPage","prefab/Cash_Page");
        this.AddSubView("clubPage","prefab/Club_Page");
        this.AddSubView("mePage","prefab/Me_Page");
        this.AddSubView("hall","prefab/Hall_Bottom");
    }

    RegDataNotify() 
    {
        LoginData.Instance.Data_LoginSuccessData.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                NetworkSend.Instance.GetMiniGameListInHall();
                NetworkSend.Instance.GetTexasGameListInHall();
            }
        });


        CommonNotify.Instance.Data_SocketOpen.AddListenner(this,(_data)=>
        {
            if(GameConfig.LOGIN_TOKEN != null)
            {
                console.log("Token 自动登录")
                NetworkSend.Instance.GetUserInfo();
            }
            else
            {
                UIMgr.Instance.ChangeScene(SceneType.Login);
            }
        });

        CowboyData.Instance.Data_S2CTexasCowboyEnterGameResp.AddListenner(this,(_data)=>
        {
            if(AdaptTop.IsIphoneX)
            {
                UIMgr.Instance.ShowLayer("cowboy","prefab/CowboyUI_Tall",true,null,CowboyData.UITag);  
            }
            else
            {
                UIMgr.Instance.ShowLayer("cowboy","prefab/CowboyUI",true,null,CowboyData.UITag);  
            }
        })
    }
    LateInit() 
    {
        HallData.Instance.Data_SubPage.mData = Hall_SubPage.Cash;
    }

    CustmoerDestory() 
    {
        LocalPlayerData.Instance.Clear();
        HallData.Instance.Clear();
        UIMgr.Instance.ShowMultipleTable(false);
    }

}
