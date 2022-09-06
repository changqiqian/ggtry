import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Club_HeadAndName')
export class Club_HeadAndName extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    @property(BaseButton) 
    mBtn: BaseButton = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mBtn.SetClickCallback(()=>
        {
            
        })
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

