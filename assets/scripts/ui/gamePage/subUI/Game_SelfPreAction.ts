import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { ToggleBtn } from '../../common/ToggleBtn';
const { ccclass, property } = _decorator;

@ccclass('Game_SelfPreAction')
export class Game_SelfPreAction extends BaseUI 
{
    @property(ToggleBtn) 
    mPreFoldCheck: ToggleBtn = null;
    @property(ToggleBtn) 
    mPreCall: ToggleBtn = null;
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
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }
}

