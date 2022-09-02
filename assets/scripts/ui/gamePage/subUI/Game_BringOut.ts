import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { ProgressSlider } from '../../common/ProgressSlider';
const { ccclass, property } = _decorator;

@ccclass('Game_BringOut')
export class Game_BringOut extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Sprite) 
    mCurrentIcon: Sprite = null;
    @property(Label) 
    mCurrentAmount: Label = null;
    @property(ProgressSlider) 
    mProgressSlider: ProgressSlider = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });

        this.mConfirmBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });

        this.mProgressSlider.SetCallback((_ratio)=>
        {

        });
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

