import { _decorator, Component, Node, AudioSource } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
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
    }

    DealOnCard(_cardData : number)
    {
        for(let i = 0 ; i < this.node.children.length ; i++)
        {
            if(this.node.children[i].active == true)
            {
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

    GetCurrentCardList() : Array<number>
    {
        let result = new Array<number>();
        for(let k = 0 ; k < this.node.children.length ; k++)
        {
            if(this.node.children[k].active == false)
            {
                continue;
            }

            let poker = this.GetCardNode(k);
            result.push(poker.mServerData);
        }
        return result;
    }
    
}

