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
            HallData.GetInstance().Data_Club_CreateTexasConfig.gameDuration = _index;
        })

        this.mMeassureSliderThinkingTime.InitWithData(GameConfig.GetTexasCreateRoomThinkingTimeTitle(),
        GameConfig.GetTexasCreateRoomThinkingTimeValue(),(_value , _index)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.thinkingTime = _index;
        })

        this.mMeassureSliderSeatNum.InitWithData(GameConfig.GetTexasCreateRoomSeatNumTitle(),
        GameConfig.GetTexasCreateRoomSeatNumValue(),(_value , _index)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.seatNum = _index;
        })

        this.mMeassureSliderAutoStart.InitWithData(GameConfig.GetTexasCreateRoomAutoStartTitle(),
        GameConfig.GetTexasCreateRoomAutoStartValue(),(_value , _index)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.autoStartNum = _index;
        })


        this.mGPSToggle.ShowUnselected();
        this.mGPSToggle.SetClickCallback((_value)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.gpsLimit = _value;
        });

        this.mIPToggle.ShowUnselected();
        this.mIPToggle.SetClickCallback((_value)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.ipLimit = _value;
        });
    }
    RegDataNotify()
    {
        HallData.GetInstance().AddListener("Data_ClubCreateGameDuration",(_current , _before)=>
        {
            this.mMeassureSliderGameDuration.SetIndex(_current);
        },this);
        
        HallData.GetInstance().AddListener("Data_ClubCreateThinkingTime",(_current , _before)=>
        {
            this.mMeassureSliderThinkingTime.SetIndex(_current);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateSeatNum",(_current , _before)=>
        {
            this.mMeassureSliderSeatNum.SetIndex(_current);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateAutoStart",(_current , _before)=>
        {
            this.mMeassureSliderAutoStart.SetIndex(_current);
        },this);

        HallData.GetInstance().AddListener("Data_ClubCreateGPS",(_current , _before)=>
        {
            this.mGPSToggle.SetShowStauts(_current , true);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateIP",(_current , _before)=>
        {
            this.mIPToggle.SetShowStauts(_current , true);
        },this);
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

