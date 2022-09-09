import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameConfig } from '../../GameConfig';
import { MeassureSlider } from '../common/MeassureSlider';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_TexasScoreSetting')
export class Club_TexasScoreSetting extends BaseUI 
{
    @property(Label) 
    mBlindValue: Label = null;
    @property(MeassureSlider) 
    mMeassureSliderBlind: MeassureSlider = null;
    @property(ToggleBtn) 
    mStraddleToggle: ToggleBtn = null;
    @property(MeassureSlider) 
    mMeassureSliderAnte: MeassureSlider = null;
    @property(Label) 
    mMaxBuyInAmount: Label = null;
    @property(MeassureSlider) 
    mMeassureSliderMaxBuyIn: MeassureSlider = null;
    @property(Label) 
    mBringInAmount: Label = null;
    @property(MeassureSlider) 
    mMeassureSliderBringin: MeassureSlider = null;
    @property(ToggleBtn) 
    mBringOutToggle: ToggleBtn = null;
    @property(Label) 
    mBringOutAmount: Label = null;
    @property(MeassureSlider) 
    mMeassureSliiderBringOut: MeassureSlider = null;

    InitParam()
    {

    }
    BindUI()
    {
        HallData.GetInstance().Data_ClubCreateGameCurrentSB = 1;
        this.mMeassureSliderBlind.InitWithData(GameConfig.GetTexasCreateRoomBlindTitle(), 
        GameConfig.GetTexasCreateRoomBlindValue(),
        (_value)=>
        {
            this.mBlindValue.string = _value + " / " + _value*2;
            HallData.GetInstance().Data_ClubCreateGameCurrentSB  = _value; 
        });

        this.mBringOutToggle.ShowUnselected();
        this.mBringOutToggle.SetClickCallback((_value)=>
        {

        });

        this.mMeassureSliiderBringOut.node.active = false;
        this.mStraddleToggle.ShowUnselected();
        this.mStraddleToggle.SetClickCallback((_value)=>
        {
            this.mMeassureSliiderBringOut.node.active = _value;
        });


        this.mMeassureSliderMaxBuyIn.InitWithData(GameConfig.GetTexasCreateRoomMaxBuyInTitle(),
        GameConfig.GetTexasCreateRoomMaxBuyInValue(),(_value)=>
        {
            let bigBlind = HallData.GetInstance().Data_ClubCreateGameCurrentSB;
            this.mMaxBuyInAmount.string = _value * bigBlind + "";
        })

        this.mMeassureSliderBringin.InitWithData(GameConfig.GetTexasCreateRoomBringInTitle(),
        GameConfig.GetTexasCreateRoomBringInValue(),(_value)=>
        {
            let bigBlind = HallData.GetInstance().Data_ClubCreateGameCurrentSB;
            this.mBringInAmount.string = _value * bigBlind * 100 + "";
        })

        this.mMeassureSliiderBringOut.InitWithData(GameConfig.GetTexasCreateRoomBringOutTitle(),
        GameConfig.GetTexasCreateRoomBringOutValue(),(_value)=>
        {
            let bigBlind = HallData.GetInstance().Data_ClubCreateGameCurrentSB;
            this.mBringOutAmount.string = _value * bigBlind * 100 + "";
        })
    }
    RegDataNotify()
    {
        HallData.GetInstance().AddListener("Data_ClubCreateGameCurrentSB",(_current , _before)=>
        {
            let bigBlind = _current * 2;
            this.mMeassureSliderAnte.InitWithData(GameConfig.GetTexasCreateRoomAnteTitle(_current),
            GameConfig.GetTexasCreateRoomAnteValue(_current),
            (_value)=>
            {

            });

            this.mMaxBuyInAmount.string = this.mMeassureSliderMaxBuyIn.GetValue() * bigBlind + "";
            this.mBringInAmount.string = this.mMeassureSliderBringin.GetValue() * bigBlind * 100 + "";
            this.mBringOutAmount.string = this.mMeassureSliiderBringOut .GetValue()* bigBlind * 100 + "";
        },this);
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

