import { _decorator, Component, Node, Button } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('cb_TopMenu')
export class cb_TopMenu extends BaseUI {

    @property(Button) 
    mSettingBtn: Button = null;
    @property(Button) 
    mRuleBtn: Button = null;
    @property(Button) 
    mMoreBtn: Button = null;
    @property(Button) 
    mPlayerBtn: Button = null;


    InitParam() {

    }
    BindUI() 
    {
        this.mSettingBtn.node.on(Node.EventType.TOUCH_END,this.OnSettingBtn.bind(this),this);
        this.mRuleBtn.node.on(Node.EventType.TOUCH_END,this.OnRuleBtn.bind(this),this);
        this.mMoreBtn.node.on(Node.EventType.TOUCH_END,this.OnMoreBtn.bind(this),this);
        this.mPlayerBtn.node.on(Node.EventType.TOUCH_END,this.OnPlayerBtn.bind(this),this);
    }
    RegDataNotify() {

    }
    LateInit() {

    }

    CustmoerDestory() {
        this.mSettingBtn.node.off(Node.EventType.TOUCH_END,this.OnSettingBtn.bind(this),this);
        this.mRuleBtn.node.off(Node.EventType.TOUCH_END,this.OnRuleBtn.bind(this),this);
        this.mMoreBtn.node.off(Node.EventType.TOUCH_END,this.OnMoreBtn.bind(this),this);
        this.mPlayerBtn.node.off(Node.EventType.TOUCH_END,this.OnPlayerBtn.bind(this),this);
    }

    OnSettingBtn()
    {
        console.log("OnSettingBtn");
    }

    OnRuleBtn()
    {
        console.log("OnRuleBtn");
    }

    OnMoreBtn()
    {

    }

    OnPlayerBtn()
    {

    }
}

