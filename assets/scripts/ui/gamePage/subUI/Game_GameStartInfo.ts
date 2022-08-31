import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_GameStartInfo')
export class Game_GameStartInfo extends BaseUI 
{
    @property(BaseButton) 
    mStartBtn: BaseButton = null;
    @property(Label) 
    mCountDown: Label = null;
    @property(Label) 
    mTips: Label = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.node.active = false;
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

