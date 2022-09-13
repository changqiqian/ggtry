import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { PlayerInfo } from '../common/PlayerInfo';
const { ccclass, property } = _decorator;

@ccclass('Club_RecordPlayerItem')
export class Club_RecordPlayerItem extends BaseUI 
{
    @property(Node)
    mDarkBG: Node = null;
    @property(PlayerInfo)
    mPlayerInfo: PlayerInfo = null;
    @property(Label)
    mHands: Label = null;
    @property(Label)
    mVPIP: Label = null;
    @property(Label)
    mBringIn: Label = null;
    @property(Label)
    mProfit: Label = null;

    @property(Node)
    mMvp: Node = null;
    @property(Node)
    mRich: Node = null;
    @property(Node)
    mFish: Node = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mMvp.active = false;
        this.mRich.active = false;
        this.mFish.active = false;
        this.mDarkBG.active = false;
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

