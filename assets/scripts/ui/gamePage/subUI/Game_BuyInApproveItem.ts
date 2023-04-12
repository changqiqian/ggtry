import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { HTTP_ApproveStatus, HTTP_BuyInData } from '../../../network/NetworkHttp';
import { Tool } from '../../../Tool';
const { ccclass, property } = _decorator;

@ccclass('Game_BuyInApproveItem')
export class Game_BuyInApproveItem extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mID: Label = null;
    @property(Label) 
    mAmount: Label = null;
    @property(BaseButton) 
    mAgreeBtn: BaseButton = null;
    @property(BaseButton) 
    mRejectBtn: BaseButton = null;

    mClickCallback : Function = null;
    mData : HTTP_BuyInData = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mAgreeBtn.SetClickCallback(()=>
        {
            if(this.mClickCallback != null)
            {
                this.mClickCallback(HTTP_ApproveStatus.Agree , this.mData);
            }

        });

        this.mRejectBtn.SetClickCallback(()=>
        {
            if(this.mClickCallback != null)
            {
                this.mClickCallback(HTTP_ApproveStatus.Reject , this.mData);
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

    public InitWithData(_data : HTTP_BuyInData , _callback : Function)
    {
        this.mData = _data;
        this.mClickCallback = _callback;
        this.mName.string = _data.userName;
        this.mID.string = _data.userId;
        this.mAmount.string = Tool.ConvertMoney_S2C(_data.amount) + "";
        this.LoadHead(_data.headUrl,(_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });
    }
}

