import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { cb_BetArea } from './cb_BetArea';
const { ccclass, property } = _decorator;

@ccclass('cb_BetRow1')
export class cb_BetRow1 extends BaseUI {
    @property(cb_BetArea) 
    mBetArea: cb_BetArea = null;

    @property(Label) 
    mTitle: Label = null;
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

}

