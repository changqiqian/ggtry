import { _decorator, Component, Node, Sprite, Tween, Vec2, v2, math, Vec3 } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { CardStruct, CardType } from '../../base/Calculator';
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

