import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Network } from '../../../network/Network';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_ControlBtns')
export class Game_ControlBtns extends BaseUI 
{
    @property(BaseButton) 
    mDealCardsBtn: BaseButton = null;
    @property(BaseButton) 
    mRebuyBtn: BaseButton = null;
    @property(BaseButton) 
    mBackToGameBtn: BaseButton = null;

    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mDealCardsBtn.SetClickCallback(()=>
        {
        });
        this.mDealCardsBtn.node.active = false;

        this.mRebuyBtn.SetClickCallback(()=>
        {

        });
        this.mRebuyBtn.node.active = false;

        this.mBackToGameBtn.SetClickCallback(()=>
        {
        });
        this.mBackToGameBtn.node.active = false;
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

    public InitWithData(_index : number)
    {
        this.mIndex = _index;
    }
}

