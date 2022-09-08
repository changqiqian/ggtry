import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LanguageType, Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { SceneType, UIMgr } from '../../base/UIMgr';
import { GameConfig } from '../../GameConfig';

import { BaseButton } from '../common/BaseButton';
import { TipsWindow } from '../common/TipsWindow';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData, Mtt_InfoSubPage } from '../hall/HallData';
import { Mtt_AttendPage } from './Mtt_AttendPage';
import { Mtt_RegisterFee } from './Mtt_RegisterFee';
const { ccclass, property } = _decorator;

@ccclass('Mtt_InfoPage')
export class Mtt_InfoPage extends BaseUI 
{
    @property(Label) 
    mStatusDescribe: Label = null;
    @property(Label) 
    mCountDown: Label = null;
    @property(Node) 
    mManualNode: Node = null;
    @property(BaseButton) 
    mManualStartBtn: BaseButton = null;
    @property(Label) 
    mStartTime: Label = null;
    @property(Node) 
    mLiveTag: Node = null;
    @property(BaseButton) 
    mDismissBtn: BaseButton = null;
    @property(BaseButton) 
    mAccessBtn: BaseButton = null;

    @property(Node) 
    mBinldUpInfo: Node = null;
    @property(Node) 
    mLateRegInfo: Node = null;
    @property(Node) 
    mCurrentPlayerinfo: Node = null;

    @property(Node) 
    mRegFee: Node = null;
    @property(Node) 
    mRebuyFee: Node = null;
    @property(Node) 
    mGuaranteed: Node = null;
    @property(Node) 
    mCurrentLevel: Node = null;
    @property(Node) 
    mNextLevel: Node = null;
    @property(Node) 
    mAvgStacks: Node = null;
    @property(Node) 
    mNextBreakTime: Node = null;
    @property(Node) 
    mMinMaxPlayer: Node = null;
    @property(Node) 
    mTalbelSeat: Node = null;
    @property(Node) 
    mStartChips: Node = null;
    @property(Node) 
    mStartBlind: Node = null;
    @property(Node) 
    mBreakTime: Node = null;
    @property(Node) 
    mKeepTop: Node = null;

    @property(BaseButton) 
    mObBtn: BaseButton = null;
    @property(BaseButton) 
    mRebuy: BaseButton = null;
    @property(BaseButton) 
    mAttendBtn: BaseButton = null;

    InitParam() 
    {

    }

    BindUI() 
    {
        this.node.active = false;

        this.mObBtn.SetClickCallback(()=>
        {

        });

        this.mRebuy.SetClickCallback(()=>
        {

        });

        this.mAttendBtn.SetClickCallback(()=>
        {

        });

        this.mDismissBtn.SetClickCallback(()=>
        {
            this.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.GetString("00046");
                tempScript.SetTips(tips);
                tempScript.SetCallback(()=>
                {
                })
            })
            
        });

        this.mAccessBtn.SetClickCallback(()=>
        {
        });

        this.mManualStartBtn.SetClickCallback(()=>
        {
            this.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.GetString("00047");
                tempScript.SetTips(tips);
                tempScript.SetCallback(()=>
                {
                })
            })

            
        });

        let BlindInfoBtn = this.mBinldUpInfo.getChildByName("BlindUpBtn").getComponent(BaseButton);
        BlindInfoBtn.SetClickCallback(()=>
        {
        });

        this.mAvgStacks.active = false;
        this.mCurrentLevel.active = false;
        this.mNextLevel.active = false;
        this.mNextBreakTime.active = false;
    }


    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_MttInfoSubPage",(_current , _before)=>
        {
            this.Show(_current == Mtt_InfoSubPage.InfoPage);
            if(_current == Mtt_InfoSubPage.InfoPage)
            {
      
            }
        },this);
       

       
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {
        this.unscheduleAllCallbacks();
    }

}

