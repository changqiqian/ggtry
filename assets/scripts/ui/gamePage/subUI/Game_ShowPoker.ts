import { _decorator, Component, Node, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { CardType } from '../../../base/Calculator';
const { ccclass, property } = _decorator;

@ccclass('Game_ShowPoker')
export class Game_ShowPoker extends BaseUI 
{
    @property(Sprite) 
    mNum: Sprite = null;
    @property(Sprite) 
    mType: Sprite = null;
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

    SetCard(_cardInfo : CardInfo)
    {
        let numName = "";
        let typeName = "";

        if(_cardInfo.type == CardType.Club)
        {
            typeName = "c";
            numName = _cardInfo.number + "b";
        }
        else if(_cardInfo.type == CardType.Diamond)
        {
            typeName = "d";
            numName = _cardInfo.number + "r";
        }
        else if(_cardInfo.type == CardType.Speades)
        {
            typeName = "s";
            numName = _cardInfo.number + "b";
        }
        else if(_cardInfo.type == CardType.Heart)
        {
            typeName = "h";
            numName = _cardInfo.number + "r";
        }

        this.LoadSprite('gamePage', "texture/showCard/" + numName, (_spriteFrame) => 
        {
            this.mNum.spriteFrame = _spriteFrame;
        });


        this.LoadSprite('gamePage', "texture/showCard/" + typeName, (_spriteFrame) => 
        {
            this.mType.spriteFrame = _spriteFrame;
        });
    }

    SetCardWithTwoNumber(_cardInfos : Array<CardInfo>)
    {
        let numNames = new Array<string>();

        for(let i = 0 ; i < _cardInfos.length ; i++)
        {
            let currentCardInfo = _cardInfos[i];
            let name = "";
            if(currentCardInfo.type == CardType.Club)
            {
                name = currentCardInfo.number + "b";
            }
            else if(currentCardInfo.type == CardType.Diamond)
            {
                name = currentCardInfo.number + "r";
            }
            else if(currentCardInfo.type == CardType.Speades)
            {
                name = currentCardInfo.number + "b";
            }
            else if(currentCardInfo.type == CardType.Heart)
            {
                name = currentCardInfo.number + "r";
            }
            numNames.push(name);
        }
        this.LoadSprite('gamePage', "texture/showCard/" + numNames[0], (_spriteFrame) => 
        {
            this.mNum.spriteFrame = _spriteFrame;
        });
        this.LoadSprite('gamePage', "texture/showCard/" + numNames[1], (_spriteFrame) => 
        {
            this.mType.spriteFrame = _spriteFrame;
        });
    }
}

