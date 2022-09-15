import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { PlayerInfo } from '../common/PlayerInfo';
const { ccclass, property } = _decorator;

@ccclass('Club_OpponentDataItem')
export class Club_OpponentDataItem extends BaseUI 
{
    @property(PlayerInfo) 
    mPlayerInfo: PlayerInfo = null;
    @property(Label) 
    mHands: Label = null;
    @property(Label) 
    mWin: Label = null;
    @property(Label) 
    mLose: Label = null;
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

