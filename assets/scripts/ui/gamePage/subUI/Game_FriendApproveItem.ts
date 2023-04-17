import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { HTTP_FriendsRequestList } from '../../../network/NetworkHttp';
import { Localization } from '../../../base/Localization';
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

    @property(Label) 
    mTips: Label = null;

    mClickCallback : Function = null;
    mData  :HTTP_FriendsRequestList = null;
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
            this.ShowTips(true);
        });

        this.mRejectBtn.SetClickCallback(()=>
        {
            if(this.mClickCallback != null)
            {
                this.mClickCallback(false, this.mData);
            }
            this.ShowTips(false);
        });
        this.mAgreeBtn.Show(true);
        this.mRejectBtn.Show(true);
        this.mTips.node.active = false;
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
        this.mData = null;
    }

    public InitWithData(_data : HTTP_FriendsRequestList , _callback : Function)
    {
        this.mData = _data;
        this.mClickCallback = _callback;
        this.mName.string = _data.userName;
        this.mID.string = _data.userId;
        this.LoadHead(_data.headUrl,(_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });
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

