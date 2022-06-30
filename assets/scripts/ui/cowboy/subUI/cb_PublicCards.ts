import { _decorator, Component, Node, Vec3, Tween, easing } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { CardStruct, CardType } from '../../../base/Calculator';
import { Poker } from '../../common/Poker';
const { ccclass, property } = _decorator;

@ccclass('cb_PublicCards')
export class cb_PublicCards extends BaseUI 
{

    @property(Node) 
    mLayout: Node = null;

    public static TotalCards : number = 5; 

    InitParam() {

    }
    BindUI() {
        this.HideAllCards();
    }
    RegDataNotify() {

    }
    LateInit() {
        this.DealCards();
    }
    UnregDataNotify() {

    }
    CustmoerDestory() {

    }

    HideAllCards()
    {
        for(let i = 0 ; i < this.mLayout.children.length ; i++)
        {
            let currentPoker = this.mLayout.children[i];
            let originPos = currentPoker.position;
            currentPoker.active = false;
            currentPoker.position = new Vec3(originPos.x , 0 , originPos.z);
        }
    }

    DealCards()
    {
        let count = cb_PublicCards.TotalCards;
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
                currentPoker.active = true;
            });
            tempTween.to(moveTime , {position : new Vec3(originPos.x , 0 , originPos.z)} , {easing:easing.quadIn} );
            tempTween.call(()=>
            {
                count--;
                if(count == 0)
                {
                    this.ShowCard(new CardStruct(14,CardType.Club) , 0);
                }
            });
            tempTween.start();
        }
    }

    ShowCard(_card : CardStruct , _index : number)
    {
        let currentPoker = this.mLayout.children[_index].getComponent(Poker);
        currentPoker.SetFront(_card);
        currentPoker.FlipToFront();
    }

}

