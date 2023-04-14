import { _decorator, Component, EditBox, Label, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_FriendsShare')
export class Game_FriendsShare extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Label) 
    mGameID: Label = null;
    @property(BaseButton) 
    mCopyGameIDBtn: BaseButton = null;
    @property(Label) 
    mLink: Label = null;
    @property(BaseButton) 
    mCopyLinkBtn: BaseButton = null;
    @property(EditBox) 
    mEditBox: EditBox = null;
    @property(BaseButton) 
    mFriendsListBtn: BaseButton = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    mIndex : number = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });
        this.mCopyGameIDBtn.SetClickCallback(()=>
        {

        });
        this.mCopyLinkBtn.SetClickCallback(()=>
        {

        });
        this.mFriendsListBtn.SetClickCallback(()=>
        {

        });
        this.mConfirmBtn.SetClickCallback(()=>
        {

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

    }

    InitWithData(_index : number)
    {
        this.mIndex = _index;

        if(this.CheckInitFlag())
        {
            return;
        }
        this.BindData();
    }

    BindData()
    {

    }
}

