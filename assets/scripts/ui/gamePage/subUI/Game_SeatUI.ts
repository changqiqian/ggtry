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
        GameData.GetInstance().AddListener("Data_EnterGame",(_current , _before)=>
        {
            let userList = _current.deskInfo.userList;
            for(let i = 0 ; i < userList.length ; i++)
            {
                let currentUser = userList[i];
                GameData.GetInstance().ModifyPlayingPlayer(currentUser);
            }
            GameData.GetInstance().Data_UpdatePlayingPlayer = true;
            
        },this);
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

