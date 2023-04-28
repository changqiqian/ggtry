import { _decorator, Component, easing, Node, Sprite, Tween, UITransform, Vec3 } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Tool } from '../../../Tool';
const { ccclass, property } = _decorator;

@ccclass('GameNotifyBorad')
export class GameNotifyBorad extends BaseUI 
{
    public static PrefabPath : string = "prefab/GameNotifyBorad";
    public static Bunddle : string = "gamePage";

    mMask : Node = null;
    mInfo : Sprite = null;

    public static InfoCount : number = 6;
    InitParam()
    {

    }
    BindUI()
    {
        this.mMask = this.node.getChildByPath("Mask");
        this.mInfo = this.node.getChildByPath("Mask/Info").getComponent(Sprite);
    }
    RegDataNotify()
    {

    }
    LateInit()
    {
        this.TryToStartMove();
    }
    CustmoerDestory()
    {

    }



    TryToStartMove()
    {
        let index = Tool.Random(0 , GameNotifyBorad.InfoCount-1);
        this.LoadSprite(GameNotifyBorad.Bunddle , "texture/MainUI/info" + index , (_spriteFrame)=>
        {
            this.mInfo.spriteFrame =  _spriteFrame;
            this.ResetPos();
        });
    }

    ResetPos()
    {
        let maskWidth = this.mMask.getComponent(UITransform).width;
        this.mInfo.node.setPosition(maskWidth / 2 , 0);
        let destination = - this.mInfo.node.getComponent(UITransform).width - maskWidth /2;
        this.StartMove(destination);
    }

    StartMove(_endPosX : number)
    {
        this.StopAllTween(this.mInfo.node);
        let tweenDeal = new Tween(this.mInfo.node); 
        tweenDeal.to(5.0 , {position : new Vec3(_endPosX,0,0)} , {easing : easing.linear});
        tweenDeal.call(()=>
        {
            this.MoveEnd();
        });
        tweenDeal.start();
    }

    MoveEnd()
    {
        this.StartSecondsTimer(2,1,()=>
        {
            if(this.GetRestSeconds() == 0)
            {
                this.TryToStartMove();
            }
        })
    }

}

