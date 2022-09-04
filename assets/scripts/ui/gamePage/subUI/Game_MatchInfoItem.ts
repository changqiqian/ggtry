import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
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

    public InitWithData(_index : number , _uid : number)
    {
        this.mBG.active = _index%2 == 0;
    }
}

