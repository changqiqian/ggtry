import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import { BaseButton } from '../common/BaseButton';
import { ToggleBtn } from '../common/ToggleBtn';
import { Club_RecordDetailSubPage, HallData } from '../hall/HallData';
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
        this.OffsetHallTop();
    }
    BindUI()
    {
        for(let i = 0 ; i < this.mToggleLayout.children.length ; i++)
        {
            let currentToggle = this.mToggleLayout.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(HallData.Instance.Data_ClubRecordDetailSubPage, i);
        }

        this.mBackBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.DeleteUIByTarget(this);
        });

        this.AddSubView("clubPage" , "prefab/Club_RecordGeneralLayer" ,null , this.mSubLayer);
        this.AddSubView("clubPage" , "prefab/Club_RecordRecipeLayer" ,null , this.mSubLayer);
        HallData.Instance.Data_ClubRecordDetailSubPage.mData = Club_RecordDetailSubPage.General;
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

