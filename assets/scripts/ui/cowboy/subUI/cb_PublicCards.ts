import { _decorator, Component, Node, Vec3, Tween, easing } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { CardStruct, CardType } from '../../../base/Calculator';
import { Poker } from '../../common/Poker';
import { CowboyData } from '../CowboyData';
const { ccclass, property } = _decorator;

@ccclass('cb_PublicCards')
export class cb_PublicCards extends BaseUI 
{

    @property(Node) 
    mLayout: Node = null;

    InitParam() 
    {

    }
    BindUI() 
    {
        this.RestAllCards();
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

            this.DealCards();
            this.ShowCard(_data.oneCard,0);
        });

        CowboyData.Instance.Data_S2CTexasCowboyGameStartNotify.AddListenner(this,(_data)=>
        {
            this.RestAllCards();
            this.DealCards();
            this.ShowCard(_data.oneCard,0);
        });

        CowboyData.Instance.Data_S2CTexasCowboyGameSettlementNotify.AddListenner(this,(_data)=>
        {
            for(let i = 0 ; i < _data.publicCards.length ; i++)
            {
                let index = i + 1;
                this.ShowCard(_data.publicCards[i],index);
            }
        });
    }
    LateInit() 
    {
        
    }

    CustmoerDestory() 
    {

    }


    DealCards()
    {
        for(let i = 0 ; i < this.mLayout.children.length ; i++)
        {
            let baseDelayTime = 0.1;
            let offset = 500;
            let moveTime = 0.5;

            let currentPoker = this.mLayout.children[i];
            let originPos = currentPoker.position;
            currentPoker.position = new Vec3(originPos.x , originPos.y + offset , originPos.z);
            let tempTween = new Tween(currentPoker); 
            tempTween.delay(baseDelayTime * i);
            tempTween.call(()=>
            {
                currentPoker.getComponent(Poker).ShowBack();
            });
            tempTween.to(moveTime , {position : new Vec3(originPos.x , 0 , originPos.z)} , {easing:easing.quadIn} );
            tempTween.start();
        }
    }

    ShowCard(_card : CardStruct , _index : number)
    {
        let currentPoker = this.mLayout.children[_index].getComponent(Poker);
        currentPoker.SetFront(_card);
        currentPoker.FlipToFront();
    }

    RestAllCards()
    {
        for(let i = 0 ; i < this.mLayout.children.length ; i++)
        {
            let currentPokerNode = this.mLayout.children[i];
            let originPos = currentPokerNode.position;
            currentPokerNode.position = new Vec3(originPos.x , 0 , originPos.z);

            let currentPoker = currentPokerNode.getComponent(Poker);
            currentPoker.StopAllTween();
            currentPoker.Show(false);
        }
    }

}

