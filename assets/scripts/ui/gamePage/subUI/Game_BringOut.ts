import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { NetworkSend } from '../../../network/NetworkSend';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { ProgressSlider } from '../../common/ProgressSlider';
const { ccclass, property } = _decorator;

@ccclass('Game_BringOut')
export class Game_BringOut extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Sprite) 
    mCurrentIcon: Sprite = null;
    @property(Label) 
    mCurrentAmount: Label = null;
    @property(ProgressSlider) 
    mProgressSlider: ProgressSlider = null;
    @property(Label) 
    mRestAmount: Label = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;

    mIndex : number = null;
    mInit : boolean = false;

    onEnable()
    {
        this.UpdateRestMoney();
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
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let amount = this.CalculateControlMoney(this.mProgressSlider.GetPercent());
            NetworkSend.Instance.BringOut(gameData.BringOutSendMsgId(),gameStruct.mGameId,amount);
            this.CloseAsWindow();
        });

        this.mProgressSlider.SetEndCallback((_ratio)=>
        {
            let amount = this.CalculateControlMoney(_ratio);
            this.mCurrentAmount.string = Tool.ConvertMoney_S2C(amount) + "";
        });

        this.mProgressSlider.SetDragCallback((_ratio)=>
        {
            let amount = this.CalculateControlMoney(_ratio);
            this.mCurrentAmount.string = Tool.ConvertMoney_S2C(amount) + "";
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
        this.BindData();
    }

    BindData()
    {
        if(this.mInit)
        {
            return;
        }

        this.mInit = true;


        LocalPlayerData.Instance.Data_Coin.AddListenner(this,(_data)=>
        {
    
        })

        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;

        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.UpdateRestMoney();
        })

        gameData.Data_S2CCommonBringInResp.AddListenner(this,(_data)=>
        {
            this.UpdateRestMoney();
        })

        gameData.Data_S2CCommonBringOutResp.AddListenner(this,(_data)=>
        {
            this.UpdateRestMoney();
        })
    }


    UpdateRestMoney()
    {
        this.mProgressSlider.SetPercent(0);
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let selfPlayer =  gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        if(selfPlayer == null)
        {
            return;
        }
        let amount = Tool.ConvertMoney_S2C(selfPlayer.currencyNum);
        this.mRestAmount.string = Localization.GetString("00167") + amount;
    }


    CalculateControlMoney(_ratio : number) : number
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let minScoreAfterBringOut = gameData.Data_S2CCommonEnterGameResp.mData.gameStatic.texasConfig.minScoreAfterBringOut;
        let selfPlayer =  gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);

        let minBringOut = 0;
        let maxBringOut = selfPlayer.currencyNum - minScoreAfterBringOut;

        let currentAmount = minBringOut + (maxBringOut - minBringOut) * _ratio;
        return currentAmount;
    }

    
}

