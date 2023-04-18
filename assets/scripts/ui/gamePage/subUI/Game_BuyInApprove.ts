import { _decorator, Component, Label, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { HTTP_ApproveStatus, HTTP_BuyInData, HTTP_BuyInStates, NetworkHttp } from '../../../network/NetworkHttp';
import { Game_BuyInApproveItem } from './Game_BuyInApproveItem';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
const { ccclass, property } = _decorator;

@ccclass('Game_BuyInApprove')
export class Game_BuyInApprove  extends ListViewCtr<HTTP_BuyInData>  
{
    @property(Label) 
    mGameID: Label = null;
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    private mIndex : number = null;

    onEnable()
    {

    }

    protected onDisable(): void 
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let ownnerId = gameData.GetOwnerId();
        NetworkHttp.Instance.PostBuyInRequest(HTTP_BuyInStates.Waiting , ownnerId , gameStruct.mGameId);
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
        gameData.Data_HTTPBuyInRequest.AddListenner(this,(_data)=>
        {
            this.mCurrentData = _data.data;
            this.RefreshData();
        });

        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.mGameID.string = "NO:" + _data.gameId;

        });
        
    }

    Refresh()
    {

    }

    RenderEvent(_item: Node , _index: number)
    {
        _item.getComponent(Game_BuyInApproveItem).InitWithData(this.mCurrentData[_index] , this.OnItemClicked);
    }

    OnItemClicked(_status : HTTP_ApproveStatus , _data : HTTP_BuyInData)
    {
        NetworkHttp.Instance.PostDealBuyInRequest(_status ,LocalPlayerData.Instance.Data_Uid.mData  ,_data.id.toString() , _data.gameId);
    }
}

