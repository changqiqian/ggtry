import { _decorator, Component, Node, Label, Color, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('MeassureItem')
export class MeassureItem extends BaseUI 
{
    @property(Label) 
    mTips: Label = null;
    @property(Node) 
    mTag: Node = null;
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

    public SetTitle(_title : string)
    {
        this.mTips.string = _title;
    }

    public SetHighLight(_value : boolean)
    {
        if(_value)
        {
            this.mTips.color = Color.WHITE;
            this.mTag.getComponent(Sprite).color = Color.WHITE;
        }
        else
        {
            this.mTips.color = Color.GRAY;
            this.mTag.getComponent(Sprite).color = Color.GRAY;
        }
    }
}

