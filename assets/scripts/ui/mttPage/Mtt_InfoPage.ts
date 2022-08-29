import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { GameConfig } from '../../GameConfig';
import { GameType, Network } from '../../network/Network';
import { BaseButton } from '../common/BaseButton';
import { TipsWindow } from '../common/TipsWindow';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData, Mtt_InfoSubPage, Mtt_MatchStatus, Mtt_RegType, Mtt_StartMode, Mtt_UserStatus } from '../hall/HallData';
import { Mtt_AttendPage } from './Mtt_AttendPage';
import { Mtt_RegisterFee } from './Mtt_RegisterFee';
const { ccclass, property } = _decorator;

@ccclass('Mtt_InfoPage')
export class Mtt_InfoPage extends BaseUI 
{
    //top
    @property(Label) 
    mStatusDescribe: Label = null;
    @property(Label) 
    mCountDown: Label = null;
    @property(Node) 
    mManualNode: Node = null;
    @property(BaseButton) 
    mManualStartBtn: BaseButton = null;
    @property(Label) 
    mStartTime: Label = null;
    @property(Node) 
    mLiveTag: Node = null;
    @property(BaseButton) 
    mDismissBtn: BaseButton = null;
    @property(BaseButton) 
    mAccessBtn: BaseButton = null;

    //Bottom
    @property(Node) 
    mBinldUpInfo: Node = null;
    @property(Node) 
    mLateRegInfo: Node = null;
    @property(Node) 
    mCurrentPlayerinfo: Node = null;

    @property(Node) 
    mRegFee: Node = null;
    @property(Node) 
    mRebuyFee: Node = null;
    @property(Node) 
    mGuaranteed: Node = null;
    @property(Node) 
    mCurrentLevel: Node = null;
    @property(Node) 
    mNextLevel: Node = null;
    @property(Node) 
    mAvgStacks: Node = null;
    @property(Node) 
    mNextBreakTime: Node = null;
    @property(Node) 
    mMinMaxPlayer: Node = null;
    @property(Node) 
    mTalbelSeat: Node = null;
    @property(Node) 
    mStartChips: Node = null;
    @property(Node) 
    mStartBlind: Node = null;
    @property(Node) 
    mBreakTime: Node = null;
    @property(Node) 
    mKeepTop: Node = null;

    @property(BaseButton) 
    mObBtn: BaseButton = null;
    @property(BaseButton) 
    mRebuy: BaseButton = null;
    @property(BaseButton) 
    mAttendBtn: BaseButton = null;

    mData : any = null;
    InitParam() 
    {

    }

    BindUI() 
    {
        this.node.active = false;

        this.mObBtn.SetClickCallback(()=>
        {
            UIMgr.GetInstance().ChangeScene(SceneType.Game);
        });

        this.mRebuy.SetClickCallback(()=>
        {
            this.ButtonLogic();
        });

        this.mAttendBtn.SetClickCallback(()=>
        {
            this.ButtonLogic();
        });

        this.mDismissBtn.SetClickCallback(()=>
        {
            this.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.GetString("00046");
                tempScript.SetTips(tips);
                tempScript.SetCallback(()=>
                {
                    Network.GetInstance().SendMttDismiss(GameType.Mtt,this.mData.matchConfig.matchId);
                })
            })
            
        });

        this.mAccessBtn.SetClickCallback(()=>
        {
        });

        this.mManualStartBtn.SetClickCallback(()=>
        {
            this.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.GetString("00047");
                tempScript.SetTips(tips);
                tempScript.SetCallback(()=>
                {
                    Network.GetInstance().SendMttManualStart(this.mData.matchConfig.matchId);
                })
            })

            
        });

        let BlindInfoBtn = this.mBinldUpInfo.getChildByName("BlindUpBtn").getComponent(BaseButton);
        BlindInfoBtn.SetClickCallback(()=>
        {
        });

        this.mAvgStacks.active = false;
        this.mCurrentLevel.active = false;
        this.mNextLevel.active = false;
        this.mNextBreakTime.active = false;
    }


    RegDataNotify() 
    {

        HallData.GetInstance().AddListener("Data_MttManualStart",(_current , _before)=>
        {
            this.Refresh();
        },this);
        HallData.GetInstance().AddListener("Data_CancelMttResp",(_current , _before)=>
        {
            this.Refresh();
        },this);
        HallData.GetInstance().AddListener("Data_MttJoinNotify",(_current , _before)=>
        {
            this.Refresh();
        },this);

        HallData.GetInstance().AddListener("Data_AttendMttResp",(_current , _before)=>
        {
            this.Refresh();
        },this);
        

        HallData.GetInstance().AddListener("Data_MttGetRebuyInfo",(_current , _before)=>
        {
            this.ShowWindow("mttPage" , "prefab/Mtt_AttendPage",true,(_script)=>
            {
                let haveRealReward = this.HaveRealReward();
                let tempScript = _script as Mtt_AttendPage;
                tempScript.InitWithData(_current , haveRealReward);
            })

        },this);
        
        HallData.GetInstance().AddListener("Data_MttInfoSubPage",(_current , _before)=>
        {
            this.Show(_current == Mtt_InfoSubPage.InfoPage);
            if(_current == Mtt_InfoSubPage.InfoPage)
            {
                this.Refresh();
            }
        },this);
        
        HallData.GetInstance().AddListener("Data_MttMatchDetails",(_current , _before)=>
        {
            this.mData = _current;
            let isCreator = this.mData.matchConfig.creatorUserId == LocalPlayerData.GetInstance().Data_Uid;

            //保底奖金
            {
                let tempScript = this.mGuaranteed.getChildByName("Mtt_RegisterFee").getComponent(Mtt_RegisterFee);
                if(this.mData.rewardConfig.protectReward == 0 || this.mData.rewardConfig.rewardType == 0 || 
                    this.mData.rewardConfig.rewardType == 2)
                {
                    tempScript.ShowNothing("-");
                }
                else
                {
                    let tempReward = this.mData.rewardConfig.protectReward.toString();
                    if(this.mData.rewardConfig.totalReward > this.mData.rewardConfig.protectReward)
                    {
                        tempReward += "(" + Localization.GetString("00030") +")";
                    }
                    else
                    {
                        tempReward += "("+(parseInt(this.mData.rewardConfig.totalReward)/parseInt(this.mData.rewardConfig.protectReward)*100)+"%)";
                    }
    
                    if(this.mData.matchConfig.enterFeeType == Mtt_RegType.Coin ||
                        this.mData.matchConfig.enterFeeType == Mtt_RegType.CoinAndTicket)
                    {
                        tempScript.InitWithData(Mtt_RegType.Coin , tempReward);
                    }
                    else if(this.mData.matchConfig.enterFeeType == Mtt_RegType.Diamond ||
                        this.mData.matchConfig.enterFeeType == Mtt_RegType.DiamondAndTicket)
                    {
                        tempScript.InitWithData(Mtt_RegType.Diamond , tempReward);
                    }
                }
            }

            //置顶按钮
            {
                this.mKeepTop.active = isCreator;
                let tempScript = this.mKeepTop.getChildByName("KeepTopToggle").getComponent(ToggleBtn);
                tempScript.SetClickCallback((_result)=>
                {
                    Network.GetInstance().SendSetMttMacthKeepTop(this.mData.matchConfig.matchId , _result);
                });
                if(this.mData.matchConfig.strapConfig.isTop)
                {
                    tempScript.ShowSelected();
                }
                else
                {
                    tempScript.ShowUnselected();
                }
            }

            //直播模式
            {
                this.mLiveTag.active = this.mData.matchConfig.isLive;
            }
            
            //底部报名按钮
            {
                this.UpdateBottomBtn();
            }

            //开赛时间
            {
                let startDate = new Date(this.mData.matchConfig.beginTime*1000);
                let timeStr;  
                let monthValue = startDate.getMonth() + 1; 
                let dateValue = startDate.getDate();  
                let hoursValue = startDate.getHours();
                let minutesValue = startDate.getMinutes();
                timeStr = dateValue + "/"+monthValue+" "+hoursValue + ":" + minutesValue;
                this.mStartTime.string = Localization.GetString("00035") +" " + timeStr;
            }
            
            //开赛倒计时相关
            {
                this.mDismissBtn.node.active = isCreator;
                if(this.mData.matchConfig.beginTime == 0)
                {
                    this.mManualNode.active = true;
                    this.mStartTime.node.active = false;
                    if(this.mData.matchConfig.beginMode == Mtt_StartMode.ManualStart)
                    {
                        this.mCountDown.string = Localization.GetString("00018");
                        if(isCreator)
                        {
                            this.mManualStartBtn.node.active = this.mData.statusInfo.status == Mtt_MatchStatus.Registring;
                        }
                        else
                        {
                            this.mManualStartBtn.node.active = false;
                        }
                    }
                    else if(this.mData.matchConfig.beginMode == Mtt_StartMode.AutoStart)
                    {
                        this.mCountDown.string = "SIT & GO";
                    }
                }
                else if(this.mData.statusInfo.status < Mtt_MatchStatus.Only_10s)
                {
                    this.mManualStartBtn.node.active = false;
                    this.mManualNode.active = false;
                    this.mStartTime.node.active = true;
                    this.StartMatchCountDown();
                }
                else
                {
                    this.unschedule(this.MatchCountDownLogic);
                    this.mCountDown.string = "";
                }
            }

            {   
                this.mBreakTime.active = this.mData.matchConfig.isRest;
                if(this.mData.matchConfig.isRest)
                {
                    let levelTime = GameConfig.GetLevel(this.mData.matchConfig.riseBlindTime);
                    let takeTime = GameConfig.GetTakeTime(this.mData.matchConfig.riseBlindTime);
                    let breakTimeDescribe =   "5mins every" + takeTime + "mins" + " - Lv" + levelTime;
                    this.mBreakTime.getChildByName("Content").getComponent(Label).string = breakTimeDescribe;
                }
                else
                {
                    this.mBreakTime.getChildByName("Content").getComponent(Label).string = "-";
                }
                
                if(this.mData.matchConfig.delayLevel <= 0)
                {
                    this.mLateRegInfo.getChildByName("Content").getComponent(Label).string = "None";
                }
                else
                {
                    this.mLateRegInfo.getChildByName("Content").getComponent(Label).string = "Lv." + this.mData.matchConfig.delayLevel.toString();
                }
                
                //重购费用
                {
                    this.mRebuyFee.active = this.mData.matchConfig.reBuyCount > 0;
                    if(this.mData.matchConfig.reBuyCount > 0)
                    {
                        let tempScript = this.mRebuyFee.getChildByName("Mtt_RegisterFee").getComponent(Mtt_RegisterFee);
                        if(this.mData.matchConfig.reBuyFee == 0)
                        {
                            tempScript.ShowNothing(Localization.GetString("00036"));
                        }
                        else
                        {
                            let rebuyFee = this.mData.matchConfig.reBuyFee.toString() + "+" + this.mData.matchConfig.serviceFee.toString();
                            tempScript.InitWithData(this.mData.matchConfig.reBuyFeeType , 
                                rebuyFee,
                                this.mData.matchConfig.reBuyFeeTicket.nums,
                                this.mData.matchConfig.reBuyFeeTicket.name);
                        }
                    }
                }
                

                //报名费用
                {
                    let tempScript = this.mRegFee.getChildByName("Mtt_RegisterFee").getComponent(Mtt_RegisterFee);
                    if(this.mData.matchConfig.enterFee == 0)
                    {
                        tempScript.ShowNothing(Localization.GetString("00036"));
                    }
                    else
                    {
                        let regFee = this.mData.matchConfig.enterFee.toString() + "+" + this.mData.matchConfig.serviceFee.toString();
                        tempScript.InitWithData(this.mData.matchConfig.enterFeeType , 
                            regFee,
                            this.mData.matchConfig.enterFeeTicket.nums,
                            this.mData.matchConfig.enterFeeTicket.name);
                    }
                }

                if(this.mData.statusInfo.status < Mtt_MatchStatus.Started)
                {
                    if(this.mData.matchConfig.matchMode == 2)
                    {
                        this.mAccessBtn.node.active = isCreator;
                    } 
                    else 
                    {
                        this.mAccessBtn.node.active = false;
                    }
                    this.mBinldUpInfo.getChildByName("Content").getComponent(Label).string = this.mData.matchConfig.riseBlindTime.toString() 
                    + Localization.GetString("00040");
                    let tempStartChip = this.mData.matchConfig.beginScore.toString();
                    tempStartChip += "(" + Math.floor(this.mData.matchConfig.beginScore/(this.mData.matchConfig.beginBlind*2)) + "BB)";
                    this.mStartChips.getChildByName("Content").getComponent(Label).string = tempStartChip;
                    let tempStartBlind = this.mData.matchConfig.beginBlind.toString() + "/" + (this.mData.matchConfig.beginBlind*2).toString();
                    this.mStartBlind.getChildByName("Content").getComponent(Label).string = tempStartBlind;
                    this.mCurrentPlayerinfo.getChildByName("Content").getComponent(Label).string = this.mData.statusInfo.totalUser.toString();
                    this.mTalbelSeat.getChildByName("Content").getComponent(Label).string = this.mData.matchConfig.seatCount.toString();
                    let minMaxPlayer = this.mData.matchConfig.minPlayer + "-" + this.mData.matchConfig.maxPlayer;
                    this.mMinMaxPlayer.getChildByName("Content").getComponent(Label).string = minMaxPlayer;
                }
                else
                {
                    this.mCurrentPlayerinfo.getChildByName("Content").getComponent(Label).string =
                                            this.mData.statusInfo.playerUser +"/" + this.mData.statusInfo.totalUser;
                    let averScore = ((this.mData.matchConfig.beginScore * this.mData.statusInfo.totalUser)/this.mData.statusInfo.playerUser);
                    let averBB = Math.floor(averScore/(this.mData.statusInfo.curBlind*2));
                    this.mAvgStacks.active = true;
                    this.mAvgStacks.getChildByName("Content").getComponent(Label).string = averScore.toFixed(2) +"(" + averBB + ")";
                    this.StartBlindTimeCountDown();
                    this.mCurrentLevel.active = true;
                    let currentLevel = "L" + this.mData.statusInfo.curLevel;
                    let currentBlindInfo = this.mData.statusInfo.curBlind + "/" + this.mData.statusInfo.curBlind * 2 + "(" + this.mData.statusInfo.beforeScore + ")";
                    this.mCurrentLevel.getChildByName("Content").getComponent(Label).string = currentLevel ;
                    this.mCurrentLevel.getChildByName("Content2").getComponent(Label).string =  currentBlindInfo;


                    this.mNextLevel.active = true;
                    let nextLevel = "L" + this.mData.statusInfo.nextLevel;
                    let nextBlindInfo = this.mData.statusInfo.nextBlind + "/" + this.mData.statusInfo.nextBlind * 2 + "(" + this.mData.statusInfo.nextBeforeScore + ")";
                    this.mNextLevel.getChildByName("Content").getComponent(Label).string = nextLevel;
                    this.mNextLevel.getChildByName("Content2").getComponent(Label).string = nextBlindInfo;
                    this.MatchPlayingTimeCount();
                    this.StartRestTimeCountDown();
                }
            }
        },this);

        HallData.GetInstance().AddListener("Data_MttStatusChange",(_current , _before)=>
        {
            this.Refresh();
            if(_current.reason == 8)
            {
                // this.mCurrentLevel.active = true;
                // let currentLevel = "L" + _current.curLevel;
                // let currentBlindInfo = _current.curBlind + "/" + _current.curBlind * 2 + "(" +_current.beforeScore + ")";
                // this.mCurrentLevel.getChildByName("Content").getComponent(Label).string = currentLevel + currentBlindInfo;

                // this.mNextLevel.active = true;
                // let nextLevel = "L" + _current.nextLevel;
                // let nextBlindInfo = _current.nextBlind + "/" + _current.nextBlind * 2 + "(" + _current.nextBeforeScore + ")";
                // this.mNextLevel.getChildByName("Content").getComponent(Label).string = nextLevel + nextBlindInfo;
                
                // this.mData.statusInfo.leftTime = _current.leftTime;
                // this.StartBlindTimeCountDown();
                // this.mData.statusInfo.restLeftTime = _current.restLeftTime;
                // this.mCurrentPlayerinfo.getChildByName("Content").getComponent(Label).string = _current.playerUser +"/" + _current.totalUser;
                // this.StartRestTimeCountDown();
            }
            else if (_current.reason == 7)
            {
                
            }
            else if (_current.reason == 9)
            {
                
            }

        },this);
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        HallData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {
        this.unscheduleAllCallbacks();
    }

    ButtonLogic()
    {
        switch(this.mData.userStatus)
        {
            case Mtt_UserStatus.NotAttend:
            {
                if(this.mData.statusInfo.status == Mtt_MatchStatus.Registring)
                {
                    Network.GetInstance().SendMttGetRebuyInfo(this.mData.matchConfig.matchId);
                }
            }
            break;
            case Mtt_UserStatus.Registed:
            {
                Network.GetInstance().SendMttCancelReg(GameType.Mtt , this.mData.matchConfig.matchId);
            }
            break;
            case Mtt_UserStatus.Attending:
            {
                UIMgr.GetInstance().ChangeScene(SceneType.Game);
            }
            break;
        }
    }

    Refresh()
    {
        Network.GetInstance().SendGetMttMatchDetails(GameType.Mtt, HallData.GetInstance().Data_CurrentMttMatchID);
    }

    UpdateBottomBtn()
    {
        this.mObBtn.node.active = false;
        this.mRebuy.node.active = false;
        this.mRebuy.SetInteractable(true);
        this.mAttendBtn.node.active = false;
        this.mAttendBtn.SetInteractable(true);

        switch(this.mData.userStatus)
        {
            case Mtt_UserStatus.NotAttend:
            {
                if(this.mData.statusInfo.status == Mtt_MatchStatus.Registring)
                {
                    this.mAttendBtn.node.active = true;
                    this.mAttendBtn.SetTitle(Localization.GetString("00031"));
                }
                else
                {
                    if(this.mData.statusInfo.curLevel <= this.mData.matchConfig.delayLevel)
                    {
                        this.mObBtn.node.active = true;
                        this.mRebuy.node.active = true;
                    }
                    else
                    {
                        this.mObBtn.node.active = true;
                        this.mRebuy.node.active = true;
                        this.mRebuy.SetInteractable(false);
                    }
                }
            }
            break;
            case Mtt_UserStatus.WaitingApply:
            {
                this.mAttendBtn.node.active = true;
                this.mAttendBtn.SetTitle(Localization.GetString("00032"));
                this.mAttendBtn.SetInteractable(false);
            }
            break;
            case Mtt_UserStatus.Registed:
            {
                this.mAttendBtn.node.active = true;
                this.mAttendBtn.SetTitle(Localization.GetString("00033"));
            }
            break;
            case Mtt_UserStatus.Attending:
            {
                this.mAttendBtn.node.active = true;
                this.mAttendBtn.SetTitle(Localization.GetString("00034"));
            }
            break;
            case Mtt_UserStatus.Lose:
            {
                let selfUser = this.FindUserData(LocalPlayerData.GetInstance().Data_Uid);
                if (this.mData.statusInfo.curLevel <= this.mData.matchConfig.delayLevel
                     && this.mData.matchConfig.reBuyCount > selfUser.reBuy) 
                {
                    this.mObBtn.node.active = true;
                    this.mRebuy.node.active = true;
                }
                else
                {
                    this.mObBtn.node.active = true;
                    this.mRebuy.node.active = true;
                    this.mRebuy.SetInteractable(false);
                }
            }
            break;
        }
    }

    FindUserData(_userId)
    {
        let users = this.mData.users;
        for (let i = 0; i < users.length; i++) 
        {
            if(users[i].userId == _userId) 
            {
                return users[i];
            }
        }
        console.log("当前mtt比赛没有这个用户 ID= " + _userId);
        return null;
    }

    //比赛还有多久开始
    StartMatchCountDown()
    {
        this.mStatusDescribe.string = Localization.GetString("00037");
        this.MatchCountDownLogic();
        this.unschedule(this.MatchCountDownLogic);
        this.unschedule(this.MatchPlayingTimeCountLogic);
        this.schedule(this.MatchCountDownLogic, 1);
    }

    
    MatchCountDownLogic()
    {
        let myDate = new Date();
        let timestamp = myDate.getTime()/1000;
        let timeValue = this.mData.matchConfig.beginTime - timestamp;
        let timeStr;
        timeValue = --this.mData.statusInfo.leftTime;
        timeStr = GameConfig.GetRestTime_D_H_M_S(timeValue);
        if(timeValue <= 0)
        {
            this.unschedule(this.MatchCountDownLogic)
            this.mCountDown.string = "";
        }
        this.mCountDown.string = "" + timeStr;
    }

    MatchPlayingTimeCount()
    {
        this.mStatusDescribe.string = Localization.GetString("00038");
        this.MatchPlayingTimeCountLogic();
        this.unschedule(this.MatchCountDownLogic);
        this.unschedule(this.MatchPlayingTimeCountLogic);
        this.schedule(this.MatchPlayingTimeCountLogic, 1);
    }

    
    MatchPlayingTimeCountLogic()
    {
        this.mData.statusInfo.playTotalTime++;
        let timeStr = GameConfig.GetRestTime_D_H_M_S(this.mData.statusInfo.playTotalTime);
        this.mCountDown.string = "" + timeStr;
    }

    StartBlindTimeCountDown()
    {
        this.BlindTimeCountDownLogic();
        this.unschedule(this.BlindTimeCountDownLogic);
        if(this.mData.statusInfo.leftTime > 0)
        {
            this.schedule(this.BlindTimeCountDownLogic, 1);
        }

    }

    BlindTimeCountDownLogic()
    {
        this.mData.statusInfo.leftTime--;
        let finalTime = GameConfig.GetRestTime_M_S(this.mData.statusInfo.leftTime);
        this.mBinldUpInfo.getChildByName("Content").getComponent(Label).string = finalTime;
        if (this.mData.statusInfo.leftTime <= 0) 
        {
            this.unschedule(this.BlindTimeCountDownLogic);
        }
    }

    StartRestTimeCountDown()
    {
        this.mNextBreakTime.active = true;
        this.RestTimeCountDownLogic();
        this.unschedule(this.RestTimeCountDownLogic);
        if(this.mData.statusInfo.restLeftTime > 0)
        {
            this.schedule(this.RestTimeCountDownLogic, 1);
        }

    }

    RestTimeCountDownLogic()
    {
        this.mData.statusInfo.restLeftTime--;
        let finalTime = GameConfig.GetRestTime_M_S(this.mData.statusInfo.restLeftTime);
        this.mNextBreakTime.getChildByName("Content").getComponent(Label).string = finalTime;
        if (this.mData.statusInfo.restLeftTime <= 0) 
        {
            this.mNextBreakTime.active = false;
            this.unschedule(this.RestTimeCountDownLogic);
        }
    }


    //是否含有实物奖励
    HaveRealReward() : boolean
    {
        let arr  = this.mData.rewardConfig.rewards;
        for (let i = 0; i < arr.length; i++) 
        {
            if(arr[i].reward) 
            {
                for(let j = 0; j < arr[i].reward.length; j++) 
                {
                    let awdItem = arr[i].reward[j]
                    if(awdItem.rewardType == 1) 
                    {
                        return true
                    }
                }
            }
        }
        return false
    }
}

