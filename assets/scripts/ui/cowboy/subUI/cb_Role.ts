import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { SpineCtr } from '../../../UiTool/SpineCtr';
import { Poker } from '../../common/Poker';
import { CowboyData } from '../CowboyData';
const { ccclass, property } = _decorator;

@ccclass('cb_Role')
export class cb_Role extends BaseUI {

    @property(Node) 
    mCards: Node = null;
    @property(SpineCtr) 
    mSpineCtr: SpineCtr = null;
    InitParam() {

    }
    BindUI() 
    {
    }
    RegDataNotify() 
    {
        CowboyData.Instance.Data_S2CTexasCowboyEnterGameResp.AddListenner(this,(_data)=>
        {
            this.RestAllCards();
            if(CowboyData.Instance.GetPhase() == CowboyPhase.CowBoyPhase_Settlement)
            {
                return;
            }

            this.ShowCardBack();
        });

        CowboyData.Instance.Data_S2CTexasCowboyGameStartNotify.AddListenner(this,(_data)=>
        {
            this.RestAllCards();
            this.ShowCardBack();
        });


    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    public PlayWinSpine()
    {
        this.mSpineCtr.SetAnimation("shengli" , false , (_data)=>
        {
            this.PlayIdleSpine();
        });
    }

    public PlayIdleSpine()
    {
        this.mSpineCtr.SetAnimation("daiji",true);
    }

    public ShowAllCards(_cards : Array<CardInfo> )
    {
        for(let i = 0 ; i < this.mCards.children.length ; i++)
        {
            let currentCard = _cards[i];
            this.ShowCard(currentCard , i);
        }
    }

    public ShowCard(_card : CardInfo , _index : number)
    {
        let currentPoker = this.mCards.children[_index].getComponent(Poker);
        currentPoker.SetFrontByCardInfo(_card);
        currentPoker.FlipToFront();
    }

    public ShowCardBack()
    {
        for(let i = 0 ; i < this.mCards.children.length ; i++)
        {
            let currentPokerNode = this.mCards.children[i];
            let currentPoker = currentPokerNode.getComponent(Poker);
            currentPoker.ShowBack();
        }
    }


    RestAllCards()
    {
        for(let i = 0 ; i < this.mCards.children.length ; i++)
        {
            let currentPokerNode = this.mCards.children[i];
            let currentPoker = currentPokerNode.getComponent(Poker);
            currentPoker.StopAllTween();
            currentPoker.Show(false);
        }
    }
}

