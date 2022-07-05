import { _decorator, Component, Node, Tween, tween, Vec3, instantiate, BlockInputEvents } from 'cc';
import { BaseUI } from './BaseUI';
const { ccclass, property } = _decorator;

@ccclass('BaseWindow')
export class BaseWindow extends BaseUI {

    @property(Node) 
    mDarkBG: Node = null;
    mAnimating : boolean  = false;
    mContent : Node = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mDarkBG.on(Node.EventType.TOUCH_END,this.OnClickDarkBG.bind(this),this);
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
        this.mDarkBG.off(Node.EventType.TOUCH_END,this.OnClickDarkBG.bind(this),this);
    }

    public SetContent(_target : Node)
    {
        this.node.addChild(_target);
        this.mContent = _target;
        this.mContent.addComponent(BlockInputEvents);
    }

    public Show(_val : boolean)
    {
        if(this.mAnimating)
        {
            console.log("弹窗动画执行中，无法打开或关闭");
            return;
        }

        console.log("BaseWindow Show ");
        if(_val)
        {
            this.ShowAnm();
        }
        else
        {
            this.HideAnm();
        }
    }

    private OnClickDarkBG()
    {
        this.Show(false);
    }

    private ShowAnm()
    {
        this.node.active =true;
        let duration = 0.3;
        this.mAnimating = true;
        this.mContent.setScale(new Vec3(0.1,0.1,0.1));
        let tempTween = new Tween(this.mContent);
        tempTween.to(duration,{scale : new Vec3(1.2,1.2,1.2)});
        tempTween.to(duration/2,{scale : Vec3.ONE});
        tempTween.call(this.ShowEnd.bind(this));
        tempTween.start();
    }

    private ShowEnd()
    {
        this.mAnimating = false;
    }

    private HideAnm()
    {
        let duration = 0.3;
        this.mAnimating = true;
        this.mContent.setScale(Vec3.ONE);
        let tempTween = new Tween(this.mContent);
        tempTween.to(duration/2,{scale : new Vec3(1.2,1.2,1.2)});
        tempTween.to(duration,{scale : new Vec3(0.1,0.1,0.1)});
        tempTween.call(this.HideEnd.bind(this));
        tempTween.start();
    }

    private HideEnd()
    {
        this.mAnimating = false;
        this.node.active =false;
    }
}

