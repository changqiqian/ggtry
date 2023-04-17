import { _decorator, Component, Label, Node } from 'cc';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_FriendApproveItem } from './Game_FriendApproveItem';
import { HTTP_FriendsRequestList, NetworkHttp } from '../../../network/NetworkHttp';
const { ccclass, property } = _decorator;

@ccclass('Game_FriendApprove')
export class Game_FriendApprove extends ListViewCtr<HTTP_FriendsRequestList>  
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    private mIndex : number = null;

    onEnable()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }

    public InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.ResetPage();
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_HTTP_FriendsRequestListResponse.AddListenner(this,(_data)=>
        {
            this.mCurrentData = _data.data;
            this.RefreshData();
        });
        
    }

    Refresh()
    {

    }

    RenderEvent(_item: Node , _index: number)
    {
        _item.getComponent(Game_FriendApproveItem).InitWithData(this.mCurrentData[_index] , this.OnItemClicked);
    }

    OnItemClicked(_agree : boolean , _data : HTTP_FriendsRequestList)
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);

        if(_agree)
        {
            NetworkHttp.Instance.GetAgreeFriendsRequest(gameStruct.mGameId , _data.userId);
        }
        else
        {
            NetworkHttp.Instance.GetRejectFriendsRequest(gameStruct.mGameId , _data.userId);
        }

    }
}

