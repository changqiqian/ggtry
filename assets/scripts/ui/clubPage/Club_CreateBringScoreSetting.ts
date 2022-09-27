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
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.allowBringOut = _value;
            this.mBiringOutSettingNode.active = _value;
        });


        this.mMeassureSliderMaxBuyIn.InitWithData(GameConfig.GetTexasCreateRoomMaxBuyInTitle(),
        GameConfig.GetTexasCreateRoomMaxBuyInValue(),(_value , _index)=>
        {
            if(HallData.GetInstance().Data_ClubCreateGameType.mData == GameType.GameType_ShortCash
            && HallData.GetInstance().Data_ClubCreateShortScoreMode.mData == ShortGameScoreMode.ShortGameScoreMode_AnteMode)
            {
                let baseScore = HallData.GetInstance().Data_ClubRefreshShortBaseScore.mData;
                this.mMaxBuyInAmount.string = _value * baseScore * 100 + "";
            }
            else
            {
                let smallBlind = HallData.GetInstance().Data_ClubRefreshSmallBlind.mData;
                let bigBlind = smallBlind * 2;
                this.mMaxBuyInAmount.string = _value * bigBlind * 100 + "";
            }
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.maxTotalBuyIn = _index;
        })

        this.mMeassureSliderBringin.InitWithData(GameConfig.GetTexasCreateRoomBringInTitle(),
        GameConfig.GetTexasCreateRoomBringInValue(),(_value , _index)=>
        {
            if(HallData.GetInstance().Data_ClubCreateGameType.mData == GameType.GameType_ShortCash
            && HallData.GetInstance().Data_ClubCreateShortScoreMode.mData == ShortGameScoreMode.ShortGameScoreMode_AnteMode)
            {
                let baseScore = HallData.GetInstance().Data_ClubRefreshShortBaseScore.mData;
                this.mBringInAmount.string = _value * baseScore * 100 + "";
            }
            else
            {
                let smallBlind = HallData.GetInstance().Data_ClubRefreshSmallBlind.mData;
                let bigBlind = smallBlind * 2;
                this.mBringInAmount.string = _value * bigBlind * 100 + "";
            }
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.maxBringIn = _index;
        })

        this.mMeassureSliderBringOut.InitWithData(GameConfig.GetTexasCreateRoomBringOutTitle(),
        GameConfig.GetTexasCreateRoomBringOutValue(),(_value , _index)=>
        {
            if(HallData.GetInstance().Data_ClubCreateGameType.mData == GameType.GameType_ShortCash
            && HallData.GetInstance().Data_ClubCreateShortScoreMode.mData == ShortGameScoreMode.ShortGameScoreMode_AnteMode)
            {
                let baseScore = HallData.GetInstance().Data_ClubRefreshShortBaseScore.mData;
                this.mBringOutAmount.string = _value * baseScore * 100 + "";
            }
            else
            {
                let smallBlind = HallData.GetInstance().Data_ClubRefreshSmallBlind.mData;
                let bigBlind = smallBlind * 2;
                this.mBringOutAmount.string = _value * bigBlind * 100 + "";
            }
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.minScoreAfterBringOut = _index;
        })

        this.mInsuranceToggle.ShowUnselected();
        this.mInsuranceToggle.SetClickCallback((_value)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.insurance = _value;
        });
    }
    RegDataNotify()
    {
        HallData.GetInstance().Data_ClubCreateGameMaxBuying.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderMaxBuyIn.SetIndex(_data);
        })

        HallData.GetInstance().Data_ClubCreateGameMaxBringin.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderBringin.SetIndex(_data);
        })

        HallData.GetInstance().Data_ClubCreateGameAllowBringOut.AddListenner(this,(_data)=>
        {
            this.mBringOutToggle.SetShowStauts(_data,true);
        })

        HallData.GetInstance().Data_ClubMinScoreAfterBringOut.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderBringOut.SetIndex(_data);
        })


        HallData.GetInstance().Data_ClubCreateGameInsurance.AddListenner(this,(_data)=>
        {
            this.mInsuranceToggle.SetShowStauts(_data,true);
        })

        HallData.GetInstance().Data_ClubRefreshSmallBlind.AddListenner(this,(_data)=>
        {
            if(HallData.GetInstance().Data_ClubCreateGameType.mData == GameType.GameType_ShortCash
              && HallData.GetInstance().Data_ClubCreateShortScoreMode.mData == ShortGameScoreMode.ShortGameScoreMode_AnteMode)
            {

            }
            else
            {
                let bigBlind = _data * 2;
                let bigBlind100 = bigBlind * 100;
                this.mMaxBuyInAmount.string = this.mMeassureSliderMaxBuyIn.GetValue() * bigBlind100 + "";
                this.mBringInAmount.string = this.mMeassureSliderBringin.GetValue() * bigBlind100 + "";
                this.mBringOutAmount.string = this.mMeassureSliderBringOut .GetValue()* bigBlind100 + "";
            }
        })


        HallData.GetInstance().Data_ClubRefreshShortBaseScore.AddListenner(this,(_data)=>
        {
            if(HallData.GetInstance().Data_ClubCreateGameType.mData == GameType.GameType_ShortCash
            && HallData.GetInstance().Data_ClubCreateShortScoreMode.mData == ShortGameScoreMode.ShortGameScoreMode_AnteMode)
          {
              let baseScore100 = _data * 100;
              this.mMaxBuyInAmount.string = this.mMeassureSliderMaxBuyIn.GetValue() * baseScore100 + "";
              this.mBringInAmount.string = this.mMeassureSliderBringin.GetValue() * baseScore100 + "";
              this.mBringOutAmount.string = this.mMeassureSliderBringOut .GetValue()* baseScore100 + "";
          }
          else
          {

          }
        })

        HallData.GetInstance().Data_ClubCreateShortScoreMode.AddListenner(this,(_data)=>
        {
            if(HallData.GetInstance().Data_ClubCreateGameType.mData == GameType.GameType_ShortCash
            && _data == ShortGameScoreMode.ShortGameScoreMode_AnteMode)
          {
              let baseScore = HallData.GetInstance().Data_ClubRefreshShortBaseScore.mData;
              let baseScore100 = baseScore * 100;
              this.mMaxBuyInAmount.string = this.mMeassureSliderMaxBuyIn.GetValue() * baseScore100 + "";
              this.mBringInAmount.string = this.mMeassureSliderBringin.GetValue() * baseScore100 + "";
              this.mBringOutAmount.string = this.mMeassureSliderBringOut .GetValue()* baseScore100 + "";
          }
          else
          {
              let smallBlind = HallData.GetInstance().Data_ClubRefreshSmallBlind.mData;
              let bigBlind = smallBlind * 2;
              let bigBlind100 = bigBlind * 100;
              this.mMaxBuyInAmount.string = this.mMeassureSliderMaxBuyIn.GetValue() * bigBlind100 + "";
              this.mBringInAmount.string = this.mMeassureSliderBringin.GetValue() * bigBlind100 + "";
              this.mBringOutAmount.string = this.mMeassureSliderBringOut .GetValue()* bigBlind100 + "";
          }
        })



    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

