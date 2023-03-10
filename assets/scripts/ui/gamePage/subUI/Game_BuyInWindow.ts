import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { UIMgr } from '../../../base/UIMgr';
import { NetworkSend } from '../../../network/NetworkSend';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { ProgressSlider } from '../../common/ProgressSlider';
import { HallData } from '../../hall/HallData';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_BuyInWindow')
export class Game_BuyInWindow extends BaseUI 
{
    @property(Node) 
    mCountNode: Node = null;
    @property(Label) 
    mCountDown: Label = null;
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;

    @property(Sprite) 
    mCurrentIcon: Sprite = null;
    @property(Label) 
    mCurrentAmount: Label = null;

    @property(ProgressSlider) 
    mProgressSlider: ProgressSlider = null;
    
    @property(Label) 
    mBlindInfo: Label = null;
    
    @property(Sprite) 
    mTotalIcon: Sprite = null;
    @property(Label) 
    mTotalAmount: Label = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    @property(Node) 
    mBottom: Node = null;

    @property(Label) 
    mTipsTitle: Label = null;
    @property(Label) 
    mTips: Label = null;


    mIndex : number = null;

    onEnable()
    {
        // if(this.mIndex == null)
        // {
        //     return;
        // }
        // this.UpdateTotalMoney();
    }

    onDisable()
    {
        if(this.mCountNode.active)
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            if(gameStruct != null)
            {
                let selfPlayer = gameStruct.mGameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
                if(selfPlayer != null)
                {
                    if(selfPlayer.currencyNum)
                    {
                    }
                    else
                    {
                        let gameData = gameStruct.mGameData;
                        let msgId = gameData.StandUpSendMsgId();
                        let gameId = gameStruct.mGameId;
                        let uid = LocalPlayerData.Instance.Data_Uid.mData;

                        let selfPlayer = gameData.GetPlayerInfoByUid(uid);
                        if(selfPlayer != null)
                        {
                            if(selfPlayer.auto)
                            {
                                UIMgr.Instance.ShowToast(Localization.GetString("00370"));
                            }
                            else
                            {
                                NetworkSend.Instance.StandUp(msgId,gameId);
                            }
                            
                        }
                    }
                }
            }

        }
    }

    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });

        this.mConfirmBtn.SetClickCallback(()=>
        {
            let bringInMoney = this.CalculateControlMoney(this.mProgressSlider.GetPercent());
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            NetworkSend.Instance.BringIn(gameData.BringInSendMsgId() , gameStruct.mGameId,bringInMoney);
        });


        this.mProgressSlider.SetEndCallback((_ratio)=>
        {
            this.UpdateBringInAmount(_ratio);
        });

        this.mProgressSlider.SetDragCallback((_ratio)=>
        {
            this.UpdateBringInAmount(_ratio);
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

    }

    InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }

        this.mIndex = _index;
        this.mCountNode.active = false;
        this.StopCountDown();
        this.BindData();
    }

    BindData()
    {
        // HallData.Instance.Data_S2CClubPlayerPointNotify.AddListenner(this,(_data)=>
        // {
        //     this.UpdateTotalMoney();
        // })

        LocalPlayerData.Instance.Data_Coin.AddListenner(this,(_data)=>
        {
            this.UpdateTotalMoney();
        })

        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonBringInResp.AddListenner(this,(_data)=>
        {
            this.StopCountDown();
            this.CloseAsWindow();
        })

        gameData.Data_S2CCommonStandUpResp.AddListenner(this,(_data)=>
        {
            this.CloseAsWindow();
        })

        gameData.Data_S2CCommonStandUpNotify.AddListenner(this,(_data)=>
        {
            if( _data.actionUid == LocalPlayerData.Instance.Data_Uid.mData)
            {
                this.CloseAsWindow();
            }
        })
    }

    UpdateTotalMoney()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        this.mProgressSlider.SetPercent(0);
        this.UpdateBringInAmount(0);
        let currentMoney;
        //let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(gameStruct.mClubId)
        if(gameStruct.mIsClubGame)
        {
            //currentMoney = enterClub.clubMember.clubPoint;
        }
        else 
        {
            currentMoney = LocalPlayerData.Instance.Data_Coin.mData;
        }

        this.mTotalAmount.string = Tool.ConvertMoney_S2C(currentMoney) + "";
    }

    CalculateControlMoney(_ratio : number) : number
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let texasConfig = gameData.GetStaticData();
        let currentAmount;
        if(_ratio == 1)
        {
            currentAmount = texasConfig.maxBringIn;
        }
        else
        {
            let min = texasConfig.minBringIn;
            let max = (texasConfig.maxBringIn - texasConfig.minBringIn) * _ratio;
            let sb100 = texasConfig.smallBlind * 20;
            let roundMax = Math.floor( max/sb100);
            max = roundMax * sb100;
            currentAmount = min + max;
        }
        return currentAmount;
    }

    UpdateBringInAmount(_ratio : number)
    {
        let amount = this.CalculateControlMoney(_ratio);
        this.mCurrentAmount.string = Tool.ConvertMoney_S2C(amount) + "";
    }

    StartCountDown(_totalTime : number)
    {
        this.mCountNode.active = true;
        this.StartSecondsTimer(_totalTime);
    }

    StopCountDown()
    {
        this.mCountNode.active = false;
        this.mCountDown.string = "";
        this.StopSecondsTimer();
    }
    
    OnSecondTimer()
    {
        let seconds = this.GetRestSeconds();
        this.mCountDown.string = seconds + "";
        if(seconds == 0)
        {
            //this.CloseAsWindow();
        }
    }
}

