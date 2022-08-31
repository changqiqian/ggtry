import { _decorator, Component, Node, Sprite, Label, Color } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
import { BaseButton } from '../common/BaseButton';
import { HallData, Mtt_MatchListStatus, Mtt_RegType } from '../hall/HallData';
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
    
    mData : any = null;
    mMatchStatus : Mtt_MatchListStatus = null;
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
            HallData.GetInstance().Data_CurrentMttMatchID = this.mData.mttInfo.matchId;
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
        this.mData = null;
    }

    public InitWithData(_data)
    {
        this.mData = _data;
        this.mRegistedTag.active = _data.isJoin;

        let liveInfo = _data.liveInfo;
        let mttInfo = _data.mttInfo;
        let strapConfig = mttInfo.strapConfig;
        //liveInfo
        {
            this.mMatchName.string = liveInfo.clubName;
            this.LoadRemoteSprite(liveInfo.liveCover , (_spriteFrame)=>
            {
                this.mBG.spriteFrame = _spriteFrame;
            });
        }
        //mttInfo
        {
            this.mLiveTag.active = mttInfo.isLive;
            if(mttInfo.matchMode == 3)
            {
                this.mSatelliteTag.active = true;
            }
            //是否破保  正赛
            if(mttInfo.rewardConfig.rewardType == 1)
            {
                this.mWeiPoBaoTag.active = mttInfo.rewardConfig.protectReward > mttInfo.rewardConfig.totalReward;
            }
            else if(mttInfo.rewardConfig.rewardType == 2)
            {
                this.mWeiPoBaoTag.active = mttInfo.rewardConfig.TotalRewardUser < mttInfo.rewardConfig.protectReward;
            }

            if(mttInfo.enterFee == 0 && mttInfo.serviceFee == 0)
            {
                this.mRegAmount.string = Localization.GetString("00017");
            }
            else
            {
                this.mRegAmount.string = mttInfo.enterFee + "+" + mttInfo.serviceFee;
            }

            if(mttInfo.enterFeeType == Mtt_RegType.Coin) 
            {
                this.mRegCoin.active = true;     
            }// 2钻石
            else if(mttInfo.enterFeeType == Mtt_RegType.Diamond) 
            {
                this.mRegDiamond.active = true;
            
            } // 3门票
            else if(mttInfo.enterFeeType ==  Mtt_RegType.Ticket)
            {
                this.mRegByTicketRoot.active = true;
                this.mRegTicketDescribe.string = GameConfig.GetStrWithLen(mttInfo.enterFeeTicket.name, 35) + ' *' + mttInfo.enterFeeTicket.nums;
            } // 4门票 金币
            else if(mttInfo.enterFeeType == Mtt_RegType.CoinAndTicket) 
            {
                this.mRegCoin.active = true;
                this.mRegByTicketRoot.active = true;
                this.mRegTicketDescribe.string = GameConfig.GetStrWithLen(mttInfo.enterFeeTicket.name, 35) + ' *' + mttInfo.enterFeeTicket.nums;

            
            } // 5门票 钻石
            else if(mttInfo.enterFeeType == Mtt_RegType.DiamondAndTicket) 
            {
                this.mRegDiamond.active = true;
                this.mRegByTicketRoot.active = true;
                this.mRegTicketDescribe.string = GameConfig.GetStrWithLen(mttInfo.enterFeeTicket.name, 35) + ' *' + mttInfo.enterFeeTicket.nums;

            }

            this.UpdateStatus(mttInfo);
        }
        //strapConfig
        {
            this.mTopTag.active = strapConfig.isTop == undefined ? false : strapConfig.isTop;
            if(strapConfig.titleColor && strapConfig.titleColor.length > 0) 
            {
                this.mMatchName.color = new Color(strapConfig.titleColor[0], strapConfig.titleColor[1], strapConfig.titleColor[2]);
            }
        }
    }
    // export enum Mtt_MatchStatus { //Mtt详细信息页面的比赛状态
    //     Registring = 1, //报名中
    //     Only_15mins = 2, //准备开始 提前15分钟
    //     Only_10s = 3 , //预备开始 10秒倒计时
    //     Started = 4 , //正式开始
    //     Rest = 5 , //休息
    //     Pause = 6 ,//暂停
    //     End = 7 , //结束
    //     LevelUp = 8 , //涨盲通知
    // }
    UpdateStatus(_mttInfo)
    {
        console.log("_mttInfo.status==" + _mttInfo.status);
        //计算比赛状态
        if(_mttInfo.status == 1)
        {
            console.log("tttttttttttt ===111")
            this.mMatchStatus = Mtt_MatchListStatus.NotStart;
            this.mStatusTitle.string = Localization.GetString("00019");
        }
        else if(_mttInfo.status == 2)
        {
            console.log("tttttttttttt ===222")
            this.mMatchStatus = Mtt_MatchListStatus.NotStart;
            this.mStatusTitle.string = Localization.GetString("00019");
        }
        else if(_mttInfo.status == 10)
        {
            console.log("tttttttttttt ===333")
            this.mMatchStatus = Mtt_MatchListStatus.MatchEnd;
            this.mStatusTitle.string = Localization.GetString("00020");
        }
        else
        {
            console.log("tttttttttttt ===444")
            if(_mttInfo.stopJoinTime > 0)
            {
                console.log("tttttttttttt ===555")
                this.mMatchStatus = Mtt_MatchListStatus.DelayReg;
                this.mStatusTitle.string = Localization.GetString("00021");
            }
            else
            {
                console.log("tttttttttttt ===666")
                if(_mttInfo.status == 5)
                {
                    console.log("tttttttttttt ===777")
                    this.mMatchStatus = Mtt_MatchListStatus.RestTime;
                    this.mStatusTitle.string = Localization.GetString("00022");
                }
                else
                {
                    console.log("tttttttttttt ===888")
                    this.mMatchStatus = Mtt_MatchListStatus.MatchStarted;
                    this.mStatusTitle.string = Localization.GetString("00023");
                }
            }
        }
        /////////////////////////////////////////////////////////////

        this.LoadSprite("mttPage","texture/StateBtn" + this.mMatchStatus , (_spriteFrame)=>
        {
            this.mStatusSpr.spriteFrame = _spriteFrame;
        })
        
        console.log("tttttttttttt ===999")
        if(this.mMatchStatus == Mtt_MatchListStatus.DelayReg || 
            this.mMatchStatus == Mtt_MatchListStatus.MatchStarted)
        {
            console.log("tttttttttttt ===aaa")
            this.mPlayerAmount.string = _mttInfo.playerCount + '/' + _mttInfo.totalPlayer;
        }
        else
        {
            console.log("tttttttttttt ===bbb")
            this.mPlayerAmount.string = _mttInfo.totalPlayer;
        }

        console.log("tttttttttttt ===ccc")
        if(this.mMatchStatus == Mtt_MatchListStatus.DelayReg)
        {
            console.log("tttttttttttt ===ddd")
            this.StartCountDown(_mttInfo.stopJoinTime);
        }
        else if(this.mMatchStatus == Mtt_MatchListStatus.MatchStarted)
        {
            console.log("tttttttttttt ===eee")
            this.mStatusSubTitle.string = Localization.GetString("00087");
            let gameBeginDate = new Date(_mttInfo.gameTime * 1000);
            let gameBeginTime = gameBeginDate.getTime();
            let nowDate = new Date().getTime();
            let durationSeconds = (nowDate - gameBeginTime)/1000;
            console.log("durationSeconds=====" + durationSeconds);
            this.StartCountDown(durationSeconds , 1 , true);
        }
        else if(this.mMatchStatus == Mtt_MatchListStatus.MatchEnd)
        {
            this.mStatusSubTitle.string = "-";
            this.mCountDown.string = "-"
            console.log("tttttttttttt ===fff")
        }
        else
        {
            console.log("tttttttttttt ===ggg")
            this.StartCountDown(_mttInfo.leftTime);
        }
    }

    StartCountDown(_time : number , _timeSpace : number = 1, _forward : boolean = false)
    {
        this.StartSecondsTimer(_time , _timeSpace  , _forward);
        this.OnSecondTimer();
    }

    OnSecondTimer()
    {
        let seconds = this.GetRestSeconds();
        if(this.mMatchStatus == Mtt_MatchListStatus.MatchStarted)
        {
            this.mCountDown.string = GameConfig.GetRestTime_M_S(seconds);
        }
        else
        {
            this.CalculateWhenMatchStart(seconds, this.mData.mttInfo.beginTime);
        }
    }

    CalculateWhenMatchStart(_time , _beginTime) 
    {
        let date = new Date(_time * 1000);
        let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

        //显示月日
        if(_time >= 86400) 
        {
            let week = 
            [
                'SUNDAY',
                'MONDAY',
                'TUESDAY',
                'WEDNESDAY',
                'THURSDAY',
                'FRIDAY',
                'SATURDAY',
            ]

            let mt = 
            [
                "Jan.",
                "Feb.",
                "Mar.",
                "Apr.",
                "May.",
                "Jun.",
                "Jul.",
                "Aug.",
                "Sept.",
                "Oct.",
                "Nov.",
                "Dec.",
            ]

            let beginDate = new Date(_beginTime*1000);
            let month = beginDate.getMonth();
            let day = beginDate.getDate() < 10 ? '0' + beginDate.getDate() : beginDate.getDate()
            this.mStatusSubTitle.string = week[beginDate.getDay()]
            this.mCountDown.string = mt[month] + " " + day;
            return;
        }

        this.mStatusSubTitle.string = Localization.GetString("00024");
        //显示时分
        if(_time >= 3600) 
        {
            h = parseInt((_time / 3600).toString());
            h = h < 10 ? '0' + h : h + ''
            this.mCountDown.string =  h + 'h' + min + 'm'
            return;
        }
        
        this.mCountDown.string =  min + ':' + s
    }



}



