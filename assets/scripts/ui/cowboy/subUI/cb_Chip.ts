import { _decorator, Component, Node, Label, Tween, easing, UIOpacity } from 'cc';
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

    onEnable()
    {
        let tween = new Tween(this.node.getComponent(UIOpacity));
        tween.delay(1);
        tween.to(1,{opacity : 0},{easing:easing.linear});
        tween.call(()=>
        {
            if (cc.isValid(this.node, true) == false) 
            {
                return;
            }
            this.node.active = false;
        });
        tween.start();
    }


    public SetAmount(_amount : number)
    {
        this.mAmount.string = _amount.toString();
    }



}

