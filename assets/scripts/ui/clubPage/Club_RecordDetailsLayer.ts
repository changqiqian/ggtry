import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_RecordDetailsLayer')
export class Club_RecordDetailsLayer extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(Node) 
    mToggleLayout: Node = null;
    @property(Node) 
    mSubLayer: Node = null;
    
    InitParam()
    {
    }
    BindUI()
    {
        for(let i = 0 ; i < this.mToggleLayout.children.length ; i++)
        {
            let currentToggle = this.mToggleLayout.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(HallData.Instance.Data_ClubRecordDetailSubPage, i);
        }

        this.AddSubView("clubPage" , "prefab/Club_RecordGeneralLayer" ,null , this.mSubLayer);
        this.AddSubView("clubPage" , "prefab/Club_RecordRecipeLayer" ,null , this.mSubLayer);

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
}

