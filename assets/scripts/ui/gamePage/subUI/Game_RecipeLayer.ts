import { _decorator, Component, Node } from 'cc';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { UIMgr } from '../../../base/UIMgr';
import { NetworkHttp } from '../../../network/NetworkHttp';
import { NetworkSend } from '../../../network/NetworkSend';
import { Tool } from '../../../Tool';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { BriefRecordItem } from '../../common/BriefRecordItem';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_CashReplay } from './Game_CashReplay';
const { ccclass, property } = _decorator;

@ccclass('Game_RecipeLayer')
export class Game_RecipeLayer  extends ListViewCtr<SimpleReplay>  
{

    @property(MovingShow) 
    mMovingShow: MovingShow = null;

    @property(Node) 
    mBG: Node = null;

    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    private mIndex : number = null;

    onEnable()
    {

    }

    onDisable()
    {
        UIMgr.Instance.DeleteUIByTarget(this);
    }

    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }

    BindUI()
    {
        this.AddTouchCloseEvent(this.mBG);
        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);
        this.mMovingShow.SetShowAnimationCallback(()=>
        {
            //this.OnDragTop();
        })

        this.mCloseBtn.SetClickCallback(()=>
        {
            this.mMovingShow.HideAnimation();
        })
    }

    RegDataNotify()
    {

    }
    CustmoerDestory()
    {
        super.CustmoerDestory();
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonReplayListResp.Clear();
        gameData.Data_S2CCommonReplayDetailsResp.Clear();
        gameData.RemoveAllDataListennerByTarget(this);
    }
    

    public InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonReplayListResp.AddListenner(this,(_data)=>
        {
            let list = _data.data;
            if(this.mCurrentPage != _data.page)
            {
                return;
            }

            for(let i = 0 ; i < list.length ; i++)
            {
                let current = list[i];
                if(current.winnerSettlementResult == null)
                {
                    continue;
                }
                let index = this.mCurrentData.findIndex((_item) => _item.index === current.index);
                if(index < 0)
                {
                    this.InsertOneData(current);
                }
            }
            this.UpdateData(_data.totalNum);
        });

        gameData.Data_S2CCommonReplayDetailsResp.AddListenner(this,(_data)=>
        {
            UIMgr.Instance.ShowLayer("gamePage","prefab/Game_CashReplay",true,(_script)=>
            {
                let tempScript = _script as Game_CashReplay;
                tempScript.InitWithData(_data.data);
            });      
        });
    }

    Refresh()
    {
        this.mPageSize = 10;
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let msgId = gameData.ReplayListMsgId();
        NetworkSend.Instance.GetReplayList(msgId , gameStruct.mGameId , this.mCurrentPage , this.mPageSize);
    }

    RenderEvent(_item: Node , _index: number)
    {
        _item.getComponent(BriefRecordItem).InitWithData(this.mCurrentData[_index] , this.OnVedioBtn);
    }

    OnVedioBtn(_gameId : string , _index : number , _date : string)
    {
        let gameStruct = MultipleTableCtr.FindGameStructByGameId(_gameId);
        let gameData = gameStruct.mGameData;
        let msgId = gameData.ReplayDetailMsgId();

        NetworkSend.Instance.GetReplayDetail(msgId,gameStruct.mGameId,_index);
    }

}

