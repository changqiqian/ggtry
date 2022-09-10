import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameConfig } from '../../GameConfig';
import { MeassureSlider } from '../common/MeassureSlider';
import { ToggleBtn } from '../common/ToggleBtn';
const { ccclass, property } = _decorator;

@ccclass('Club_CreateTableSetting')
export class Club_CreateTableSetting extends BaseUI 
{
    @property(MeassureSlider) 
    mMeassureSliderGameDuration: MeassureSlider = null;
    @property(MeassureSlider) 
    mMeassureSliderThinkingTime: MeassureSlider = null;
    @property(MeassureSlider) 
    mMeassureSliderSeatNum: MeassureSlider = null;
    @property(MeassureSlider) 
    mMeassureSliderAutoStart: MeassureSlider = null;
    @property(ToggleBtn) 
    mGPSToggle: ToggleBtn = null;
    @property(ToggleBtn) 
    mIPToggle: ToggleBtn = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mMeassureSliderGameDuration.InitWithData(GameConfig.GetTexasCreateRoomGameDurationTitle(),
        GameConfig.GetTexasCreateRoomGameDurationValue(),(_value)=>
        {

        })

        this.mMeassureSliderThinkingTime.InitWithData(GameConfig.GetTexasCreateRoomThinkingTimeTitle(),
        GameConfig.GetTexasCreateRoomThinkingTimeValue(),(_value)=>
        {

        })

        this.mMeassureSliderSeatNum.InitWithData(GameConfig.GetTexasCreateRoomSeatNumTitle(),
        GameConfig.GetTexasCreateRoomSeatNumValue(),(_value)=>
        {

        })

        this.mMeassureSliderAutoStart.InitWithData(GameConfig.GetTexasCreateRoomAutoStartTitle(),
        GameConfig.GetTexasCreateRoomAutoStartValue(),(_value)=>
        {

        })


        this.mGPSToggle.ShowUnselected();
        this.mGPSToggle.SetClickCallback((_value)=>
        {
        });

        this.mIPToggle.ShowUnselected();
        this.mIPToggle.SetClickCallback((_value)=>
        {
        });
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

