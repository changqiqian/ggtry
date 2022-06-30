import { _decorator, Component, Node, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { CircleTimer } from '../common/CircleTimer';
const { ccclass, property } = _decorator;

@ccclass('CowboyUI')
export class CowboyUI extends BaseUI 
{

    @property(CircleTimer) 
    mCircleTimer: CircleTimer = null;

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

