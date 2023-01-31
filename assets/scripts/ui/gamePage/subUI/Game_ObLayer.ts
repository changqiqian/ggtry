import { _decorator, Component, Node, Tween, Vec3, UITransform, easing, Widget, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { NetworkSend } from '../../../network/NetworkSend';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { ToggleBtn } from '../../common/ToggleBtn';
import { Game_ObItem } from './Game_ObItem';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { GameConfig } from '../../../GameConfig';
const { ccclass, property } = _decorator;

@ccclass('Game_ObLayer')
export class Game_ObLayer extends ListViewCtr<PlayerInfo> 
{
    @property(Node) 
    mBG: Node = null;
    @property(MovingShow) 
    mMovingShow: MovingShow = null;

    @property(Label) 
    mObNum: Label = null;
    @property(ToggleBtn) 
    mMusicToggle: ToggleBtn = null;
    @property(ToggleBtn) 
    mChatToggle: ToggleBtn = null;
    private mIndex : number = null;

    

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
        this.mMovingShow.SetAnimationType(AnimationShowType.FromRight);
        this.mMovingShow.SetRoot(this.node);

        this.mMusicToggle.SetClickCallback((_data)=>
        {
            LocalPlayerData.Instance.Data_BGMSetting.mData = _data;
        });

        this.mChatToggle.SetClickCallback((_data)=>
        {
            LocalPlayerData.Instance.Data_ChatSetting.mData = _data;
        });
    }
    RegDataNotify()
    {
        LocalPlayerData.Instance.Data_BGMSetting.AddListenner(this,(_data)=>
        {
            this.mMusicToggle.SetShowStauts(_data);
            GameConfig.SaveBGMSetting(_data);
        })

        LocalPlayerData.Instance.Data_ChatSetting.AddListenner(this,(_data)=>
        {
            this.mChatToggle.SetShowStauts(_data);
            GameConfig.SaveChatSetting(_data);
        })
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


        gameData.Data_S2CCommonGetObListResp.AddListenner(this,(_data)=>
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

            for(let i = 0 ; i < _data.observer.length ; i++)
            {
                let current = _data.observer[i];
                let index = this.mCurrentData.findIndex((_item) => _item.uid === current.uid);
                if(index < 0)
                {
                    this.InsertOneData(current);
                }
            }
            this.mObNum.string = _data.totalMember + "";

            this.UpdateData(_data.totalMember);
        })
    }

    Refresh()
    {
        if(this.mIndex == null)
        {
            return;
        }
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        NetworkSend.Instance.GetObList(gameData.ObListSendMsgId(),gameStruct.mGameId ,this.mCurrentPage,this.mPageSize)
    }

    RenderEvent(_item: Node , _index: number)
    {
        let currentData = this.mCurrentData[_index];
        let obItem = _item.getComponent(Game_ObItem);
        obItem.InitWithData(currentData);
    }
}

