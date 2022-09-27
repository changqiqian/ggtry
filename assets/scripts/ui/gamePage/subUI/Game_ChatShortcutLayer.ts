import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { GameData, Game_ChattingSubLayer } from '../GameData';
import { Game_ChatShortcutItem } from './Game_ChatShortcutItem';
const { ccclass, property } = _decorator;

@ccclass('Game_ChatShortcutLayer')
export class Game_ChatShortcutLayer extends BaseUI 
{
    @property(ScrollView) 
    mScrollView: ScrollView = null;

    mShortcuts : Array<string> = null;
    InitParam()
    {
        this.mShortcuts = new Array<string>();
        this.mShortcuts.push("1111");
        this.mShortcuts.push("2222");
        this.mShortcuts.push("3333");
        this.mShortcuts.push("4444");
        this.mShortcuts.push("5555");
        this.mShortcuts.push("6666");
        this.mShortcuts.push("7777");
        this.mShortcuts.push("8888");
    }
    BindUI()
    {
        for(let i = 0 ; i < this.mShortcuts.length ; i++)
        {
            this.LoadPrefab("gamePage" , "prefab/Game_ChatShortcutItem" , (_prefab)=>
            {
                let currentShortcut = this.mShortcuts[i];
                let tempNode = instantiate(_prefab);
                this.mScrollView.content.addChild(tempNode);
                tempNode.getComponent(Game_ChatShortcutItem).InitWithData(currentShortcut);
            })
        }
    }
    RegDataNotify()
    {

        GameData.GetInstance().Data_ChatingSubLayer.AddListenner(this , (_data)=>
        {
            this.node.active = _data == Game_ChattingSubLayer.ChatHistory
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

