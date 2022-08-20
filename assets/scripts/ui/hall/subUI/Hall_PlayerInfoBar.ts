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
        LocalPlayerData.GetInstance().AddListener("Data_Coin",(_current , _before)=>
        {
            this.mCoinBtn.SetTitle(_current);
        },this);

        LocalPlayerData.GetInstance().AddListener("Data_Diamond",(_current , _before)=>
        {
            this.mDiamondBtn.SetTitle(_current);
        },this);

        LocalPlayerData.GetInstance().AddListener("Data_PhotoUrl",(_current , _before)=>
        {
            if(_current == null || _current == "")
            {
                return;
            }

            this.LoadLocalHead(_current,(_spriteFrame)=>
            {
                this.mHead.spriteFrame = _spriteFrame;
            });
        },this);
        
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        LocalPlayerData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }

}

