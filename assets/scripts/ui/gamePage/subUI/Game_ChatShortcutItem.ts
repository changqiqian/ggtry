import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { NetworkSend } from '../../../network/NetworkSend';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_ChatShortcutItem')
export class Game_ChatShortcutItem extends BaseUI 
{
    @property(BaseButton) 
    mBtn: BaseButton = null;

    mIndex : number ;
    InitParam()
    {

    }
    BindUI()
    {
        this.mBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            if(gameStruct != null)
            {
                let content = this.mBtn.GetTitle();
                let gameData = gameStruct.mGameData;
                NetworkSend.Instance.SendChat(gameData.ChatSendMsgId(),gameStruct.mGameId,content);
            }
        })

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

    public InitWithData(_index : number ,  _content :string)
    {
        this.mBtn.SetTitle(_content);
        this.mIndex = _index;
    }
}

