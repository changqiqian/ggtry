import { _decorator, Component, Node, Sprite, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { Gender, LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { Network } from '../../network/Network';
import { Tool } from '../../Tool';
import { BaseButton } from '../common/BaseButton';
import { LoginData } from './LoginData';
const { ccclass, property } = _decorator;

@ccclass('Login_SetUserInfo')
export class Login_SetUserInfo extends BaseUI 
{
    @property(Node) 
    mBG: Node = null;
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(Node) 
    mHeadBG: Node = null;
    @property(Sprite) 
    mHead: Sprite = null;
    @property(EditBox) 
    mNickNameEditBox: EditBox = null;
    @property(EditBox) 
    mInviteCodeEditBox: EditBox = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;

    onEnable()
    {
        this.mNickNameEditBox.string = "";
        this.mInviteCodeEditBox.string = "";
    }

    InitParam() 
    {
    }
    BindUI() 
    {
        this.MaxScreen(this.mBG);
        this.mNickNameEditBox.placeholder = Localization.GetString("00138");
        this.mInviteCodeEditBox.placeholder = Localization.GetString("00141");
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false);
        });

        this.mHeadBG.on(Node.EventType.TOUCH_END,this.OnEditHeadBtn.bind(this),this);
        this.mConfirmBtn.SetClickCallback(()=>
        {
            if(Tool.NickNameTest(this.mNickNameEditBox.string)==false)
            {
                return;
            }

            let headPicUrl = LocalPlayerData.Instance.Data_Head.mData;
            if(headPicUrl ==null) 
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00012"));
                return
            }

            // if(this.mInviteCodeEditBox.string != "")
            // {
            //     if(Tool.InviteCodeTest(this.mInviteCodeEditBox.string) == false)
            //     {
            //         return;
            //     }
            // }

            LocalPlayerData.Instance.Data_SupervisorInviteCode.mData = this.mInviteCodeEditBox.string;
            LocalPlayerData.Instance.Data_NickName.mData = this.mNickNameEditBox.string;
            UIMgr.Instance.ShowLayer("common","prefab/ResetPwdView");
        });
    }
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_Head.AddListenner(this,(_data)=>
        {
            if(_data == null)
            {
                return;
            }

            this.LoadLocalHead(_data,(_spriteFrame)=>
            {
                this.mHead.spriteFrame = _spriteFrame;
            });
        })
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    OnEditHeadBtn()
    {
        UIMgr.Instance.ShowLayer("common" , "prefab/HeadChoserView");
    }

}

