import { _decorator, Component, EditBox, Label, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { UIMgr } from '../../../base/UIMgr';
import { Game_FriendsList } from './Game_FriendsList';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Tool } from '../../../Tool';
import { NetworkHttp } from '../../../network/NetworkHttp';
import { GameConfig } from '../../../GameConfig';
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

    protected onEnable(): void 
    {
        this.mEditBox.string = "";
    }

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
            Tool.CopyText(this.mGameID.string);
        });
        this.mCopyLinkBtn.SetClickCallback(()=>
        {
            Tool.CopyText(this.mLink.string);
        });
        this.mFriendsListBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("gamePage","prefab/Game_FriendsList",true,(_script)=>
            {
                let tempScript = _script as Game_FriendsList;
                tempScript.InitWithData(this.mIndex);
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });
        this.mConfirmBtn.SetClickCallback(()=>
        {
            if(Tool.IdTest(this.mEditBox.string))
            {
                let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
                let IdList = new Array<string>();
                IdList.push(this.mEditBox.string);
                NetworkHttp.Instance.PostInviteFriends( IdList, gameStruct.mGameId);
            }
        });

        this.mLink.string = GameConfig.NetConfig.HOME_URL;
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

