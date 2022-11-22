import { _decorator, Component, Node, ScrollView } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_ChattingSubLayer } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_ChatHistoryLayer')
export class Game_ChatHistoryLayer extends ListViewCtr<any> 
{
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
        MultipleTableCtr.GetGameDataByIndex(_index).Data_ChatingSubLayer.AddListenner(this , (_data)=>
        {
            this.node.active = _data == Game_ChattingSubLayer.ChatHistory
        });
    }
}

