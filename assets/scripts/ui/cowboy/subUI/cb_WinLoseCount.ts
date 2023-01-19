import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { Tool } from '../../../Tool';
const { ccclass, property } = _decorator;

@ccclass('cb_WinLoseCount')
export class cb_WinLoseCount extends BaseUI 
{
    @property(Node) 
    mWinBG: Node = null;
    @property(Label) 
    mTitle: Label = null;
    @property(Label) 
    mBetAmount: Label = null;
    @property(Label) 
    mWinAmount: Label = null;

    mCowboyAreaType : CowboyAreaType;
    InitParam()
    {

    }
    BindUI()
    {

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

    public SetWin(_value :boolean)
    {
        this.mWinBG.active = _value;
    }

    public SetAreaType(_cowboyAreaType : CowboyAreaType)
    {
        this.mCowboyAreaType = _cowboyAreaType;
        switch(this.mCowboyAreaType)
        {
            case CowboyAreaType.CowboyAreaType_0:
            {
                this.SetTitle(Localization.GetString("00281"));
            }
            break;
            case CowboyAreaType.CowboyAreaType_1:
            {
                this.SetTitle(Localization.GetString("00282"));
            }
            break;
            case CowboyAreaType.CowboyAreaType_2:
            {
                this.SetTitle(Localization.GetString("00283"));
            }
            break;
            case CowboyAreaType.CowboyAreaType_3:
            {
                this.SetTitle(Localization.GetString("00285"));
            }
            break;
            case CowboyAreaType.CowboyAreaType_4:
            {
                this.SetTitle(Localization.GetString("00286"));
            }
            break;
            case CowboyAreaType.CowboyAreaType_5:
            {
                this.SetTitle(Localization.GetString("00287"));
            }
            break;
            case CowboyAreaType.CowboyAreaType_6:
            {
                this.SetTitle(Localization.GetString("00288"));
            }
            break;
            case CowboyAreaType.CowboyAreaType_7:
            {
                this.SetTitle(Localization.GetString("00073"));
            }
            break;
            case CowboyAreaType.CowboyAreaType_8:
            {
                this.SetTitle(Localization.GetString("00291"));
            }
            break;
            case CowboyAreaType.CowboyAreaType_9:
            {
                this.SetTitle(Localization.GetString("00077"));
            }
            break;
            case CowboyAreaType.CowboyAreaType_10:
            {
                this.SetTitle(Localization.GetString("00293"));
            }
            break;
        }
    }

    public GetAreaType() : CowboyAreaType
    {
        return this.mCowboyAreaType;
    }

    public SetTitle(_title : string)
    {
        this.mTitle.string = _title;
    }

    public SetBetAmount(_betAmount : number)
    {
        this.mBetAmount.string = Tool.ConvertMoney_S2C(_betAmount) + "";
    }

    public SetWinAmount(_winAmount : number)
    {
        this.mWinAmount.string = Tool.ConvertMoney_S2C(_winAmount) + "";
    }
}

