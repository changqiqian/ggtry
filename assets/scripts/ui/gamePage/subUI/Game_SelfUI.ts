import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Game_ActionTag } from './Game_ActionTag';
import { Game_AddTime } from './Game_AddTime';
import { Game_BetAmount } from './Game_BetAmount';
const { ccclass, property } = _decorator;

@ccclass('Game_SelfUI')
export class Game_SelfUI extends BaseUI 
{
    @property(Node) 
    mCards: Node = null;
    @property(Game_AddTime) 
    mGame_AddTime: Game_AddTime = null;
    @property(Game_BetAmount) 
    mGame_BetAmount: Game_BetAmount = null;
    @property(Game_ActionTag) 
    mGame_ActionTag: Game_ActionTag = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mGame_AddTime.SetCallback(()=>
        {

        });
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }
}

