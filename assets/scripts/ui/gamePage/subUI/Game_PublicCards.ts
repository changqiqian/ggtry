import { _decorator, Component, Node, AudioSource } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Poker } from '../../common/Poker';
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

        gameData.Data_S2CCommonFlopRoundNotify.AddListenner(this,(_data)=>
        {
            this.ClearPublicCards();
            let cards = gameData.GetDynamicData().publicCards;
            for(let i = 0 ; i < cards.length ; i++)
            {
                let poker = this.GetCardNode(i);
                poker.ResetAndHide();
                poker.ShowBack();
                poker.SetFrontByCardInfo(cards[i]);
                poker.DealAnimation();
            }
        });

        gameData.Data_S2CCommonTurnRoundNotify.AddListenner(this,(_data)=>
        {
            let poker = this.GetCardNode(3);
            poker.ResetAndHide();
            poker.ShowBack();
            poker.SetFrontByCardInfo(_data.card);
            poker.DealAnimation();
        });

        
        gameData.Data_S2CCommonRiverRoundNotify.AddListenner(this,(_data)=>
        {
            let poker = this.GetCardNode(4);
            poker.ResetAndHide();
            poker.ShowBack();
            poker.SetFrontByCardInfo(_data.card);
            poker.FlipToFront();
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

    GetCardNode(_index : number) : Poker
    {
        return this.node.children[_index].getComponent(Poker);
    }

    
}

