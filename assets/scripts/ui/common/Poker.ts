import { _decorator, Component, Node, Sprite, Tween, Vec2, v2, math, Vec3 } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { CardStruct, CardType, Combiantion } from '../../base/Calculator';
import { Localization } from '../../base/Localization';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Poker')
export class Poker extends BaseUI 
{
    @property(Node) 
    mFront: Node = null;
    @property(Node) 
    mBack: Node = null;
    @property(Node) 
    mGlow: Node = null;
    @property(BaseButton) 
    mShowBtn: BaseButton = null;
    @property(Node) 
    mIcon: Node = null;
    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.mIcon.active = false;
        this.ShowBack();
        this.mShowBtn.node.active = false;
        this.mShowBtn.SetClickCallback(()=>
        {
            this.mIcon.active = !this.mIcon.active;
        })
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

        let finalPath = path + num + type ;
        return finalPath;
    }

    public static GetPokerTexutureBundleName(): string
    {
        return "common";
    }

    public static GetConbinationName(_conbination : Combiantion) : string
    {
        if(_conbination == Combiantion.High)
        {
            return Localization.GetString("00071");
        }
        if(_conbination == Combiantion.OnePair)
        {
            return Localization.GetString("00072");
        }
        if(_conbination == Combiantion.TwoPair)
        {
            return Localization.GetString("00073");
        }
        if(_conbination == Combiantion.ThreeOfKind)
        {
            return Localization.GetString("00074");
        }
        if(_conbination == Combiantion.Straight)
        {
            return Localization.GetString("00075");
        }
        if(_conbination == Combiantion.Flush)
        {
            return Localization.GetString("00076");
        }
        if(_conbination == Combiantion.FullHouse)
        {
            return Localization.GetString("00077");
        }
        if(_conbination == Combiantion.FourOfKind)
        {
            return Localization.GetString("00078");
        }
        if(_conbination == Combiantion.StraightFlush)
        {
            return Localization.GetString("00079");
        }
        if(_conbination == Combiantion.RoyalStraightFlush)
        {
            return Localization.GetString("00080");
        }
    }

    public SetFrontByServerData(_serverData : number)
    {
        var type = _serverData / 16;
        type++;//我的算法是从1开始，服务器从0
        var num = _serverData % 16;
        let cardStruct = new CardStruct(num , type);
        this.SetFront(cardStruct);
    }

    public SetFront(_card : CardStruct)
    {
        let bundleName = Poker.GetPokerTexutureBundleName();
        let path = Poker.GetPokerTexturePath(_card);
        this.LoadSprite(bundleName,path,(_spirteFrame)=>
        {
            this.mFront.getComponent(Sprite).spriteFrame = _spirteFrame;
        });
    }

    public FlipToFront(_duration : number = 1)
    {
        let halfDuration = _duration / 2;

        let tempTweenBack = new Tween(this.mBack); 
        tempTweenBack.to(halfDuration , {scale: new Vec3(0,1,1)});
        tempTweenBack.call(()=>
        {
            this.mBack.active = false;
        });
        tempTweenBack.start();

        let tempTweenFront = new Tween(this.mFront); 
        tempTweenFront.to(halfDuration , {scale: new Vec3(0,1,1)});
        tempTweenFront.call(()=>
        {
            this.mFront.active = true;
        });
        tempTweenFront.to(halfDuration , {scale: new Vec3(1,1,1)});
        tempTweenFront.start();
    }



    public ShowFront()
    {
        this.mBack.active = false;
        this.mFront.active = true;
    }

    public ShowBack() 
    {
        this.mBack.active = true;
        this.mFront.active = false;
    }

    public SetClickAble()
    {
        this.mShowBtn.node.active = true;
    }

}

