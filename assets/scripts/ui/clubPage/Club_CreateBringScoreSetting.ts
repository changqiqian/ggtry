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
    mInsuranceToggle: ToggleBtn = null;
    InitParam()
    {

    }
    BindUI()
    {

        this.mMeassureSliderMaxBuyIn.InitWithData(GameConfig.GetTexasCreateRoomMaxBuyInTitle(),
        GameConfig.GetTexasCreateRoomMaxBuyInValue(),(_value , _index)=>
        {
            let smallBlind = HallData.Instance.Data_ClubRefreshSmallBlind.mData;
            let bigBlind = smallBlind * 2;
            this.mMaxBuyInAmount.string = _value * bigBlind * 100 + "";
            HallData.Instance.Data_Club_CreateTexasConfig.mData.maxTotalBuyIn = _index;
        })

        this.mMeassureSliderBringin.InitWithData(GameConfig.GetTexasCreateRoomBringInTitle(),
        GameConfig.GetTexasCreateRoomBringInValue(),(_value , _index)=>
        {
            let smallBlind = HallData.Instance.Data_ClubRefreshSmallBlind.mData;
            let bigBlind = smallBlind * 2;
            this.mBringInAmount.string = _value * bigBlind * 100 + "";
            HallData.Instance.Data_Club_CreateTexasConfig.mData.maxBringIn = _index;
        })

        this.mInsuranceToggle.ShowUnselected();
        this.mInsuranceToggle.SetClickCallback((_value)=>
        {
            HallData.Instance.Data_Club_CreateTexasConfig.mData.insurance = _value;
        });
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubCreateGameMaxBuying.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderMaxBuyIn.SetIndex(_data);
        })

        HallData.Instance.Data_ClubCreateGameMaxBringin.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderBringin.SetIndex(_data);
        })


        HallData.Instance.Data_ClubCreateGameInsurance.AddListenner(this,(_data)=>
        {
            this.mInsuranceToggle.SetShowStauts(_data,true);
        })

        HallData.Instance.Data_ClubRefreshSmallBlind.AddListenner(this,(_data)=>
        {
            let bigBlind = _data * 2;
            let bigBlind100 = bigBlind * 100;
            this.mMaxBuyInAmount.string = this.mMeassureSliderMaxBuyIn.GetValue() * bigBlind100 + "";
            this.mBringInAmount.string = this.mMeassureSliderBringin.GetValue() * bigBlind100 + "";
        })

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

