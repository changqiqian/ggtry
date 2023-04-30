import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameTop } from './SubUI/GameTop';
import { GameBottomUI } from './SubUI/GameBottomUI';
import { UIMgr } from '../../base/UIMgr';
import { GameControlBtn } from './SubUI/GameControlBtn';
import { BottomUIEnum, GameData } from './GameData';
import { GameMenu } from './SubUI/GameMenu';
import { GameAutoSetting } from './SubUI/GameAutoSetting';
import { GameBonusUI } from './SubUI/GameBonusUI';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends BaseUI 
{
    public static PrefabPath : string = "prefab/GameUI";
    public static Bunddle : string = "gamePage";
    InitParam()
    {

    }
    BindUI()
    {
        this.AddSubView("GameTop" , GameTop.Bunddle , GameTop.PrefabPath);
        this.AddSubView("GameBottomUI" , GameBottomUI.Bunddle , GameBottomUI.PrefabPath);

        GameData.Instance.Data_BottomUIEnum.mData = BottomUIEnum.PlayingUI;
    }
    RegDataNotify()
    {
        GameData.Instance.Data_BottomUIEnum.AddListenner(this, (_data)=>
        {
            this.HideBottomOptionUI();
            if(_data == BottomUIEnum.AutoSettingUI)
            {
                UIMgr.Instance.ShowLayer("GameAutoSetting",GameAutoSetting.Bunddle,GameAutoSetting.PrefabPath);
            }
            else if(_data == BottomUIEnum.MenuUI)
            {
                UIMgr.Instance.ShowLayer("GameMenu",GameMenu.Bunddle,GameMenu.PrefabPath);
            }
            else if(_data == BottomUIEnum.PlayingUI)
            {
                UIMgr.Instance.ShowLayer("GameControlBtn" , GameControlBtn.Bunddle , GameControlBtn.PrefabPath)
            }
        });

        GameData.Instance.Data_BonusMode.AddListenner(this , (_data)=>
        {
            UIMgr.Instance.ShowLayer("GameBonusUI",GameBonusUI.Bunddle,GameBonusUI.PrefabPath,_data);
        });
    }
    LateInit()
    {
        
    }
    CustmoerDestory()
    {

    }


    HideBottomOptionUI()
    {
        UIMgr.Instance.ShowLayer("GameAutoSetting",GameAutoSetting.Bunddle,GameAutoSetting.PrefabPath , false);
        UIMgr.Instance.ShowLayer("GameMenu",GameMenu.Bunddle,GameMenu.PrefabPath, false);
        UIMgr.Instance.ShowLayer("GameControlBtn" , GameControlBtn.Bunddle , GameControlBtn.PrefabPath, false)
    }
}

