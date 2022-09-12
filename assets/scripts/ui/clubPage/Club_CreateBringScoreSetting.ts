import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameConfig } from '../../GameConfig';
import { MeassureSlider } from '../common/MeassureSlider';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_CreateBringScoreSetting')
export class Club_CreateBringScoreSetting extends BaseUI {
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
        HallData.GetInstance().AddListener("Data_ClubCreateGameMaxBuying",(_current , _before)=>
        {
            this.mMeassureSliderMaxBuyIn.SetIndex(_current);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateGameMaxBringin",(_current , _before)=>
        {
            this.mMeassureSliderBringin.SetIndex(_current);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateGameAllowBringOut",(_current , _before)=>
        {
            this.mBringOutToggle.SetShowStauts(_current,true);
        },this);
        HallData.GetInstance().AddListener("Data_ClubMinScoreAfterBringOut",(_current , _before)=>
        {
            this.mMeassureSliderBringOut.SetIndex(_current);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateGameInsurance",(_current , _before)=>
        {
            this.mInsuranceToggle.SetShowStauts(_current,true);
        },this);
        HallData.GetInstance().AddListener("Data_ClubCreateNewSmallBlind",(_current , _before)=>
        {
            let bigBlind = _current * 2;
            let bigBlind100 = bigBlind * 100;
            this.mMaxBuyInAmount.string = this.mMeassureSliderMaxBuyIn.GetValue() * bigBlind100 + "";
            this.mBringInAmount.string = this.mMeassureSliderBringin.GetValue() * bigBlind100 + "";
            this.mBringOutAmount.string = this.mMeassureSliderBringOut .GetValue()* bigBlind100 + "";
        },this);

        HallData.GetInstance().AddListener("Data_ClubCreateNewShortBaseScore",(_current , _before)=>
        {

        },this); 
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

