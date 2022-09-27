import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameConfig } from '../../GameConfig';
import { MeassureSlider } from '../common/MeassureSlider';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_CreateShortScoreSetting')
export class Club_CreateShortScoreSetting extends BaseUI 
{
    @property(Label) 
    mBaseScore: Label = null;
    @property(MeassureSlider) 
    mMeassureSliderBaseScore: MeassureSlider = null;
    @property(ToggleBtn) 
    mButtonDoubbleToggle: ToggleBtn = null;


    InitParam()
    {

    }
    BindUI()
    {
        this.mMeassureSliderBaseScore.InitWithData(GameConfig.GetShortCreateRoomBaseScoreTitle(),
        GameConfig.GetShortCreateRoomBaseScoreValue(),(_value , _index)=>
        {
            this.mBaseScore.string = _value;
            HallData.GetInstance().Data_ClubRefreshShortBaseScore = _value;
            HallData.GetInstance().Data_Club_CreateTexasConfig.shortBaseScore = _index;
        })

        this.mButtonDoubbleToggle.ShowUnselected();
        this.mButtonDoubbleToggle.SetClickCallback((_value)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.buttonDouble = _value;
        });
    }
    RegDataNotify()
    {
        HallData.GetInstance().AddListener("Data_ClubCreateShortBaseScore",(_current , _before)=>
        {
            this.mMeassureSliderBaseScore.SetIndex(_current)
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateShortButtonDouble",(_current , _before)=>
        {
            this.mButtonDoubbleToggle.SetShowStauts(_current , true);
        },this);

        HallData.GetInstance().AddListener("Data_ClubCreateShortScoreMode",(_current , _before)=>
        {
            this.Show(_current == ShortGameScoreMode.AnteMode);
        },this);
        
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

