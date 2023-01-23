import { _decorator, Component, Node, ScrollView, Label, Tween, Widget, Vec3, UITransform, easing } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { NetworkSend } from '../../../network/NetworkSend';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_MatchInfoItem } from './Game_MatchInfoItem';
const { ccclass, property } = _decorator;

@ccclass('Game_MatchInfoLayer')
export class Game_MatchInfoLayer extends ListViewCtr<PlayerHistoryInfo> 
{

    @property(MovingShow) 
    mMovingShow: MovingShow = null;
    @property(Node) 
    mBG: Node = null;
    @property(Label) 
    mMatchName: Label = null;
    @property(Label) 
    mClubName: Label = null;
    @property(Label) 
    mCountDown: Label = null;

    @property(Label) 
    mInsAmount: Label = null;

    @property(ScrollView) 
    mScrollView: ScrollView = null;
    private mIndex : number = null;
    
    onEnable()
    {
       
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
        this.OffsetTop();
        this.AddTouchCloseEvent(this.mBG);
        this.mMovingShow.SetAnimationType(AnimationShowType.FromLeft);
        this.mMovingShow.SetRoot(this.node);
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

    public InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.BindData();
        this.OnDragTop();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;

        this.mMatchName.string = gameData.GetStaticData().gameName;
        if(gameStruct.mIsClubGame)
        {
            let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(gameStruct.mClubId);
            if(enterClub != null)
            {
                this.mClubName.string = enterClub.clubInfo.name;
            }
        }
        else
        {
            this.mClubName.string = Localization.GetString("00267");
        }

        gameData.Data_S2CCommonGetBringInListResp.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            if(this.mCurrentPage != _data.page)
            {
                return;
            }

            if(this.mPageSize != _data.pageSize)
            {
                return;
            }

            for(let i = 0 ; i < _data.playerHistoryInfo.length ; i++)
            {
                let current = _data.playerHistoryInfo[i];
                let index = this.mCurrentData.findIndex((_item) => _item.uid === current.uid);
                if(index < 0)
                {
                    this.InsertOneData(current);
                }
            }

            this.UpdateData(_data.totalMember);
        })
    }

    RenderEvent(_item: Node , _index: number)
    {
        let currentData = this.mCurrentData[_index];
        let bringInItem = _item.getComponent(Game_MatchInfoItem);
        bringInItem.InitWithData(_index , currentData);
    }

    Refresh()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        NetworkSend.Instance.GetBringInList(gameData.BuyInListSendMsgId(),
                                            gameStruct.mGameId,
                                            this.mCurrentPage, 
                                            this.mPageSize);

    }
}

