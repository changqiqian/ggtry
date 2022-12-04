import { _decorator, Component, Node, ScrollView } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_ChattingSubLayer } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_ChatHistoryLayer')
export class Game_ChatHistoryLayer extends ListViewCtr<any> 
{
    mIndex : number ;
    mInited : boolean = false;
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

    }

    RenderEvent(_item: Node , _index: number)
    {

    }

    public InitWithData(_index : number)
    {
        if(this.mInited == true)
        {
            return;
        }

        this.mInited = true;
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
    }
}

