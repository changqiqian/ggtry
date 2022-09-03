import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { Network } from '../../network/Network';
import { ToggleBtn } from '../common/ToggleBtn';

const { ccclass, property } = _decorator;

@ccclass('Mtt_AttendBtn')
export class Mtt_AttendBtn extends BaseUI 
{
    @property(ToggleBtn) 
    mToggleBtn: ToggleBtn = null;
    @property(Sprite) 
    mCurrencyIcon: Sprite = null;
    @property(Label) 
    mDescribe: Label = null;
    @property(Label) 
    mAmount: Label = null;

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

    public SetData()
    {

    }

    public SetTicketData()
    {
    }



    public IsSelected() : boolean
    {
        if(this.node.active == false)
        {
            return false;
        }

        return this.mToggleBtn.IsSelected();
    }
}

