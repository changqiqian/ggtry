import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Network } from '../../../network/Network';
import { BaseButton } from '../../common/BaseButton';
import { GameData, Game_MttPlayerStauts } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_ControlBtns')
export class Game_ControlBtns extends BaseUI 
{
    @property(BaseButton) 
    mDealCardsBtn: BaseButton = null;

    @property(BaseButton) 
    mRebuyBtn: BaseButton = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mDealCardsBtn.SetClickCallback(()=>
        {
            Network.GetInstance().SendCheckPublicCards();
            this.mDealCardsBtn.node.active = false;
        });
        this.mDealCardsBtn.node.active = false;

        this.mRebuyBtn.SetClickCallback(()=>
        {
            Network.GetInstance().SendCheckPublicCards();
            this.mRebuyBtn.node.active = false;
        });
        this.mRebuyBtn.node.active = false;
    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_MttSelfStatus",(_current , _before)=>
        {
            //_current.isCanRebuy
            //显示重购按钮
        },this);

        GameData.GetInstance().AddListener("Data_RefreshMttInfo",(_current , _before)=>
        {
            this.mRebuyBtn.node.active = _current.userStatus == Game_MttPlayerStauts.Lose && _current.isCanRebuy;
        },this);


        
        
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        GameData.GetInstance().UnregisteMsg();
    }
    CustmoerDestory() 
    {

    }
}

