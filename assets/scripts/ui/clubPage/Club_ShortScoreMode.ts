import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
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
            currentToggle.SetDataNotify(HallData.Instance.Data_ClubCreateShortScoreMode,i);  

            if(i == ShortGameScoreMode.ShortGameScoreMode_AnteMode)
            {
                currentToggle.SetTitle(Localization.GetString("00233"));
            }
            else if(i == ShortGameScoreMode.ShortGameScoreMode_BlindMode)
            {
                currentToggle.SetTitle(Localization.GetString("00234"));
            }
        }
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubCreateShortScoreMode.AddListenner(this , (_data)=>
        {
            HallData.Instance.Data_Club_CreateTexasConfig.mData.shortScoreMode = _data;
        })
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

