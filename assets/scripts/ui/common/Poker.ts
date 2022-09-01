import { _decorator, Component, Node, Sprite, Tween, Vec2, v2, math, Vec3, Color } from 'cc';
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

    mClickCallback : Function = null;
    mIndex : number = null;

    mTweenBack :Tween = null;
    mTweenFront :Tween = null;
    mCardStruct : CardStruct = null;
    mServerData : number = null;
    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.ShowBack();
        this.mShowBtn.node.active = false;
        this.mShowBtn.SetClickCallback(()=>
        {
            this.mIcon.active = !this.mIcon.active;
            if(this.mClickCallback)
            {
                this.mClickCallback(this.mIndex);
            }
        })
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
        this.mServerData = _serverData;
        var type = Math.floor(_serverData / 16)
        switch (type) 
        {
            case 0:
                type = CardType.Diamond;
                break;
            case 1:
                type = CardType.Club;
                break;
            case 2:
                type = CardType.Heart;
                break;
            case 3:
                type = CardType.Speades;
                break;
            default:
                break;
        }

        var num = _serverData % 16;
        let cardStruct = new CardStruct(num , type);
        this.SetFront(cardStruct);
    }

    public SetFront(_card : CardStruct)
    {
        this.mCardStruct = _card;
        let bundleName = Poker.GetPokerTexutureBundleName();
        let path = Poker.GetPokerTexturePath(_card);
        this.LoadSprite(bundleName,path,(_spirteFrame)=>
        {
            this.mFront.getComponent(Sprite).spriteFrame = _spirteFrame;
        });
    }

    public FlipToFront(_duration : number = 1)
    {
        let halfDuration = _duration / 3;
        
        if(this.mTweenBack !=null)
        {
            this.mTweenBack.stop();
        }

        this.mTweenBack = new Tween(this.mBack); 
        this.mTweenBack .to(halfDuration , {scale: new Vec3(0,1,1)});
        this.mTweenBack .call(()=>
        {
            this.mBack.active = false;
        });
        this.mTweenBack .start();


        if(this.mTweenFront !=null)
        {
            this.mTweenFront.stop();
        }
    
        this.mTweenFront = new Tween(this.mFront); 
        this.mTweenFront.to(halfDuration , {scale: new Vec3(0,1,1)});
        this.mTweenFront.call(()=>
        {
            this.mFront.active = true;
        });
        this.mTweenFront.to(halfDuration , {scale: Vec3.ONE});
        this.mTweenFront.start();
    }

    public ShowFront()
    {
        this.mBack.scale =Vec3.ONE;
        this.mFront.scale =Vec3.ONE;
        this.mBack.active = false;
        this.mFront.active = true;
    }

    public ShowBack() 
    {
        this.mBack.scale =Vec3.ONE;
        this.mFront.scale =Vec3.ONE;
        this.mGlow.active = false;
        this.mIcon.active = false;
        this.mBack.active = true;
        this.mFront.active = false;
        this.mFront.getComponent(Sprite).color = Color.WHITE;
    }

    public SetClickAble(_callback : Function , _index : number)
    {
        this.mShowBtn.node.active = true;
        this.mIndex = _index;
        this.mClickCallback = _callback;
    }

    public SetGary()
    {
        this.mFront.getComponent(Sprite).color = Color.GRAY;
    }
}

