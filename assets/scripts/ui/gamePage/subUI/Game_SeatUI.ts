import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { GameData } from '../GameData';
import { Game_SeatItem } from './Game_SeatItem';
const { ccclass, property } = _decorator;

@ccclass('Game_SeatUI')
export class Game_SeatUI extends BaseUI 
{
    InitParam() 
    {
        let childCount = this.node.children.length; 
        for(let i = 0 ; i < childCount ; i++)
        {
            let current = this.node.children[i].getComponent(Game_SeatItem);
            current.SetSeatID(i);
        }
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
    UnregDataNotify() 
    {
        GameData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }
}

