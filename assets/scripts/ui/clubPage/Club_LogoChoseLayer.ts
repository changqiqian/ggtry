import { _decorator, Component, Node, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameConfig } from '../../GameConfig';
import { BaseButton } from '../common/BaseButton';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_LogoChoseLayer')
export class Club_LogoChoseLayer extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    
    InitParam()
    {

    }
    BindUI()
    {
        for(let i = 0 ; i < GameConfig.ClubLogoNumber ; i++)
        {
            let currentToggle = this.mScrollView.content.children[i].getComponent(ToggleBtn);
            let logoName = "Logo" + i;
            this.LoadSprite("common" , "texture/club/" + logoName , (_spriteFrame)=>
            {
                currentToggle.SetImage(_spriteFrame)
                currentToggle.SetDataNotify(HallData.Instance.Data_ClubLogoIndex,i);
            })
        }

        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });
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

