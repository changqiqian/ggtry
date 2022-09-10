import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameConfig } from '../../GameConfig';
import { MeassureSlider } from '../common/MeassureSlider';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_CreateTexasScoreSetting')
export class Club_CreateTexasScoreSetting extends BaseUI 
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
    @property(Node) 
    mBiringOutSettingNode: Node = null;
    @property(Label) 
    mBringOutAmount: Label = null;
    @property(MeassureSlider) 
    mMeassureSliderBringOut: MeassureSlider = null;
    @property(ToggleBtn) 
    mInsuranceToggle: ToggleBtn = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mMeassureSliderBlind.InitWithData(GameConfig.GetTexasCreateRoomBlindTitle(), 
        GameConfig.GetTexasCreateRoomBlindValue(),
        (_value)=>
        {
            this.mBlindValue.string = _value + " / " + _value*2;
            HallData.GetInstance().Data_ClubCreateGameCurrentSB  = _value; 
        });

        this.mStraddleToggle.ShowUnselected();
        this.mStraddleToggle.SetClickCallback((_value)=>
        {
        });
        

        this.mBiringOutSettingNode.active = false;
        this.mBringOutToggle.ShowUnselected();
        this.mBringOutToggle.SetClickCallback((_value)=>
        {
            this.mBiringOutSettingNode.active = _value;
        });


        this.mMeassureSliderMaxBuyIn.InitWithData(GameConfig.GetTexasCreateRoomMaxBuyInTitle(),
        GameConfig.GetTexasCreateRoomMaxBuyInValue(),(_value)=>
        {
            let bigBlind = HallData.GetInstance().Data_ClubCreateGameCurrentSB * 2;
            this.mMaxBuyInAmount.string = _value * bigBlind * 100 + "";
        })

        this.mMeassureSliderBringin.InitWithData(GameConfig.GetTexasCreateRoomBringInTitle(),
        GameConfig.GetTexasCreateRoomBringInValue(),(_value)=>
        {
            let bigBlind = HallData.GetInstance().Data_ClubCreateGameCurrentSB * 2;
            this.mBringInAmount.string = _value * bigBlind * 100 + "";
        })

        this.mMeassureSliderBringOut.InitWithData(GameConfig.GetTexasCreateRoomBringOutTitle(),
        GameConfig.GetTexasCreateRoomBringOutValue(),(_value)=>
        {
            let bigBlind = HallData.GetInstance().Data_ClubCreateGameCurrentSB * 2;
            this.mBringOutAmount.string = _value * bigBlind * 100 + "";
        })

        this.mInsuranceToggle.ShowUnselected();
        this.mInsuranceToggle.SetClickCallback((_value)=>
        {

        });


    }
    RegDataNotify()
    {
        HallData.GetInstance().AddListener("Data_ClubCreateGameCurrentSB",(_current , _before)=>
        {
            let bigBlind = _current * 2;
            let bigBlind100 = bigBlind * 100;
            this.mMeassureSliderAnte.InitWithData(GameConfig.GetTexasCreateRoomAnteTitle(_current),
            GameConfig.GetTexasCreateRoomAnteValue(_current),
            (_value)=>
            {

            });

            this.mMaxBuyInAmount.string = this.mMeassureSliderMaxBuyIn.GetValue() * bigBlind100 + "";
            this.mBringInAmount.string = this.mMeassureSliderBringin.GetValue() * bigBlind100 + "";
            this.mBringOutAmount.string = this.mMeassureSliderBringOut .GetValue()* bigBlind100 + "";
        },this);

        HallData.GetInstance().AddListener("Data_ClubCreateGameStraddle",(_current , _before)=>
        {
            this.mStraddleToggle.SetShowStauts(_current);
        },this);
        
        HallData.GetInstance().AddListener("Data_ClubCreateGameAnte",(_current , _before)=>
        {
            this.mMeassureSliderAnte.SetIndex(_current);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateMaxBuying",(_current , _before)=>
        {
            this.mMeassureSliderMaxBuyIn.SetIndex(_current);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateMaxBringin",(_current , _before)=>
        {
            this.mMeassureSliderBringin.SetIndex(_current);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateAllowBringOut",(_current , _before)=>
        {
            this.mBringOutToggle.SetShowStauts(_current,true);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateMinBringOut",(_current , _before)=>
        {
            this.mMeassureSliderBringOut.SetIndex(_current);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateInsurance",(_current , _before)=>
        {
            this.mInsuranceToggle.SetShowStauts(_current);
        },this);

        
        
        
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

