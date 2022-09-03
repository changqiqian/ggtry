import { _decorator, Component, Node, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Hall_PlayerInfoBar')
export class Hall_PlayerInfoBar extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(BaseButton) 
    mCoinBtn: BaseButton = null;
    @property(BaseButton) 
    mDiamondBtn: BaseButton = null;
    @property(BaseButton) 
    mShopBtn: BaseButton = null;
    
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mCoinBtn.SetClickCallback(()=>
        {

        });

        this.mDiamondBtn.SetClickCallback(()=>
        {

        });

        this.mShopBtn.SetClickCallback(()=>
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

