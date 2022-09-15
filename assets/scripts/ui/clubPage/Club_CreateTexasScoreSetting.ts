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
                HallData.GetInstance().Data_Club_CreateTexasConfig.ante = _index;
            });
            this.mBlindValue.string = _value + " / " + bigBlind;
            HallData.GetInstance().Data_Club_CreateTexasConfig.smallBlind = _index;
            HallData.GetInstance().Data_ClubRefreshSmallBlind = _value;
        });

        this.mStraddleToggle.ShowUnselected();
        this.mStraddleToggle.SetClickCallback((_value)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.straddle = _value;
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

        HallData.GetInstance().AddListener("Data_ClubCreateShortScoreMode",(_current , _before)=>
        {
            if(HallData.GetInstance().Data_ClubCreateGameType == PokerLife.Club.GameType.TexasCash)
            {
                this.Show(true);
            }
            else if(HallData.GetInstance().Data_ClubCreateGameType == PokerLife.Club.GameType.ShortCash)
            {
                if(_current == PokerLife.Club.ShortGameScoreMode.AnteMode)
                {
                    this.Show(false);
                }
                else if(_current == PokerLife.Club.ShortGameScoreMode.BlindMode)
                {
                    this.Show(true);
                }
            }
        },this);
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

