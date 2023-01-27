import { _decorator, Component, Node, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
import { NetworkSend } from '../../network/NetworkSend';
import { Tool } from '../../Tool';
import { AdaptTop } from '../../UiTool/AdaptTop';
import { MultipleTableCtr } from '../common/MultipleTableCtr';
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
                console.log("短线重连 申请游戏数据")
                this.RefreshMsg();
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

        HallData.Instance.Data_EnterCowboy.AddListenner(this,(_data)=>
        {
            if(_data == false)
            {
                return;
            }
            if(AdaptTop.IsIphoneX)
            {
                UIMgr.Instance.ShowLayer("cowboy","prefab/CowboyUI_Tall",true,null,CowboyData.UITag);  
            }
            else
            {
                UIMgr.Instance.ShowLayer("cowboy","prefab/CowboyUI",true,null,CowboyData.UITag);  
            }
        })

        HallData.Instance.Data_S2CAddCurrencyNotify.AddListenner(this,(_data)=>
        {
            UIMgr.Instance.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let balance = Tool.ConvertMoney_S2C(_data.currencyNum) + "";
                let tips = Localization.ReplaceString("00325",balance);
                tempScript.SetTips(tips);
                tempScript.ShowConfirmBtnOnly();
            })
        })
    }
    LateInit() 
    {
        HallData.Instance.Data_SubPage.mData = Hall_SubPage.Cash;
        this.RefreshMsg();
    }

    CustmoerDestory() 
    {
        LocalPlayerData.Instance.Clear();
        HallData.Instance.Clear();
        UIMgr.Instance.ShowMultipleTable(false);
    }

    RefreshMsg()
    {
        NetworkSend.Instance.GetMiniGameListInHall();
        NetworkSend.Instance.GetTexasGameListInHall();
        let alreadyJoinList = LocalPlayerData.Instance.Data_JoinTexasList.mData;
        for(let i = 0 ; i < alreadyJoinList.length ; i++)
        {
            let current = alreadyJoinList[i];
            MultipleTableCtr.TryToEnterGame(current.gameId,current.gameType,"");
        }
    }

}
