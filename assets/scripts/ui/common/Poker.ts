import { _decorator, Component, Node, Sprite, Tween, Vec2, v2, math, Vec3, Color, Widget, easing, TweenSystem } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { CardStruct, CardType, Combiantion } from '../../base/Calculator';
import { Localization } from '../../base/Localization';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Poker')
export class Poker extends BaseUI 
{
    @property(Node) 
    mRoot: Node = null;
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
    mClickCallBack : Function;
    mCardInfo : CardInfo = null;
    mServerData : number = null;
    mPokerIndex : number = null;
    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.ShowBack();
        this.mShowBtn.SetClickCallback(()=>
        {
            if(this.mBack.activeInHierarchy == true)
            {
                return;
            }
            this.mIcon.active = !this.mIcon.active;
            if(this.mClickCallBack)
            {
                this.mClickCallBack(this.mIcon.active , this.mPokerIndex);
            }
        })


        for(let i = 0 ; i < this.mRoot.children.length ; i++)
        {
            let widget = this.mRoot.children[i].getComponent(Widget);
            if(widget != null)
            {
                widget.updateAlignment();
                widget.enabled = false;
                widget.destroy();
            }
        }

        let rootWidget = this.mRoot.getComponent(Widget);
        if(rootWidget != null)
        {
            rootWidget.updateAlignment();
            rootWidget.enabled = false;
            rootWidget.destroy();
        }
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
        let num = _card.mNum;
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

    public SetFront(_card : CardStruct)
    {
        let bundleName = Poker.GetPokerTexutureBundleName();
        let path = Poker.GetPokerTexturePath(_card);
        this.LoadSprite(bundleName,path,(_spirteFrame)=>
        {
            this.mFront.getComponent(Sprite).spriteFrame = _spirteFrame;
        });
    }

    public SetFrontByCardInfo(_cardInfo : CardInfo)
    {
        this.mCardInfo = _cardInfo;
        let cardStruct = new CardStruct(_cardInfo.number,_cardInfo.type);
        this.SetFront(cardStruct);
    }

    public FlipToFront(_duration : number = 0.2)
    {
        let halfDuration = _duration / 2;
        let tweenFlip = new Tween(this.mRoot); 
        tweenFlip.to(halfDuration , {scale: new Vec3(0,1,1)});
        tweenFlip.call(()=>
        {
            this.mBack.active = false;
            this.mFront.active = true;
        });
        tweenFlip.to(halfDuration , {scale: Vec3.ONE});
        tweenFlip.start();
    }

    public DealAnimation(_delayTime : number = 0,_duration : number = 0.2 , _offset :Vec3 = new Vec3(0,300,0))
    {
        this.mRoot.setPosition(_offset);
        let tweenDeal = new Tween(this.mRoot); 
        tweenDeal.delay(_delayTime);
        tweenDeal.to(_duration , {position : new Vec3(0,0,0)} , {easing : easing.quadIn});
        tweenDeal.call(()=>
        {
            this.FlipToFront()
        });
        tweenDeal.start();
    }

    public DealAnimation2(_fromPos : Vec3 , _toPos : Vec3 ,_duration : number = 0.3 )
    {
        this.node.setPosition(_fromPos);
        let tweenDeal = new Tween(this.node); 
        tweenDeal.to(_duration , {position : new Vec3(_toPos.x,_toPos.y,_toPos.z)} , {easing : easing.quadIn});
        tweenDeal.call(()=>
        {
            this.FlipToFront()
        });
        tweenDeal.start();
    }

    public ShowFront()
    {
        this.node.active = true;
        this.mRoot.scale =Vec3.ONE;
        this.mBack.active = false;
        this.mFront.active = true;
    }

    public ShowBack() 
    {
        this.ResetAndHide();
        this.node.active = true;
        this.mBack.active = true;
    }



    public ResetAndHide()
    {
        this.StopAllTween(this.mRoot);
        this.StopAllTween(this.node);
        this.node.active = false;
        this.mBack.scale =Vec3.ONE;
        this.mFront.scale =Vec3.ONE;
        this.mRoot.scale =Vec3.ONE;
        this.mRoot.setPosition(Vec3.ZERO);
        this.mGlow.active = false;
        this.mIcon.active = false;
        this.mBack.active = false;
        this.mFront.active = false;
        this.mCardInfo = null;
        this.SetGary(false);
    }

    public SetClickAble(_callback : Function , _index : number)
    {
        this.mShowBtn.node.active = true;
        this.mPokerIndex = _index;
        this.mClickCallBack = _callback;
    }

    public SetGary(_value : boolean)
    {
        if(_value)
        {
            this.mFront.getComponent(Sprite).color = Color.GRAY;
        }
        else
        {
            this.mFront.getComponent(Sprite).color = Color.WHITE;
        }
    }

    public ShowRoot(_value : boolean)
    {
        this.mRoot.active = _value;
    }

    public ShowEye(_value :boolean)
    {
        this.mIcon.active = _value;
    }

    public AlreadyShow() : boolean
    {
        return this.mCardInfo != null;
    }
}

