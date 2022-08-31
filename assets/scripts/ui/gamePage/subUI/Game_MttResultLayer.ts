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

    }
    BindUI()
    {
        this.mRecrodBtn.SetClickCallback(()=>
        {
            UIMgr.GetInstance().ChangeScene(SceneType.Hall);
        });
    }
    RegDataNotify()
    {
        GameData.GetInstance().AddListener("Data_MttGameResult",(_current , _before)=>
        {
            let selfRank = _current.result.ranking;            
            if(selfRank == 0 || selfRank > 3)
            {
                this.mIcon.node.active = false;
                this.mTitle.string = Localization.GetString("00084");
                this.mDescribe.string = Localization.GetString("00086");
            }
            else
            {
                this.mIcon.node.active = true;
                let picName = "Cup" + selfRank;
                this.LoadSprite("common","texture/" + picName , (_spriteFrame)=>
                {
                    this.mIcon.spriteFrame = _spriteFrame;
                })
                this.mTitle.string = Localization.GetString("00083");
                let rankDescribe = Localization.GetString("00085");
                this.mDescribe.string = Localization.ReplaceString(rankDescribe , selfRank + "");
            }
        },this);
    }
    LateInit()
    {

    }

    CustmoerDestory()
    {

    }
}

