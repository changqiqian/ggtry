import { _decorator, Component, Node, Vec2 } from 'cc';
import { BaseUI } from '../base/BaseUI';
import { CommonNotify } from '../CommonNotify';
import { MultipleTableCtr } from '../ui/common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('DragLayerListener')
export class DragLayerListener extends BaseUI 
{
    mMaxOffset : number = - MultipleTableCtr.ContentHeight;
    mStartPosY : number = null;
    InitParam()
    {

    }
    BindUI()
    {

    }
    RegDataNotify()
    {
        CommonNotify.Instance.Data_LayerPosY.AddListenner(this,(_data)=>
        {

            let finalPosY = this.mStartPosY  + _data;

            if(finalPosY > 0)
            {
                finalPosY = 0;
            }
            if(finalPosY < this.mMaxOffset)
            {
                finalPosY = this.mMaxOffset;
            }

            this.node.setPosition(0,finalPosY,0);
            
        });

        CommonNotify.Instance.Data_LayerDragFinish.AddListenner(this,(_data)=>
        {
            if(_data == false)
            {
                return;
            }
            if(this.node.position.y >= this.mMaxOffset/2)
            {
                this.node.setPosition(0,0,0);
                CommonNotify.Instance.Data_LayerDragDown.mData = false;
            }
            else
            {
                this.node.setPosition(0,this.mMaxOffset,0);
                CommonNotify.Instance.Data_LayerDragDown.mData = true;
            }
        });

        CommonNotify.Instance.Data_LayerDragStart.AddListenner(this,(_data)=>
        {
            if(_data == false)
            {
                return;
            }
            this.mStartPosY = this.node.position.y;
        })
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

