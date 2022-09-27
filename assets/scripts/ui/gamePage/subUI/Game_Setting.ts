import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { GameConfig } from '../../../GameConfig';
import { BaseButton } from '../../common/BaseButton';
import { ToggleBtn } from '../../common/ToggleBtn';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_Setting')
export class Game_Setting extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Node) 
    mBGToggleGroup: Node = null;
    @property(Node) 
    mPokerToggleGroup: Node = null;
    
    @property(Node) 
    RaiseToggleGroup0: Node = null;
    @property(Node) 
    RaiseToggleGroup1: Node = null;
    @property(Node) 
    RaiseToggleGroup2: Node = null;
    
    @property(ToggleBtn) 
    mSliderToggle: ToggleBtn = null;
    @property(ToggleBtn) 
    mBBModeToggle: ToggleBtn = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });
        for(let i = 0 ; i < this.mBGToggleGroup.children.length ; i++)
        {
            let currentToggle = this.mBGToggleGroup.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(LocalPlayerData.GetInstance().Data_BGSetting,i);
        }
        for(let i = 0 ; i < this.mPokerToggleGroup.children.length ; i++)
        {
            let currentToggle = this.mPokerToggleGroup.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(LocalPlayerData.GetInstance().Data_PokerSetting,i);
        }
        for(let i = 0 ; i < this.RaiseToggleGroup0.children.length ; i++)
        {
            let currentToggle = this.RaiseToggleGroup0.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(LocalPlayerData.GetInstance().Data_CustomerRaise0,i);
            let currentTitle = GameConfig.GetDefaultCustomerRaiseTitle(i);
            currentToggle.SetTitle(currentTitle);
        }
        for(let i = 0 ; i < this.RaiseToggleGroup1.children.length ; i++)
        {
            let currentToggle = this.RaiseToggleGroup1.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(LocalPlayerData.GetInstance().Data_CustomerRaise1,i);
            let currentTitle = GameConfig.GetDefaultCustomerRaiseTitle(i);
            currentToggle.SetTitle(currentTitle);
        }
        for(let i = 0 ; i < this.RaiseToggleGroup2.children.length ; i++)
        {
            let currentToggle = this.RaiseToggleGroup2.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(LocalPlayerData.GetInstance().Data_CustomerRaise2,i);
            let currentTitle = GameConfig.GetDefaultCustomerRaiseTitle(i);
            currentToggle.SetTitle(currentTitle);
        }

        this.mSliderToggle.SetClickCallback((_value)=>
        {
            LocalPlayerData.GetInstance().Data_CustomerSliderSetting = _value;
        })

        this.mBBModeToggle.SetClickCallback((_value)=>
        {
            LocalPlayerData.GetInstance().Data_BBModeSetting = _value;
        })

    }
    RegDataNotify()
    {
        LocalPlayerData.GetInstance().Data_BGSetting.AddListenner(this,(_data)=>
        {
            GameConfig.SaveGameBGSetting(_data);
        })
        LocalPlayerData.GetInstance().Data_PokerSetting.AddListenner(this,(_data)=>
        {
            GameConfig.SaveGamePokerSetting(_data);
        })
        LocalPlayerData.GetInstance().Data_CustomerRaise0.AddListenner(this,(_data)=>
        {
            GameConfig.SaveCustomerRaise(0,_data);
        })
        LocalPlayerData.GetInstance().Data_CustomerRaise1.AddListenner(this,(_data)=>
        {
            GameConfig.SaveCustomerRaise(1,_data);
        })
        LocalPlayerData.GetInstance().Data_CustomerRaise2.AddListenner(this,(_data)=>
        {
            GameConfig.SaveCustomerRaise(2,_data);
        })
        LocalPlayerData.GetInstance().Data_CustomerSliderSetting.AddListenner(this,(_data)=>
        {
            this.mSliderToggle.SetShowStauts(_data);
            GameConfig.SaveCustomerSliderSetting(_data);
        })
        LocalPlayerData.GetInstance().Data_BBModeSetting.AddListenner(this,(_data)=>
        {
            this.mBBModeToggle.SetShowStauts(_data);
            GameConfig.SaveBBToggle(_data);
        })


    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

