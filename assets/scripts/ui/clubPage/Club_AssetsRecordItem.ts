import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Club_AssetsRecordItem')
export class Club_AssetsRecordItem extends BaseUI 
{
    @property(Label) 
    mType: Label = null;
    @property(Label) 
    mDate: Label = null;
    @property(Label) 
    mAmount: Label = null;
    @property(Sprite) 
    mIcon: Sprite = null;
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
}

