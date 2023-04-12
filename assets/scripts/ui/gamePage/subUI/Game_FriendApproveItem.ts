import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_FriendApproveItem')
export class Game_FriendApproveItem extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mID: Label = null;
    @property(BaseButton) 
    mAgreeBtn: BaseButton = null;
    @property(BaseButton) 
    mRejectBtn: BaseButton = null;

    mClickCallback : Function = null;
    mData  = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mAgreeBtn.SetClickCallback(()=>
        {
            if(this.mClickCallback != null)
            {
                this.mClickCallback(true , this.mData);
            }

        });

        this.mRejectBtn.SetClickCallback(()=>
        {
            if(this.mClickCallback != null)
            {
                this.mClickCallback(false, this.mData);
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
        this.mClickCallback = null;
    }

    public InitWithData(_data : any , _callback : Function)
    {
        this.mData = _data;
        this.mClickCallback = _callback;

    }
}

