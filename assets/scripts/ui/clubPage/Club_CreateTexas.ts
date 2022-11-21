import { _decorator, Component, Node, EditBox, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { GameConfig } from '../../GameConfig';
import { NetworkSend } from '../../network/NetworkSend';
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
        this.OffsetHallTop();
    }
    BindUI()
    {
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false);
        })

        this.mNameEditBox.placeholder = Localization.GetString("00195");
        this.mNameEditBox.node.on('text-changed', (_param)=>
        {
            HallData.Instance.Data_Club_CreateTexasConfig.mData.gameName = this.mNameEditBox.string;
        }, this);

        this.AddSubView("clubPage","prefab/Club_CreateBasicOption",null,this.mScrollView.content);
        this.AddSubView("clubPage","prefab/Club_CreateTexasScoreSetting",null,this.mScrollView.content);
        this.AddSubView("clubPage","prefab/Club_CreateBringScoreSetting",null,this.mScrollView.content);
        this.AddSubView("clubPage","prefab/Club_CreateTableSetting",null,this.mScrollView.content);
        
        this.mSaveBtn.SetClickCallback(()=>
        {
            let currentModuleIndex = HallData.Instance.Data_ClubCurrentModuleIndex.mData;
            console.log("currentModuleIndex===" + currentModuleIndex);
            let saveResult = GameConfig.TryToSaveCreateRoomModule(HallData.Instance.Data_Club_CreateTexasConfig.mData , currentModuleIndex);
            if(saveResult)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00094"));
                HallData.Instance.Data_ClubRefreshGameModule.mData = true;
            }
            else
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00095"));
            }
        });

        this.mCreateBtn.SetClickCallback(()=>
        {
            let createConfig = HallData.Instance.Data_Club_CreateTexasConfig.mData;
            if(createConfig.gameName == "")
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00195"));
                return;
            }
            let clubGameInfo = HallData.Instance.ConvertCreateTexasConfigToProto(createConfig);
            clubGameInfo.clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
            NetworkSend.Instance.CreateClubTexas(clubGameInfo);
        });
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubCreateGameName.AddListenner(this,(_data)=>
        {
            this.mNameEditBox.string = _data;
        })
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

