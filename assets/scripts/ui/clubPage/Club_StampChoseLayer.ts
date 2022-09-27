import { _decorator, Component, Node, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameConfig } from '../../GameConfig';
import { BaseButton } from '../common/BaseButton';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_StampChoseLayer')
export class Club_StampChoseLayer extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    InitParam()
    {
        HallData.GetInstance().Data_ClubStampIndex.mData = 0;
    }
    BindUI()
    {
        for(let i = 0 ; i < GameConfig.ClubStampNumber ; i++)
        {
            let currentToggle = this.mScrollView.content.children[i].getComponent(ToggleBtn);
            let logoName = "Stamp" + i;
            this.LoadSprite("common" , "texutre/club/" + logoName , (_spriteFrame)=>
            {
                currentToggle.SetImage(_spriteFrame)
                currentToggle.SetDataNotify(HallData.GetInstance().Data_ClubStampIndex,i);
            })
        }
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

