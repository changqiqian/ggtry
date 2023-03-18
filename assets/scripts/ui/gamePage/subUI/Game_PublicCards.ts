import { _decorator, Component, Node, AudioSource, Vec2, Vec3 } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Poker } from '../../common/Poker';
import { GameReplayData } from '../GameReplayData';
const { ccclass, property } = _decorator;

@ccclass('Game_PublicCards')
export class Game_PublicCards extends BaseUI 
{

    private mIndex : number = null;

    mPos : Array<Vec3>;
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
        this.InitPos();
        this.ClearPublicCards();
        this.BindData();
    }

    InitPos()
    {
        if(this.mPos == null)
        {
            this.mPos = new Array<Vec3>();
        }
        for(let i = 0 ; i < this.node.children.length ; i++)
        {
            let pos = this.node.children[i].getPosition();
            this.mPos.push(pos);
        }
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.ClearPublicCards();

            if(gameData.IsGamePlayingNow() == false)
            {
                return;
            }
            let cards = gameData.GetDynamicData().publicCards;
            for(let i = 0 ; i < cards.length ; i++)
            {
                this.ShowCardWithAnimation(i,cards[i]);
            }
        });

        gameData.Data_S2CCommonWaitStartNotify.AddListenner(this,(_data)=>
        {
            this.ClearPublicCards();
        });

        gameData.Data_S2CCommonRoundStartNotify.AddListenner(this,(_data)=>
        {
            //this.ClearPublicCards();
        });

        gameData.Data_S2CCommonFlopRoundNotify.AddListenner(this,(_data)=>
        {
            this.ClearPublicCards();
            let cards = gameData.GetDynamicData().publicCards;
            for(let i = 0 ; i < cards.length ; i++)
            {
                this.ShowCardWithAnimation(i,cards[i]);
            }
        });

        gameData.Data_S2CCommonTurnRoundNotify.AddListenner(this,(_data)=>
        {
            this.ShowCardDirectly(3 , _data.card);
        });

        gameData.Data_S2CCommonRiverRoundNotify.AddListenner(this,(_data)=>
        {
            this.ShowCardDirectly(4 , _data.card);
        });
        

        gameData.Data_S2CCommonExaminePublicCardResp.AddListenner(this,(_data)=>
        {
            let allPublicCards = _data.publicCardList;
            let historyPublicCards = gameData.GetDynamicData().publicCards;
            let showCards  = [];

            for(let i = 0 ; i < allPublicCards.length ; i++)
            {
                if(i >= historyPublicCards.length)
                {
                    showCards.push(allPublicCards[i]);
                }
            }

            let startIndex = allPublicCards.length - showCards.length;
            for(let i = 0 ; i < showCards.length ; i++)
            {
                let index = startIndex + i;
                this.ShowCardDirectly(index , showCards[i]);
            }
        });
        
    }


    ClearPublicCards()
    {
        for(let i = 0 ; i < this.node.children.length ; i++)
        {
            let poker = this.GetCardNode(i);
            poker.ResetAndHide();
        }
    }

    ShowCardWithAnimation(_index , _cardInfo : CardInfo)
    {
        let poker = this.GetCardNode(_index);
        poker.ResetAndHide();
        poker.ShowBack();
        poker.SetFrontByCardInfo(_cardInfo);
        poker.DealAnimation2(this.mPos[0],this.mPos[_index]);
    }

    ShowCardDirectly(_index  : number, _cardInfo : CardInfo)
    {
        let poker = this.GetCardNode(_index);
        poker.node.setPosition(this.mPos[_index]);
        poker.ResetAndHide();
        poker.ShowBack();
        poker.SetFrontByCardInfo(_cardInfo);
        poker.FlipToFront();
    }

    GetCardNode(_index : number) : Poker
    {
        return this.node.children[_index].getComponent(Poker);
    }

    InitWithReplayData()
    {
        GameReplayData.Instance.Data_State.AddListenner(this,(_data)=>
        {
            this.UpdateReplayUI();
        })

        GameReplayData.Instance.Data_ReStart.AddListenner(this,(_data)=>
        {
            if(_data == false)
            {
                return;
            }
            this.ClearPublicCards();
        })

    }

    UpdateReplayUI()
    {
        let state = GameReplayData.Instance.Data_State.mData;
        let publicCards = GameReplayData.Instance.Data_ReplayData.mData.publicCards;


        switch(state)
        {
            case TexasCashState.TexasCashState_RoundStart:
            {
               
            }
            break;
            case TexasCashState.TexasCashState_PreFlopRound:
            {
    
            }
            break;
            case TexasCashState.TexasCashState_FlopRound:
            {
                for(let i = 0 ; i < 3 ; i++)
                {
                    let poker = this.GetCardNode(i);
                    poker.ResetAndHide();
                    poker.ShowBack();
                    poker.SetFrontByCardInfo(publicCards[i]);
                    poker.DealAnimation();
                }
            }
            break;
            case TexasCashState.TexasCashState_TurnRound:
            {
                let cardIndex = 3;
                let poker = this.GetCardNode(cardIndex);
                poker.ResetAndHide();
                poker.ShowBack();
                poker.SetFrontByCardInfo(publicCards[cardIndex]);
                poker.DealAnimation();
            }
            break;
            case TexasCashState.TexasCashState_RiverRound:
            {
                let cardIndex = 4;
                let poker = this.GetCardNode(cardIndex);
                poker.ResetAndHide();
                poker.ShowBack();
                poker.SetFrontByCardInfo(publicCards[cardIndex]);
                poker.DealAnimation();
            }
            break;
        }
   
    }

    
}

