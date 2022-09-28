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
            HallData.Instance.Data_ClubRefreshShortBaseScore = _value;
            HallData.Instance.Data_Club_CreateTexasConfig.mData.shortBaseScore = _index;
        })

        this.mButtonDoubbleToggle.ShowUnselected();
        this.mButtonDoubbleToggle.SetClickCallback((_value)=>
        {
            HallData.Instance.Data_Club_CreateTexasConfig.mData.buttonDouble = _value;
        });
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubCreateShortBaseScore.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderBaseScore.SetIndex(_data)
        })
        HallData.Instance.Data_ClubCreateShortButtonDouble.AddListenner(this,(_data)=>
        {
            this.mButtonDoubbleToggle.SetShowStauts(_data , true);
        })
        HallData.Instance.Data_ClubCreateShortScoreMode.AddListenner(this,(_data)=>
        {
            this.Show(_data == ShortGameScoreMode.ShortGameScoreMode_AnteMode);
        })
        
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

