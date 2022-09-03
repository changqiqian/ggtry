import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { GameConfig } from '../../../GameConfig';
import { Network } from '../../../network/Network';
import { BaseButton } from '../../common/BaseButton';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_CustomerRaise')
export class Game_CustomerRaise extends BaseUI 
{
    @property([BaseButton]) 
    mBtns: [BaseButton];
    InitParam()
    {

    }
    BindUI()
    {
        for(let i = 0 ; i < this.mBtns.length ; i++)
        {
            this.mBtns[i].SetClickCallback(this.RaiseBtnLogic.bind(this),i);
        }
    }
    RegDataNotify()
    {



    }
    LateInit()
    {

    }

    CustmoerDestory()
    {

    }

    RaiseBtnLogic(_index : number)
    {

    }

    GetAmount(_ratio : number , _basePool : number , _minRaise : number) : number
    {
        let amount = _ratio * _basePool + _minRaise;
        let fixed = amount.toFixed(0);
        return Number(fixed);
    }

    ShowRaiseUI(_minRaise : number)
    {
  
       // this.UpdateUIWithRatioMode(currentPool,_minRaise);
    }

    UpdateUIWithRatioMode(_currentPool : number , _minRaise : number)
    {
        for(let i = 0 ; i < this.mBtns.length ; i++)
        {
            let ratio = GameConfig.GetCustomerRaiseRatio(i);
            let title = GameConfig.GetCustomerRaiseTitle(i);
            let amount = this.GetAmount(ratio,_currentPool , _minRaise);
            this.mBtns[i].node.getChildByName("Describe").getComponent(Label).string = title;
            this.mBtns[i].SetTitle(amount + "");
        }
    }
}

