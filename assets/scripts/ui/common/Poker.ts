import { _decorator, Component, Node, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { CardStruct, CardType } from '../../base/Calculator';
const { ccclass, property } = _decorator;

@ccclass('Poker')
export class Poker extends BaseUI {

    @property(Node) 
    Front: Node = null;
    @property(Node) 
    Back: Node = null;

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
    UnregDataNotify() 
    {
    }
    CustmoerDestory() 
    {
    }

    public static GetPokerTexturePath(_card : CardStruct) : string
    {
        let path = "texture/poker/";
        let num = _card.mNum.toString();
        let type = "";
        switch(_card.mType)
        {
            case CardType.Speades:
                type = "s";
            break;
            case CardType.Club:
                type = "c";
            break;
            case CardType.Heart:
                type = "h";
            break;
            case CardType.Diamond:
                type = "d";
            break;
        }

        let finalPath = path + num + type;
        return finalPath;
    }

    public static GetPokerTexutureBundleName(): string
    {
        return "common";
    }

    public SetFront(_card : CardStruct)
    {
        let bundleName = Poker.GetPokerTexutureBundleName();
        let path = Poker.GetPokerTexturePath(_card);
        this.LoadSprite(bundleName,path,(_spirteFrame)=>
        {
            this.Front.getComponent(Sprite).spriteFrame = _spirteFrame;
        });
    }

    public ShowFront()
    {
        this.Back.active = false;
        this.Front.active = true;
    }

    public ShowBack() 
    {
        this.Back.active = true;
        this.Front.active = false;
    }

}

