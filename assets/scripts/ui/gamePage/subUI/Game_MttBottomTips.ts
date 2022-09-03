import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';

const { ccclass, property } = _decorator;

@ccclass('Game_MttBottomTips')
export class Game_MttBottomTips extends BaseUI 
{
    @property(Node) 
    mBG: Node = null;
    @property(Label) 
    mTips: Label = null;
    InitParam() 
    {
        this.mBG.active = false;
        this.mTips.string = "";
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
}

