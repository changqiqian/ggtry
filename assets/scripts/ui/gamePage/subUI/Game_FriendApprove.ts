import { _decorator, Component, Label, Node } from 'cc';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_FriendApproveItem } from './Game_FriendApproveItem';
const { ccclass, property } = _decorator;

@ccclass('Game_FriendApprove')
export class Game_FriendApprove extends ListViewCtr<any>  
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

        
    }

    Refresh()
    {

    }

    RenderEvent(_item: Node , _index: number)
    {
        _item.getComponent(Game_FriendApproveItem).InitWithData(this.mCurrentData[_index] , this.OnItemClicked);
    }

    OnItemClicked(_agree : boolean , _data : any)
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
    }
}

