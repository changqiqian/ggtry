import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_BetAmount')
export class Game_BetAmount extends BaseUI 
{
    @property(Label) 
    mAmount: Label = null;
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
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }
}

