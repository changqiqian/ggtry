import { _decorator, Component, Node, Sprite, Label, UITransform, view } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Club_MainEnter')
export class Club_MainEnter extends BaseUI 
{
    @property(Node) 
    mScaleNode: Node = null;
    @property(Sprite) 
    mStamp: Sprite = null;
    @property(Label) 
    mId: Label = null;
    @property(Node) 
    mOwnerTag: Node = null;
    @property(Node) 
    mBellBG: Node = null;
    @property(Label) 
    mClubName: Label = null;
    @property(Label) 
    mMemberCount: Label = null;
    @property(Label) 
    mCurrentTables: Label = null;
    @property(BaseButton) 
    mEnterBtn: BaseButton = null;

    mProtectOffset : number = 50;
    mMaxOffset : number;
    mCenterX : number;
    mData : any = null;
    mCallback : Function = null;
    mLastTimeScale : number = null;
    InitParam()
    {
        let screenSize = view.getVisibleSize();
        this.mCenterX = screenSize.width / 2;
        this.mMaxOffset = this.node.getComponent(UITransform).width / 2;
    }
    BindUI()
    {
        this.mEnterBtn.SetClickCallback(()=>
        {
            let currentScale = this.CalculateCurrentScaleRatio();
            if(currentScale == 1)
            {
                console.log("Enter club page == " + this.mData);
            }
            else
            {
                if(this.mCallback != null)
                {
                    this.mCallback(this.mData);
                }
            }
        });

    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        this.unscheduleAllCallbacks();
    }

    public InitWithData(_data : any , _clickCallback :Function= null)
    {
        this.mData = _data;
        this.mCallback = _clickCallback;
        this.schedule(this.ScaleLogic.bind(this),0.01);
    }
    //update
    ScaleLogic(dt: number)
    {
        if(this.node.activeInHierarchy == false)
        {
            return;
        }

        if(this.node.active == false)
        {
            return;
        }

        let scale = this.CalculateCurrentScaleRatio();
        if(this.mLastTimeScale == scale)
        {
            return;
        }
        this.mLastTimeScale = scale;
        this.mScaleNode.setScale(scale , scale , scale);

    }

    CalculateCurrentScaleRatio() : number
    {
        let currentX = this.node.worldPosition.x;
        let offset = Math.abs(currentX - this.mCenterX);
        if(offset < this.mProtectOffset)
        {
            return 1;
        }
        else
        {
            if(offset > this.mMaxOffset)
            {
                offset = this.mMaxOffset;
            }

            let scaleRatio = 1 - (offset/this.mMaxOffset) * 0.1;
            return scaleRatio;
        }
    }
}

