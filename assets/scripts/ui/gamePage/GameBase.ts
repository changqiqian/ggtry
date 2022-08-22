import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('GameBase')
export class GameBase extends BaseUI 
{
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
        this.GetGameInfoMsg();
    }
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }

    InitTableInfo()
    {

    }

    GetGameInfoMsg()
    {

    }

}

