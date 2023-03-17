import { _decorator, Component, Node, Sprite, Label, Color } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
const { ccclass, property } = _decorator;

@ccclass('Game_ChatHistoryItem')
export class Game_ChatHistoryItem extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mContent: Label = null;
    
    InitParam()
    {

    }
    BindUI()
    {

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


    public InitWithData(_chatMsg : S2CCommonChatNotify)
    {
        let head = parseInt(_chatMsg.head);
        this.LoadLocalHead(head,(_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });

        this.mName.string = _chatMsg.playerName;
        this.mContent.string = _chatMsg.content;
        let isSelf = _chatMsg.actionUid == LocalPlayerData.Instance.Data_Uid.mData
        if(isSelf)
        {
            this.mContent.color = new Color(146,150,171);
        }
        else
        {
            this.mContent.color = Color.WHITE;
        }
    }
}

