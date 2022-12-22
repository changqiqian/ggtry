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

    public InitWithData(_index : number , _playerHistoryInfo : PlayerHistoryInfo)
    {
        this.mBG.active = _index%2 == 0;
        this.mSelfTag.active = _playerHistoryInfo.uid == LocalPlayerData.Instance.Data_Uid.mData;
        this.mNickName.string = _playerHistoryInfo.nickName;
        this.mHands.string = _playerHistoryInfo.totalGames + "";
        this.mBringIn.string = Tool.ConvertMoney_S2C(_playerHistoryInfo.totalBringIn) + "";

        
        if(_playerHistoryInfo.totalWinLose >=0)
        {
            this.mWinLose.string = "+" + Tool.ConvertMoney_S2C(_playerHistoryInfo.totalWinLose);
            this.mWinLose.color = new Color(0,255,0);
        }
        else
        {
            this.mWinLose.string = Tool.ConvertMoney_S2C(_playerHistoryInfo.totalWinLose) + "";
            this.mWinLose.color = new Color(255,0,0);
        }
    }
}

