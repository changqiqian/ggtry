import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Poker } from '../../common/Poker';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_PublicCards')
export class Game_PublicCards extends BaseUI 
{
    InitParam() 
    {

    }
    BindUI() 
    {
        this.ClearPublicCards();
    }
    RegDataNotify() 
    {

        GameData.GetInstance().AddListener("Data_CheckPublicCards",(_current , _before)=>
        {


        },this);
        GameData.GetInstance().AddListener("Data_SendPublicCards",(_current , _before)=>
        {
            for(let i = 0 ; i < _current.centerCard.length ; i++)
            {
                let currentData = _current.centerCard[i];
                this.DealOnCard(currentData);
            }
        },this);
        GameData.GetInstance().AddListener("Data_GameStart",(_current , _before)=>
        {
            this.ClearPublicCards();
        },this);

        GameData.GetInstance().AddListener("Data_EnterGame",(_current , _before)=>
        {
            let deskInfo = GameData.GetInstance().Data_DeskInfo;
            if(deskInfo.centerCards == null || deskInfo.centerCards.length == 0)
            {
                this.ClearPublicCards();
            }
            else
            {
                for(let i = 0 ; i < deskInfo.centerCards.length ; i++)
                {
                    let currentCard = deskInfo.centerCards[i];
                    if(currentCard <= 0)
                    {
                        continue;
                    }
                    this.DealOnCard(currentCard);
                }
            }
           
        },this);

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        GameData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }

    DealOnCard(_cardData : number)
    {
        console.log("DealOnCard");
        for(let i = 0 ; i < this.node.children.length ; i++)
        {
            if(this.node.children[i].active == true)
            {
                console.log("DealOnCard continue");
                continue;
            }

            let poker = this.GetCardNode(i);
            poker.node.active = true;
            poker.ShowBack();
            poker.SetFrontByServerData(_cardData);
            poker.FlipToFront();
            break;
        }
    }

    ClearPublicCards()
    {
        for(let i = 0 ; i < this.node.children.length ; i++)
        {
            this.node.children[i].active = false;
        }
    }

    GetCardNode(_index : number) : Poker
    {
        return this.node.children[_index].getComponent(Poker);
    }
}

