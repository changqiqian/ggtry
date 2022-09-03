import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_ChatHistoryItem')
export class Game_ChatHistoryItem extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mContent: Label = null;
    
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

    public InitWithData()
    {
        
    }
}

