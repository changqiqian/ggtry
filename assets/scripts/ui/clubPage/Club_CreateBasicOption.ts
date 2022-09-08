import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { GameConfig } from '../../GameConfig';
import { BaseButton } from '../common/BaseButton';
import { MeassureSlider } from '../common/MeassureSlider';
import { ToggleBtn } from '../common/ToggleBtn';
import { Club_TaxType, HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_CreateBasicOption')
export class Club_CreateBasicOption extends BaseUI 
{
    @property(BaseButton) 
    mBaseSettingBtn: BaseButton = null;
    @property(Node) 
    mCurrencyModeToggle: Node = null;
    @property(Node) 
    mTaxToggle: Node = null;
    @property(MeassureSlider) 
    mMeassureSliderRound: MeassureSlider = null;
    @property(MeassureSlider) 
    mMeassureSliderGame: MeassureSlider = null;
    @property(Label) 
    mTaxTips: Label = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mBaseSettingBtn.SetClickCallback(()=>
        {

        });

        for(let i = 0 ; i < this.mCurrencyModeToggle.children.length ; i++)
        {
            let currentToggle = this.mCurrencyModeToggle.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(HallData.GetInstance(),"Data_ClubCreateGameCurrencyType",i);  
        }

        for(let i = 0 ; i < this.mTaxToggle.children.length ; i++)
        {
            let currentToggle = this.mTaxToggle.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(HallData.GetInstance(),"Data_ClubCreateGameTaxType",i);  
        }


        this.mMeassureSliderRound.InitWithData(GameConfig.GetTexasCreateRoomTaxTitle(Club_TaxType.EveryRound),
            GameConfig.GetTexasCreateRoomTaxValue(Club_TaxType.EveryRound),
            (_value)=>
            {

            });
        this.mMeassureSliderGame.InitWithData(GameConfig.GetTexasCreateRoomTaxTitle(Club_TaxType.WholeGameEnd),
            GameConfig.GetTexasCreateRoomTaxValue(Club_TaxType.WholeGameEnd),
            (_value)=>
            {

            });
    }
    RegDataNotify()
    {
        HallData.GetInstance().AddListener("Data_ClubCreateGameTaxType",(_current , _before)=>
        {
            this.mMeassureSliderRound.node.active = _current == Club_TaxType.EveryRound;
            this.mMeassureSliderGame.node.active = _current == Club_TaxType.WholeGameEnd;

            if(_current == Club_TaxType.EveryRound)
            {
                this.mTaxTips = Localization.GetString("00090");
            }
            else if(_current == Club_TaxType.WholeGameEnd)
            {
                this.mTaxTips = Localization.GetString("00091");
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

