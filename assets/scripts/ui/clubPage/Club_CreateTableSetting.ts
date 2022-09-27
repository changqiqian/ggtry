import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameConfig } from '../../GameConfig';
import { MeassureSlider } from '../common/MeassureSlider';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
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
        GameConfig.GetTexasCreateRoomGameDurationValue(),(_value , _index)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.gameDuration = _index;
        })

        this.mMeassureSliderThinkingTime.InitWithData(GameConfig.GetTexasCreateRoomThinkingTimeTitle(),
        GameConfig.GetTexasCreateRoomThinkingTimeValue(),(_value , _index)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.thinkingTime = _index;
        })

        this.mMeassureSliderSeatNum.InitWithData(GameConfig.GetTexasCreateRoomSeatNumTitle(),
        GameConfig.GetTexasCreateRoomSeatNumValue(),(_value , _index)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.seatNum = _index;
        })

        this.mMeassureSliderAutoStart.InitWithData(GameConfig.GetTexasCreateRoomAutoStartTitle(),
        GameConfig.GetTexasCreateRoomAutoStartValue(),(_value , _index)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.autoStartNum = _index;
        })


        this.mGPSToggle.ShowUnselected();
        this.mGPSToggle.SetClickCallback((_value)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.gpsLimit = _value;
        });

        this.mIPToggle.ShowUnselected();
        this.mIPToggle.SetClickCallback((_value)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.ipLimit = _value;
        });
    }
    RegDataNotify()
    {
        HallData.GetInstance().Data_ClubCreateGameDuration.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderGameDuration.SetIndex(_data);
        })
        HallData.GetInstance().Data_ClubCreateGameThinkingTime.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderThinkingTime.SetIndex(_data);
        })

        HallData.GetInstance().Data_ClubCreateGameSeatNum.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderSeatNum.SetIndex(_data);
        })

        HallData.GetInstance().Data_ClubCreateGameAutoStart.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderAutoStart.SetIndex(_data);
        })

        HallData.GetInstance().Data_ClubCreateGameGPS.AddListenner(this,(_data)=>
        {
            this.mGPSToggle.SetShowStauts(_data , true);
        })
        HallData.GetInstance().Data_ClubCreateGameIP.AddListenner(this,(_data)=>
        {
            this.mIPToggle.SetShowStauts(_data , true);
        })

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

