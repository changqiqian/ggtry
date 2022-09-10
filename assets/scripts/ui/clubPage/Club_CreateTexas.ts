import { _decorator, Component, Node, EditBox, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { Club_GameCurrencyType, Club_TaxType, HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_CreateTexas')
export class Club_CreateTexas extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(EditBox) 
    mNameEditBox: EditBox = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;

    InitParam()
    {
        HallData.GetInstance().ResetCreateTexasRoomParam();
    }
    BindUI()
    {
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false);
        })

        this.AddSubView("clubPage","prefab/Club_CreateBasicOption",null,this.mScrollView.content);
        // this.AddSubView("clubPage","prefab/Club_CreateTexasScoreSetting",null,this.mScrollView.content);
        // this.AddSubView("clubPage","prefab/Club_CreateTableSetting",null,this.mScrollView.content);
        
    }
    RegDataNotify()
    {
        HallData.GetInstance().AddListener("Data_ClubCreateGameName",(_current , _before)=>
        {
            this.mNameEditBox.string = _current;
        },this);
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

