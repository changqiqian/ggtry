import { _decorator, Component, Node, find, Label, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { JsbScript } from '../../base/JsbScript';
import { Localization } from '../../base/Localization';
import { SceneType, UIMgr } from '../../base/UIMgr';
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
        LoadingData.GetInstance().AddListener("Data_HotUpdateEnd",(_current , _before)=>
        {
            setTimeout(() => {
                UIMgr.GetInstance().ChangeScene(SceneType.Login);  
            }, 1000)
        },this);

        LoadingData.GetInstance().AddListener("Data_HotUpdateProgress",(_current , _before)=>
        {
            this.mPercent.string = _current * 100 + "%";
            this.mProgress.fillRange = _current;
        },this);

        LoadingData.GetInstance().AddListener("Data_HotUpdateTips",(_current , _before)=>
        {
            this.mTips.string = _current;
        },this);
    }
    LateInit()
    {

    }

    UnregDataNotify() 
    {
        LoadingData.GetInstance().RemoveListenerByTarget(this);
        LoadingData.GetInstance().Reset();
    }

    CustmoerDestory()
    {
        
    }
    


    
}

