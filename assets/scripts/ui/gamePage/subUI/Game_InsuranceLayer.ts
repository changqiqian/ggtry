import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { NetworkSend } from '../../../network/NetworkSend';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Poker } from '../../common/Poker';
import { ProgressSlider } from '../../common/ProgressSlider';
import { ToggleBtn } from '../../common/ToggleBtn';
import { Game_InsuranceOpponentCards } from './Game_InsuranceOpponentCards';
const { ccclass, property } = _decorator;

@ccclass('Game_InsuranceLayer')
export class Game_InsuranceLayer extends BaseUI 
{
    @property(Node) 
    mFanChaoOutsRoot: Node = null;
    @property(Label) 
    mFanChaoCount: Label = null;
    @property(Node) 
    mFanChaoCards: Node = null;

    @property(Node) 
    mTieOutsRoot: Node = null;
    @property(Label) 
    mTieCount: Label = null;
    @property(Node) 
    mTieCards: Node = null;

    @property(Node) 
    mPublicCards: Node = null;

    @property(Node) 
    mOpponentCards: Node = null;
    
    @property(Label) 
    mOutsCount: Label = null;
    @property(Label) 
    mRatio: Label = null;
    @property(Label) 
    mPot: Label = null;
    @property(Label) 
    mPay: Label = null;

    @property(Node) 
    mBuyBackTips: Node = null;
    @property(Label) 
    mTips: Label = null;

    @property(ProgressSlider) 
    mProgressSlider: ProgressSlider = null;
    @property(Label) 
    mAmount: Label = null;

    @property(Node) 
    mShortcutBtn: Node = null;

    @property(BaseButton) 
    mCancelBtn: BaseButton = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;

    @property(Label) 
    mCountDown: Label = null;

    mIndex : number;


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

    public InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;

        this.mShortcutBtn.children[0].getComponent(BaseButton).SetClickCallback((_data)=>
        {
            this.mProgressSlider.SetPercent(0.25);
        });
        this.mShortcutBtn.children[1].getComponent(BaseButton).SetClickCallback((_data)=>
        {
            this.mProgressSlider.SetPercent(0.5);
        });
        this.mShortcutBtn.children[2].getComponent(BaseButton).SetClickCallback((_data)=>
        {
            this.mProgressSlider.SetPercent(1);
        });

        this.mProgressSlider.SetEndCallback((_ratio)=>
        {
            this.UpdateAmount(_ratio);
        });

        this.mProgressSlider.SetDragCallback((_ratio)=>
        {
            this.UpdateAmount(_ratio);
        });

        this.mCancelBtn.SetClickCallback((_data)=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;

            let ratio = this.mProgressSlider.GetPercent();
            let amount = this.CalculateControlMoney(ratio);
            NetworkSend.Instance.BuyInsurance(gameData.BuyInsuranceSendMsgId(),gameStruct.mGameId,amount);
        });

        this.mConfirmBtn.SetClickCallback((_data)=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            NetworkSend.Instance.BuyInsurance(gameData.BuyInsuranceSendMsgId(),gameStruct.mGameId,0);
        });

        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonInsuranceTurnNotify.AddListenner(this,(_data)=>
        {
            this.ResetUI();

            let fanchaoCards = _data.outsCards;
            if(fanchaoCards.length > 0)
            {
                this.mFanChaoOutsRoot.active = true;
                this.mFanChaoCount.string = fanchaoCards.length + "";
                for(let i = 0 ; i < fanchaoCards.length ; i++)
                {
                    let current = fanchaoCards[i];
                    this.LoadPrefab("common" , "prefab/Poker",(_node)=>
                    {
                        this.mFanChaoCards.addChild(_node);
                        let tempScript = _node.getComponent(Poker);
                        tempScript.ResetAndHide();
                        tempScript.SetFrontByCardInfo(current);
                        tempScript.ShowFront();
                    });
                }
            }

            let tieCards = _data.tieCards;
            if(tieCards.length > 0)
            {
                this.mTieOutsRoot.active = true;
                this.mTieCount.string = tieCards.length + "";
                for(let i = 0 ; i < tieCards.length ; i++)
                {
                    let current = tieCards[i];
                    this.LoadPrefab("common" , "prefab/Poker",(_node)=>
                    {
                        this.mTieCards.addChild(_node);
                        let tempScript = _node.getComponent(Poker);
                        tempScript.ResetAndHide();
                        tempScript.SetFrontByCardInfo(current);
                        tempScript.ShowFront();
                    });
                }
            }

            let publicCards = _data.publicCards;
            for(let i = 0 ; i < publicCards.length ; i++)
            {
                let current = publicCards[i];
                this.LoadPrefab("common" , "prefab/Poker",(_node)=>
                {
                    this.mPublicCards.addChild(_node);
                    let tempScript = _node.getComponent(Poker);
                    tempScript.ResetAndHide();
                    tempScript.SetFrontByCardInfo(current);
                    tempScript.ShowFront();
                });
            }

            let loserPlayer = _data.losePlayerInfo;
            for(let i = 0 ; i < loserPlayer.length ; i++)
            {
                let current = loserPlayer[i];
                this.LoadPrefab("gamePage" , "prefab/Game_InsuranceOpponentCards",(_node)=>
                {
                    this.mOpponentCards.addChild(_node);
                    let tempScript = _node.getComponent(Game_InsuranceOpponentCards);
                    tempScript.SetCards(current.cards);
                });
            }

            this.mOutsCount.string = fanchaoCards.length + "";
            this.mRatio.string = (_data.ratios / 100).toFixed(1);
            this.mPot.string = Tool.ConvertMoney_S2C(_data.pots) + "";
            this.mPay.string = "0";

            this.StartSecondsTimer(_data.leftTime,1 , ()=>
            {
                let restTime = this.GetRestSeconds();
                this.mCountDown.string = restTime + "S";
                if(restTime == 0)
                {
                    this.CloseAsWindow();
                }
            });

            if(_data.buyBack > 0)
            {
                this.mBuyBackTips.active = true;
                this.mTips.string = Localization.ReplaceString("00319",Tool.ConvertMoney_S2C(_data.buyBack)+"");
            }

            this.mProgressSlider.SetPercent(0);
        });
    }

    UpdateAmount(_ratio : number)
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let ratio = gameData.Data_S2CCommonInsuranceTurnNotify.mData.ratios;
        ratio = ratio/100;
        let amount = this.CalculateControlMoney(_ratio);
        let payAmount = Tool.ConvertMoney_S2C(amount * ratio) ;
        this.mAmount.string = Tool.ConvertMoney_S2C(amount) + "";
        this.mPay.string = payAmount + "";
    }

    CalculateControlMoney(_ratio : number) : number
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let fullPot = gameData.Data_S2CCommonInsuranceTurnNotify.mData.buyFullPot;
        //let min = gameData.Data_S2CCommonInsuranceTurnNotify.mData.buyBack;
        let min = 0;
        let max = fullPot * _ratio;
        let step = 10000;//最小单位 1块钱
        let roundMax = Math.floor( max/step);
        max = roundMax * step;
        let currentAmount = min + max;
        return currentAmount;
    }

    ResetUI()
    {
        this.mFanChaoOutsRoot.active = false;
        this.mFanChaoCount.string = "";
        this.RemoveAndDestoryAllChild(this.mFanChaoCards);

        this.mTieOutsRoot.active = false;
        this.mTieCount.string = "";
        this.RemoveAndDestoryAllChild(this.mTieCards);
        this.RemoveAndDestoryAllChild(this.mPublicCards);

        this.RemoveAndDestoryAllChild(this.mOpponentCards);

        this.mOutsCount.string = "0";
        this.mRatio.string = "0";
        this.mPot.string = "0";
        this.mPay.string = "0";

        this.mBuyBackTips.active = false;
        this.mTips.string = "";
        
        this.mAmount.string = "0";

        this.mShortcutBtn.children[0].getChildByName("Title2").getComponent(Label).string = Localization.GetString("00316")
        this.mShortcutBtn.children[1].getChildByName("Title2").getComponent(Label).string = Localization.GetString("00317")
        this.mShortcutBtn.children[2].getChildByName("Title2").getComponent(Label).string = Localization.GetString("00318")

        this.mCountDown.string = "0";
        this.StopSecondsTimer();
    }
}

