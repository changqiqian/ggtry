import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { ToggleBtn } from '../../common/ToggleBtn';
import { GameData } from '../GameData';

const { ccclass, property } = _decorator;

@ccclass('GameTop')
export class GameTop extends BaseUI 
{
    public static PrefabPath : string = "prefab/GameTop";
    public static Bunddle : string = "gamePage";

    mLayout : Node = null;

    mBonusBG : Node = null;
    mLayoutBonus : Node = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mLayout = this.node.getChildByPath("TopBG1/Layout");
        for(let i = 0 ; i < this.mLayout.children.length ; i++)
        {
            let currentToggle = this.mLayout.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(GameData.Instance.Data_CurrentRewardRatioIndex , i);
            currentToggle.SetInteractable(false);
        }

        this.mBonusBG = this.node.getChildByPath("TopBG1/BonusTopBG");
        this.mLayoutBonus = this.node.getChildByPath("TopBG1/BonusTopBG/LayoutBonus");
        for(let i = 0 ; i < this.mLayoutBonus.children.length ; i++)
        {
            let currentToggle = this.mLayoutBonus.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(GameData.Instance.Data_CurrentBonusRewardRatioIndex , i);
            currentToggle.SetInteractable(false);
        }

        this.mBonusBG.active = false;
        GameData.Instance.Data_CurrentRewardRatioIndex.mData = 0;
        GameData.Instance.Data_CurrentBonusRewardRatioIndex.mData = 0;

        
    }
    RegDataNotify()
    {
        GameData.Instance.Data_BonusMode.AddListenner(this,(_data)=>
        {
            this.mBonusBG.active = _data;
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

