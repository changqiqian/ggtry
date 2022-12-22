import { _decorator, Component, Node, Sprite, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Emoji, Emoji_Const, SelfEmoji } from '../../emoji/Emoji_Const';
import { Emoji_Item } from '../../emoji/Emoji_Item';
import { Emoji_SelfItem } from '../../emoji/Emoji_SelfItem';
const { ccclass, property } = _decorator;

@ccclass('Game_ProfileLayer')
export class Game_ProfileLayer extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mTotalGame: Label = null;
    @property(Label) 
    mTotalHands: Label = null;
    @property(Label) 
    mVPIP: Label = null;
    @property(Label) 
    mRaiseRate: Label = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    @property(ScrollView) 
    mScrollViewForSelf: ScrollView = null;
    
    private mIndex : number = null;
    mTargetUid: string = null;

    InitParam()
    {

    }
    BindUI()
    {
        // for(let i = Emoji.Chick ; i <= Emoji.Foot ; i++)
        // {
        //     this.LoadPrefab("emoji" , "prefab/Emoji_Item" , (_prefab)=>
        //     {
        //         let tempNode = instantiate(_prefab);
        //         this.mScrollView.content.addChild(tempNode);
        //         tempNode.getComponent(Emoji_Item).InitWithData(i , Emoji_Const.Cost);
        //     })
        // }

        // for(let i = SelfEmoji.Alarm ; i <= SelfEmoji.Mute ; i++)
        // {
        //     this.LoadPrefab("emoji" , "prefab/Emoji_SelfItem" , (_prefab)=>
        //     {
        //         let tempNode = instantiate(_prefab);
        //         this.mScrollViewForSelf.content.addChild(tempNode);
        //         tempNode.getComponent(Emoji_SelfItem).InitWithData(i);
        //     })
        // }

        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        })

        this.mScrollView.node.active = false;
        this.mScrollViewForSelf.node.active = false;
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

    public InitWithData(_index : number , _targetUid : string)
    {
        this.mIndex = _index;
        this.mTargetUid = _targetUid;

        this.mScrollView.node.active = false;
        this.mScrollViewForSelf.node.active = false;

        if(_targetUid == LocalPlayerData.Instance.Data_Uid.mData)
        {
            this.mScrollViewForSelf.node.active = true;
        }
        else
        {
            this.mScrollView.node.active = true;
        }

        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let playerInfo = gameData.GetPlayerInfoByUid(_targetUid);

        this.LoadLocalHead(parseInt(playerInfo.head),(_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });

        this.mName.string = playerInfo.nickName;
    }


}

