import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { cb_BetArea } from './cb_BetArea';
const { ccclass, property } = _decorator;

@ccclass('cb_BetRow0')
export class cb_BetRow0 extends BaseUI 
{
    @property(cb_BetArea) 
    mBetArea0: cb_BetArea = null;
    @property(cb_BetArea) 
    mBetArea1: cb_BetArea = null;
    @property(cb_BetArea) 
    mBetArea2: cb_BetArea = null;
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

