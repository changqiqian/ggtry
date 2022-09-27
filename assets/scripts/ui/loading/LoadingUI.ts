import { _decorator, Component, Node, find, Label, Sprite, sys } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { JsbScript } from '../../base/JsbScript';
import { Localization } from '../../base/Localization';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { GameConfig } from '../../GameConfig';
import { LoadingData } from './LoadingData';
const { ccclass, property } = _decorator;

@ccclass('LoadingUI')
export class LoadingUI extends BaseUI 
{
    public static GetUsingBundleFolder() : Array<string>
    {
        return ["loading"];
    }
    

    @property(Label) 
    mTips: Label = null;
    @property(Label) 
    mPercent: Label = null;
    @property(Sprite) 
    mProgress: Sprite = null;
    InitParam() 
    {
        //测试代码
        //GameConfig.ClearToken();

        this.mTips.string = "";
        this.mPercent.string = "";
        this.mProgress.fillRange = 0;
        let systemLanguage = JsbScript.getSysLanguage();
        Localization.SetLanguage(systemLanguage);
    }
    BindUI() 
    {
    }

    RegDataNotify() 
    {
        LoadingData.GetInstance().Data_HotUpdateEnd.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                this.scheduleOnce(()=>
                {
                    UIMgr.GetInstance().ChangeScene(SceneType.Login);
                },1);
            }

        });

        LoadingData.GetInstance().Data_HotUpdateProgress.AddListenner(this,(_data)=>
        {
            this.mPercent.string = _data * 100 + "%";
            this.mProgress.fillRange = _data;

        });

        LoadingData.GetInstance().Data_HotUpdateTips.AddListenner(this,(_data)=>
        {
            this.mTips.string = _data;

        });
    }
    LateInit()
    {

    }


    CustmoerDestory()
    {

    }
    


    
}

