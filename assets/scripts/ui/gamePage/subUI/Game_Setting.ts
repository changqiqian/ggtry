import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { UIMgr } from '../../../base/UIMgr';
import { GameConfig } from '../../../GameConfig';
import { BaseButton } from '../../common/BaseButton';
import { ToggleBtn } from '../../common/ToggleBtn';
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
    RaiseToggleGroup: Node = null;

    
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
            currentToggle.SetDataNotify(LocalPlayerData.Instance.Data_BGSetting,i);
        }
        for(let i = 0 ; i < this.mPokerToggleGroup.children.length ; i++)
        {
            let currentToggle = this.mPokerToggleGroup.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(LocalPlayerData.Instance.Data_PokerSetting,i);
        }
        for(let i = 0 ; i < this.RaiseToggleGroup.children.length ; i++)
        {
            let currentToggle = this.RaiseToggleGroup.children[i].getComponent(ToggleBtn);
            currentToggle.SetClickCallback((_selected , _index)=>
            {
                this.RaiseBtnLogic(_selected , _index);
            },i)
            let currentTitle = GameConfig.GetDefaultCustomerRaiseTitle(i);
            currentToggle.SetTitle(currentTitle);
        }
        this.UpdateRaiseBtn();

        this.mSliderToggle.SetClickCallback((_value)=>
        {
            LocalPlayerData.Instance.Data_CustomerSliderSetting.mData = _value;
        })

        this.mBBModeToggle.SetClickCallback((_value)=>
        {
            LocalPlayerData.Instance.Data_BBModeSetting.mData = _value;
        })
    }

    RegDataNotify()
    {
        LocalPlayerData.Instance.Data_BGSetting.AddListenner(this,(_data)=>
        {
            GameConfig.SaveGameBGSetting(_data);
        })
        LocalPlayerData.Instance.Data_PokerSetting.AddListenner(this,(_data)=>
        {
            GameConfig.SaveGamePokerSetting(_data);
        })

        LocalPlayerData.Instance.Data_CustomerSliderSetting.AddListenner(this,(_data)=>
        {
            this.mSliderToggle.SetShowStauts(_data);
            GameConfig.SaveCustomerSliderSetting(_data);
        })
        LocalPlayerData.Instance.Data_BBModeSetting.AddListenner(this,(_data)=>
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

    RaiseBtnLogic(_selected : boolean , _toggleIndex : number)
    {
        let selectedCount = LocalPlayerData.Instance.CustomerRaiseSetting.length;
        let currentToggle = this.RaiseToggleGroup.children[_toggleIndex].getComponent(ToggleBtn);
        if(_selected == true)
        {
            if(selectedCount >=4)
            {
                currentToggle.ShowUnselected();
                UIMgr.Instance.ShowToast(Localization.GetString("00392"));
                return;
            }
        }
        else
        {
            if(selectedCount <=2)
            {
                currentToggle.ShowSelected();
                UIMgr.Instance.ShowToast(Localization.GetString("00393"));
                return;
            }
        }

        let index = LocalPlayerData.Instance.CustomerRaiseSetting.findIndex((_item) => _item === _toggleIndex);
        if(_selected == true)
        {
            LocalPlayerData.Instance.CustomerRaiseSetting.push(_toggleIndex);
            LocalPlayerData.Instance.CustomerRaiseSetting.sort();
        }
        else if(_selected == false)
        {
            LocalPlayerData.Instance.CustomerRaiseSetting.splice(index , 1);
        }

        GameConfig.SaveAllCustomerRaise(LocalPlayerData.Instance.CustomerRaiseSetting);
    }

    UpdateRaiseBtn()
    {
        for(let i = 0 ; i < this.RaiseToggleGroup.children.length ; i++)
        {
            let currentToggle = this.RaiseToggleGroup.children[i].getComponent(ToggleBtn);
            let index = LocalPlayerData.Instance.CustomerRaiseSetting.findIndex((_item) => _item === i);
            if(index < 0)
            {
                currentToggle.ShowUnselected();
            }
            else
            {
                currentToggle.ShowSelected();
            }
        }
    }
}

