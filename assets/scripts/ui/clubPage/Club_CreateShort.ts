import { _decorator, Component, Node, EditBox, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_CreateShort')
export class Club_CreateShort extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(EditBox) 
    mNameEditBox: EditBox = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;

    mShortSetting : BaseUI = null;
    mTexasSetting : BaseUI = null;
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

        this.mNameEditBox.node.on('text-changed', (_param)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.gameName = this.mNameEditBox.string;
        }, this);

        this.AddSubView("clubPage","prefab/Club_CreateBasicOption",null,this.mScrollView.content);
        this.AddSubView("clubPage","prefab/Club_ShortScoreMode",null,this.mScrollView.content);
        this.AddSubView("clubPage","prefab/Club_CreateShortScoreSetting",(_script)=>
        {
            this.mShortSetting = _script;
        },this.mScrollView.content);
        this.AddSubView("clubPage","prefab/Club_CreateTexasScoreSetting",(_script)=>
        {
            this.mTexasSetting = _script;
        },this.mScrollView.content);
        this.AddSubView("clubPage","prefab/Club_CreateBringScoreSetting",null,this.mScrollView.content);
        this.AddSubView("clubPage","prefab/Club_CreateTableSetting",null,this.mScrollView.content);
        
    }
    RegDataNotify()
    {
        HallData.GetInstance().AddListener("Data_ClubCreateGameName",(_current , _before)=>
        {
            this.mNameEditBox.string = _current;
        },this);

        this.scheduleOnce(this.DelayRegDataNotify.bind(this),0);
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    DelayRegDataNotify()
    {
        HallData.GetInstance().AddListener("Data_ClubCreateShortScoreMode",(_current , _before)=>
        {
            this.mShortSetting.Show(false);
            this.mTexasSetting.Show(false);
            if(_current == PokerLife.Club.ShortScoreMode.AnteMode)
            {
                this.mShortSetting.Show(true);
            }
            else if(_current == PokerLife.Club.ShortScoreMode.BlindMode)
            {
                this.mTexasSetting.Show(true);
            }
        },this);
    }
}

