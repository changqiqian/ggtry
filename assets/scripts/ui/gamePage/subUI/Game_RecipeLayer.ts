import { _decorator, Component, Node } from 'cc';
import { UIMgr } from '../../../base/UIMgr';
import { NetworkSend } from '../../../network/NetworkSend';
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
            this.OnDragTop();
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
            let coreData : SimpleReplayData = _data.data;
            if(this.mCurrentPage != coreData.pageNum)
            {
                return;
            }

            for(let i = 0 ; i < coreData.list.length ; i++)
            {
                let current = _data.list[i];
                let index = this.mCurrentData.findIndex((_item) => _item.index === current.index);
                if(index < 0)
                {
                    this.InsertOneData(current);
                }
            }
            this.UpdateData(_data.total);
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
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let msgId = gameData.ReplayDetailMsgId();
        NetworkSend.Instance.GetReplayDetail( msgId,_gameId,_index);
    }

}

