import { _decorator, Component, Node, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import ListView from '../../UiTool/ListView';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Club_AssetsRecord')
export class Club_AssetsRecord extends ListViewCtr<any> 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;


    BindUI()
    {
        this.OffsetHallTop();
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false);
        });

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
    
}

