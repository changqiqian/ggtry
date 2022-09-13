import { _decorator, Component, Node, EditBox, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { GameConfig } from '../../GameConfig';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
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
    @property(BaseButton) 
    mSaveBtn: BaseButton = null;
    @property(BaseButton) 
    mCreateBtn: BaseButton = null;
    InitParam()
    {
        
    }
    BindUI()
    {
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false);
        })

        this.mNameEditBox.node.on('text-changed', (_param)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.gameName = this.mNameEditBox.string;
        }, this);

        this.AddSubView("clubPage","prefab/Club_CreateBasicOption",null,this.mScrollView.content);
        this.AddSubView("clubPage","prefab/Club_CreateTexasScoreSetting",null,this.mScrollView.content);
        this.AddSubView("clubPage","prefab/Club_CreateBringScoreSetting",null,this.mScrollView.content);
        this.AddSubView("clubPage","prefab/Club_CreateTableSetting",null,this.mScrollView.content);
        
        this.mSaveBtn.SetClickCallback(()=>
        {
            let currentModuleIndex = HallData.GetInstance().Data_ClubCurrentModuleIndex;
            let saveResult = GameConfig.TryToSaveCreateRoomModule(HallData.GetInstance().Data_Club_CreateTexasConfig , currentModuleIndex);
            if(saveResult)
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00094"));
                HallData.GetInstance().Data_ClubRefreshGameModule = true;
            }
            else
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00095"));
            }
        });

        this.mCreateBtn.SetClickCallback(()=>
        {

        });
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

