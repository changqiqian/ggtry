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

        GameData.Instance.Data_ChatingSubLayer.AddListenner(this , (_data)=>
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

