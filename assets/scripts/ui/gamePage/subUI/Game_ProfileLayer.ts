import { _decorator, Component, Node, Sprite, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { Emoji, Emoji_Const } from '../../emoji/Emoji_Const';
import { Emoji_Item } from '../../emoji/Emoji_Item';
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
    
    
    InitParam()
    {

    }
    BindUI()
    {
        for(let i = Emoji.Chick ; i < Emoji.Total ; i++)
        {
            this.LoadPrefab("emoji" , "prefab/Emoji_Item" , (_prefab)=>
            {
                let tempNode = instantiate(_prefab);
                this.mScrollView.content.addChild(tempNode);
                tempNode.getComponent(Emoji_Item).InitWithData(i , Emoji_Const.Cost);
            })
        }
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
}

