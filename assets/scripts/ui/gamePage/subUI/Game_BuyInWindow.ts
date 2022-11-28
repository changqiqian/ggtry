import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
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
    mInit : boolean = false;

    onEnable()
    {
        this.UpdateTotalMoney();
        this.mProgressSlider.SetPercent(0);
    }

    onDisable()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let selfPlayer =  gameStruct.mGameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer != null)
        {
            if(selfPlayer.buyIn == false)
            {
                this.CloseAsWindow();
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
            let moneyC2S = Tool.ConvertMoney_C2S(bringInMoney);
         
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;

            NetworkSend.Instance.BringIn(gameData.BringInSendMsgId() , gameStruct.mGameId,moneyC2S);
        });


        this.mProgressSlider.SetEndCallback((_ratio)=>
        {
            this.mCurrentAmount.string = this.CalculateControlMoney(_ratio) + "";
        });

        this.mProgressSlider.SetDragCallback((_ratio)=>
        {
            this.mCurrentAmount.string = this.CalculateControlMoney(_ratio) + "";
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
        this.mIndex = _index;
        this.mCountNode.active = false;
        this.BindData();
    }

    BindData()
    {
        if(this.mInit)
        {
            return;
        }

        this.mInit = true;


        HallData.Instance.Data_S2CClubPlayerPointNotify.AddListenner(this,(_data)=>
        {
            this.UpdateTotalMoney();
        })

        LocalPlayerData.Instance.Data_Coin.AddListenner(this,(_data)=>
        {
            this.UpdateTotalMoney();
        })

        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        gameStruct.mGameData.Data_S2CCommonBringInResp.AddListenner(this,(_data)=>
        {
            this.CloseAsWindow();
        })
    }

    UpdateTotalMoney()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let currentMoney;
        let currencyType = gameStruct.mGameData.Data_S2CCommonEnterGameResp.mData.gameStatic.basicConfig.currencyType;
        if(currencyType == GameCurrencyType.GameCurrencyType_Point)
        {
            currentMoney = gameStruct.mSelfClubInfo.clubPoint;
        }
        else if(currencyType == GameCurrencyType.GameCurrencyType_Coin)
        {
            currentMoney = LocalPlayerData.Instance.Data_Coin.mData;
        }

        this.mTotalAmount.string = Tool.ConvertMoney_S2C(currentMoney) + "";
    }

    CalculateControlMoney(_ratio : number) : number
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let texasConfig = gameStruct.mGameData.Data_S2CCommonEnterGameResp.mData.gameStatic.texasConfig;
        let currentAmount = texasConfig.minBringIn + (texasConfig.maxBringIn - texasConfig.minBringIn) * _ratio;
        let convertMoneyToS2C= Tool.ConvertMoney_S2C(currentAmount);
        return convertMoneyToS2C;
    }



    StartCountDown(_totalTime : number)
    {
        this.mCountNode.active = true;
        this.StartSecondsTimer(_totalTime);
    }

    StopCountDown()
    {
        this.StopSecondsTimer();
    }
    
    OnSecondTimer()
    {
        let seconds = this.GetRestSeconds();
        this.mCountDown.string = seconds + "";
        if(seconds == 0)
        {
            this.CloseAsWindow();
        }
    }
}

