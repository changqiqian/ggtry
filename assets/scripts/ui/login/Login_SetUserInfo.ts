import { _decorator, Component, Node, Sprite, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { Gender, LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { Network } from '../../network/Network';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Login_SetUserInfo')
export class Login_SetUserInfo extends BaseUI 
{
    @property(Node) 
    mHeadBG: Node = null;
    @property(Sprite) 
    mHead: Sprite = null;
    @property(EditBox) 
    mNickNameEditBox: EditBox = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;

    onEnable()
    {
        this.mNickNameEditBox.string = "";
    }
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mHeadBG.on(Node.EventType.TOUCH_END,this.OnEditHeadBtn.bind(this),this);
        this.mConfirmBtn.SetClickCallback(()=>
        {
            if(this.mNickNameEditBox.string.length == 0) 
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00011"));
                return
            }

            if(this.mNickNameEditBox.string.indexOf(" ") != -1) 
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00015"));
                return
            }

            let headPicUrl = LocalPlayerData.Instance.Data_PhotoUrl.mData;
            if(headPicUrl ==null || headPicUrl === '') 
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00012"));
                return
            }

        });
    }
    RegDataNotify() 
    {


        LocalPlayerData.Instance.Data_PhotoUrl.AddListenner(this,(_data)=>
        {
            if(_data == null || _data == "")
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
        this.ShowLayer("common" , "prefab/HeadChoserView");
    }

}

