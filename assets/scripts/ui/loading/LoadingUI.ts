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
    @property(BaseButton) 
    mStartBtn: BaseButton = null;
    @property(Node) 
    mProgressBG: Node = null;
    @property(Sprite) 
    mProgress: Sprite = null;
    InitParam() 
    {
        this.mProgress.fillRange = 0;
    }
    BindUI() 
    {
        this.mStartBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ChangeScene(SceneType.Game);
        })


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

