import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { CardStruct } from '../../../base/Calculator';
import { cbEnum_Gender } from '../CowboyData';
import { cb_Role } from './cb_Role';
const { ccclass, property } = _decorator;

@ccclass('cb_RoleCtr')
export class cb_RoleCtr extends BaseUI {

    InitParam() {

    }
    BindUI() {

    }
    RegDataNotify() {

    }
    LateInit() {

    }
    UnregDataNotify() {

    }
    CustmoerDestory() {

    }

    ShowCards(_cards:Array<CardStruct> , _gender:cbEnum_Gender)
    {
        this.node.children[_gender].getComponent(cb_Role).ShowAllCards(_cards);
    }

}

