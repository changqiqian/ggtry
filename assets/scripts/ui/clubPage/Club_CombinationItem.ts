import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Club_CombinationItem')
export class Club_CombinationItem extends BaseUI 
{
    @property(Node) 
    mPokerLayout: Node = null;
    @property(Label) 
    mWinAndHands: Label = null;
    @property(Label) 
    mWinRate: Label = null;
    @property(Label) 
    mProfit: Label = null;
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
}

