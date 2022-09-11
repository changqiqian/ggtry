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
        (_value , _index)=>
        {
            let bigBlind = _value * 2;
            let bigBlind100 = bigBlind * 100;
            this.mMeassureSliderAnte.InitWithData(GameConfig.GetTexasCreateRoomAnteTitle(_value),
            GameConfig.GetTexasCreateRoomAnteValue(_value),
            (_value , _index)=>
            {
                HallData.GetInstance().Data_Club_CreateTexasConfig.ante = _index;
            });

            this.mBlindValue.string = _value + " / " + bigBlind;
            this.mMaxBuyInAmount.string = this.mMeassureSliderMaxBuyIn.GetValue() * bigBlind100 + "";
            this.mBringInAmount.string = this.mMeassureSliderBringin.GetValue() * bigBlind100 + "";
            this.mBringOutAmount.string = this.mMeassureSliderBringOut .GetValue()* bigBlind100 + "";
            HallData.GetInstance().Data_Club_CreateTexasConfig.smallBlind = _index;
        });

        this.mStraddleToggle.ShowUnselected();
        this.mStraddleToggle.SetClickCallback((_value)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.straddle = _value;
        });
        

        this.mBiringOutSettingNode.active = false;
        this.mBringOutToggle.ShowUnselected();
        this.mBringOutToggle.SetClickCallback((_value)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.allowBringOut = _value;
            this.mBiringOutSettingNode.active = _value;
        });


        this.mMeassureSliderMaxBuyIn.InitWithData(GameConfig.GetTexasCreateRoomMaxBuyInTitle(),
        GameConfig.GetTexasCreateRoomMaxBuyInValue(),(_value , _index)=>
        {
            let smallBlind = GameConfig.GetTexasCreateRoomBlindValue()[HallData.GetInstance().Data_Club_CreateTexasConfig.smallBlind];
            let bigBlind = smallBlind * 2;
            this.mMaxBuyInAmount.string = _value * bigBlind * 100 + "";
            HallData.GetInstance().Data_Club_CreateTexasConfig.maxTotalBuyIn = _index;
        })

        this.mMeassureSliderBringin.InitWithData(GameConfig.GetTexasCreateRoomBringInTitle(),
        GameConfig.GetTexasCreateRoomBringInValue(),(_value , _index)=>
        {
            let smallBlind = GameConfig.GetTexasCreateRoomBlindValue()[HallData.GetInstance().Data_Club_CreateTexasConfig.smallBlind];
            let bigBlind = smallBlind * 2;
            this.mBringInAmount.string = _value * bigBlind * 100 + "";
            HallData.GetInstance().Data_Club_CreateTexasConfig.maxBringIn = _index;
        })

        this.mMeassureSliderBringOut.InitWithData(GameConfig.GetTexasCreateRoomBringOutTitle(),
        GameConfig.GetTexasCreateRoomBringOutValue(),(_value , _index)=>
        {
            let smallBlind = GameConfig.GetTexasCreateRoomBlindValue()[HallData.GetInstance().Data_Club_CreateTexasConfig.smallBlind];
            let bigBlind = smallBlind * 2;
            this.mBringOutAmount.string = _value * bigBlind * 100 + "";
            HallData.GetInstance().Data_Club_CreateTexasConfig.minScoreAfterBringOut = _index;
        })

        this.mInsuranceToggle.ShowUnselected();
        this.mInsuranceToggle.SetClickCallback((_value)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.insurance = _value;
        });
    }
    RegDataNotify()
    {
        HallData.GetInstance().AddListener("Data_ClubCreateGameCurrentSB",(_current , _before)=>
        {
            this.mMeassureSliderBlind.SetIndex(_current);
        },this);

        HallData.GetInstance().AddListener("Data_ClubCreateGameStraddle",(_current , _before)=>
        {
            this.mStraddleToggle.SetShowStauts(_current , true);
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
        HallData.GetInstance().AddListener("Data_ClubMinScoreAfterBringOut",(_current , _before)=>
        {
            this.mMeassureSliderBringOut.SetIndex(_current);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateInsurance",(_current , _before)=>
        {
            this.mInsuranceToggle.SetShowStauts(_current,true);
        },this);
        
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

