import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { SceneType, UIMgr } from '../../../base/UIMgr';
import { BaseButton } from '../../common/BaseButton';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_MttResultLayer')
export class Game_MttResultLayer extends BaseUI 
{
    @property(Label) 
    mTitle: Label = null;
    @property(Label) 
    mDescribe: Label = null;
    @property(Sprite) 
    mIcon: Sprite = null;
    @property(BaseButton) 
    mRecrodBtn: BaseButton = null;
    InitParam()
    {
        this.AutoAdaptMultipleTableUI();
    }
    BindUI()
    {
        this.mRecrodBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ChangeScene(SceneType.Hall);
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

