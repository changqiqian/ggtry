import { _decorator, Component, Node, find, Label, Sprite, sys, js, UI } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { LoadingData } from './LoadingData';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('LoadingUI')
export class LoadingUI extends BaseUI 
{
    public static PrefabPath : string = "prefab/LoadingUI";
    public static Bunddle : string = "loading";

    mStartBtn: BaseButton = null;
    mProgressBG: Node = null;
    mProgress: Sprite = null;
    InitParam() 
    {
    }
    BindUI() 
    {
        this.mStartBtn = this.node.getChildByPath("StartBtn").getComponent(BaseButton);
        this.mProgressBG = this.node.getChildByPath("ProgressBG");
        this.mProgress = this.node.getChildByPath("ProgressBG/Progress").getComponent(Sprite);

        this.mStartBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ChangeScene(SceneType.Game);
        })


        this.mProgress.fillRange = 0;
        this.mProgressBG.active = true;
        this.mStartBtn.Show(false);
    }

    RegDataNotify() 
    {
        LoadingData.Instance.Data_HotUpdateEnd.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                this.scheduleOnce(()=>
                {
                   
                    let totalSrcCount = UIMgr.ResFolder.length * UIMgr.RestBundle.length;
                    this.mProgress.fillRange = 0;
    
                    UIMgr.Instance.LoadRestRes(
                    ()=>
                    {
                        this.mProgress.fillRange = 1;
                        UIMgr.Instance.ShowToast(Localization.GetString("00000"),1);
                        UIMgr.Instance.ShowToast(Localization.GetString("00000"),1);
                        this.mProgressBG.active = false;
                        this.mStartBtn.Show(true);
                    },
                    (_restSrcCount)=>
                    {
                        let currentRatio = (totalSrcCount - _restSrcCount) / totalSrcCount;
                        this.mProgress.fillRange = currentRatio;
                    })
                },2)
            }
        });

        LoadingData.Instance.Data_HotUpdateProgress.AddListenner(this,(_data)=>
        {
            this.mProgress.fillRange = _data;

        });

        LoadingData.Instance.Data_HotUpdateTips.AddListenner(this,(_data)=>
        {

        });
    }
    LateInit()
    {
        LoadingData.Instance.Data_HotUpdateEnd.mData = true;
    }


    CustmoerDestory()
    {
        LoadingData.Instance.Clear();
    }
    


    
}

