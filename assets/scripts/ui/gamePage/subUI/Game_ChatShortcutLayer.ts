import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_ChattingSubLayer } from '../GameData';
import { Game_ChatShortcutItem } from './Game_ChatShortcutItem';
const { ccclass, property } = _decorator;

@ccclass('Game_ChatShortcutLayer')
export class Game_ChatShortcutLayer extends BaseUI 
{
    @property(ScrollView) 
    mScrollView: ScrollView = null;

    mShortcuts : Array<string> = null;
    mIndex : number ;
    InitParam()
    {

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
    CustmoerDestory()
    {

    }

    public InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.InitShortcutItem();
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_ChatingSubLayer.AddListenner(this , (_data)=>
        {
            this.node.active = _data == Game_ChattingSubLayer.Shortcut
        });
    }


    InitShortcutItem()
    {
        this.mShortcuts = new Array<string>();
        this.mShortcuts.push(Localization.GetString("00328"));
        this.mShortcuts.push(Localization.GetString("00329"));
        this.mShortcuts.push(Localization.GetString("00330"));
        this.mShortcuts.push(Localization.GetString("00331"));
        this.mShortcuts.push(Localization.GetString("00332"));
        this.mShortcuts.push(Localization.GetString("00333"));
        this.mShortcuts.push(Localization.GetString("00334"));
        this.mShortcuts.push(Localization.GetString("00335"));
        for(let i = 0 ; i < this.mShortcuts.length ; i++)
        {
            this.LoadPrefab("gamePage" , "prefab/Game_ChatShortcutItem" , (_node)=>
            {
                let currentShortcut = this.mShortcuts[i];
                this.mScrollView.content.addChild(_node);
                _node.getComponent(Game_ChatShortcutItem).InitWithData(this.mIndex , currentShortcut);
            })
        }
    }
}

