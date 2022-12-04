import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
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
    mInited : boolean = false;
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
        if(this.mInited == true)
        {
            return;
        }

        this.mInited = true;
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
        this.mShortcuts.push("1111");
        this.mShortcuts.push("2222");
        this.mShortcuts.push("3333");
        this.mShortcuts.push("4444");
        this.mShortcuts.push("5555");
        this.mShortcuts.push("6666");
        this.mShortcuts.push("7777");
        this.mShortcuts.push("8888");
        for(let i = 0 ; i < this.mShortcuts.length ; i++)
        {
            this.LoadPrefab("gamePage" , "prefab/Game_ChatShortcutItem" , (_prefab)=>
            {
                let currentShortcut = this.mShortcuts[i];
                let tempNode = instantiate(_prefab);
                this.mScrollView.content.addChild(tempNode);
                tempNode.getComponent(Game_ChatShortcutItem).InitWithData(this.mIndex , currentShortcut);
            })
        }
    }
}

