import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Tool } from '../../Tool';
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

    mData : RecordPlayer;
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

    public InitWithData(_data : RecordPlayer)
    {
        this.mData = _data;

        this.mPlayerInfo.SetLocalHead(parseInt(_data.head));
        this.mPlayerInfo.SetName(_data.name);
        this.mHands.string = _data.hands;
        this.mVPIP.string = _data.vpip + "%";
        this.mBringIn.string = Tool.ConvertMoney_S2C(_data.buyIn) + "";
        this.mProfit.string = Tool.ConvertMoney_S2C(_data.winLose) + "";
    }
}

