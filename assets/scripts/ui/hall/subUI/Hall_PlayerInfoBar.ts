import { _decorator, Component, Node, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Tool } from '../../../Tool';
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
        LocalPlayerData.Instance.Data_Head.AddListenner(this,(_data)=>
        {
            if(_data == null)
            {
                return;
            }

            this.LoadLocalHead(_data,(_spriteFrame)=>
            {
                this.mHead.spriteFrame = _spriteFrame;
            });
        })

        LocalPlayerData.Instance.Data_Coin.AddListenner(this,(_data)=>
        {
            this.mCoinBtn.SetTitle(Tool.ConvertMoney_S2C(_data).toString());
        })

        LocalPlayerData.Instance.Data_Diamond.AddListenner(this,(_data)=>
        {
            this.mDiamondBtn.SetTitle(Tool.ConvertMoney_S2C(_data).toString());
        })
        
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

}

