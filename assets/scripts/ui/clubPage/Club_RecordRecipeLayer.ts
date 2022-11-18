import { _decorator, Component, Node, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import ListView from '../../UiTool/ListView';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { Club_RecordDetailSubPage, HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_RecordRecipeLayer')
export class Club_RecordRecipeLayer extends ListViewCtr<any> 
{



    BindUI()
    {

    }
    RegDataNotify()
    {

        HallData.Instance.Data_ClubRecordDetailSubPage.AddListenner(this,(_data)=>
        {
            this.Show(_data == Club_RecordDetailSubPage.Recipe);
        })
    }

    Refresh()
    {

    }

    RenderEvent(_item: Node , _index: number)
    {

    }
}

