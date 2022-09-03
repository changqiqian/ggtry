import { _decorator, Component, Node, Sprite, Label, Color } from 'cc';
import { BaseUI } from '../../base/BaseUI';

import { BaseButton } from '../common/BaseButton';

const { ccclass, property } = _decorator;

@ccclass('Mtt_MatchItem')
export class Mtt_MatchItem extends BaseUI 
{
    @property(Sprite) 
    mBG: Sprite = null;
    @property(Node) 
    mTopTag: Node = null;
    @property(Node) 
    mSatelliteTag: Node = null;
    @property(Node) 
    mWeiPoBaoTag: Node = null;
    @property(Node) 
    mRegistedTag: Node = null;
    @property(Node) 
    mLiveTag: Node = null;
    @property(Label) 
    mMatchName: Label = null;

    //报名费
    @property(Node) 
    mRegCoin: Node = null;
    @property(Node) 
    mRegDiamond: Node = null;
    @property(Node) 
    mSilverCoin: Node = null;
    @property(Label) 
    mRegAmount: Label = null;

    //门票报名
    @property(Node) 
    mRegByTicketRoot: Node = null;
    @property(Node) 
    mRegTicket: Node = null;
    @property(Label) 
    mRegTicketDescribe: Label = null;

    //玩家数量
    @property(Label) 
    mPlayerAmount: Label = null;
    //游戏当前状态
    @property(Label) 
    mStatusTitle: Label = null;
    @property(Label) 
    mStatusSubTitle: Label = null;
    @property(Label) 
    mCountDown: Label = null;

    @property(BaseButton) 
    mBtn: BaseButton = null;
    @property(Sprite) 
    mStatusSpr: Sprite = null;
    

    InitParam() 
    {

    }
    BindUI() 
    {
        this.mTopTag.active = false;
        this.mSatelliteTag.active = false;
        this.mWeiPoBaoTag.active = false;
        this.mRegistedTag.active = false;
        this.mLiveTag.active = false;
        this.mRegCoin.active = false;
        this.mRegDiamond.active = false;
        this.mSilverCoin.active = false;
        this.mRegAmount.string = "";
        this.mRegByTicketRoot.active = false;
        this.mPlayerAmount.string = "";
        this.mStatusTitle.string = "";
        this.mStatusSubTitle.string = "";
        this.mCountDown.string = "";

        this.mBtn.SetClickCallback(()=>
        {
        });
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {
        this.unscheduleAllCallbacks();
    }

    public InitWithData()
    {
       
    }

   



}



