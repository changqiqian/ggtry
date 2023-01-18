import { _decorator, Component, Node, EditBox, Label, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_CreateLayer')
export class Club_CreateLayer extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(BaseButton) 
    mLogoBtn: BaseButton = null;
    @property(BaseButton) 
    mStampBtn: BaseButton = null;
    @property(EditBox) 
    mNameEditBox: EditBox = null;
    @property(Label) 
    mNameLimit: Label = null;
    @property(EditBox) 
    mProfileEditBox: EditBox = null;
    @property(Label) 
    mProfileLimit: Label = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    @property(Label) 
    mClubLimit: Label = null;


    private mNameMaxLength : number = 20;
    private mBriefMaxLength : number = 60;
    onEnable()
    {
        HallData.Instance.Data_ClubLogoIndex.mData = 0;
        HallData.Instance.Data_ClubStampIndex.mData = 0;

        this.mNameEditBox.string = "";
        this.mProfileEditBox.string = "";
    }

    InitParam()
    {

    }
    BindUI()
    {
        this.mNameEditBox.placeholder = Localization.GetString("00192");
        this.mProfileEditBox.placeholder = Localization.GetString("00193");
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });

        this.mLogoBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("clubPage","prefab/Club_LogoChoseLayer");
        });

        this.mStampBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("clubPage","prefab/Club_StampChoseLayer");
        });

        this.mNameEditBox.node.on('text-changed', (_param)=>
        {
            this.UpdateNameLimit();
        }, this);

        this.mProfileEditBox.node.on('text-changed', (_param)=>
        {
            this.UpdateBriefLimit();
        }, this);

        this.mConfirmBtn.SetClickCallback(()=>
        {
            NetworkSend.Instance.CreateClub(HallData.Instance.Data_ClubLogoIndex.mData,
                HallData.Instance.Data_ClubStampIndex.mData,this.mNameEditBox.string,
                this.mProfileEditBox.string);
            this.CloseAsWindow();
        });
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubLogoIndex.AddListenner(this,(_data)=>
        {
            let logoName = "Logo" + _data;
            this.LoadSprite("common" , "texture/club/" + logoName , (_spriteFrame)=>
            {
                this.mLogoBtn.SetSprite(_spriteFrame)
            })
        });

        HallData.Instance.Data_ClubStampIndex.AddListenner(this,(_data)=>
        {
            let stampName = "Stamp" + _data;
            this.LoadSprite("common" , "texture/club/" + stampName , (_spriteFrame)=>
            {
                this.mStampBtn.SetSprite(_spriteFrame)
            })
        })
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    UpdateNameLimit()
    {
        this.mNameLimit.string = this.mNameEditBox.string.length  + "/" +  this.mNameMaxLength;
    }
    UpdateBriefLimit()
    {
        this.mProfileLimit.string = this.mProfileEditBox.string.length  + "/" +  this.mBriefMaxLength;
    }
}

