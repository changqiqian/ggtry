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
            this.mMeassureSliderAnte.InitWithData(GameConfig.GetTexasCreateRoomAnteTitle(_value),
            GameConfig.GetTexasCreateRoomAnteValue(_value),
            (_value , _index)=>
            {
                HallData.GetInstance().Data_Club_CreateTexasConfig.mData.ante = _index;
            });
            this.mBlindValue.string = _value + " / " + bigBlind;
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.smallBlind = _index;
            HallData.GetInstance().Data_ClubRefreshSmallBlind.mData = _value;
        });

        this.mStraddleToggle.ShowUnselected();
        this.mStraddleToggle.SetClickCallback((_value)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.mData.straddle = _value;
        });
        

       
    }
    RegDataNotify()
    {
        HallData.GetInstance().Data_ClubCreateGameCurrentSB.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderBlind.SetIndex(_data);
        })

        HallData.GetInstance().Data_ClubCreateGameStraddle.AddListenner(this,(_data)=>
        {
            this.mStraddleToggle.SetShowStauts(_data , true);
        })

        HallData.GetInstance().Data_ClubCreateGameAnte.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderAnte.SetIndex(_data);
        })

        HallData.GetInstance().Data_ClubCreateShortScoreMode.AddListenner(this,(_data)=>
        {
            if(HallData.GetInstance().Data_ClubCreateGameType.mData == GameType.GameType_TexasCash)
            {
                this.Show(true);
            }
            else if(HallData.GetInstance().Data_ClubCreateGameType.mData == GameType.GameType_ShortCash)
            {
                if(_data == ShortGameScoreMode.ShortGameScoreMode_AnteMode)
                {
                    this.Show(false);
                }
                else if(_data == ShortGameScoreMode.ShortGameScoreMode_BlindMode)
                {
                    this.Show(true);
                }
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

