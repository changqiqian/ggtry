import { _decorator, Component, Node, find, Label, Sprite, sys, js, UI } from 'cc';
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
        return [];
        //return ["loading"];
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
    }
    BindUI() 
    {

    }

    RegDataNotify() 
    {
        LoadingData.Instance.Data_HotUpdateEnd.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                this.scheduleOnce(()=>
                {
                    this.mTips.string = Localization.GetString("00097");
                    let totalSrcCount = UIMgr.ResFolder.length * UIMgr.RestBundle.length;
                    this.mPercent.string =  "0%";
                    this.mProgress.fillRange = 0;
    
                    UIMgr.Instance.LoadRestRes(
                    ()=>
                    {
                        this.mPercent.string =  "100%";
                        this.mProgress.fillRange = 1;
                        UIMgr.Instance.ShowToast(Localization.GetString("00000"),1);
                        UIMgr.Instance.ShowToast(Localization.GetString("00000"),1);
                        this.scheduleOnce(()=>
                        {
                            UIMgr.Instance.ChangeScene(SceneType.Login);
                        },1)
                    },
                    (_restSrcCount)=>
                    {
                        let currentRatio = (totalSrcCount - _restSrcCount) / totalSrcCount;
                        this.mPercent.string = (currentRatio * 100).toFixed(2) + "%";
                        this.mProgress.fillRange = currentRatio;
                    })
                },2)
            }
        });

        LoadingData.Instance.Data_HotUpdateProgress.AddListenner(this,(_data)=>
        {
            this.mPercent.string = _data.toFixed(2) * 100 + "%";
            this.mProgress.fillRange = _data;

        });

        LoadingData.Instance.Data_HotUpdateTips.AddListenner(this,(_data)=>
        {
            this.mTips.string = _data;

        });
    }
    LateInit()
    {

    }


    CustmoerDestory()
    {
        LoadingData.Instance.Clear();
    }
    


    
}

