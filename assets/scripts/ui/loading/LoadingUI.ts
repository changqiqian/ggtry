import { _decorator, Component, Node, find } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { LoadingData } from './LoadingData';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends BaseUI 
{
    InitParam() 
    {
        LoadingData.GetInstance().AddListener("Data_HotUpdateEnd",(_current , _before)=>
        {
            setTimeout(() => {
                UIMgr.GetInstance().ChangeScene(SceneType.Hall);  
            }, 1000)

        },this);


    }
    BindUI() 
    {
    }
    RegDataNotify() 
    {
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

