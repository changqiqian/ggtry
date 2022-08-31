import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('cb_Chip')
export class cb_Chip extends BaseUI {
    @property(Label) 
    mAmount: Label = null;
    InitParam() {

    }
    BindUI() {

    }
    RegDataNotify() {

    }
    LateInit() {

    }

    CustmoerDestory() {

    }


    public SetAmount(_amount : number)
    {
        this.mAmount.string = _amount.toString();
    }

}

