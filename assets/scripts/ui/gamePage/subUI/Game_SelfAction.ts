import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { Game_Slider } from './Game_Slider';
const { ccclass, property } = _decorator;

@ccclass('Game_SelfAction')
export class Game_SelfAction extends BaseUI 
{
    @property(BaseButton) 
    mFoldBtn: BaseButton = null;
    @property(BaseButton) 
    mCallBtn: BaseButton = null;
    @property(BaseButton) 
    mCheckBtn: BaseButton = null;
    @property(Node) 
    mRaiseNode: Node = null;
    @property(BaseButton) 
    mSliderRaiseBtn: BaseButton = null;
    @property(Game_Slider) 
    mGame_Slider: Game_Slider = null;
    
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

