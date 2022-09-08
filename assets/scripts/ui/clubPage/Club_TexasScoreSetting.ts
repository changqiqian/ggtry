import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameConfig } from '../../GameConfig';
import { MeassureSlider } from '../common/MeassureSlider';
import { ToggleBtn } from '../common/ToggleBtn';
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
        this.mMeassureSliderBlind.InitWithData(GameConfig.GetTexasCreateRoomBlindTitle() , 
            GameConfig.GetTexasCreateRoomBlindValue(),(_value)=>
            {
                this.mBlindValue.string = _value + " / " + _value*2;
            })
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

