import { _decorator, Component, Node, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { CommonNotify } from '../../CommonNotify';
import { Network } from '../../network/Network';
import { NetworkSend } from '../../network/NetworkSend';
import { TipsWindow } from '../common/TipsWindow';
import { LoginData } from '../login/LoginData';
import { HallData, Hall_SubPage } from './HallData';
const { ccclass, property } = _decorator;

@ccclass('HallUI')
export class HallUI extends BaseUI 
{
    public static GetUsingBundleFolder() : Array<string>
    {
        return [];
        //return ["hall","mttPage","cashPage" ,"clubPage","mePage","cowboy" , "activityPage"];
    }

    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.AddSubView("mttPage","prefab/Mtt_Page");
        this.AddSubView("cashPage","prefab/Cash_Page");
        this.AddSubView("clubPage","prefab/Club_Page");
        this.AddSubView("mePage","prefab/Me_Page");
        this.AddSubView("hall","prefab/Hall_Bottom");
    }

    RegDataNotify() 
    {
        LoginData.Instance.Data_LoginSuccessData.AddListenner(this,(_data)=>
        {
            
        });

        HallData.Instance.Data_ClubJoinNotify.AddListenner(this,(_data)=>
        {
            let clubId = _data.id;
            this.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.GetString("00106");
                tips = Localization.ReplaceString(tips,clubId);
                tempScript.SetTips(tips);
                tempScript.ShowConfirmBtnOnly();
            })
        });

        CommonNotify.Instance.Data_SocketClose.AddListenner(this,(_data)=>
        {
            UIMgr.Instance.ChangeScene(SceneType.Login);  
        });
    }
    LateInit() 
    {
        HallData.Instance.Data_SubPage.mData = Hall_SubPage.MTT;
    }

    CustmoerDestory() 
    {
        HallData.Instance.Clear();
    }

}
