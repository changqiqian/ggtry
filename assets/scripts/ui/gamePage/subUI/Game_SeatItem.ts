import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_SeatItem')
export class Game_SeatItem extends BaseUI 
{

    @property(BaseButton) 
    mSitBtn: BaseButton = null;
    @property(BaseButton) 
    mEmptyBtn: BaseButton = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mSitBtn.SetClickCallback(()=>
        {

        });

        this.mEmptyBtn.SetClickCallback(()=>
        {

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
}

