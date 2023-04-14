import { _decorator, Component, Node, Label, UITransform, Color } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
const { ccclass, property } = _decorator;

@ccclass('Game_SingleChat')
export class Game_SingleChat extends BaseUI 
{
    @property(Label) 
    mName: Label = null;
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

    public InitWithData(_userName : string , _content:string , _uid : string , _moveDistance : number , _index : number , _callback : Function)
    {
        this.mCallback = _callback;
        this.mIndex = _index;
        this.mName.string = _userName + "：";
        this.mContent.string = _content;
        this.mContent.updateRenderData(true);
        this.mName.updateRenderData(true);
        let contentWidth2 = this.mContent.getComponent(UITransform).contentSize.width + this.mName.getComponent(UITransform).contentSize.width
        let contentWidth = this.node.getComponent(UITransform).contentSize.width;
        this.mTotalDistance = _moveDistance + contentWidth;
        this.mMoving = true;


        console.log("contentWidth2==" + contentWidth2)
        console.log("contentWidth==" + contentWidth)

        let isSelf = _uid == LocalPlayerData.Instance.Data_Uid.mData
        if(isSelf)
        {
            this.mContent.color = Color.WHITE;
            this.mName.color = new Color(177,140,68);
        }
        else
        {
            this.mContent.color = new Color(146,159,176);
            this.mName.color = new Color(86,191,141);
        }

        this.StartSecondsTimer(15,1,()=>
        {
            if(this.GetRestSeconds()== 0)
            {
                this.ForceEnd();
            }
        });
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
            this.ForceEnd();
        }
    }

    ForceEnd()
    {
        this.mMoving = false;
        if( this.mCallback!=null)
        {
            this.mCallback(this.mIndex);
            this.DeleteSelf();
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

