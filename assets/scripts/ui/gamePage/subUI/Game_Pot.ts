import { _decorator, Component, Node, Label, instantiate } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
const { ccclass, property } = _decorator;

@ccclass('Game_Pot')
export class Game_Pot extends BaseUI 
{
    @property(Node) 
    mCurrentPotBG: Node = null;
    @property(Node) 
    mTotalPotBG: Node = null;
    @property(Label) 
    mCurrent: Label = null;
    @property(Label) 
    mTotal: Label = null;

    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.ShowUI(false);
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

    SetTotalPot(_amount : number)
    {
        this.mTotal.string = Localization.GetString("00064")+":" + _amount;
    }
    SetCurrentTurnPot(_amount : number)
    {
        this.mCurrent.string = "" + _amount;
    }

    ShowUI(_value : boolean)
    {
        this.mCurrentPotBG.active = _value;
        this.mTotalPotBG.active = _value;
    }

    public InitWithData(_index : number)
    {
        this.mIndex = _index;
    }
}

