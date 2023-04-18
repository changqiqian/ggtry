import { _decorator, Component, Node } from 'cc';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { HTTP_FriendsList, NetworkHttp } from '../../../network/NetworkHttp';
import { Game_FriendItem } from './Game_FriendItem';
import { UIMgr } from '../../../base/UIMgr';
import { Localization } from '../../../base/Localization';
const { ccclass, property } = _decorator;

@ccclass('Game_FriendsList')
export class Game_FriendsList extends ListViewCtr<HTTP_FriendsList>  
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(BaseButton) 
    mDeleteBtn: BaseButton = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    private mIndex : number = null;
    onEnable()
    {

    }

    protected onDisable(): void 
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        NetworkHttp.Instance.GetAddFriendsRequestList(gameStruct.mGameId);
    }

    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        })
        this.mDeleteBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let IdList = this.GetSelectedFriends();
            if(IdList.length == 0)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00416"));
                return;
            }
            NetworkHttp.Instance.PostDeleteFriends( IdList, gameStruct.mGameId);
        })
        this.mConfirmBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let IdList = this.GetSelectedFriends();
            if(IdList.length == 0)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00416"));
                return;
            }
            NetworkHttp.Instance.PostInviteFriends( IdList, gameStruct.mGameId);
        })
    }

    GetSelectedFriends() : Array<string>
    {
        let result : Array<string> = new Array<string>();
        for(let i = 0 ; i < this.mCurrentData.length ; i++)
        {
            let current = this.mCurrentData[i];
            if(current.selected)
            {
                result.push(current.userId);
            }
        }
        return result;
    }
    

    RegDataNotify()
    {

    }


    public InitWithData(_index : number)
    {
        this.mIndex = _index;
        this.OnDragTop();
        if(this.CheckInitFlag())
        {
            return;
        }
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_HTTP_FriendsData.AddListenner(this,(_data)=>
        {
            let list = _data.list;
            if(this.mCurrentPage != _data.pageNum)
            {
                return;
            }

            for(let i = 0 ; i < list.length ; i++)
            {
                let current = list[i];
                let index = this.mCurrentData.findIndex((_item) => _item.userId === current.userId);
                if(index < 0)
                {
                    this.InsertOneData(current);
                }
            }
            this.UpdateData(_data.total);
        });

        gameData.Data_HTTP_RefreshFriendList.AddListenner(this , (_data)=>
        {
            if(_data)
            {
                this.OnDragTop();
            }
        });
    }

    Refresh()
    {
        this.mPageSize = 10;
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        NetworkHttp.Instance.GetFriendsList(gameStruct.mGameId , this.mCurrentPage , this.mPageSize);
    }

    RenderEvent(_item: Node , _index: number)
    {
        _item.getComponent(Game_FriendItem).InitWithData(this.mCurrentData[_index] , _index, this.OnItemClicked.bind(this));
    }

    OnItemClicked(_selected : boolean , _index: number )
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        this.mCurrentData[_index].selected = _selected;
    }
}

