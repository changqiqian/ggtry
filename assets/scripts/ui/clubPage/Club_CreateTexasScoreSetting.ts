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
                HallData.Instance.Data_Club_CreateTexasConfig.mData.ante = _index;
            });
            this.mBlindValue.string = _value + " / " + bigBlind;
            HallData.Instance.Data_Club_CreateTexasConfig.mData.smallBlind = _index;
            HallData.Instance.Data_ClubRefreshSmallBlind.mData = _value;
        });

        this.mStraddleToggle.ShowUnselected();
        this.mStraddleToggle.SetClickCallback((_value)=>
        {
            HallData.Instance.Data_Club_CreateTexasConfig.mData.straddle = _value;
        });
        

       
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubCreateGameCurrentSB.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderBlind.SetIndex(_data);
        })

        HallData.Instance.Data_ClubCreateGameStraddle.AddListenner(this,(_data)=>
        {
            this.mStraddleToggle.SetShowStauts(_data , true);
        })

        HallData.Instance.Data_ClubCreateGameAnte.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderAnte.SetIndex(_data);
        })

        HallData.Instance.Data_ClubCreateShortScoreMode.AddListenner(this,(_data)=>
        {
            if(HallData.Instance.Data_ClubCreateGameType.mData == GameType.GameType_TexasCash)
            {
                this.Show(true);
            }
            else if(HallData.Instance.Data_ClubCreateGameType.mData == GameType.GameType_ShortCash)
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

