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

        GameData.Instance.Data_CurrentRewardRatioIndex.mData = 0;
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

