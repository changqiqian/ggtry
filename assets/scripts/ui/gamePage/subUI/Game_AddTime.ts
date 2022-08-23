import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_AddTime')
export class Game_AddTime extends BaseUI 
{
    @property(BaseButton) 
    mAddBtn: BaseButton = null;
    @property(Label) 
    mTitle: Label = null;

    mCallback : Function = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mAddBtn.SetClickCallback(()=>
        {
            if(this.mCallback)
            {
                this.mCallback();
            }
        });
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }

    SetCallback(_callback : Function)
    {
        this.mCallback = _callback;
    }

    SetButtonTitle(_title : string)
    {
        this.mAddBtn.SetTitle(_title);
    }
}

