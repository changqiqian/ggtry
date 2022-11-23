import { _decorator, Component, Node, Label, UITransform } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_SingleChat')
export class Game_SingleChat extends BaseUI 
{
    @property(Label) 
    mContent: Label = null;
    mMoving : boolean = false;
    mTotalDistance : number;
    mMovingSpeed : number = 250;
    mIndex : number;
    mCallback : Function;
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

    public InitWithData(_content : string , _moveDistance : number , _index : number , _callback : Function)
    {
        this.mCallback = _callback;
        this.mIndex = _index;
        this.mContent.string = _content;
        this.mContent.updateRenderData(true);
        let contentWidth = this.mContent.getComponent(UITransform).contentSize.width;
        this.mTotalDistance = _moveDistance + contentWidth;
        this.StartToMove();
    }

    StartToMove()
    {
        this.mMoving = true;
    }

    MovingLogic(_dt : number)
    {
        let currentPosX = this.node.position.x;
        let changePosX = _dt * this.mMovingSpeed;
        let newPosX = currentPosX - changePosX;
        let posY = this.node.getPosition().y;
        this.node.setPosition(newPosX,posY);

        this.mTotalDistance -= changePosX;
        if(this.mTotalDistance < 0)
        {
            this.mMoving = false;
            if( this.mCallback!=null)
            {
                this.mCallback(this.mIndex);
                this.DeleteSelf();
            }
        }
    }

    update(_dt)
    {
        if(this.mMoving == false)
        {
            return;
        }

        this.MovingLogic(_dt);
    }
}

