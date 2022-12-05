import { _decorator, Component, Node, Sprite, Label, UITransform, view, PageView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
import { Club_MemberNotifyWindow } from './Club_MemberNotifyWindow';
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
    @property(BaseButton) 
    mNotifyBtn: BaseButton = null;
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
    mData : ClubDetailsInfo = null;
    mLastTimeScale : number = null;
    mReviewOnly : boolean = false;
    InitParam()
    {
        let screenSize = view.getVisibleSize();
        this.mCenterX = screenSize.width / 2;
        this.mMaxOffset = this.node.getComponent(UITransform).width / 2;
    }
    BindUI()
    {
        this.mNotifyBtn.node.active = false;
        this.mEnterBtn.SetClickCallback(()=>
        {
            if(this.mReviewOnly)
            {
                return;
            }
            let currentScale = this.CalculateCurrentScaleRatio();
            if(currentScale == 1)
            {
                NetworkSend.Instance.EnterClub(this.mData.id);
            }
        });

        this.mNotifyBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("clubPage","prefab/Club_MemberNotifyWindow",true,(_script)=>
            {
                let tempScript = _script as Club_MemberNotifyWindow;
                tempScript.InitWithData(this.mData.id);
            },HallData.ClubUiTag);
        });

    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubApplyingNotify.AddListenner(this,(_data)=>
        {
            this.UpdateNewMemberNotifyUI(_data);
        });

        HallData.Instance.Data_ModifyClubInfo.AddListenner(this,(_data)=>
        {
            let clubInfo = _data;
            if(this.mData.id == clubInfo.id)
            {
                this.mData = clubInfo;
                this.UpdateUI();
            }
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        this.unscheduleAllCallbacks();
    }

    public InitWithData(_data : ClubDetailsInfo)
    {
        this.mData = _data;
        this.UpdateUI();
        this.UpdateNewMemberNotifyUI(true);
        this.schedule(this.ScaleLogic.bind(this),0.01);
    }
    
    UpdateNewMemberNotifyUI(_show : boolean)
    {
        if(this.mReviewOnly)
        {
            return;
        }
        if(this.mData == null)
        {
            return;
        }

        if(LocalPlayerData.Instance.Data_Uid.mData != this.mData.ownerId)
        {
            return;
        }
        if(_show)
        {
            this.mNotifyBtn.node.active = HallData.Instance.ApplyingNotifyContain(this.mData.id)
        }
    }


    UpdateUI()
    {
        this.mId.string = this.mData.id;
        let stamp = "texture/club/Stamp" +  this.mData.stamp;
        this.LoadSprite("common",stamp,(_spriteFrame)=>
        {
            this.mStamp.spriteFrame = _spriteFrame;
        });
        this.mOwnerTag.active = LocalPlayerData.Instance.Data_Uid.mData == this.mData.ownerId;
        this.mClubName.string = this.mData.name;
        this.mMemberCount.string = this.mData.memberCount + "";
        this.mCurrentTables.string = this.mData.tableCount + "";
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

    public SetReviewOnly(_value : boolean)
    {
        this.mReviewOnly = _value;
    }
}

