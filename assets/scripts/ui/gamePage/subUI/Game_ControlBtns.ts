import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Network } from '../../../network/Network';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_ControlBtns')
export class Game_ControlBtns extends BaseUI 
{
    @property(BaseButton) 
    mDealCardsBtn: BaseButton = null;
    @property(BaseButton) 
    mShowHandsBtn: BaseButton = null;
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
        

        this.mBackToGameBtn.SetClickCallback(()=>
        {
        });
        this.mBackToGameBtn.node.active = false;

        this.mShowHandsBtn.SetClickCallback(()=>
        {
        });
        this.mShowHandsBtn.node.active = false;

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
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.BindData()
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
    }
}

