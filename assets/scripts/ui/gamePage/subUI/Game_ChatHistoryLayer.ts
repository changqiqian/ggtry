import { _decorator, Component, Node, ScrollView } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_ChattingSubLayer } from '../GameData';
import { Game_ChatHistoryItem } from './Game_ChatHistoryItem';
const { ccclass, property } = _decorator;

@ccclass('Game_ChatHistoryLayer')
export class Game_ChatHistoryLayer extends ListViewCtr<S2CCommonChatNotify> 
{
    mIndex : number = null;
    InitParam()
    {

    }
    BindUI()
    {

    }
    RegDataNotify()
    {

    }
    Refresh()
    {
        if(this.mIndex == null)
        {
            return;
        }
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let chatHistory = gameData.GetChatHistroy();
        this.ForceSetData(chatHistory);
        this.RefreshData();
    }

    RenderEvent(_item: Node , _index: number)
    {
        let data = this.mCurrentData[_index];
        let script = _item.getComponent(Game_ChatHistoryItem);
        script.InitWithData(data);
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
        gameData.Data_ChatingSubLayer.AddListenner(this , (_data)=>
        {
            this.node.active = _data == Game_ChattingSubLayer.ChatHistory
        });

        gameData.Data_S2CCommonChatNotify.AddListenner(this , (_data)=>
        {
            let chatHistory = gameData.GetChatHistroy();
            this.ForceSetData(chatHistory);
            this.RefreshData();
        });
    }
}

