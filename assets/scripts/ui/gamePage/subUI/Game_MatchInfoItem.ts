import { _decorator, Component, Node, Label, Color } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Tool } from '../../../Tool';
const { ccclass, property } = _decorator;

@ccclass('Game_MatchInfoItem')
export class Game_MatchInfoItem extends BaseUI 
{
    @property(Node) 
    mBG: Node = null;
    @property(Node) 
    mSelfTag: Node = null;
    @property(Label) 
    mNickName: Label = null;
    @property(Label) 
    mHands: Label = null;
    @property(Label) 
    mVPIP: Label = null;
    @property(Label) 
    mBringIn: Label = null;
    @property(Label) 
    mWinLose: Label = null;
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

    public InitWithData(_index : number , _data : PlayerStatistic)
    {
        this.mBG.active = _data.uid == LocalPlayerData.Instance.Data_Uid.mData;
        this.mSelfTag.active = _data.uid == LocalPlayerData.Instance.Data_Uid.mData;
        this.mNickName.string = _data.name;
        this.mHands.string = _data.totalHands + "";
        this.mBringIn.string = Tool.ConvertMoney_S2C(_data.totalBringIn) + "";

        if(_data.totalHands == 0)
        {
            this.mVPIP.string = "0%";
        }
        else
        {
            this.mVPIP.string = (_data.totalHands/_data.totalFlopHands).toFixed(1) + "%";
        }

        if(_data.winLose >=0)
        {
            this.mWinLose.string = "+" + Tool.ConvertMoney_S2C(_data.winLose);
            this.mWinLose.color = Color.GREEN
        }
        else
        {
            this.mWinLose.string = Tool.ConvertMoney_S2C(_data.winLose) + "";
            this.mWinLose.color = Color.RED
        }
    }
}

