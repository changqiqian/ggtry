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
            currentToggle.SetDataNotify(HallData.Instance.Data_ClubCreateGameCurrencyType,i);  


            if(i == GameCurrencyType.GameCurrencyType_Coin)
            {
                currentToggle.SetTitle(Localization.GetString("00173"));
            }
            else if(i == GameCurrencyType.GameCurrencyType_Point)
            {
                currentToggle.SetTitle(Localization.GetString("00172"));
            }
        }

        for(let i = 0 ; i < this.mTaxToggle.children.length ; i++)
        {
            let currentToggle = this.mTaxToggle.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(HallData.Instance.Data_ClubCreateGameTaxType,i);  

            if(i == GameTaxType.GameTaxType_EveryRound)
            {
                currentToggle.SetTitle(Localization.GetString("00174"));
            }
            else if(i == GameTaxType.GameTaxType_WholeGameEnd)
            {
                currentToggle.SetTitle(Localization.GetString("00175"));
            }
            
        }
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubCreateGameTaxType.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderTax.InitWithData(GameConfig.GetTexasCreateRoomTaxTitle(_data),
            GameConfig.GetTexasCreateRoomTaxValue(_data),
            (_value , _index)=>
            {
                HallData.Instance.Data_Club_CreateTexasConfig.mData.taxRatio = _index;
            });
            if(_data == GameTaxType.GameTaxType_EveryRound)
            {
                this.mTaxTips.string = Localization.GetString("00090");
            }
            else if(_data == GameTaxType.GameTaxType_WholeGameEnd)
            {
                this.mTaxTips.string = Localization.GetString("00091");
            }
            HallData.Instance.Data_Club_CreateTexasConfig.mData.taxType = _data;
        })

        HallData.Instance.Data_ClubCreateGameTaxRate.AddListenner(this,(_data)=>
        {
            this.mMeassureSliderTax.SetIndex(_data);
        })

        HallData.Instance.Data_ClubCreateGameCurrencyType.AddListenner(this,(_data)=>
        {
            HallData.Instance.Data_Club_CreateTexasConfig.mData.currencyType = _data;
        })

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

