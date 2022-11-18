import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import ListView from '../../UiTool/ListView';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { HallData, Mtt_InfoSubPage } from '../hall/HallData';
import { Mtt_TableInfoItem } from './Mtt_TableInfoItem';
const { ccclass, property } = _decorator;

@ccclass('Mtt_TableInfoPage')
export class Mtt_TableInfoPage extends ListViewCtr<any> 
{
    BindUI() 
    {
        this.node.active = false;
    }
    
    RegDataNotify() 
    {
        HallData.Instance.Data_MttInfoSubPage.AddListenner(this,(_data)=>
        {
            this.Show(_data == Mtt_InfoSubPage.TablePage);
        })
    }

    Refresh()
    {

    }

    RenderEvent(_item: Node , _index: number)
    {

    }
}

