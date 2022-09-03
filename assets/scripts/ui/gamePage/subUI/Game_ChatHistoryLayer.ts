import { _decorator, Component, Node, ScrollView } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { GameData, Game_ChattingSubLayer } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_ChatHistoryLayer')
export class Game_ChatHistoryLayer extends BaseUI 
{
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    InitParam()
    {

    }
    BindUI()
    {

    }
    RegDataNotify()
    {
        GameData.GetInstance().AddListener("Data_ChatingSubLayer" , (_current , _before) =>
        {
            this.node.active = _current == Game_ChattingSubLayer.ChatHistory
        },this);
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

