import { _decorator, Component, Node, Label, ScrollView, Prefab, instantiate, UITransform } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { GameConfig } from '../../../GameConfig';
import { NetworkSend } from '../../../network/NetworkSend';
import { Tool } from '../../../Tool';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Poker } from '../../common/Poker';
import { ProgressSlider } from '../../common/ProgressSlider';
import { GameReplayData } from '../GameReplayData';
import { Game_CashReplay } from './Game_CashReplay';
import { Game_MiniAction } from './Game_MiniAction';
import { Game_MiniSeatUI } from './Game_MiniSeatUI';
const { ccclass, property } = _decorator;

@ccclass('Game_MiniReplay')
export class Game_MiniReplay extends BaseUI {
    @property(MovingShow) 
    mMovingShow: MovingShow = null;
    @property(Label) 
    mTitle: Label = null;
    @property(BaseButton) 
    mBackBtn: BaseButton = null;

    @property(Node) 
    mTable: Node = null;

    @property(Node) 
    mPublicCards: Node = null;

    @property(Node) 
    mTitleNodes: Node = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    @property(BaseButton) 
    mReplayBtn: BaseButton = null;
    @property(BaseButton) 
    mLastBtn: BaseButton = null;
    @property(BaseButton) 
    mNextBtn: BaseButton = null;
    @property(Label) 
    mPageNum: Label = null;
    @property(ProgressSlider) 
    mProgressSlider: ProgressSlider = null;



    @property(Prefab) 
    mPrefab: Prefab = null;

    mCurrentPage : number ;
    mCurrentPageCache : number;

    mIndex : number = GameConfig.WrongIndex;
    
    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }

    onDisable()
    {
        UIMgr.Instance.DeleteUIByTarget(this);
    }


    InitParam()
    {

    }
    BindUI()
    {
        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false);
        });

        this.mReplayBtn.SetClickCallback(()=>
        {
            GameReplayData.Instance.ReStart();
            UIMgr.Instance.ShowLayer("gamePage","prefab/Game_CashReplay");      

        });

        this.mProgressSlider.SetEndCallback((_value)=>
        {
            let tempPage = this.GetCurrentPageByRatio(_value);
            if(tempPage == this.mCurrentPageCache)
            {
                return;
            }
            this.UpdatePageUI(tempPage);
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let msgId = gameData.ReplayDetailMsgId();
    
            NetworkSend.Instance.GetReplayDetail(msgId,gameStruct.mGameId,tempPage);
            
        });

        this.mProgressSlider.SetDragCallback((_value)=>
        {
            let tempPage = this.GetCurrentPageByRatio(_value);
            this.UpdatePageUI(tempPage);
        });

        this.mLastBtn.SetClickCallback(()=>
        {
            let page = this.mCurrentPage;
            page--;
            if(page <= 0)
            {
                page = 1;
            }

            if(page == this.mCurrentPageCache)
            {
                return;
            }
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let msgId = gameData.ReplayDetailMsgId();
            this.UpdatePageUI(page);
            NetworkSend.Instance.GetReplayDetail(msgId,gameStruct.mGameId,page);
        });

        this.mNextBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            let msgId = gameData.ReplayDetailMsgId();
            let totalReplayCount = gameData.Data_S2CCommonSimpleReplayResp.mData.totalNum;

            let page = this.mCurrentPage;
            page++;
            if(page >= totalReplayCount)
            {
                page = totalReplayCount;
            }

            if(page == this.mCurrentPageCache)
            {
                return;
            }
            this.UpdatePageUI(page);
            NetworkSend.Instance.GetReplayDetail(msgId,gameStruct.mGameId,page);
        });
        
    }

    GetCurrentPageByRatio(_ratio : number) : number
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let totalReplayCount = gameData.Data_S2CCommonSimpleReplayResp.mData.totalNum;
        let tempPage = Math.floor(_ratio*totalReplayCount);
        if(tempPage == 0)
        {
            tempPage = 1;
        }

        if(tempPage > totalReplayCount)
        {
            tempPage = totalReplayCount;
        }

        return tempPage;
    }

    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory() 
    {
        GameReplayData.Instance.Clear();
    }

    InitWithData(_index : number)
    {
        this.mIndex = _index;

        GameReplayData.Instance.Data_CopyReplayData.AddListenner(this,(_data)=>
        {
            this.ResetUI();
            let replayData = _data;
            let seatNum = replayData.texasConfig.seatNum
            let prefabName = "prefab/Game_MiniSeat" + seatNum;

            this.LoadPrefab("gamePage",prefabName,(_node)=>
            {
                this.mTable.addChild(_node);
                let script = _node.getComponent(Game_MiniSeatUI);
                script.InitSeat();
            })

    
            for(let i = 0 ; i < replayData.publicCards.length ; i++)
            {
                let current = replayData.publicCards[i];
                let poker = this.mPublicCards.children[i].getComponent(Poker);
                poker.ResetAndHide();
                poker.SetFrontByCardInfo(current);
                poker.ShowFront();
            }
    
            let config = replayData.texasConfig;
            this.mTitle.string = config.gameName + " " +Tool.GetBlindInfo(config.smallBlind , config.straddle , config.ante);
            this.InitActions();

            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            this.mCurrentPageCache = gameData.Data_S2CCommonDetailReplayResp.mData.detailReplayRecord.index;
            this.UpdatePageUI(this.mCurrentPageCache);
        });
    }

    ResetUI()
    {
        this.HidePublicCards();
        this.mTable.destroyAllChildren();
        for(let i = Phase.Blinds ; i <= Phase.Turn ; i++)
        {
            this.GetPotAmountLabel(i).string = "0";
            this.GetReplayList(i).destroyAllChildren();
        }
    }

    HidePublicCards()
    {
        for(let i = 0 ; i < this.mPublicCards.children.length ; i++)
        {
            this.mPublicCards.children[i].getComponent(Poker).ShowBack();
        }
    }

    UpdatePageUI(_currentPage : number )
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let totalReplayCount = gameData.Data_S2CCommonSimpleReplayResp.mData.totalNum;
        this.mCurrentPage = _currentPage;
        this.mPageNum.string = this.mCurrentPage  + "/" + totalReplayCount;
        this.mProgressSlider.SetPercent(this.mCurrentPage / totalReplayCount);
    }

    GetPotAmountLabel(_Phase : Phase) : Label
    {
        return this.mTitleNodes.children[_Phase].getChildByName("Amount").getComponent(Label);
    }

    GetReplayList(_Phase : Phase) : Node
    {
        return this.mScrollView.content.children[_Phase];
    }

    InitActions()
    {
        let blinds = GameReplayData.Instance.GetRoundStartActions();
        let preflop = GameReplayData.Instance.GetPreflopActions();
        let flop = GameReplayData.Instance.GetFlopActions();
        let turn = GameReplayData.Instance.GetTurnActions();
        let river = GameReplayData.Instance.GetRiverActions();

        //翻前行动
        let blindsAmount = 0;
        for(let i = 0 ; i < blinds.length ; i++)
        {
            let currentAct =  blinds[i];
            blindsAmount +=currentAct.actionInfo.amount;
            let tempNode = instantiate(this.mPrefab);
            this.GetReplayList(Phase.Blinds).addChild(tempNode);
            let tempScript = tempNode.getComponent(Game_MiniAction);
            tempScript.InitWithData(currentAct.actionInfo);
        }
        this.GetPotAmountLabel(Phase.Blinds).string = Tool.ConvertMoney_S2C(blindsAmount) + "";

        //pre flop行动
        let PreflopAmount = 0;
        for(let i = 0 ; i < preflop.length ; i++)
        {
            let currentAct =  preflop[i];
            PreflopAmount +=currentAct.actionInfo.amount;
            let tempNode = instantiate(this.mPrefab);
            this.GetReplayList(Phase.Preflop).addChild(tempNode);
            let tempScript = tempNode.getComponent(Game_MiniAction);
            tempScript.InitWithData(currentAct.actionInfo);
        }
        this.GetPotAmountLabel(Phase.Preflop).string = Tool.ConvertMoney_S2C(PreflopAmount) + "";
        

        //flop行动
        let flopAmount = 0;
        for(let i = 0 ; i < flop.length ; i++)
        {
            let currentAct =  flop[i];
            flopAmount +=currentAct.actionInfo.amount;
            let tempNode = instantiate(this.mPrefab);
            this.GetReplayList(Phase.Flop).addChild(tempNode);
            let tempScript = tempNode.getComponent(Game_MiniAction);
            tempScript.InitWithData(currentAct.actionInfo);
        }
        this.GetPotAmountLabel(Phase.Flop).string = Tool.ConvertMoney_S2C(flopAmount) + "";

        // turn行动
        let turnAmount = 0;
        for(let i = 0 ; i < turn.length ; i++)
        {
            let currentAct =  turn[i];
            turnAmount +=currentAct.actionInfo.amount;

            let tempNode = instantiate(this.mPrefab);
            this.GetReplayList(Phase.Turn).addChild(tempNode);
            let tempScript = tempNode.getComponent(Game_MiniAction);
            tempScript.InitWithData(currentAct.actionInfo);
        }
        this.GetPotAmountLabel(Phase.Turn).string = Tool.ConvertMoney_S2C(turnAmount) + "";

        //river 行动
        let riverAmount = 0;
        for(let i = 0 ; i < river.length ; i++)
        {
            let currentAct =  river[i];
            riverAmount +=currentAct.actionInfo.amount;
            let tempNode = instantiate(this.mPrefab);
            this.GetReplayList(Phase.River).addChild(tempNode);
            let tempScript = tempNode.getComponent(Game_MiniAction);
            tempScript.InitWithData(currentAct.actionInfo);
        }
        this.GetPotAmountLabel(Phase.River).string = Tool.ConvertMoney_S2C(riverAmount) + "";

        let height = 0;
        for(let i = Phase.Blinds ; i <= Phase.Turn ; i++)
        {
            let currentHeight = this.GetReplayList(i).getComponent(UITransform).height;
            if(height < currentHeight)
            {
                height = currentHeight;
            }
        }

        let minHeight = this.mScrollView.getComponent(UITransform).height;
        if(height < minHeight)
        {
            height = minHeight + 100;
        }
        this.mScrollView.content.getComponent(UITransform).height = height;
    }

}

enum Phase
{
    Blinds = 0,
    Preflop,
    Flop,
    Turn,
    River
}
