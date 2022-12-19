import { _decorator, Component, Node, AudioSource } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Poker } from '../../common/Poker';
import { GameReplayData } from '../GameReplayData';
const { ccclass, property } = _decorator;

@ccclass('Game_PublicCards')
export class Game_PublicCards extends BaseUI 
{
    @property(AudioSource) 
    mAudio: AudioSource = null;

    private mIndex : number = null;

    InitParam() 
    {

    }
    BindUI() 
    {
        this.ClearPublicCards();
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
        this.mIndex = _index;
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.ClearPublicCards();
            let cards = gameData.GetDynamicData().publicCards;
            for(let i = 0 ; i < cards.length ; i++)
            {
                let delayTime = i * 0.1;
                let poker = this.GetCardNode(i);
                poker.ResetAndHide();
                poker.ShowBack();
                poker.SetFrontByCardInfo(cards[i]);
                poker.DealAnimation(delayTime);
            }
        });

        gameData.Data_S2CCommonRoundStartNotify.AddListenner(this,(_data)=>
        {
            this.ClearPublicCards();
        });

        gameData.Data_S2CCommonFlopRoundNotify.AddListenner(this,(_data)=>
        {
            this.ClearPublicCards();
            let cards = gameData.GetDynamicData().publicCards;
            for(let i = 0 ; i < cards.length ; i++)
            {
                this.ShowCard(i , cards[i]);
            }
        });

        gameData.Data_S2CCommonTurnRoundNotify.AddListenner(this,(_data)=>
        {
            this.ShowCard(3 , _data.card);
        });

        gameData.Data_S2CCommonRiverRoundNotify.AddListenner(this,(_data)=>
        {
            this.ShowCard(4 , _data.card);
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

    ShowCard(_index , _cardInfo : CardInfo)
    {
        let poker = this.GetCardNode(_index);
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

