import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { NetworkSend } from '../../../network/NetworkSend';
import { Tool } from '../../../Tool';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { Poker } from '../../common/Poker';
import { CowboyData } from '../CowboyData';
import { cb_WinLoseCount } from './cb_WinLoseCount';
const { ccclass, property } = _decorator;

@ccclass('cb_SelfRecordLayer')
export class cb_SelfRecordLayer extends BaseUI {
    @property(MovingShow) 
    mMovingShow: MovingShow = null;
    @property(Label) 
    mGameCode: Label = null;
    @property(Node) 
    mCowboyCards: Node = null;
    @property(Node) 
    mPublicCards: Node = null;
    @property(Node) 
    mGirlCards: Node = null;
    @property(Node) 
    mAreaInfos: Node = null;
    @property(Label) 
    mTotalBet: Label = null;
    @property(Label) 
    mTotalWin: Label = null;
    @property(Label) 
    mPageNum: Label = null;
    @property(BaseButton) 
    mLastBtn: BaseButton = null;
    @property(BaseButton) 
    mNextBtn: BaseButton = null;

    mCurrentPage : number;
    mMaxPage : number;
    InitParam()
    {

    }
    BindUI()
    {
        this.mCurrentPage = 0;
        this.mMovingShow.SetAnimationType(AnimationShowType.FromRight);
        this.mMovingShow.SetRoot(this.node);

        for(let i = 0 ; i < this.mAreaInfos.children.length ; i++)
        {
            let areaScript = this.mAreaInfos.children[i].getComponent(cb_WinLoseCount);
            areaScript.SetAreaType(i);
        }

        this.mLastBtn.SetClickCallback(()=>
        {
            let last = this.mCurrentPage - 1;
            if(last <=0)
            {
                return;
            }

            let gameId = CowboyData.Instance.GetGameId();
            NetworkSend.Instance.GetRecordCowboy(gameId , last);
        });


        this.mNextBtn.SetClickCallback(()=>
        {
            let next = this.mCurrentPage + 1;
            if(next >= this.mMaxPage)
            {
                return;
            }
            let gameId = CowboyData.Instance.GetGameId();
            NetworkSend.Instance.GetRecordCowboy(gameId , next);
        });
    }
    RegDataNotify()
    {
        CowboyData.Instance.Data_S2CTexasCowboyRecordResp.AddListenner(this,(_data)=>
        {
            this.ResetUI();

            this.mCurrentPage = _data.whichGame;
            this.mMaxPage = _data.totalGame;
            this.mPageNum.string = this.mCurrentPage + "/" + this.mMaxPage;

            let totalWinLose = 0;
            let totalBet = 0;
            for(let i = 0 ; i < _data.record.areaWinLose.length ; i++)
            {
                let currentWinLose = _data.record.areaWinLose[i];
                let currentBetAmount = _data.record.betAmount[i];
                let current = this.GetAreaByType(i);
                totalWinLose += currentWinLose;
                totalBet += currentBetAmount;
                current.SetWinAmount(currentWinLose);
                current.SetBetAmount(currentBetAmount);
            }

            this.mTotalBet.string = Tool.ConvertMoney_S2C(totalBet) + "";
            this.mTotalWin.string = Tool.ConvertMoney_S2C(totalWinLose) + "";
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    ResetUI()
    {
        this.mMaxPage = 0;
        this.mCurrentPage = 0;
        this.mPageNum.string = "0/0";
        for(let i = 0 ; i < this.mCowboyCards.children.length ; i++)
        {
            let poker = this.mCowboyCards.children[i].getComponent(Poker);
            poker.ShowBack();
        }
        for(let i = 0 ; i < this.mPublicCards.children.length ; i++)
        {
            let poker = this.mPublicCards.children[i].getComponent(Poker);
            poker.ShowBack();
        }
        for(let i = 0 ; i < this.mGirlCards.children.length ; i++)
        {
            let poker = this.mGirlCards.children[i].getComponent(Poker);
            poker.ShowBack();
        }

        for(let i = 0 ; i < this.mAreaInfos.children.length ; i++)
        {
            let current = this.GetAreaByType(i);
            current.SetWinAmount(0);
            current.SetBetAmount(0);
        }
    }

    GetAreaByType(_cowboyAreaType : CowboyAreaType) : cb_WinLoseCount
    {
        for(let i = 0 ; i < this.mAreaInfos.children.length ; i++)
        {
            let areaScript = this.mAreaInfos.children[i].getComponent(cb_WinLoseCount);
            if(areaScript.GetAreaType() == _cowboyAreaType)
            {
                return areaScript;
            }
        }

        return null;
    }

    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
            this.mMovingShow.ShowAnimation();
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }
}

