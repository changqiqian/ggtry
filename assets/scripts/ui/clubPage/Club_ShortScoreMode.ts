import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_ShortScoreMode')
export class Club_ShortScoreMode extends BaseUI 
{
    @property(Node) 
    mScoreModeToggles: Node = null;
    InitParam()
    {

    }
    BindUI()
    {
        for(let i = 0 ; i < this.mScoreModeToggles.children.length ; i++)
        {
            let currentToggle = this.mScoreModeToggles.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(HallData.GetInstance().Data_ClubCreateShortScoreMode,i);  
        }
    }
    RegDataNotify()
    {
        HallData.GetInstance().Data_ClubCreateShortScoreMode.AddListenner(this , (_data)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.shortScoreMode = _data;
        })
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

