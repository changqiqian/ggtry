import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from './BaseButton';
import { PlayerInfo } from './PlayerInfo';
const { ccclass, property } = _decorator;

@ccclass('BriefRecordItem')
export class BriefRecordItem extends BaseUI 
{
    @property(PlayerInfo) 
    mWinnerPlayerInfo: PlayerInfo = null;
    @property(Node) 
    mWinnerCards: Node = null;
    @property(Node) 
    mPublicCards: Node = null;
    @property(Node) 
    mMineCards: Node = null;
    @property(Label) 
    mWinnerProfit: Label = null;
    @property(Label) 
    mMyProfit: Label = null;
    @property(BaseButton) 
    mVideoBtn: BaseButton = null;
    
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

