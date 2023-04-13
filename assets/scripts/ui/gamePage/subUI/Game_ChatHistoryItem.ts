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
        this.LoadHead(_chatMsg.head,(_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });

        this.mName.string = _chatMsg.playerName;
        this.mContent.string = _chatMsg.content;
        let isSelf = _chatMsg.actionUid == LocalPlayerData.Instance.Data_Uid.mData
        if(isSelf)
        {
            this.mContent.color = Color.WHITE;
            this.mName.color = new Color(177,140,68);
        }
        else
        {
            this.mContent.color = new Color(146,159,176);
            this.mName.color = new Color(86,191,141);
        }
    }
}

