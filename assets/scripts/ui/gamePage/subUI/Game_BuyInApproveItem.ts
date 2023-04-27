import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { HTTP_ApproveStatus, HTTP_BuyInData } from '../../../network/NetworkHttp';
import { Tool } from '../../../Tool';
import { Localization } from '../../../base/Localization';
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

    @property(Label) 
    mTips: Label = null;

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
            this.ShowTips(true);
        });

        this.mRejectBtn.SetClickCallback(()=>
        {
            if(this.mClickCallback != null)
            {
                this.mClickCallback(HTTP_ApproveStatus.Reject , this.mData);
            }
            this.ShowTips(false);
        });

        this.ResetUI();
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
        this.mAmount.string = Tool.ConvertMoneyTo_K(_data.amount) 
        this.LoadHead(_data.headUrl,(_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });


        if(_data.approvalStatus == ApprovalStatus.ApprovalStatus_Fail)
        {
            this.ShowTips(false);
        }
        else if(_data.approvalStatus == ApprovalStatus.ApprovalStatus_Success)
        {
            this.ShowTips(true);
        }
        else if(_data.approvalStatus == ApprovalStatus.ApprovalStatus_Wait)
        {
            this.ResetUI();
        }
    }

    ResetUI()
    {
        this.mAgreeBtn.Show(true);
        this.mRejectBtn.Show(true);
        this.mTips.node.active = false;
    }

    ShowTips(_value:boolean)
    {
        this.mAgreeBtn.Show(false);
        this.mRejectBtn.Show(false);
        this.mTips.node.active = true;
        if(_value)
        {
            this.mTips.string = Localization.GetString("00107");
        }
        else
        {
            this.mTips.string = Localization.GetString("00108");
        }

    }
}

