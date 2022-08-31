import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { cb_BetArea } from './cb_BetArea';
const { ccclass, property } = _decorator;

@ccclass('cb_BetRow3')
export class cb_BetRow3 extends BaseUI {

    @property(Label) 
    mTitle: Label = null;
    @property(cb_BetArea) 
    mBetArea0: cb_BetArea = null;
    @property(cb_BetArea) 
    mBetArea1: cb_BetArea = null;
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

