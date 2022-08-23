import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_ActionTag')
export class Game_ActionTag extends BaseUI 
{
    @property(Sprite) 
    mBG: Sprite = null;
    @property(Label) 
    mAction: Label = null;
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

