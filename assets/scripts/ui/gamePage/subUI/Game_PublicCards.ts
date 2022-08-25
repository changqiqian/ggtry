import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_PublicCards')
export class Game_PublicCards extends BaseUI 
{
    InitParam() 
    {

    }
    BindUI() 
    {

    }
    RegDataNotify() 
    {

        GameData.GetInstance().AddListener("Data_CheckPublicCards",(_current , _before)=>
        {


        },this);
        GameData.GetInstance().AddListener("Data_SendPublicCards",(_current , _before)=>
        {
            //_current.centerCard
        },this);
        GameData.GetInstance().AddListener("Data_GameStart",(_current , _before)=>
        {
            this.ClearPublicCards();
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

    ClearPublicCards()
    {

    }
}

