import { _decorator, Component, Node, EventTouch, Vec2, Vec4, math } from 'cc';
import { CommonNotify } from '../CommonNotify';
const { ccclass, property } = _decorator;

@ccclass('DragDownEvent')
export class DragDownEvent extends Component 
{
    mStartPos : Vec2 = null;
    mEndPos : Vec2 = null;

    mProtectDistance :number = 70;
    mActive : boolean = false;

    start() 
    {
        this.node!.on(Node.EventType.TOUCH_START,this.TouchStart.bind(this));
        this.node!.on(Node.EventType.TOUCH_MOVE,this.TouchMove.bind(this));
        this.node!.on(Node.EventType.TOUCH_END,this.TouchEnd.bind(this));
        this.node!.on(Node.EventType.TOUCH_CANCEL,this.TouchEnd.bind(this));
    }

    private TouchStart(_event:EventTouch)
    {
        this.Reset();
        this.mStartPos = _event.getUIStartLocation();

        //_event.preventSwallow = true
    }

    private TouchMove(_event:EventTouch)
    {
        this.mEndPos = _event.getUILocation();
        let direction = this.mEndPos.subtract(this.mStartPos);
        if(this.mActive)
        {
            this.CalculateDrag(direction);
        }
        else
        {
            let right = new Vec2(1,0);
            let angle = right.signAngle(direction);
            let degree = angle * 180 / Math.PI;
            let length = direction.length();
            this.CalculateActive(length,degree);
        }

        
    }

    private TouchEnd(_event:EventTouch)
    {
        if(this.mActive)
        {
            CommonNotify.Instance.Data_LayerDragFinish.mData = true;
        }
        this.Reset();
    }


    CalculateActive(_length : number ,_degree : number)
    {
        if(CommonNotify.Instance.Data_LayerDragDown.mData)
        {
            if(_length > this.mProtectDistance && this.IsDragUp(_degree))
            {
                this.mActive = true;
                CommonNotify.Instance.Data_LayerDragStart.mData = true;
            }
        }
        else
        {
            if(_length > this.mProtectDistance && this.IsDragDown(_degree))
            {
                this.mActive = true;
                CommonNotify.Instance.Data_LayerDragStart.mData = true;
            }
        }
    }

    CalculateDrag(_direction : Vec2)
    {
        let final;
        if(CommonNotify.Instance.Data_LayerDragDown.mData)
        {
            final = _direction.y - this.mProtectDistance;
        }
        else
        {
            final = _direction.y + this.mProtectDistance;
        }
        CommonNotify.Instance.Data_LayerPosY.mData = final;
    }

    Reset()
    {
        this.mStartPos = null;
        this.mEndPos = null;
        this.mActive = false;
    }

    IsDragDown(_degree : number) : boolean
    {
        if(_degree < -60 && _degree > - 120)
        {
            return true;
        }
        
        return false;
    }

    IsDragUp(_degree : number) : boolean
    {
        if(_degree < 120 && _degree > 60)
        {
            return true;
        }
        
        return false;
    }
}

