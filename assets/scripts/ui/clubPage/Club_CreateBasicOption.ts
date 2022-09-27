import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { GameConfig } from '../../GameConfig';
import { BaseButton } from '../common/BaseButton';
import { MeassureSlider } from '../common/MeassureSlider';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
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
    mMeassureSliderTax: MeassureSlider = null;
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
    }
    RegDataNotify()
    {
        HallData.GetInstance().AddListener("Data_ClubCreateGameTaxType",(_current , _before)=>
        {
            this.mMeassureSliderTax.InitWithData(GameConfig.GetTexasCreateRoomTaxTitle(_current),
            GameConfig.GetTexasCreateRoomTaxValue(_current),
            (_value , _index)=>
            {
                HallData.GetInstance().Data_Club_CreateTexasConfig.taxRatio = _index;
            });
            if(_current == GameTaxType.EveryRound)
            {
                this.mTaxTips.string = Localization.GetString("00090");
            }
            else if(_current == GameTaxType.WholeGameEnd)
            {
                this.mTaxTips.string = Localization.GetString("00091");
            }
            HallData.GetInstance().Data_Club_CreateTexasConfig.taxType = _current;
        },this);

        HallData.GetInstance().AddListener("Data_ClubCreateGameTaxRate",(_current , _before)=>
        {
            this.mMeassureSliderTax.SetIndex(_current);
        },this);

        HallData.GetInstance().AddListener("Data_ClubCreateGameCurrencyType",(_current , _before)=>
        {
            HallData.GetInstance().Data_Club_CreateTexasConfig.currencyType = _current;
        },this);
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

