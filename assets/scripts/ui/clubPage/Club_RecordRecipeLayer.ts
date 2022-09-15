import { _decorator, Component, Node, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Club_RecordDetailSubPage, HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_RecordRecipeLayer')
export class Club_RecordRecipeLayer extends BaseUI 
{
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    InitParam()
    {

    }
    BindUI()
    {

    }
    RegDataNotify()
    {
        HallData.GetInstance().AddListener("Data_ClubRecordDetailSubPage",(_current , _before)=>
        {
            this.Show(_current == Club_RecordDetailSubPage.Recipe);
        },this);
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

