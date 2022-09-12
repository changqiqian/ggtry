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
        this.mMeassureSliderBaseScore.InitWithData(GameConfig.GetTexasCreateRoomMaxBuyInTitle(),
        GameConfig.GetTexasCreateRoomMaxBuyInValue(),(_value , _index)=>
        {
            // let smallBlind = GameConfig.GetTexasCreateRoomBlindValue()[HallData.GetInstance().Data_Club_CreateTexasConfig.smallBlind];
            // let bigBlind = smallBlind * 2;
            // this.mBaseScore.string = _value * bigBlind * 100 + "";
            // HallData.GetInstance().Data_Club_CreateTexasConfig.maxTotalBuyIn = _index;
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
        
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

